import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { LoginRequest } from '../validation/loginSchema';
import { loginApi } from '@/api/auth/loginApi';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function useLoginMutation(
  getValues: () => LoginRequest,
) {
  const router = useRouter(); 
  const { mutate: loginAdminMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      await loginApi({email, password});
    },
    onSuccess: (res) => {
      toast.success('Authentication user successful');
      router.push('/');
    },
    onError: (error) => {
  console.log(error);
  if (axios.isAxiosError(error)) {
    toast.error(error?.response?.data?.message || 'Invalid email or password');
  } else {
    toast.error('Something went wrong');
  }
},
  });

  return {
    loginAdminMutation,
    isPending,
  };
}
import FormLogin from "@/features/login/components/FormLogin";

export default function Page() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-10'>
          <h1 className='text-2xl font-bold'>Authentication User</h1>
          <span className='text-gray-500 text-sm'>
            Please enter your credentials to access admin dashboard
          </span>
          <FormLogin 
          />
        </div>
      </div>
    </>
  );
}
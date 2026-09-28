'use client';

import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import { useAuthStore } from '@/stores/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const { objectId } = useAuthStore();

  const { data } = useQuery({
    queryFn: async () => {
      const res = await axios.get(
        'https://api.backendless.com/4E312A0A-D13E-450C-82C4-5C37CF684A2F/D43058E5-349C-4A7B-8B50-814787680071/users/current',
        {
          headers: {
            'user-token': objectId,
          },
        },
      );
      console.log('>>>');
      console.log(res);
      return res?.data
    },
    queryKey: ['session-user', objectId],
    enabled: !!objectId,
  });
  console.log(data);

  return (
    <>
      <div className='drawer lg:drawer-open'>
        <input
          id='my-drawer-4'
          type='checkbox'
          className='drawer-toggle inline'
        />
        <div className='drawer-content'>
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          <div className='p-4'>{children}</div>
        </div>

        <div className='drawer-side is-drawer-close:overflow-visible'>
          <label
            htmlFor='my-drawer-4'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <div className='flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64'>
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
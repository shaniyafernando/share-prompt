import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const user = await currentUser();
    if (!user) return null;
  
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/on-boarding");
  
    return (
      <>
        <h1 className='head-text'>Create Thread</h1>
  
        <PostThread userId={userInfo._id} />
      </>
    );
}

export default page
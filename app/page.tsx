"use client";

import InnerLayout from "@/components/layout/InnerLayout";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import GoogleButton from "react-google-button";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) console.log("로그인 완료");
  }, [session]);

  if (!session) {
    return (
      <InnerLayout>
        <div className="flex flex-col items-center gap-10">
          <h2 className="mt-30 text-[#ffffff]">Google Login</h2>
          <GoogleButton onClick={() => signIn("google")} />
        </div>
      </InnerLayout>
    );
  }

  return (
    <InnerLayout>
      <div>
        <p>안녕하세요, {session.user?.name}님</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    </InnerLayout>
  );
}

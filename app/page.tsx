"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import GoogleButton from "react-google-button";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) console.log("로그인 완료");
  }, [session]);

  if (session) {
    return (
      <div>
        <p>안녕하세요, {session.user?.name}님</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }

  return (
    <div>
      <GoogleButton onClick={() => signIn("google")} />
    </div>
  );
}

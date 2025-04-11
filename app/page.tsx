"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import InnerLayout from "@/components/layout/InnerLayout";
import GradientLayout from "@/components/layout/GradientLayout";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import googleSignin from "@/assets/icon/google-signin.svg";
import Button from "@/components/shared/Button";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const goToMyScheduleHandler = () => {
    router.push("/dashboard");
  };

  return (
    <GradientLayout>
      <InnerLayout className="mt-[14rem]">
        <section className="flex justify-between items-center">
          <div>
            <h1>AI 학습 플래너</h1>
            <p className="mt-5 text-2xl font-bold leading-9">
              AI가 당신의 공부 일정을
              <br />
              만들어드립니다.
            </p>
            {session ? (
              <Button
                type="button"
                className="mt-14 flex items-center gap-4 hover:bg-black/20 hover:border-none transition-all"
                onClick={goToMyScheduleHandler}
              >
                <span>나의 일정</span>
                <FaArrowRightLong />
              </Button>
            ) : (
              <Button
                type="button"
                className="mt-14 pr-8 flex items-center bg-black/30 border-none rounded-lg gap-1 hover:bg-black/50 transition-all"
                onClick={() => signIn("google")}
              >
                <Image
                  src={googleSignin}
                  alt="구글 로그인"
                  width={40}
                  height={40}
                />

                <span>Google 로그인으로 시작하기</span>
              </Button>
            )}
          </div>
          <div>이미지</div>
        </section>
      </InnerLayout>
    </GradientLayout>
  );
}

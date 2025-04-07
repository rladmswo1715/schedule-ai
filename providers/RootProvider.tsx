"use client";

import { SessionProvider } from "next-auth/react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default RootProvider;

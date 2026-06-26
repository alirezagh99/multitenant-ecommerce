import { SigninView } from "@/modules/auth/ui/views/sign-in-view";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await caller.auth.session();

  if (session.user) {
    redirect("/");
  }

  return <SigninView />;
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-6 items-start">
      <Button variant={"elevated"}>Test</Button>
      <Input placeholder="an input..." />
    </div>
  );
}

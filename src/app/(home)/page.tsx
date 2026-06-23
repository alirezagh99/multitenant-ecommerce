import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-6 items-start">
      <Button variant={"elevated"}>Test</Button>
      <Input placeholder="an input..." />
      <Textarea placeholder="textarea..." />
      <Checkbox />
    </div>
  );
}

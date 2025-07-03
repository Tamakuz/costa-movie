'use client';
import { Button } from "@/components/ui/button";

export default function Home(){
  return (
    <main style={{padding: '20px'}}>
      <h1>Welcome To Movie Costa</h1>
      <p>Shadcn UI is ready to use!</p>
      <Button onAuxClick={() => alert('Button Clicked!')}>Click Me</Button>
    </main>
  );
}

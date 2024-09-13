'use client'
import Users from "@/components/users";
import GptFlow from '@gpt-flow/reactish';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <GptFlow projectId="your-project-id"
          publicKey="your-public-key"
          projectUrl='https://gpt-flow-llm-api-05w2.onrender.com'>
          <Users />
        </GptFlow>
      </main>
    </div>
  );
}

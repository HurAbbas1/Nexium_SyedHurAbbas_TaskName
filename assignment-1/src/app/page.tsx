'use client';

import { useState } from 'react';
import { quotes } from '@/app/lib/quotes';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
   const matched = quotes
     .filter((q: { topic: string; text: string }) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text);

    setResults(matched.length > 0 ? matched : ['No quotes found for this topic.']);
  };
  return (
    <main className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Quote Generator</h1>
      
      <div className="w-full max-w-md space-y-2">
        <Input
          placeholder="Enter a topic (e.g. motivation, life)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleSearch}>Get Quotes</Button>
      </div>
      <div className="space-y-3 mt-6 w-full max-w-lg">
        {results.map((quote, idx) => (
          <div key={idx} className="p-4 bg-white rounded shadow text-black">
            {quote}
          </div>
        ))}
      </div>
    </main>
  );
}

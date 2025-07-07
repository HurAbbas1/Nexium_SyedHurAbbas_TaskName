"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {motion, AnimatePresence} from "framer-motion";
import "@/app/globals.css";

const QUOTES: Record<string, string[]> = {
  success: [
    "Success is not in what you have, but who you are.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The road to success is always under construction.",
  ],
  love: [
    "Love is composed of a single soul inhabiting two bodies.",
    "We accept the love we think we deserve.",
    "Love is the flower you've got to let grow.",
  ],
  life: [
    "Life is what happens when you're busy making other plans.",
    "Life is either a daring adventure or nothing at all.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
  ],
};

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleClick = () => {
    const list = QUOTES[topic.toLowerCase()];
    setQuotes(list || []);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in-down">
          ✨ Quote Generator
        </h1>
        <div className="flex gap-2">
          <Input
            className="bg-white text-black rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-sky-400 shadow-lg transition"
            placeholder="Enter a topic (e.g. success, love, life)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button
            onClick={handleClick}
            className="rounded-xl bg-sky-500 hover:bg-sky-600 transition px-6 py-2 shadow-lg"
          >
            Get Quotes
          </Button>
        </div>

        <AnimatePresence>
          <div className="space-y-4 mt-8">
            {quotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="p-4 bg-white text-black rounded-lg shadow-md border border-sky-300"
              >
                {quote}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

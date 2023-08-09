/* eslint-disable */
"use client";
import { forwardRef, Ref } from "react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";

export const ChatMessage = forwardRef(
  (
    {
      speaker,
      text,
    }: {
      speaker: string;
      text: string;
    },
    ref
  ) => {
    return (
      <div
        ref={ref as Ref<HTMLDivElement>}
        className={cn(
          "py-3 px-3 md:px-6 w-full dark:border-white/25 flex flex-col overflow-hidden scroll-pb-32",
          speaker === "user"
            ? ""
            : "bg-gray-200 dark:bg-gray-800 bg-opacity-60 py-8"
        )}
        style={speaker === "user" ? { whiteSpace: "pre-line" } : {}} // Add this line to preserve line breaks
      >
        <span
          className={cn(
            "capitalize  text-xs bg-sky-200 rounded-xl p-1 px-2 mb-2 w-fit  dark:bg-sky-700"
          )}
          data-testid="chat-message-speaker"
        >
          {speaker}
        </span>
        <div data-testid="chat-message-text">
          <ReactMarkdown className="prose dark:prose-invert ml-[6px]  mt-1">
            {text}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";

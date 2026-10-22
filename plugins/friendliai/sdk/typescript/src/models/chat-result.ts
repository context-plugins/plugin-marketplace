import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatChoiceSchema, type ChatChoice } from "./chat-choice.js";
import { chatUsageSchema, type ChatUsage } from "./chat-usage.js";
import { modelSchema, type Model } from "./unions/model.js";

export type ChatResult = {
  /** A unique ID of the chat completion. */
  id: string;
  choices: ChatChoice[];
  usage: ChatUsage;
  /** The object type, which is always set to `chat.completion`. @default "chat.completion" */
  object?: "chat.completion";
  /** The Unix timestamp (in seconds) for when the generation completed. */
  created: number;
  /** The model to generate the completion. For dedicated endpoints, it returns the endpoint ID. */
  model?: Model;
};

export const chatResultSchema: Schema<ChatResult> = s.object<ChatResult>({
  id: s.string(),
  choices: s.array(s.lazy(() => chatChoiceSchema)),
  usage: chatUsageSchema,
  object: s.defaulted(s.literal("chat.completion"), "chat.completion"),
  created: s.int(),
  model: s.optional(s.lazy(() => modelSchema)),
});

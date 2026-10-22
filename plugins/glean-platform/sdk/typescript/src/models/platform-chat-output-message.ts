import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatOutputTextContentSchema,
  type PlatformChatOutputTextContent,
} from "./platform-chat-output-text-content.js";

export type PlatformChatOutputMessage = {
  /** @default "MESSAGE" */
  type?: "MESSAGE";
  /** @default "ASSISTANT" */
  role?: "ASSISTANT";
  content: PlatformChatOutputTextContent[];
};

export const platformChatOutputMessageSchema: Schema<PlatformChatOutputMessage> =
  s.object<PlatformChatOutputMessage>({
    type: s.defaulted(s.literal("MESSAGE"), "MESSAGE"),
    role: s.defaulted(s.literal("ASSISTANT"), "ASSISTANT"),
    content: s.array(s.lazy(() => platformChatOutputTextContentSchema)),
  });

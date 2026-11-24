import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./unions/content.js";

export type ChatMessage = {
  role: string;
  content: Content;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatMessageSchema: Schema<ChatMessage> = s.object<ChatMessage>(
  {
    role: s.string(),
    content: contentSchema,
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AvaAskRequest = {
  /** The question to ask Ava. */
  question: string;
  /** Optional ID of an existing conversation to continue. */
  conversationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const avaAskRequestSchema: Schema<AvaAskRequest> = s.object<AvaAskRequest>(
  {
    question: s.string(),
    conversationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";

export type CompletionRequest = {
  model: string;
  messages: ChatMessage[];
  /** @default 4000 */
  maxTokens?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const completionRequestProperties: s.Shape<CompletionRequest> = {
  model: s.string(),
  messages: s.array(s.lazy(() => chatMessageSchema)),
  maxTokens: s.defaulted(s.int(), 4000),
  _keysMap: {
    maxTokens: "max_tokens",
  },
};

export const completionRequestInternalSchema: Schema<CompletionRequest> = s.object<CompletionRequest>(
  completionRequestProperties,
  { additionalProperties: s.json() },
);

export const completionRequestSchema: Schema<CompletionRequest> = s.lazySchema(() =>
  s.object<CompletionRequest>(
    {
      ...completionRequestProperties,
      maxTokens: s.defaulted(s.int().check(s.gte(1), s.lte(16384)), 4000),
    },
    { additionalProperties: s.json() },
  ),
);

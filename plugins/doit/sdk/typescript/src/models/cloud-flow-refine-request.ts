import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudFlowRefineRequest = {
  /** Natural language description of what to refine or modify in the CloudFlow. */
  question: string;
  /** ID of an existing conversation to continue. When omitted, a new conversation is started. */
  conversationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudFlowRefineRequestSchema: Schema<CloudFlowRefineRequest> = s.object<CloudFlowRefineRequest>(
  {
    question: s.string(),
    conversationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

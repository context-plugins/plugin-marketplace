import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudFlowBuildRequest = {
  /** Natural language description of the CloudFlow to build from scratch. */
  question: string;
  /** ID of an existing conversation to continue. When omitted, a new conversation is started. */
  conversationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudFlowBuildRequestSchema: Schema<CloudFlowBuildRequest> = s.object<CloudFlowBuildRequest>(
  {
    question: s.string(),
    conversationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

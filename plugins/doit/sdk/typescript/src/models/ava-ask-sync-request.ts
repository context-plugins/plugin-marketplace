import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AvaAskSyncRequest = {
  /** The question to ask Ava. */
  question: string;
  /** Optional ID of an existing conversation to continue. */
  conversationId?: string;
  /**
   * When true, the conversation is not persisted. Recommended for programmatic consumers
   * (Terraform, MCP, CI pipelines).
   *
   * @default false
   */
  ephemeral?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const avaAskSyncRequestSchema: Schema<AvaAskSyncRequest> = s.object<AvaAskSyncRequest>(
  {
    question: s.string(),
    conversationId: s.optional(s.string()),
    ephemeral: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);

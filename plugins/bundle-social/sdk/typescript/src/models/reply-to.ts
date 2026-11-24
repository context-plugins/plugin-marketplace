import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReplyTo = {
  externalMessageId?: string | null;
  isSelfReply?: boolean | null;
  messageId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyToSchema: Schema<ReplyTo> = s.object<ReplyTo>(
  {
    externalMessageId: s.optionalNullable(s.string()),
    isSelfReply: s.optionalNullable(s.boolean()),
    messageId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

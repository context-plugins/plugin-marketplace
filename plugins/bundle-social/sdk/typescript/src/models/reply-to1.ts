import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReplyTo1 = {
  externalMessageId?: string | null;
  isSelfReply?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyTo1Schema: Schema<ReplyTo1> = s.object<ReplyTo1>(
  {
    externalMessageId: s.optionalNullable(s.string()),
    isSelfReply: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);

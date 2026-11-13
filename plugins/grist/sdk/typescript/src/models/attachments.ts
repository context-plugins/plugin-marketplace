import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachments = {
  /** Total attachment storage used in bytes */
  totalBytes: number;
  /** Whether the attachment limit has been exceeded (only present when limit is exceeded) */
  limitExceeded?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentsSchema: Schema<Attachments> = s.object<Attachments>(
  {
    totalBytes: s.int(),
    limitExceeded: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

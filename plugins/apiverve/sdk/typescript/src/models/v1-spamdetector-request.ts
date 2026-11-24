import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SpamdetectorRequest = {
  /** The text to detect spam in */
  text: string;
  /** The email address to validate against the spam database. This is optional */
  email?: string;
  /** The IP address to validate against the spam database. This is optional */
  ip?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SpamdetectorRequestSchema: Schema<V1SpamdetectorRequest> = s.object<V1SpamdetectorRequest>(
  {
    text: s.string(),
    email: s.optional(s.string()),
    ip: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HmacRequest = {
  /** The message to sign */
  message: string;
  /** The secret key for HMAC generation */
  secret: string;
  /** Hash algorithm to use */
  algorithm?: string;
  /** Output encoding format */
  encoding?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HmacRequestSchema: Schema<V1HmacRequest> = s.object<V1HmacRequest>(
  {
    message: s.string(),
    secret: s.string(),
    algorithm: s.optional(s.string()),
    encoding: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

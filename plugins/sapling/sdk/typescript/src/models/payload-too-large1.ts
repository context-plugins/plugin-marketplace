import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PayloadTooLarge1 = {
  message?: string;
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payloadTooLarge1Schema: Schema<PayloadTooLarge1> = s.object<PayloadTooLarge1>(
  {
    message: s.optional(s.string()),
    result: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

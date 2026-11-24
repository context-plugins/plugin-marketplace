import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PayloadTooLarge = {
  message?: string;
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payloadTooLargeSchema: Schema<PayloadTooLarge> = s.object<PayloadTooLarge>(
  {
    message: s.optional(s.string()),
    result: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

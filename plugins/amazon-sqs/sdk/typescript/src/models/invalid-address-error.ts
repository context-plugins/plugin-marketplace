import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidAddressError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidAddressErrorSchema: Schema<InvalidAddressError> = s.object<InvalidAddressError>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

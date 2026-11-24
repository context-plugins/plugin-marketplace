import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Provides the local and international telephone numbers of the merchant. */
export type PhoneNumber = {
  local?: string;
  international?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneNumberSchema: Schema<PhoneNumber> = s.object<PhoneNumber>(
  {
    local: s.optional(s.string()),
    international: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

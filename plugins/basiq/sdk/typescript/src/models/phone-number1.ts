import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Provides the ```local``` and ```international``` telephone numbers of the merchant. */
export type PhoneNumber1 = {
  local?: string;
  international?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneNumber1Schema: Schema<PhoneNumber1> = s.object<PhoneNumber1>(
  {
    local: s.optional(s.string()),
    international: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

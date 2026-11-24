import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressSchema: Schema<Address> = s.object<Address>(
  {
    line1: s.string(),
    line2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    zipCode: s.string(),
    country: s.string(),
  },
  { additionalProperties: s.json() },
);

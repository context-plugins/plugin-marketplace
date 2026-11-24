import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about the current shopper assigned to the order. */
export type Shopper = {
  /** The first name of the shopper. */
  name?: string;
  /** A masked phone number for contacting the shopper. */
  phoneNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shopperSchema: Schema<Shopper> = s.object<Shopper>(
  {
    name: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    _keysMap: {
      phoneNumber: "phone_number",
    },
  },
  { additionalProperties: s.json() },
);

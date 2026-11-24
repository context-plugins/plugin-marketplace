import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Enable or disable specific payment methods. */
export type Method1 = {
  card?: boolean;
  netbanking?: boolean;
  upi?: boolean;
  wallet?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const method1Schema: Schema<Method1> = s.object<Method1>(
  {
    card: s.optional(s.boolean()),
    netbanking: s.optional(s.boolean()),
    upi: s.optional(s.boolean()),
    wallet: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

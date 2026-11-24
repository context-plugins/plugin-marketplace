import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1 = {
  /** Plan display name shown to customers. */
  name: string;
  description?: string;
  /** Charge amount in paise per billing cycle. */
  amount: number;
  /** @default "INR" */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1Schema: Schema<Item1> = s.object<Item1>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    amount: s.int(),
    currency: s.defaulted(s.string(), "INR"),
  },
  { additionalProperties: s.json() },
);

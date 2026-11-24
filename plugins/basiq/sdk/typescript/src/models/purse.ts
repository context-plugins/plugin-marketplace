import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Purse = {
  /** The balance available for this additional currency purse. */
  amount: string;
  /** The currency for the purse. */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purseSchema: Schema<Purse> = s.object<Purse>(
  {
    amount: s.string(),
    currency: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

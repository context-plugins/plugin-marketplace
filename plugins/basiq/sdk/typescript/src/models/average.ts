import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Average = {
  /** Average transaction amount */
  transaction?: string;
  /** Average monthly amount */
  month?: string;
  /** Median transaction amount */
  medianTransaction?: string;
  /** Median monthly amount */
  medianMonth?: string;
  /** Ongoing month's average amount */
  ongoingMonth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const averageSchema: Schema<Average> = s.object<Average>(
  {
    transaction: s.optional(s.string()),
    month: s.optional(s.string()),
    medianTransaction: s.optional(s.string()),
    medianMonth: s.optional(s.string()),
    ongoingMonth: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

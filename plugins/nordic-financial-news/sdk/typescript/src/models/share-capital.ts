import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Registered share capital */
export type ShareCapital = {
  /** Share capital amount */
  amount?: number | null;
  /** Currency code (ISO 4217) */
  currency?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shareCapitalSchema: Schema<ShareCapital> = s.object<ShareCapital>(
  {
    amount: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

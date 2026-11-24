import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Cost amount with currency */
export type CostAmount = {
  /** The cost amount */
  amount: number;
  /** The currency code (e.g., "USD") */
  currency: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costAmountSchema: Schema<CostAmount> = s.object<CostAmount>(
  {
    amount: s.float64(),
    currency: s.string(),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Rule = {
  strategy?: string;
  status?: string;
  message?: string;
  triggerType?: string;
  triggerPrice?: number;
  transactionType?: string;
  orderId?: string;
  trailingGap?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>(
  {
    strategy: s.optional(s.string()),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    triggerType: s.optional(s.string()),
    triggerPrice: s.optional(s.float64()),
    transactionType: s.optional(s.string()),
    orderId: s.optional(s.string()),
    trailingGap: s.optional(s.float64()),
    _keysMap: {
      triggerType: "trigger_type",
      triggerPrice: "trigger_price",
      transactionType: "transaction_type",
      orderId: "order_id",
      trailingGap: "trailing_gap",
    },
  },
  { additionalProperties: s.json() },
);

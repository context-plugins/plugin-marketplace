import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

export type GttOrderDetails = {
  type?: string;
  exchange?: string;
  quantity?: number;
  product?: string;
  rules?: Rule[];
  tradingSymbol?: string;
  instrumentToken?: string;
  gttOrderId?: string;
  expiresAt?: number;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gttOrderDetailsSchema: Schema<GttOrderDetails> = s.object<GttOrderDetails>(
  {
    type: s.optional(s.string()),
    exchange: s.optional(s.string()),
    quantity: s.optional(s.int()),
    product: s.optional(s.string()),
    rules: s.optional(s.array(s.lazy(() => ruleSchema))),
    tradingSymbol: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    gttOrderId: s.optional(s.string()),
    expiresAt: s.optional(s.int()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      tradingSymbol: "trading_symbol",
      instrumentToken: "instrument_token",
      gttOrderId: "gtt_order_id",
      expiresAt: "expires_at",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);

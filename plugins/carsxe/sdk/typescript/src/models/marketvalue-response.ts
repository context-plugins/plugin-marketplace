import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tradeInValueSchema, type TradeInValue } from "./trade-in-value.js";

export type MarketvalueResponse = {
  success?: boolean;
  vin?: string;
  /** Retail price of the vehicle. */
  retail?: string;
  /** The trade in price of the vehicle. */
  tradeIn?: string;
  roughTradeIn?: string;
  averageTradeIn?: string;
  loanValue?: string;
  msrp?: string;
  tradeInValues?: TradeInValue[];
  auctionValues?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketvalueResponseSchema: Schema<MarketvalueResponse> = s.object<MarketvalueResponse>(
  {
    success: s.optional(s.boolean()),
    vin: s.optional(s.string()),
    retail: s.optional(s.string()),
    tradeIn: s.optional(s.string()),
    roughTradeIn: s.optional(s.string()),
    averageTradeIn: s.optional(s.string()),
    loanValue: s.optional(s.string()),
    msrp: s.optional(s.string()),
    tradeInValues: s.optional(s.array(s.lazy(() => tradeInValueSchema))),
    auctionValues: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);

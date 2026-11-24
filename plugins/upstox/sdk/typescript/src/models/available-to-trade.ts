import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cashAvailableToTradeSchema, type CashAvailableToTrade } from "./cash-available-to-trade.js";
import { pledgeAvailableToTradeSchema, type PledgeAvailableToTrade } from "./pledge-available-to-trade.js";

export type AvailableToTrade = {
  total?: number;
  cashAvailableToTrade?: CashAvailableToTrade;
  pledgeAvailableToTrade?: PledgeAvailableToTrade;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const availableToTradeSchema: Schema<AvailableToTrade> = s.object<AvailableToTrade>(
  {
    total: s.optional(s.float64()),
    cashAvailableToTrade: s.optional(s.lazy(() => cashAvailableToTradeSchema)),
    pledgeAvailableToTrade: s.optional(s.lazy(() => pledgeAvailableToTradeSchema)),
    _keysMap: {
      cashAvailableToTrade: "cash_available_to_trade",
      pledgeAvailableToTrade: "pledge_available_to_trade",
    },
  },
  { additionalProperties: s.json() },
);

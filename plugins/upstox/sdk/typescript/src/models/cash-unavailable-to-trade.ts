import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unsettledProfitSchema, type UnsettledProfit } from "./unsettled-profit.js";

export type CashUnavailableToTrade = {
  unsettledProfit?: UnsettledProfit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashUnavailableToTradeSchema: Schema<CashUnavailableToTrade> = s.object<CashUnavailableToTrade>(
  {
    unsettledProfit: s.optional(s.lazy(() => unsettledProfitSchema)),
    _keysMap: {
      unsettledProfit: "unsettled_profit",
    },
  },
  { additionalProperties: s.json() },
);

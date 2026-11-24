import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TradeWiseProfitAndLossData = {
  /** The quantity of stock traded */
  quantity?: number;
  /** ISIN of the stock */
  isin?: string;
  /** Name of the scrip traded */
  scripName?: string;
  /**
   * FUT - Futures
   *
   * OPT - Options
   *
   * EQ - Equity
   */
  tradeType?: string;
  /** The date on which the stock was bought */
  buyDate?: string;
  /** The average rate at which each quantity of the stock was bought */
  buyAverage?: number;
  /** The date on which the stock was sold */
  sellDate?: string;
  /** The average rate at which each quantity of the stock was sold */
  sellAverage?: number;
  /** Total buy amount */
  buyAmount?: number;
  /** Total sell amount */
  sellAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeWiseProfitAndLossDataSchema: Schema<TradeWiseProfitAndLossData> =
  s.object<TradeWiseProfitAndLossData>(
    {
      quantity: s.optional(s.float64()),
      isin: s.optional(s.string()),
      scripName: s.optional(s.string()),
      tradeType: s.optional(s.string()),
      buyDate: s.optional(s.string()),
      buyAverage: s.optional(s.float64()),
      sellDate: s.optional(s.string()),
      sellAverage: s.optional(s.float64()),
      buyAmount: s.optional(s.float64()),
      sellAmount: s.optional(s.float64()),
      _keysMap: {
        scripName: "scrip_name",
        tradeType: "trade_type",
        buyDate: "buy_date",
        buyAverage: "buy_average",
        sellDate: "sell_date",
        sellAverage: "sell_average",
        buyAmount: "buy_amount",
        sellAmount: "sell_amount",
      },
    },
    { additionalProperties: s.json() },
  );

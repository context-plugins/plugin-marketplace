import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchange1Schema, type Exchange1 } from "./exchange1.js";

export type PositionData = {
  /** Exchange to which the order is associated */
  exchange?: Exchange1;
  /** The quantity/lot size multiplier used for calculating P&Ls */
  multiplier?: number;
  /** Net value of the position */
  value?: number;
  /** Profit and loss - net returns on the position */
  pnl?: number;
  /** Shows if the order was either Intraday, Delivery, CO or OCO */
  product?: string;
  /** Key issued by Upstox for the instrument */
  instrumentToken?: string;
  /** Average price at which the net position quantity was acquired */
  averagePrice?: number;
  /** Net value of the bought quantities */
  buyValue?: number;
  /** Quantity held previously and carried forward over night */
  overnightQuantity?: number;
  /** Amount at which the quantity is bought during the day */
  dayBuyValue?: number;
  /** Average price at which the day qty was bought. Default is empty string */
  dayBuyPrice?: number;
  /** Amount at which the quantity was bought in the previous session */
  overnightBuyAmount?: number;
  /** Quantity bought in the previous session */
  overnightBuyQuantity?: number;
  /** Quantity bought during the day */
  dayBuyQuantity?: number;
  /** Amount at which the quantity is sold during the day */
  daySellValue?: number;
  /** Average price at which the day quantity was sold */
  daySellPrice?: number;
  /** Amount at which the quantity was sold in the previous session */
  overnightSellAmount?: number;
  /** Quantity sold short in the previous session */
  overnightSellQuantity?: number;
  /** Quantity sold during the day */
  daySellQuantity?: number;
  /** Quantity left after nullifying Day and CF buy quantity towards Day and CF sell quantity */
  quantity?: number;
  /** Last traded market price of the instrument */
  lastPrice?: number;
  /** Day PnL generated against open positions */
  unrealised?: number;
  /** Day PnL generated against closed positions */
  realised?: number;
  /** Net value of the sold quantities */
  sellValue?: number;
  /**
   * Shows the trading symbol of the instrument
   *
   * @deprecated
   */
  tradingsymbol?: string;
  /** Shows the trading symbol of the instrument */
  tradingSymbol?: string;
  /** Closing price of the instrument from the last trading day */
  closePrice?: number;
  /** Average price at which quantities were bought */
  buyPrice?: number;
  /** Average price at which quantities were sold */
  sellPrice?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const positionDataSchema: Schema<PositionData> = s.object<PositionData>(
  {
    exchange: s.optional(s.lazy(() => exchange1Schema)),
    multiplier: s.optional(s.float64()),
    value: s.optional(s.float64()),
    pnl: s.optional(s.float64()),
    product: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    averagePrice: s.optional(s.float64()),
    buyValue: s.optional(s.float64()),
    overnightQuantity: s.optional(s.int()),
    dayBuyValue: s.optional(s.float64()),
    dayBuyPrice: s.optional(s.float64()),
    overnightBuyAmount: s.optional(s.float64()),
    overnightBuyQuantity: s.optional(s.int()),
    dayBuyQuantity: s.optional(s.int()),
    daySellValue: s.optional(s.float64()),
    daySellPrice: s.optional(s.float64()),
    overnightSellAmount: s.optional(s.float64()),
    overnightSellQuantity: s.optional(s.int()),
    daySellQuantity: s.optional(s.int()),
    quantity: s.optional(s.int()),
    lastPrice: s.optional(s.float64()),
    unrealised: s.optional(s.float64()),
    realised: s.optional(s.float64()),
    sellValue: s.optional(s.float64()),
    tradingsymbol: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    closePrice: s.optional(s.float64()),
    buyPrice: s.optional(s.float64()),
    sellPrice: s.optional(s.float64()),
    _keysMap: {
      instrumentToken: "instrument_token",
      averagePrice: "average_price",
      buyValue: "buy_value",
      overnightQuantity: "overnight_quantity",
      dayBuyValue: "day_buy_value",
      dayBuyPrice: "day_buy_price",
      overnightBuyAmount: "overnight_buy_amount",
      overnightBuyQuantity: "overnight_buy_quantity",
      dayBuyQuantity: "day_buy_quantity",
      daySellValue: "day_sell_value",
      daySellPrice: "day_sell_price",
      overnightSellAmount: "overnight_sell_amount",
      overnightSellQuantity: "overnight_sell_quantity",
      daySellQuantity: "day_sell_quantity",
      lastPrice: "last_price",
      sellValue: "sell_value",
      tradingSymbol: "trading_symbol",
      closePrice: "close_price",
      buyPrice: "buy_price",
      sellPrice: "sell_price",
    },
  },
  { additionalProperties: s.json() },
);

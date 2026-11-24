import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeOpenApiDefinitionPortfolioApiSchema,
  type ExchangeOpenApiDefinitionPortfolioApi,
} from "./exchange-open-api-definition-portfolio-api.js";

export type HoldingsData = {
  /** The standard ISIN representing stocks listed on multiple exchanges */
  isin?: string;
  /** Quantity either blocked towards open or completed order */
  cncUsedQuantity?: number;
  /** Category of collateral assigned by RMS */
  collateralType?: string;
  /** Name of the company */
  companyName?: string;
  /** This is the haircut percentage applied from RMS (applicable incase of collateral) */
  haircut?: number;
  /** Shows if the order was either Intraday, Delivery, CO or OCO */
  product?: string;
  /** The total holding qty */
  quantity?: number;
  /**
   * Shows the trading symbol of the instrument
   *
   * @deprecated
   */
  tradingsymbol?: string;
  /** The last traded price of the instrument */
  lastPrice?: number;
  /** Closing price of the instrument from the last trading day */
  closePrice?: number;
  /** Profit and Loss */
  pnl?: number;
  /** Day's change in absolute value for the stock */
  dayChange?: number;
  /** Day's change in percentage for the stock */
  dayChangePercentage?: number;
  /** Key issued by Upstox for the instrument */
  instrumentToken?: string;
  /** Average price at which the net holding quantity was acquired */
  averagePrice?: number;
  /** Quantity marked as collateral by RMS on users request */
  collateralQuantity?: number;
  collateralUpdateQuantity?: number;
  /** Shows the trading symbol of the instrument */
  tradingSymbol?: string;
  /** Quantity on T+1 day after order execution */
  t1Quantity?: number;
  /** Exchange of the trading symbol */
  exchange?: ExchangeOpenApiDefinitionPortfolioApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const holdingsDataSchema: Schema<HoldingsData> = s.object<HoldingsData>(
  {
    isin: s.optional(s.string()),
    cncUsedQuantity: s.optional(s.int()),
    collateralType: s.optional(s.string()),
    companyName: s.optional(s.string()),
    haircut: s.optional(s.float64()),
    product: s.optional(s.string()),
    quantity: s.optional(s.int()),
    tradingsymbol: s.optional(s.string()),
    lastPrice: s.optional(s.float64()),
    closePrice: s.optional(s.float64()),
    pnl: s.optional(s.float64()),
    dayChange: s.optional(s.float64()),
    dayChangePercentage: s.optional(s.float64()),
    instrumentToken: s.optional(s.string()),
    averagePrice: s.optional(s.float64()),
    collateralQuantity: s.optional(s.int()),
    collateralUpdateQuantity: s.optional(s.int()),
    tradingSymbol: s.optional(s.string()),
    t1Quantity: s.optional(s.int()),
    exchange: s.optional(s.lazy(() => exchangeOpenApiDefinitionPortfolioApiSchema)),
    _keysMap: {
      cncUsedQuantity: "cnc_used_quantity",
      collateralType: "collateral_type",
      companyName: "company_name",
      lastPrice: "last_price",
      closePrice: "close_price",
      dayChange: "day_change",
      dayChangePercentage: "day_change_percentage",
      instrumentToken: "instrument_token",
      averagePrice: "average_price",
      collateralQuantity: "collateral_quantity",
      collateralUpdateQuantity: "collateral_update_quantity",
      tradingSymbol: "trading_symbol",
      t1Quantity: "t1_quantity",
    },
  },
  { additionalProperties: s.json() },
);

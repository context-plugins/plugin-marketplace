import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MutualFundHoldingData = {
  /** Folio number when available. */
  folio?: string;
  /** Fund display name when available. */
  fund?: string;
  /** Unrealized P/L. */
  pnl?: number;
  /** Units held. */
  quantity?: number;
  /** ISIN of the fund, when available. */
  instrumentKey?: string;
  /** Average cost per unit. */
  averagePrice?: number;
  /** Last available NAV. */
  lastPrice?: number;
  /** Date for which last NAV is available. */
  lastPriceDate?: string;
  /** Units pledged as collateral when applicable. */
  pledgedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mutualFundHoldingDataSchema: Schema<MutualFundHoldingData> = s.object<MutualFundHoldingData>(
  {
    folio: s.optional(s.string()),
    fund: s.optional(s.string()),
    pnl: s.optional(s.float64()),
    quantity: s.optional(s.float64()),
    instrumentKey: s.optional(s.string()),
    averagePrice: s.optional(s.float64()),
    lastPrice: s.optional(s.float64()),
    lastPriceDate: s.optional(s.string()),
    pledgedQuantity: s.optional(s.float64()),
    _keysMap: {
      instrumentKey: "instrument_key",
      averagePrice: "average_price",
      lastPrice: "last_price",
      lastPriceDate: "last_price_date",
      pledgedQuantity: "pledged_quantity",
    },
  },
  { additionalProperties: s.json() },
);

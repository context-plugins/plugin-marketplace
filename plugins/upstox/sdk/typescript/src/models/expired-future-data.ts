import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExpiredFutureData = {
  /** Name of the instrument */
  name?: string;
  /** Segment of the instrument */
  segment?: string;
  /** Exchange of the instrument */
  exchange?: string;
  /** Expiry date of the instrument */
  expiry?: string;
  /** Unique key identifying the instrument */
  instrumentKey?: string;
  /** Token assigned by the exchange */
  exchangeToken?: string;
  /** Symbol used for trading */
  tradingSymbol?: string;
  /** Minimum price movement */
  tickSize?: number;
  /** Number of units per lot */
  lotSize?: number;
  /** Type of the instrument */
  instrumentType?: string;
  /** Maximum allowed quantity */
  freezeQuantity?: number;
  /** Key of the underlying asset */
  underlyingKey?: string;
  /** Type of the underlying asset */
  underlyingType?: string;
  /** Symbol of the underlying asset */
  underlyingSymbol?: string;
  /** Minimum lot size */
  minimumLot?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expiredFutureDataSchema: Schema<ExpiredFutureData> = s.object<ExpiredFutureData>(
  {
    name: s.optional(s.string()),
    segment: s.optional(s.string()),
    exchange: s.optional(s.string()),
    expiry: s.optional(s.string()),
    instrumentKey: s.optional(s.string()),
    exchangeToken: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    tickSize: s.optional(s.float64()),
    lotSize: s.optional(s.int()),
    instrumentType: s.optional(s.string()),
    freezeQuantity: s.optional(s.float64()),
    underlyingKey: s.optional(s.string()),
    underlyingType: s.optional(s.string()),
    underlyingSymbol: s.optional(s.string()),
    minimumLot: s.optional(s.int()),
    _keysMap: {
      instrumentKey: "instrument_key",
      exchangeToken: "exchange_token",
      tradingSymbol: "trading_symbol",
      tickSize: "tick_size",
      lotSize: "lot_size",
      instrumentType: "instrument_type",
      freezeQuantity: "freeze_quantity",
      underlyingKey: "underlying_key",
      underlyingType: "underlying_type",
      underlyingSymbol: "underlying_symbol",
      minimumLot: "minimum_lot",
    },
  },
  { additionalProperties: s.json() },
);

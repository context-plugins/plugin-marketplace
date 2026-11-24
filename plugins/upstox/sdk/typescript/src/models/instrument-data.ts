import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InstrumentData = {
  name?: string;
  segment?: string;
  exchange?: string;
  isin?: string;
  expiry?: Date;
  country?: string;
  latency?: string;
  description?: string;
  currency?: string;
  weekly?: boolean;
  instrumentKey?: string;
  exchangeToken?: string;
  tradingSymbol?: string;
  shortName?: string;
  tickSize?: number;
  lotSize?: number;
  instrumentType?: string;
  freezeQuantity?: number;
  underlyingKey?: string;
  underlyingType?: string;
  underlyingSymbol?: string;
  lastTradingDate?: Date;
  strikePrice?: number;
  priceQuoteUnit?: string;
  qtyMultiplier?: number;
  minimumLot?: number;
  startTime?: string;
  endTime?: string;
  weekDays?: string;
  generalDenominator?: number;
  generalNumerator?: number;
  priceNumerator?: number;
  priceDenominator?: number;
  mtfEnabled?: boolean;
  mtfBracket?: number;
  securityType?: string;
  casEligible?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instrumentDataSchema: Schema<InstrumentData> = s.object<InstrumentData>(
  {
    name: s.optional(s.string()),
    segment: s.optional(s.string()),
    exchange: s.optional(s.string()),
    isin: s.optional(s.string()),
    expiry: s.optional(s.dateTime()),
    country: s.optional(s.string()),
    latency: s.optional(s.string()),
    description: s.optional(s.string()),
    currency: s.optional(s.string()),
    weekly: s.optional(s.boolean()),
    instrumentKey: s.optional(s.string()),
    exchangeToken: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    shortName: s.optional(s.string()),
    tickSize: s.optional(s.float64()),
    lotSize: s.optional(s.int()),
    instrumentType: s.optional(s.string()),
    freezeQuantity: s.optional(s.float64()),
    underlyingKey: s.optional(s.string()),
    underlyingType: s.optional(s.string()),
    underlyingSymbol: s.optional(s.string()),
    lastTradingDate: s.optional(s.dateTime()),
    strikePrice: s.optional(s.float64()),
    priceQuoteUnit: s.optional(s.string()),
    qtyMultiplier: s.optional(s.int()),
    minimumLot: s.optional(s.int()),
    startTime: s.optional(s.string()),
    endTime: s.optional(s.string()),
    weekDays: s.optional(s.string()),
    generalDenominator: s.optional(s.float64()),
    generalNumerator: s.optional(s.float64()),
    priceNumerator: s.optional(s.float64()),
    priceDenominator: s.optional(s.float64()),
    mtfEnabled: s.optional(s.boolean()),
    mtfBracket: s.optional(s.float64()),
    securityType: s.optional(s.string()),
    casEligible: s.optional(s.boolean()),
    _keysMap: {
      instrumentKey: "instrument_key",
      exchangeToken: "exchange_token",
      tradingSymbol: "trading_symbol",
      shortName: "short_name",
      tickSize: "tick_size",
      lotSize: "lot_size",
      instrumentType: "instrument_type",
      freezeQuantity: "freeze_quantity",
      underlyingKey: "underlying_key",
      underlyingType: "underlying_type",
      underlyingSymbol: "underlying_symbol",
      lastTradingDate: "last_trading_date",
      strikePrice: "strike_price",
      priceQuoteUnit: "price_quote_unit",
      qtyMultiplier: "qty_multiplier",
      minimumLot: "minimum_lot",
      startTime: "start_time",
      endTime: "end_time",
      weekDays: "week_days",
      generalDenominator: "general_denominator",
      generalNumerator: "general_numerator",
      priceNumerator: "price_numerator",
      priceDenominator: "price_denominator",
      mtfEnabled: "mtf_enabled",
      mtfBracket: "mtf_bracket",
      securityType: "security_type",
      casEligible: "cas_eligible",
    },
  },
  { additionalProperties: s.json() },
);

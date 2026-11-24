import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Instrument = {
  /** Instrument Key of the Instrument */
  instrumentKey: string;
  /** Quantity of the instrument to buy or sell for margin calculation */
  quantity: number;
  /** Product with which the order is to be placed */
  product: string;
  /** Indicates whether its a BUY or SELL order */
  transactionType: string;
  /** price */
  price?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const instrumentProperties: s.Shape<Instrument> = {
  instrumentKey: s.string(),
  quantity: s.int(),
  product: s.string(),
  transactionType: s.string(),
  price: s.optional(s.float64()),
  _keysMap: {
    instrumentKey: "instrument_key",
    transactionType: "transaction_type",
  },
};

export const instrumentInternalSchema: Schema<Instrument> = s.object<Instrument>(instrumentProperties, {
  additionalProperties: s.json(),
});

export const instrumentSchema: Schema<Instrument> = s.lazySchema(() =>
  s.object<Instrument>(
    {
      ...instrumentProperties,
      instrumentKey: s
        .string()
        .check(
          s.pattern(
            "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
          ),
        ),
      quantity: s.int().check(s.gte(1)),
      price: s.optional(s.float64().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);

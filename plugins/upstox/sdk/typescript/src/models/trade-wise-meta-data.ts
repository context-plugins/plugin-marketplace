import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TradeWiseMetaData = {
  /** Total count of trades in the trade wise P and L report */
  tradesCount?: number;
  /** Maximum number of trades in a page of the trade wise P and L report API */
  pageSizeLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeWiseMetaDataSchema: Schema<TradeWiseMetaData> = s.object<TradeWiseMetaData>(
  {
    tradesCount: s.optional(s.int()),
    pageSizeLimit: s.optional(s.int()),
    _keysMap: {
      tradesCount: "trades_count",
      pageSizeLimit: "page_size_limit",
    },
  },
  { additionalProperties: s.json() },
);

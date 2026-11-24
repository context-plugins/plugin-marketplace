import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeNordicFinancialNewsIndicesApiSchema,
  type ExchangeNordicFinancialNewsIndicesApi,
} from "./exchange-nordic-financial-news-indices-api.js";

export type IndexSummary = {
  /** Unique stock index identifier */
  id: string;
  /** Index display name */
  name: string;
  /** Index symbol */
  symbol: string;
  /**
   * True if the index spans multiple Nordic exchanges (e.g. OMXN40), false if tied to a single
   * exchange (e.g. OMXS30)
   */
  panNordic?: boolean;
  /** Exchange associated with this index */
  exchange?: ExchangeNordicFinancialNewsIndicesApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexSummarySchema: Schema<IndexSummary> = s.object<IndexSummary>(
  {
    id: s.string(),
    name: s.string(),
    symbol: s.string(),
    panNordic: s.optional(s.boolean()),
    exchange: s.optionalNullable(s.lazy(() => exchangeNordicFinancialNewsIndicesApiSchema)),
    _keysMap: {
      panNordic: "pan_nordic",
    },
  },
  { additionalProperties: s.json() },
);

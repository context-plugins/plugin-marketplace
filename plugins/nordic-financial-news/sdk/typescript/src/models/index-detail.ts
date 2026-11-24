import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeNordicFinancialNewsIndicesApiSchema,
  type ExchangeNordicFinancialNewsIndicesApi,
} from "./exchange-nordic-financial-news-indices-api.js";

export type IndexDetail = {
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
  /** Index description */
  description?: string | null;
  /**
   * Number of distinct companies in this index (may be less than constituents when a company has
   * multiple share classes)
   */
  companiesCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexDetailSchema: Schema<IndexDetail> = s.object<IndexDetail>(
  {
    id: s.string(),
    name: s.string(),
    symbol: s.string(),
    panNordic: s.optional(s.boolean()),
    exchange: s.optionalNullable(s.lazy(() => exchangeNordicFinancialNewsIndicesApiSchema)),
    description: s.optionalNullable(s.string()),
    companiesCount: s.optional(s.int()),
    _keysMap: {
      panNordic: "pan_nordic",
      companiesCount: "companies_count",
    },
  },
  { additionalProperties: s.json() },
);

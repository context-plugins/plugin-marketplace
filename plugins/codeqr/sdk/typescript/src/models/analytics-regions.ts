import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { country1Schema, type Country1 } from "./country1.js";

export type AnalyticsRegions = {
  /** The 2-letter ISO 3166-1 alpha-2 country code of the region. */
  country: Country1;
  /**
   * The 2-letter ISO 3166-2 region code representing the region associated with the location of the
   * user.
   */
  region: string;
  /** @default "*" */
  city?: "*";
  /** The number of clicks from this region @default 0 */
  clicks?: number;
  /** The number of leads from this region @default 0 */
  leads?: number;
  /** The number of sales from this region @default 0 */
  sales?: number;
  /** The total amount of sales from this region, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsRegionsSchema: Schema<AnalyticsRegions> = s.object<AnalyticsRegions>(
  {
    country: country1Schema,
    region: s.string(),
    city: s.defaulted(s.literal("*"), "*"),
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

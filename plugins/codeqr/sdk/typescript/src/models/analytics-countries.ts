import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { country2Schema, type Country2 } from "./country2.js";

export type AnalyticsCountries = {
  /**
   * The 2-letter ISO 3166-1 country code for the country associated with the location of the user.
   * Learn more: https://codeqr.io/geo
   */
  country: Country2;
  /** @default "*" */
  city?: "*";
  /** The number of clicks from this country @default 0 */
  clicks?: number;
  /** The number of leads from this country @default 0 */
  leads?: number;
  /** The number of sales from this country @default 0 */
  sales?: number;
  /** The total amount of sales from this country, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsCountriesSchema: Schema<AnalyticsCountries> = s.object<AnalyticsCountries>(
  {
    country: country2Schema,
    city: s.defaulted(s.literal("*"), "*"),
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

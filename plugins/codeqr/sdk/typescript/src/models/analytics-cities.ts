import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

export type AnalyticsCities = {
  /** The name of the city */
  city: string;
  /** The 2-letter country code of the city: https://codeqr.io/geo */
  country: Country;
  /** The number of clicks from this city @default 0 */
  clicks?: number;
  /** The number of leads from this city @default 0 */
  leads?: number;
  /** The number of sales from this city @default 0 */
  sales?: number;
  /** The total amount of sales from this city, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsCitiesSchema: Schema<AnalyticsCities> = s.object<AnalyticsCities>(
  {
    city: s.string(),
    country: countrySchema,
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

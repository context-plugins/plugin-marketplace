import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { continentSchema, type Continent } from "./continent.js";

export type AnalyticsContinents = {
  /**
   * The 2-letter ISO 3166-1 code representing the continent associated with the location of the
   * user.
   */
  continent?: Continent;
  /** The number of clicks from this continent @default 0 */
  clicks?: number;
  /** The number of leads from this continent @default 0 */
  leads?: number;
  /** The number of sales from this continent @default 0 */
  sales?: number;
  /** The total amount of sales from this continent, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsContinentsSchema: Schema<AnalyticsContinents> = s.object<AnalyticsContinents>(
  {
    continent: s.optional(s.lazy(() => continentSchema)),
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

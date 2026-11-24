import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsBrowsers = {
  /** The name of the browser */
  browser: string;
  /** The number of clicks from this browser @default 0 */
  clicks?: number;
  /** The number of leads from this browser @default 0 */
  leads?: number;
  /** The number of sales from this browser @default 0 */
  sales?: number;
  /** The total amount of sales from this browser, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsBrowsersSchema: Schema<AnalyticsBrowsers> = s.object<AnalyticsBrowsers>(
  {
    browser: s.string(),
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

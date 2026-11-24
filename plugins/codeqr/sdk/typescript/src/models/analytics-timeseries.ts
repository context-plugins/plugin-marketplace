import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsTimeseries = {
  /** The starting timestamp of the interval */
  start: string;
  /** The number of clicks in the interval @default 0 */
  clicks?: number;
  /** The number of scans in the interval @default 0 */
  scans?: number;
  /** The number of views in the interval @default 0 */
  views?: number;
  /** The number of leads in the interval @default 0 */
  leads?: number;
  /** The number of sales in the interval @default 0 */
  sales?: number;
  /** The total amount of sales in the interval, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsTimeseriesSchema: Schema<AnalyticsTimeseries> = s.object<AnalyticsTimeseries>(
  {
    start: s.string(),
    clicks: s.defaulted(s.float64(), 0),
    scans: s.defaulted(s.float64(), 0),
    views: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

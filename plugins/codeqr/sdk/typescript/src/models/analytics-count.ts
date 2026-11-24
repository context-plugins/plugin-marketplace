import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsCount = {
  /** The total number of clicks @default 0 */
  clicks?: number;
  /** The total number of scans @default 0 */
  scans?: number;
  /** The total number of views @default 0 */
  views?: number;
  /** The total number of leads @default 0 */
  leads?: number;
  /** The total number of sales @default 0 */
  sales?: number;
  /** The total amount of sales, in cents @default 0 */
  saleAmount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsCountSchema: Schema<AnalyticsCount> = s.object<AnalyticsCount>(
  {
    clicks: s.defaulted(s.float64(), 0),
    scans: s.defaulted(s.float64(), 0),
    views: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
    sales: s.defaulted(s.float64(), 0),
    saleAmount: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentUsageSummary = {
  /** @default 0 */
  totalHours?: number;
  /** @default 0 */
  totalCost?: number;
  /** @default 0 */
  activeCount?: number;
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentUsageSummarySchema: Schema<EnvironmentUsageSummary> =
  s.object<EnvironmentUsageSummary>(
    {
      totalHours: s.defaulted(s.float64(), 0),
      totalCost: s.defaulted(s.float64(), 0),
      activeCount: s.defaulted(s.int(), 0),
      totalCount: s.defaulted(s.int(), 0),
      _keysMap: {
        totalHours: "total_hours",
        totalCost: "total_cost",
        activeCount: "active_count",
        totalCount: "total_count",
      },
    },
    { additionalProperties: s.json() },
  );

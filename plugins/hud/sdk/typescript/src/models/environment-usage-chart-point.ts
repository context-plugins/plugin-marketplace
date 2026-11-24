import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentUsageChartPoint = {
  date: string;
  /** @default 0 */
  hours?: number;
  /** @default 0 */
  cost?: number;
  /** @default 0 */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentUsageChartPointSchema: Schema<EnvironmentUsageChartPoint> =
  s.object<EnvironmentUsageChartPoint>(
    {
      date: s.string(),
      hours: s.defaulted(s.float64(), 0),
      cost: s.defaulted(s.float64(), 0),
      count: s.defaulted(s.int(), 0),
    },
    { additionalProperties: s.json() },
  );

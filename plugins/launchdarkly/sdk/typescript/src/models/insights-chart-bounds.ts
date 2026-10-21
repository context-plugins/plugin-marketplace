import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsChartBounds = {
  /** Name of the bound */
  name: string;
  /** Value of the bound */
  value: number;
};

export const insightsChartBoundsSchema: Schema<InsightsChartBounds> = s.object<InsightsChartBounds>({
  name: s.string(),
  value: s.int(),
});

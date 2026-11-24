import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  environmentUsageChartPointSchema,
  type EnvironmentUsageChartPoint,
} from "./environment-usage-chart-point.js";
import { environmentUsageRowSchema, type EnvironmentUsageRow } from "./environment-usage-row.js";
import { environmentUsageSummarySchema, type EnvironmentUsageSummary } from "./environment-usage-summary.js";

export type EnvironmentUsageResponse = {
  summary: EnvironmentUsageSummary;
  chart: EnvironmentUsageChartPoint[];
  environments: EnvironmentUsageRow[];
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentUsageResponseSchema: Schema<EnvironmentUsageResponse> =
  s.object<EnvironmentUsageResponse>(
    {
      summary: environmentUsageSummarySchema,
      chart: s.array(s.lazy(() => environmentUsageChartPointSchema)),
      environments: s.array(s.lazy(() => environmentUsageRowSchema)),
      teamId: s.string(),
      _keysMap: {
        teamId: "team_id",
      },
    },
    { additionalProperties: s.json() },
  );

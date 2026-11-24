import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMonthlyStatsEntryInternalSchema,
  awsMonthlyStatsEntrySchema,
  type AwsMonthlyStatsEntry,
} from "./aws-monthly-stats-entry.js";

/** Trailing 6 calendar months of stats, grouped by SP type. */
export type MonthlyStats = {
  compute?: AwsMonthlyStatsEntry[];
  database?: AwsMonthlyStatsEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monthlyStatsProperties: s.Shape<MonthlyStats> = {
  compute: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntryInternalSchema))),
  database: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntryInternalSchema))),
};

export const monthlyStatsInternalSchema: Schema<MonthlyStats> = s.object<MonthlyStats>(
  monthlyStatsProperties,
  { additionalProperties: s.json() },
);

export const monthlyStatsSchema: Schema<MonthlyStats> = s.lazySchema(() =>
  s.object<MonthlyStats>(
    {
      ...monthlyStatsProperties,
      compute: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntrySchema))),
      database: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntrySchema))),
    },
    { additionalProperties: s.json() },
  ),
);

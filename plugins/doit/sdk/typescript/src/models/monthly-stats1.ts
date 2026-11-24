import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMonthlyStatsEntryInternalSchema,
  awsMonthlyStatsEntrySchema,
  type AwsMonthlyStatsEntry,
} from "./aws-monthly-stats-entry.js";

/** Trailing 6 calendar months of AWS organization stats, grouped by SP type. */
export type MonthlyStats1 = {
  compute?: AwsMonthlyStatsEntry[];
  database?: AwsMonthlyStatsEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monthlyStats1Properties: s.Shape<MonthlyStats1> = {
  compute: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntryInternalSchema))),
  database: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntryInternalSchema))),
};

export const monthlyStats1InternalSchema: Schema<MonthlyStats1> = s.object<MonthlyStats1>(
  monthlyStats1Properties,
  { additionalProperties: s.json() },
);

export const monthlyStats1Schema: Schema<MonthlyStats1> = s.lazySchema(() =>
  s.object<MonthlyStats1>(
    {
      ...monthlyStats1Properties,
      compute: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntrySchema))),
      database: s.optional(s.array(s.lazy(() => awsMonthlyStatsEntrySchema))),
    },
    { additionalProperties: s.json() },
  ),
);

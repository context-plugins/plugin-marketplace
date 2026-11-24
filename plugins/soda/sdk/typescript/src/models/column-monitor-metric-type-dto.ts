import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ColumnMonitorMetricTypeDto = {
  MissingPercentage: "missingPercentage",
  DuplicatePercentage: "duplicatePercentage",
  Average: "average",
  ColumnFreshness: "columnFreshness",
  Sum: "sum",
  DistinctValuesCount: "distinctValuesCount",
  Count: "count",
  MinimumValue: "minimumValue",
  MaximumValue: "maximumValue",
  DuplicateValuesPercentage: "duplicateValuesPercentage",
  MinimumLength: "minimumLength",
  MaximumLength: "maximumLength",
  AverageLength: "averageLength",
  StandardDeviation: "standardDeviation",
  Variance: "variance",
  Q1: "q1",
  Median: "median",
  Q3: "q3",
} as const;
export type ColumnMonitorMetricTypeDto =
  | (typeof ColumnMonitorMetricTypeDto)[keyof typeof ColumnMonitorMetricTypeDto]
  | (string & {});

export const columnMonitorMetricTypeDtoSchema: EnumSchema<ColumnMonitorMetricTypeDto> =
  s.enumOf<ColumnMonitorMetricTypeDto>(ColumnMonitorMetricTypeDto);

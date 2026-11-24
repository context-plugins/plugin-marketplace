import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Metric dimension */
export const Dimension = {
  CountPerUniqueUser: "COUNT_PER_UNIQUE_USER",
  CountPerVariableEvaluation: "COUNT_PER_VARIABLE_EVALUATION",
  SumPerUniqueUser: "SUM_PER_UNIQUE_USER",
  AveragePerUniqueUser: "AVERAGE_PER_UNIQUE_USER",
  TotalAverage: "TOTAL_AVERAGE",
  TotalSum: "TOTAL_SUM",
} as const;
export type Dimension = (typeof Dimension)[keyof typeof Dimension] | (string & {});

export const dimensionSchema: EnumSchema<Dimension> = s.enumOf<Dimension>(Dimension);

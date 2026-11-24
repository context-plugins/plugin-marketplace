import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dimension3 = {
  CountPerUniqueUser: "COUNT_PER_UNIQUE_USER",
  CountPerVariableEvaluation: "COUNT_PER_VARIABLE_EVALUATION",
  SumPerUniqueUser: "SUM_PER_UNIQUE_USER",
  AveragePerUniqueUser: "AVERAGE_PER_UNIQUE_USER",
  TotalAverage: "TOTAL_AVERAGE",
  TotalSum: "TOTAL_SUM",
} as const;
export type Dimension3 = (typeof Dimension3)[keyof typeof Dimension3] | (string & {});

export const dimension3Schema: EnumSchema<Dimension3> = s.enumOf<Dimension3>(Dimension3);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OperatorStatableStatsApi = {
  Is: "is",
  IsNot: "is_not",
  Contains: "contains",
  DoesNotContain: "does_not_contain",
} as const;
export type OperatorStatableStatsApi =
  | (typeof OperatorStatableStatsApi)[keyof typeof OperatorStatableStatsApi]
  | (string & {});

export const operatorStatableStatsApiSchema: EnumSchema<OperatorStatableStatsApi> =
  s.enumOf<OperatorStatableStatsApi>(OperatorStatableStatsApi);

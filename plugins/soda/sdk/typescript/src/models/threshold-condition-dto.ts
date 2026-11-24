import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThresholdConditionDto = {
  GreaterThan: "greaterThan",
  LessThan: "lessThan",
} as const;
export type ThresholdConditionDto =
  | (typeof ThresholdConditionDto)[keyof typeof ThresholdConditionDto]
  | (string & {});

export const thresholdConditionDtoSchema: EnumSchema<ThresholdConditionDto> =
  s.enumOf<ThresholdConditionDto>(ThresholdConditionDto);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Operators for approval rules. */
export const RuleOperatorCreateDto = {
  Lt: "lt",
  Gte: "gte",
  In: "in",
} as const;
export type RuleOperatorCreateDto =
  | (typeof RuleOperatorCreateDto)[keyof typeof RuleOperatorCreateDto]
  | (string & {});

export const ruleOperatorCreateDtoSchema: EnumSchema<RuleOperatorCreateDto> =
  s.enumOf<RuleOperatorCreateDto>(RuleOperatorCreateDto);

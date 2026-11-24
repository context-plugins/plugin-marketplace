import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckResultLevelDto = {
  Info: "info",
  Warning: "warning",
  Critical: "critical",
  NotEvaluated: "not_evaluated",
  Excluded: "excluded",
} as const;
export type CheckResultLevelDto =
  | (typeof CheckResultLevelDto)[keyof typeof CheckResultLevelDto]
  | (string & {});

export const checkResultLevelDtoSchema: EnumSchema<CheckResultLevelDto> =
  s.enumOf<CheckResultLevelDto>(CheckResultLevelDto);

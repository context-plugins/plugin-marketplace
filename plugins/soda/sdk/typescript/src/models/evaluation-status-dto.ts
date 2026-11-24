import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EvaluationStatusDto = {
  Pass: "pass",
  Warn: "warn",
  Fail: "fail",
  NotEvaluated: "notEvaluated",
  Excluded: "excluded",
} as const;
export type EvaluationStatusDto =
  | (typeof EvaluationStatusDto)[keyof typeof EvaluationStatusDto]
  | (string & {});

export const evaluationStatusDtoSchema: EnumSchema<EvaluationStatusDto> =
  s.enumOf<EvaluationStatusDto>(EvaluationStatusDto);

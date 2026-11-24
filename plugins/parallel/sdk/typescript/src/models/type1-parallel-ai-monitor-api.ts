import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of warning. Note that adding new warning types is considered a backward-compatible change.
 */
export const Type1ParallelAiMonitorApi = {
  SpecValidationWarning: "spec_validation_warning",
  InputValidationWarning: "input_validation_warning",
  Warning: "warning",
} as const;
export type Type1ParallelAiMonitorApi =
  | (typeof Type1ParallelAiMonitorApi)[keyof typeof Type1ParallelAiMonitorApi]
  | (string & {});

export const type1ParallelAiMonitorApiSchema: EnumSchema<Type1ParallelAiMonitorApi> =
  s.enumOf<Type1ParallelAiMonitorApi>(Type1ParallelAiMonitorApi);

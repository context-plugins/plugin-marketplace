import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of warning. Note that adding new warning types is considered a backward-compatible change.
 */
export const Type2ParallelAiTasksApi = {
  SpecValidationWarning: "spec_validation_warning",
  InputValidationWarning: "input_validation_warning",
  Warning: "warning",
} as const;
export type Type2ParallelAiTasksApi =
  | (typeof Type2ParallelAiTasksApi)[keyof typeof Type2ParallelAiTasksApi]
  | (string & {});

export const type2ParallelAiTasksApiSchema: EnumSchema<Type2ParallelAiTasksApi> =
  s.enumOf<Type2ParallelAiTasksApi>(Type2ParallelAiTasksApi);

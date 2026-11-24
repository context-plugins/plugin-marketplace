import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of schema being defined. Always `auto`. */
export const Type3ParallelAiTasksApi = {
  Auto: "auto",
} as const;
export type Type3ParallelAiTasksApi =
  | (typeof Type3ParallelAiTasksApi)[keyof typeof Type3ParallelAiTasksApi]
  | (string & {});

export const type3ParallelAiTasksApiSchema: EnumSchema<Type3ParallelAiTasksApi> =
  s.enumOf<Type3ParallelAiTasksApi>(Type3ParallelAiTasksApi);

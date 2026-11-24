import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of schema being defined. Always `json`. */
export const Type1ParallelAiTasksApi = {
  Json: "json",
} as const;
export type Type1ParallelAiTasksApi =
  | (typeof Type1ParallelAiTasksApi)[keyof typeof Type1ParallelAiTasksApi]
  | (string & {});

export const type1ParallelAiTasksApiSchema: EnumSchema<Type1ParallelAiTasksApi> =
  s.enumOf<Type1ParallelAiTasksApi>(Type1ParallelAiTasksApi);

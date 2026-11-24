import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of MCP server being configured. Always `url`. */
export const Type4ParallelAiTasksApi = {
  Url: "url",
} as const;
export type Type4ParallelAiTasksApi =
  | (typeof Type4ParallelAiTasksApi)[keyof typeof Type4ParallelAiTasksApi]
  | (string & {});

export const type4ParallelAiTasksApiSchema: EnumSchema<Type4ParallelAiTasksApi> =
  s.enumOf<Type4ParallelAiTasksApi>(Type4ParallelAiTasksApi);

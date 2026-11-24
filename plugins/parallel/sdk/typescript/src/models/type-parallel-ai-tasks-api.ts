import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of schema being defined. Always `text`. */
export const TypeParallelAiTasksApi = {
  Text: "text",
} as const;
export type TypeParallelAiTasksApi =
  | (typeof TypeParallelAiTasksApi)[keyof typeof TypeParallelAiTasksApi]
  | (string & {});

export const typeParallelAiTasksApiSchema: EnumSchema<TypeParallelAiTasksApi> =
  s.enumOf<TypeParallelAiTasksApi>(TypeParallelAiTasksApi);

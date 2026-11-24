import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type3ParallelAiTasksApi, type3ParallelAiTasksApiSchema } from "./type3-parallel-ai-tasks-api.js";

/** Auto schema for a task input or output. */
export type AutoSchema = {
  /** The type of schema being defined. Always `auto`. @default Type3ParallelAiTasksApi.Auto */
  type?: Type3ParallelAiTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoSchemaSchema: Schema<AutoSchema> = s.object<AutoSchema>(
  {
    type: s.defaulted(type3ParallelAiTasksApiSchema, Type3ParallelAiTasksApi.Auto),
  },
  { additionalProperties: s.json() },
);

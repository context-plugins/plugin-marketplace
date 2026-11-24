import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { TypeParallelAiTasksApi, typeParallelAiTasksApiSchema } from "./type-parallel-ai-tasks-api.js";
import { descriptionSchema, type Description } from "./unions/description.js";

/** Text description for a task input or output. */
export type TextSchema = {
  /** A text description of the desired output from the task. */
  description?: Description;
  /** The type of schema being defined. Always `text`. @default TypeParallelAiTasksApi.Text */
  type?: TypeParallelAiTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textSchemaSchema: Schema<TextSchema> = s.object<TextSchema>(
  {
    description: s.optional(s.lazy(() => descriptionSchema)),
    type: s.defaulted(typeParallelAiTasksApiSchema, TypeParallelAiTasksApi.Text),
  },
  { additionalProperties: s.json() },
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  jsonSchemaParallelAiTasksApiSchema,
  type JsonSchemaParallelAiTasksApi,
} from "../json-schema-parallel-ai-tasks-api.js";
import { textSchemaSchema, type TextSchema } from "../text-schema.js";

/**
 * Optional JSON schema or text description of expected input to the task. A bare string is
 * equivalent to a text schema with the same description.
 */
export type InputSchema = string | JsonSchemaParallelAiTasksApi | TextSchema;

export const inputSchemaSchema: Schema<InputSchema> = s.of<InputSchema>(
  s.union([s.string(), s.lazy(() => jsonSchemaParallelAiTasksApiSchema), s.lazy(() => textSchemaSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { autoSchemaSchema, type AutoSchema } from "../auto-schema.js";
import {
  jsonSchemaParallelAiTasksApiSchema,
  type JsonSchemaParallelAiTasksApi,
} from "../json-schema-parallel-ai-tasks-api.js";
import { textSchemaSchema, type TextSchema } from "../text-schema.js";

/**
 * JSON schema or text fully describing the desired output from the task. Descriptions of output
 * fields will determine the form and content of the response. A bare string is equivalent to a text
 * schema with the same description.
 */
export type OutputSchema1 = JsonSchemaParallelAiTasksApi | TextSchema | AutoSchema | string;

export const outputSchema1Schema: Schema<OutputSchema1> = s.of<OutputSchema1>(
  s.union([
    s.lazy(() => jsonSchemaParallelAiTasksApiSchema),
    s.lazy(() => textSchemaSchema),
    s.lazy(() => autoSchemaSchema),
    s.string(),
  ]),
);

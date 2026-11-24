import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  jsonSchemaParallelAiFindAllApiSchema,
  type JsonSchemaParallelAiFindAllApi,
} from "../json-schema-parallel-ai-find-all-api.js";

/**
 * JSON schema derived from the baseline task run that constrains and structures the event output.
 */
export type OutputSchemaModel = JsonSchemaParallelAiFindAllApi;

export const outputSchemaModelSchema: Schema<OutputSchemaModel> = s.of<OutputSchemaModel>(
  s.union([s.lazy(() => jsonSchemaParallelAiFindAllApiSchema)]),
);

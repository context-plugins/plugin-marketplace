import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  jsonSchemaParallelAiFindAllApiSchema,
  type JsonSchemaParallelAiFindAllApi,
} from "../json-schema-parallel-ai-find-all-api.js";

/**
 * JSON schema that constrains and structures the event output. When set, events are returned as
 * JSON objects matching this schema instead of free-form text.
 */
export type OutputSchema1Model = JsonSchemaParallelAiFindAllApi;

export const outputSchema1ModelSchema: Schema<OutputSchema1Model> = s.of<OutputSchema1Model>(
  s.union([s.lazy(() => jsonSchemaParallelAiFindAllApiSchema)]),
);

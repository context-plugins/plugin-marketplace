import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  jsonSchemaParallelAiFindAllApiSchema,
  type JsonSchemaParallelAiFindAllApi,
} from "../json-schema-parallel-ai-find-all-api.js";

/**
 * JSON schema that constrains and structures the event output. When set, events are returned as
 * JSON objects matching this schema.
 */
export type OutputSchema2 = JsonSchemaParallelAiFindAllApi;

export const outputSchema2Schema: Schema<OutputSchema2> = s.of<OutputSchema2>(
  s.union([s.lazy(() => jsonSchemaParallelAiFindAllApiSchema)]),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type1ParallelAiTasksApi, type1ParallelAiTasksApiSchema } from "./type1-parallel-ai-tasks-api.js";

/** JSON schema for a task input or output. */
export type JsonSchemaParallelAiTasksApi = {
  /** A JSON Schema object. Only a subset of JSON Schema is supported. */
  jsonSchema: Record<string, unknown>;
  /** The type of schema being defined. Always `json`. @default Type1ParallelAiTasksApi.Json */
  type?: Type1ParallelAiTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonSchemaParallelAiTasksApiSchema: Schema<JsonSchemaParallelAiTasksApi> =
  s.object<JsonSchemaParallelAiTasksApi>(
    {
      jsonSchema: s.record(s.string(), s.unknown()),
      type: s.defaulted(type1ParallelAiTasksApiSchema, Type1ParallelAiTasksApi.Json),
      _keysMap: {
        jsonSchema: "json_schema",
      },
    },
    { additionalProperties: s.json() },
  );

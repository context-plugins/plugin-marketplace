import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { TypeParallelAiFindAllApi, typeParallelAiFindAllApiSchema } from "./type-parallel-ai-find-all-api.js";

/** JSON schema for a task input or output. */
export type JsonSchemaParallelAiFindAllApi = {
  /** A JSON Schema object. Only a subset of JSON Schema is supported. */
  jsonSchema: Record<string, unknown>;
  /** The type of schema being defined. Always `json`. @default TypeParallelAiFindAllApi.Json */
  type?: TypeParallelAiFindAllApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonSchemaParallelAiFindAllApiSchema: Schema<JsonSchemaParallelAiFindAllApi> =
  s.object<JsonSchemaParallelAiFindAllApi>(
    {
      jsonSchema: s.record(s.string(), s.unknown()),
      type: s.defaulted(typeParallelAiFindAllApiSchema, TypeParallelAiFindAllApi.Json),
      _keysMap: {
        jsonSchema: "json_schema",
      },
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonSchemaSchema, type JsonSchema } from "./json-schema.js";

/**
 * JSON Schema response format.
 *
 * Used to generate structured JSON responses. Learn more about [Structured
 * Outputs](https://platform.openai.com/docs/guides/structured-outputs).
 */
export type ResponseFormatJsonSchema = {
  /** Structured Outputs configuration options, including a JSON Schema. */
  jsonSchema: JsonSchema;
  /** @default "json_schema" */
  type?: "json_schema";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseFormatJsonSchemaSchema: Schema<ResponseFormatJsonSchema> =
  s.object<ResponseFormatJsonSchema>(
    {
      jsonSchema: jsonSchemaSchema,
      type: s.defaulted(s.literal("json_schema"), "json_schema"),
      _keysMap: {
        jsonSchema: "json_schema",
      },
    },
    { additionalProperties: s.json() },
  );

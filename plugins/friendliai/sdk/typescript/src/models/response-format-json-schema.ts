import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseFormatJsonSchemaSchemaSchema,
  type ResponseFormatJsonSchemaSchema,
} from "./response-format-json-schema-schema.js";

export type ResponseFormatJsonSchema = {
  /** The type of the response format: `json_schema`. @default "json_schema" */
  type?: "json_schema";
  jsonSchema: ResponseFormatJsonSchemaSchema;
};

export const responseFormatJsonSchemaSchema: Schema<ResponseFormatJsonSchema> =
  s.object<ResponseFormatJsonSchema>({
    type: s.defaulted(s.literal("json_schema"), "json_schema"),
    jsonSchema: responseFormatJsonSchemaSchemaSchema,
    _keysMap: {
      jsonSchema: "json_schema",
    },
  });

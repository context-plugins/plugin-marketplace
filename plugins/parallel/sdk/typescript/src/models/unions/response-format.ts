import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responseFormatJsonObjectSchema,
  type ResponseFormatJsonObject,
} from "../response-format-json-object.js";
import {
  responseFormatJsonSchemaSchema,
  type ResponseFormatJsonSchema,
} from "../response-format-json-schema.js";
import { responseFormatTextSchema, type ResponseFormatText } from "../response-format-text.js";

/** The response format to use for chat completions. OpenAI compatible. */
export type ResponseFormat = ResponseFormatText | ResponseFormatJsonSchema | ResponseFormatJsonObject;

export const responseFormatSchema: Schema<ResponseFormat> = s.of<ResponseFormat>(
  s.union([
    s.lazy(() => responseFormatTextSchema),
    s.lazy(() => responseFormatJsonSchemaSchema),
    s.lazy(() => responseFormatJsonObjectSchema),
  ]),
);

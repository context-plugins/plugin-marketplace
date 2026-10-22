import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesTextFormatJsonObjectSchema,
  type ResponsesTextFormatJsonObject,
} from "../responses-text-format-json-object.js";
import {
  responsesTextFormatJsonSchemaSchema,
  type ResponsesTextFormatJsonSchema,
} from "../responses-text-format-json-schema.js";
import {
  responsesTextFormatTextSchema,
  type ResponsesTextFormatText,
} from "../responses-text-format-text.js";

export type ResponsesTextFormat =
  | (ResponsesTextFormatJsonObject & { type: "json_object" })
  | (ResponsesTextFormatJsonSchema & { type: "json_schema" })
  | (ResponsesTextFormatText & { type: "text" });

export const responsesTextFormatSchema: Schema<ResponsesTextFormat> =
  s.discriminatedUnion<ResponsesTextFormat>("type", {
    json_object: responsesTextFormatJsonObjectSchema,
    json_schema: responsesTextFormatJsonSchemaSchema,
    text: responsesTextFormatTextSchema,
  });

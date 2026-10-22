import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesTextFormatSchema, type ResponsesTextFormat } from "./responses-text-format.js";

/**
 * An object specifying the format that the model must output. Configuring `{ "type": "json_schema"
 * }` enables Structured Outputs. The default format is `{ "type": "text" }`.
 */
export type Format1 = ResponsesTextFormat;

export const format1Schema: Schema<Format1> = s.of<Format1>(
  s.union([s.lazy(() => responsesTextFormatSchema)]),
);

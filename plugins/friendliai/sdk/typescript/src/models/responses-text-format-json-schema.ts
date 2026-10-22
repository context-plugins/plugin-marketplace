import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description4Schema, type Description4 } from "./unions/description4.js";
import { strict2Schema, type Strict2 } from "./unions/strict2.js";

export type ResponsesTextFormatJsonSchema = {
  /** The type of response format being defined. Always `json_schema`. @default "json_schema" */
  type?: "json_schema";
  /**
   * The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with
   * a maximum length of 64.
   */
  name: string;
  /** The schema for the response format, described as a JSON Schema object. */
  schema: Record<string, unknown>;
  /**
   * A description of what the response format is for, used by the model to determine how to respond
   * in the format.
   */
  description?: Description4;
  /**
   * Whether to enable strict schema adherence when generating the output. If set to true, the model
   * will always follow the exact schema defined in the `schema` field. Only a subset of JSON Schema
   * is supported when `strict` is `true`.
   */
  strict?: Strict2;
};

export const responsesTextFormatJsonSchemaSchema: Schema<ResponsesTextFormatJsonSchema> =
  s.object<ResponsesTextFormatJsonSchema>({
    type: s.defaulted(s.literal("json_schema"), "json_schema"),
    name: s.string(),
    schema: s.record(s.string(), s.unknown()),
    description: s.optional(s.lazy(() => description4Schema)),
    strict: s.optional(s.lazy(() => strict2Schema)),
  });

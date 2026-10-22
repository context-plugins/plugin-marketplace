import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseFormatJsonSchemaSchema = {
  /** The schema for the response format, described as a JSON Schema object. */
  schema: Record<string, unknown>;
};

export const responseFormatJsonSchemaSchemaSchema: Schema<ResponseFormatJsonSchemaSchema> =
  s.object<ResponseFormatJsonSchemaSchema>({
    schema: s.record(s.string(), s.unknown()),
  });

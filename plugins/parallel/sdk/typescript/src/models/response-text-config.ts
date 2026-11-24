import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./unions/format.js";
import { verbosity1Schema, type Verbosity1 } from "./unions/verbosity1.js";

/**
 * Text output configuration. By default the response is plain text; for structured output set
 * `format` to `{"type": "json_schema", "name": ..., "schema": {...}}`. The `json_object` format is
 * accepted for compatibility but produces plain text.
 */
export type ResponseTextConfig = {
  format?: Format;
  verbosity?: Verbosity1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseTextConfigSchema: Schema<ResponseTextConfig> = s.object<ResponseTextConfig>(
  {
    format: s.optional(s.lazy(() => formatSchema)),
    verbosity: s.optional(s.lazy(() => verbosity1Schema)),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./unions/format.js";

/**
 * Optional configuration for the assistant's text response. When `format.type` is `JSON_SCHEMA`,
 * the response is constrained to the supplied JSON schema and returned in
 * `output[*].content[*].structured_output`. Structured output is not supported when `stream` is
 * true.
 */
export type Text = {
  /**
   * Output format for the assistant text. TEXT is unconstrained. JSON_SCHEMA constrains the
   * response to the supplied schema.
   */
  format?: Format;
};

export const textSchema: Schema<Text> = s.object<Text>({
  format: s.optional(s.lazy(() => formatSchema)),
});

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HtmltotextRequest = {
  /** The HTML to convert to text */
  html: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HtmltotextRequestSchema: Schema<V1HtmltotextRequest> = s.object<V1HtmltotextRequest>(
  {
    html: s.string(),
  },
  { additionalProperties: s.json() },
);

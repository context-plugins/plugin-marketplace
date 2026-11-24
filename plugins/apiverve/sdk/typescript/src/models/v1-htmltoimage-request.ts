import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HtmltoimageRequest = {
  /** HTML code to convert */
  html: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Output image format */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HtmltoimageRequestSchema: Schema<V1HtmltoimageRequest> = s.object<V1HtmltoimageRequest>(
  {
    html: s.string(),
    width: s.optional(s.int()),
    height: s.optional(s.int()),
    format: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

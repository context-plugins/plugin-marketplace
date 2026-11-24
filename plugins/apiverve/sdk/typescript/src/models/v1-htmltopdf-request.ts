import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HtmltopdfRequest = {
  /** The HTML content to convert to PDF. Ensure that the HTML is escaped properly */
  html: string;
  /** The top margin of the PDF in inches (e.g., 0.5) */
  marginTop?: number;
  /** The right margin of the PDF in inches (e.g., 0.5) */
  marginRight?: number;
  /** The bottom margin of the PDF in inches (e.g., 0.5) */
  marginBottom?: number;
  /** The left margin of the PDF in inches (e.g., 0.5) */
  marginLeft?: number;
  /** Set to true for landscape orientation */
  landscape?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HtmltopdfRequestSchema: Schema<V1HtmltopdfRequest> = s.object<V1HtmltopdfRequest>(
  {
    html: s.string(),
    marginTop: s.optional(s.float64()),
    marginRight: s.optional(s.float64()),
    marginBottom: s.optional(s.float64()),
    marginLeft: s.optional(s.float64()),
    landscape: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

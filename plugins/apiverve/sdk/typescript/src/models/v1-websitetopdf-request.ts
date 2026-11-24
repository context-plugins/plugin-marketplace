import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebsitetopdfRequest = {
  /** The URL of the website to convert to PDF */
  url: string;
  /** The top margin of the PDF in inches (e.g., 0.4) */
  marginTop?: number;
  /** The right margin of the PDF in inches (e.g., 0.4) */
  marginRight?: number;
  /** The bottom margin of the PDF in inches (e.g., 0.4) */
  marginBottom?: number;
  /** The left margin of the PDF in inches (e.g., 0.4) */
  marginLeft?: number;
  /** Set to true for landscape orientation */
  landscape?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebsitetopdfRequestSchema: Schema<V1WebsitetopdfRequest> = s.object<V1WebsitetopdfRequest>(
  {
    url: s.string(),
    marginTop: s.optional(s.float64()),
    marginRight: s.optional(s.float64()),
    marginBottom: s.optional(s.float64()),
    marginLeft: s.optional(s.float64()),
    landscape: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

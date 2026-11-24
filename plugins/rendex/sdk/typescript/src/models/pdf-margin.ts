import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Page margins for PDF output (CSS units, e.g. "1cm", "0.5in") */
export type PdfMargin = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pdfMarginSchema: Schema<PdfMargin> = s.object<PdfMargin>(
  {
    top: s.optional(s.string()),
    right: s.optional(s.string()),
    bottom: s.optional(s.string()),
    left: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

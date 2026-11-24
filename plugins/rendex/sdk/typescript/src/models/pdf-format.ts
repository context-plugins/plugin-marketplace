import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Paper size for PDF output (only applies when `format` is `pdf`) */
export const PdfFormat = {
  A4: "A4",
  Letter: "Letter",
  Legal: "Legal",
  Tabloid: "Tabloid",
  A3: "A3",
} as const;
export type PdfFormat = (typeof PdfFormat)[keyof typeof PdfFormat] | (string & {});

export const pdfFormatSchema: EnumSchema<PdfFormat> = s.enumOf<PdfFormat>(PdfFormat);

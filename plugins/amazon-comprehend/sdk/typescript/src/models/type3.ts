import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document type. */
export const Type3 = {
  NativePdf: "NATIVE_PDF",
  ScannedPdf: "SCANNED_PDF",
  MsWord: "MS_WORD",
  Image: "IMAGE",
  PlainText: "PLAIN_TEXT",
  TextractDetectDocumentTextJson: "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON",
  TextractAnalyzeDocumentJson: "TEXTRACT_ANALYZE_DOCUMENT_JSON",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);

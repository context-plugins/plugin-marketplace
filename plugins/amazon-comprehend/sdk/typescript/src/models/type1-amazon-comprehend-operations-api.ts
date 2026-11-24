import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document type. */
export const Type1AmazonComprehendOperationsApi = {
  NativePdf: "NATIVE_PDF",
  ScannedPdf: "SCANNED_PDF",
  MsWord: "MS_WORD",
  Image: "IMAGE",
  PlainText: "PLAIN_TEXT",
  TextractDetectDocumentTextJson: "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON",
  TextractAnalyzeDocumentJson: "TEXTRACT_ANALYZE_DOCUMENT_JSON",
} as const;
export type Type1AmazonComprehendOperationsApi =
  | (typeof Type1AmazonComprehendOperationsApi)[keyof typeof Type1AmazonComprehendOperationsApi]
  | (string & {});

export const type1AmazonComprehendOperationsApiSchema: EnumSchema<Type1AmazonComprehendOperationsApi> =
  s.enumOf<Type1AmazonComprehendOperationsApi>(Type1AmazonComprehendOperationsApi);

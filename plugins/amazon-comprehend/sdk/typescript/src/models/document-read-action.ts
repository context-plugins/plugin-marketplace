import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text
 * from PDF files and image files. Enter one of the following values: TEXTRACT_DETECT_DOCUMENT_TEXT
 * - The Amazon Comprehend service uses the DetectDocumentText API operation.
 * TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the AnalyzeDocument API operation.
 */
export const DocumentReadAction = {
  TextractDetectDocumentText: "TEXTRACT_DETECT_DOCUMENT_TEXT",
  TextractAnalyzeDocument: "TEXTRACT_ANALYZE_DOCUMENT",
} as const;
export type DocumentReadAction = (typeof DocumentReadAction)[keyof typeof DocumentReadAction] | (string & {});

export const documentReadActionSchema: EnumSchema<DocumentReadAction> =
  s.enumOf<DocumentReadAction>(DocumentReadAction);

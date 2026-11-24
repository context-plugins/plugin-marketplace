import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines the text extraction actions for PDF files. Enter one of the following values:
 * SERVICE_DEFAULT - use the Amazon Comprehend service defaults for PDF files.
 * FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the Textract API specified by
 * DocumentReadAction for all PDF files, including digital PDF files.
 */
export const DocumentReadMode = {
  ServiceDefault: "SERVICE_DEFAULT",
  ForceDocumentReadAction: "FORCE_DOCUMENT_READ_ACTION",
} as const;
export type DocumentReadMode = (typeof DocumentReadMode)[keyof typeof DocumentReadMode] | (string & {});

export const documentReadModeSchema: EnumSchema<DocumentReadMode> =
  s.enumOf<DocumentReadMode>(DocumentReadMode);

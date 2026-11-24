import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't
 * specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents
 * any unicode text that is encoded in UTF-8. SEMI_STRUCTURED_DOCUMENT A document type with
 * positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs are
 * supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.
 */
export const DocumentType = {
  PlainTextDocument: "PLAIN_TEXT_DOCUMENT",
  SemiStructuredDocument: "SEMI_STRUCTURED_DOCUMENT",
} as const;
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType] | (string & {});

export const documentTypeSchema: EnumSchema<DocumentType> = s.enumOf<DocumentType>(DocumentType);

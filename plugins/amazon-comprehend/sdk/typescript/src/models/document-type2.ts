import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of input documents for training the model. Provide plain-text documents to create a
 * plain-text model, and provide semi-structured documents to create a native document model.
 */
export const DocumentType2 = {
  PlainTextDocument: "PLAIN_TEXT_DOCUMENT",
  SemiStructuredDocument: "SEMI_STRUCTURED_DOCUMENT",
} as const;
export type DocumentType2 = (typeof DocumentType2)[keyof typeof DocumentType2] | (string & {});

export const documentType2Schema: EnumSchema<DocumentType2> = s.enumOf<DocumentType2>(DocumentType2);

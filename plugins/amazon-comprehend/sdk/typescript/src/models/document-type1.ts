import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of augmented manifest. If you don't specify, the default is PlainTextDocument.
 * PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8.
 */
export const DocumentType1 = {
  PlainTextDocument: "PLAIN_TEXT_DOCUMENT",
  SemiStructuredDocument: "SEMI_STRUCTURED_DOCUMENT",
} as const;
export type DocumentType1 = (typeof DocumentType1)[keyof typeof DocumentType1] | (string & {});

export const documentType1Schema: EnumSchema<DocumentType1> = s.enumOf<DocumentType1>(DocumentType1);

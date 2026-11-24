import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The document's translation output if a glossary is provided in the request. This can be the same
 * as [TranslateDocumentResponse.document_translation] if no glossary terms apply.
 */
export type DocumentTranslation3 = {
  /**
   * The array of translated documents. It is expected to be size 1 for now. We may produce multiple
   * translated documents in the future for other type of file formats.
   */
  byteStreamOutputs?: string[];
  /**
   * The detected language for the input document. If the user did not provide the source language
   * for the input document, this field will have the language code automatically detected. If the
   * source language was passed, auto-detection of the language does not occur and this field is
   * empty.
   */
  detectedLanguageCode?: string;
  /** The translated document's mime type. */
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentTranslation3Schema: Schema<DocumentTranslation3> = s.object<DocumentTranslation3>(
  {
    byteStreamOutputs: s.optional(s.array(s.string())),
    detectedLanguageCode: s.optional(s.string()),
    mimeType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

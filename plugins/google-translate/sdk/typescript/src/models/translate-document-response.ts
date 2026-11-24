import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentTranslation1Schema, type DocumentTranslation1 } from "./document-translation1.js";
import { documentTranslation3Schema, type DocumentTranslation3 } from "./document-translation3.js";
import {
  translateTextGlossaryConfig3Schema,
  type TranslateTextGlossaryConfig3,
} from "./translate-text-glossary-config3.js";

/** A translated document response message. */
export type TranslateDocumentResponse = {
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig3;
  /**
   * Only present when 'model' is present in the request. 'model' is normalized to have a project
   * number. For example: If the 'model' field in TranslateDocumentRequest is:
   * `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be
   * normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.
   */
  model?: string;
  /**
   * The document's translation output if a glossary is provided in the request. This can be the
   * same as [TranslateDocumentResponse.document_translation] if no glossary terms apply.
   */
  glossaryDocumentTranslation?: DocumentTranslation3;
  /** Translated document. */
  documentTranslation?: DocumentTranslation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translateDocumentResponseSchema: Schema<TranslateDocumentResponse> =
  s.object<TranslateDocumentResponse>(
    {
      glossaryConfig: s.optional(s.lazy(() => translateTextGlossaryConfig3Schema)),
      model: s.optional(s.string()),
      glossaryDocumentTranslation: s.optional(s.lazy(() => documentTranslation3Schema)),
      documentTranslation: s.optional(s.lazy(() => documentTranslation1Schema)),
    },
    { additionalProperties: s.json() },
  );

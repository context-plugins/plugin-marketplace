import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lists all custom vocabularies that have the status specified in your request. Vocabularies are
 * ordered by creation date, with the newest vocabulary first.
 */
export const StatusAmazonTranscribeServiceVocabulariesApi = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type StatusAmazonTranscribeServiceVocabulariesApi =
  | (typeof StatusAmazonTranscribeServiceVocabulariesApi)[keyof typeof StatusAmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const statusAmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<StatusAmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<StatusAmazonTranscribeServiceVocabulariesApi>(StatusAmazonTranscribeServiceVocabulariesApi);

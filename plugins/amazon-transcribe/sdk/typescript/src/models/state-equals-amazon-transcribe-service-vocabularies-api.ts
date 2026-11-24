import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only custom vocabularies with the specified state. Vocabularies are ordered by creation
 * date, with the newest vocabulary first. If you do not include StateEquals, all custom medical
 * vocabularies are returned.
 */
export const StateEqualsAmazonTranscribeServiceVocabulariesApi = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type StateEqualsAmazonTranscribeServiceVocabulariesApi =
  | (typeof StateEqualsAmazonTranscribeServiceVocabulariesApi)[keyof typeof StateEqualsAmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const stateEqualsAmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<StateEqualsAmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<StateEqualsAmazonTranscribeServiceVocabulariesApi>(
    StateEqualsAmazonTranscribeServiceVocabulariesApi,
  );

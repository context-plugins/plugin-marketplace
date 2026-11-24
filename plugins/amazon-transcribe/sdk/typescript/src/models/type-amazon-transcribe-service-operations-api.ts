import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION. */
export const TypeAmazonTranscribeServiceOperationsApi = {
  Pronunciation: "pronunciation",
  Punctuation: "punctuation",
} as const;
export type TypeAmazonTranscribeServiceOperationsApi =
  | (typeof TypeAmazonTranscribeServiceOperationsApi)[keyof typeof TypeAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const typeAmazonTranscribeServiceOperationsApiSchema: EnumSchema<TypeAmazonTranscribeServiceOperationsApi> =
  s.enumOf<TypeAmazonTranscribeServiceOperationsApi>(TypeAmazonTranscribeServiceOperationsApi);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeVocabularyFilterMethod = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type XAmznTranscribeVocabularyFilterMethod =
  | (typeof XAmznTranscribeVocabularyFilterMethod)[keyof typeof XAmznTranscribeVocabularyFilterMethod]
  | (string & {});

export const xAmznTranscribeVocabularyFilterMethodSchema: EnumSchema<XAmznTranscribeVocabularyFilterMethod> =
  s.enumOf<XAmznTranscribeVocabularyFilterMethod>(XAmznTranscribeVocabularyFilterMethod);

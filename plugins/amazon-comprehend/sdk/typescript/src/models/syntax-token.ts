import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partOfSpeechTagSchema, type PartOfSpeechTag } from "./part-of-speech-tag.js";

export type SyntaxToken = {
  /** A unique identifier for a token. */
  tokenId?: number;
  /** The word that was recognized in the source text. */
  text?: string;
  /**
   * The zero-based offset from the beginning of the source text to the first character in the word.
   */
  beginOffset?: number;
  /**
   * The zero-based offset from the beginning of the source text to the last character in the word.
   */
  endOffset?: number;
  partOfSpeech?: PartOfSpeechTag;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syntaxTokenSchema: Schema<SyntaxToken> = s.object<SyntaxToken>(
  {
    tokenId: s.optional(s.int()),
    text: s.optional(s.string()),
    beginOffset: s.optional(s.int()),
    endOffset: s.optional(s.int()),
    partOfSpeech: s.optional(s.lazy(() => partOfSpeechTagSchema)),
    _keysMap: {
      tokenId: "TokenId",
      text: "Text",
      beginOffset: "BeginOffset",
      endOffset: "EndOffset",
      partOfSpeech: "PartOfSpeech",
    },
  },
  { additionalProperties: s.json() },
);

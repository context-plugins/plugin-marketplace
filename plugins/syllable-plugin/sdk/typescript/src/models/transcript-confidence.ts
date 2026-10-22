import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modelSchema, type Model } from "./unions/model.js";
import { utteranceSource1Schema, type UtteranceSource1 } from "./unions/utterance-source1.js";
import { utteranceSchema, type Utterance } from "./unions/utterance.js";
import { wordsTruncatedSchema, type WordsTruncated } from "./unions/words-truncated.js";
import { wordsSchema, type Words } from "./unions/words.js";

/**
 * The STT provider's confidence for one user utterance.
 *
 * Provenance travels with the score because confidence is NOT comparable across providers: Deepgram
 * publishes a genuine acoustic confidence, while Google's proto disclaims the field and Chirp 2's
 * documentation states the value "isn't truly a confidence score". A bare float read without
 * knowing which backend produced it cannot be interpreted.
 *
 * `utterance_source` distinguishes a number the provider reported for exactly this text from one we
 * computed -- the weakest word, or the weakest across a merged turn. Absent entirely when the
 * backend reports nothing, so the transcript flow is unaffected. See ZOO-8595.
 */
export type TranscriptConfidence = {
  provider: string;
  model?: Model;
  utterance?: Utterance;
  utteranceSource?: UtteranceSource1;
  words?: Words;
  wordsTruncated?: WordsTruncated;
};

export const transcriptConfidenceSchema: Schema<TranscriptConfidence> = s.object<TranscriptConfidence>({
  provider: s.string(),
  model: s.optional(s.lazy(() => modelSchema)),
  utterance: s.optional(s.lazy(() => utteranceSchema)),
  utteranceSource: s.optional(s.lazy(() => utteranceSource1Schema)),
  words: s.optional(s.lazy(() => wordsSchema)),
  wordsTruncated: s.optional(s.lazy(() => wordsTruncatedSchema)),
  _keysMap: {
    utteranceSource: "utterance_source",
    wordsTruncated: "words_truncated",
  },
});

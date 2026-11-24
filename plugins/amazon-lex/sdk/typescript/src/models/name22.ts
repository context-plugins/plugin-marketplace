import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric that you requested. Count – The number of utterances. Missed – The number of
 * utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon
 * Lex managed to detect. UtteranceTimestamp – The date and time of the utterance.
 */
export const Name22 = {
  Count: "Count",
  Missed: "Missed",
  Detected: "Detected",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
export type Name22 = (typeof Name22)[keyof typeof Name22] | (string & {});

export const name22Schema: EnumSchema<Name22> = s.enumOf<Name22>(Name22);

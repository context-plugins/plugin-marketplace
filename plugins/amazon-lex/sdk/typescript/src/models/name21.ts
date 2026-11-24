import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The metric for which you want to get utterance summary statistics. Count – The number of
 * utterances. Missed – The number of utterances that Amazon Lex failed to recognize. Detected – The
 * number of utterances that Amazon Lex managed to detect. UtteranceTimestamp – The date and time of
 * the utterance.
 */
export const Name21 = {
  Count: "Count",
  Missed: "Missed",
  Detected: "Detected",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
export type Name21 = (typeof Name21)[keyof typeof Name21] | (string & {});

export const name21Schema: EnumSchema<Name21> = s.enumOf<Name21>(Name21);

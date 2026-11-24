import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enables using the slot values as a custom vocabulary for recognizing user utterances. */
export const AudioRecognitionStrategy = {
  UseSlotValuesAsCustomVocabulary: "UseSlotValuesAsCustomVocabulary",
} as const;
export type AudioRecognitionStrategy =
  | (typeof AudioRecognitionStrategy)[keyof typeof AudioRecognitionStrategy]
  | (string & {});

export const audioRecognitionStrategySchema: EnumSchema<AudioRecognitionStrategy> =
  s.enumOf<AudioRecognitionStrategy>(AudioRecognitionStrategy);

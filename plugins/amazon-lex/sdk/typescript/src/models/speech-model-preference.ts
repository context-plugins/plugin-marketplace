import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The speech-to-text model to use. */
export const SpeechModelPreference = {
  Standard: "Standard",
  Neural: "Neural",
  Deepgram: "Deepgram",
  Advanced: "Advanced",
} as const;
export type SpeechModelPreference =
  | (typeof SpeechModelPreference)[keyof typeof SpeechModelPreference]
  | (string & {});

export const speechModelPreferenceSchema: EnumSchema<SpeechModelPreference> =
  s.enumOf<SpeechModelPreference>(SpeechModelPreference);

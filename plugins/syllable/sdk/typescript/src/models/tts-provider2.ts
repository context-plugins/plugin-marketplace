import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** TTS provider of the voice to use for the language */
export const TtsProvider2 = {
  OpenAi: "OpenAI",
  ElevenLabs: "ElevenLabs",
  Google: "Google",
  Cartesia: "Cartesia",
} as const;
export type TtsProvider2 = (typeof TtsProvider2)[keyof typeof TtsProvider2] | (string & {});

export const ttsProvider2Schema: EnumSchema<TtsProvider2> = s.enumOf<TtsProvider2>(TtsProvider2);

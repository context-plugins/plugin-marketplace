import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The provider for the voice */
export const TtsProvider1 = {
  OpenAi: "OpenAI",
  ElevenLabs: "ElevenLabs",
  Google: "Google",
  Cartesia: "Cartesia",
} as const;
export type TtsProvider1 = (typeof TtsProvider1)[keyof typeof TtsProvider1] | (string & {});

export const ttsProvider1Schema: EnumSchema<TtsProvider1> = s.enumOf<TtsProvider1>(TtsProvider1);

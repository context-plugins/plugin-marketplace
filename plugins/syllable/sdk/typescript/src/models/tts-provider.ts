import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** TTS provider for an agent voice. */
export const TtsProvider = {
  OpenAi: "OpenAI",
  ElevenLabs: "ElevenLabs",
  Google: "Google",
  Cartesia: "Cartesia",
} as const;
export type TtsProvider = (typeof TtsProvider)[keyof typeof TtsProvider] | (string & {});

export const ttsProviderSchema: EnumSchema<TtsProvider> = s.enumOf<TtsProvider>(TtsProvider);

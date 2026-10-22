import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Model for an agent voice. */
export const AgentVoiceModel = {
  Chirp3Hd: "Chirp 3 HD",
  ElevenFlashV25: "eleven_flash_v2_5",
  Neural2: "Neural2",
  Standard: "Standard",
  Studio: "Studio",
  WaveNet: "WaveNet",
  Tts1: "tts-1",
  Gpt4OMiniTts: "gpt-4o-mini-tts",
  Sonic35: "sonic-3.5",
} as const;
export type AgentVoiceModel = (typeof AgentVoiceModel)[keyof typeof AgentVoiceModel] | (string & {});

export const agentVoiceModelSchema: EnumSchema<AgentVoiceModel> = s.enumOf<AgentVoiceModel>(AgentVoiceModel);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Speech-to-text providers supported by agents. */
export const AgentSttProvider = {
  GoogleSttV2Chirp2: "Google STT V2 (Chirp 2)",
  DeepgramNova3: "Deepgram Nova 3",
  GoogleSttV2: "Google STT V2",
  GoogleSttV1: "Google STT V1",
  DeepgramNova2: "Deepgram Nova 2",
} as const;
export type AgentSttProvider = (typeof AgentSttProvider)[keyof typeof AgentSttProvider] | (string & {});

export const agentSttProviderSchema: EnumSchema<AgentSttProvider> =
  s.enumOf<AgentSttProvider>(AgentSttProvider);

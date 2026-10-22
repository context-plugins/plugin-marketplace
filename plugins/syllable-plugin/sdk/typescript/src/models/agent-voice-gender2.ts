import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The gender of the voice */
export const AgentVoiceGender2 = {
  Female: "female",
  Male: "male",
} as const;
export type AgentVoiceGender2 = (typeof AgentVoiceGender2)[keyof typeof AgentVoiceGender2] | (string & {});

export const agentVoiceGender2Schema: EnumSchema<AgentVoiceGender2> =
  s.enumOf<AgentVoiceGender2>(AgentVoiceGender2);

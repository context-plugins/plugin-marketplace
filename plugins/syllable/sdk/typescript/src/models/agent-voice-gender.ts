import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Gender for an agent voice. */
export const AgentVoiceGender = {
  Female: "female",
  Male: "male",
} as const;
export type AgentVoiceGender = (typeof AgentVoiceGender)[keyof typeof AgentVoiceGender] | (string & {});

export const agentVoiceGenderSchema: EnumSchema<AgentVoiceGender> =
  s.enumOf<AgentVoiceGender>(AgentVoiceGender);

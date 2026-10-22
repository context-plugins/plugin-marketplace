import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Wait sounds supported by agents. */
export const AgentWaitSound = {
  NoSound: "No Sound",
  Keyboard1: "Keyboard 1",
  Keyboard2: "Keyboard 2",
  CallCenter: "Call Center",
} as const;
export type AgentWaitSound = (typeof AgentWaitSound)[keyof typeof AgentWaitSound] | (string & {});

export const agentWaitSoundSchema: EnumSchema<AgentWaitSound> = s.enumOf<AgentWaitSound>(AgentWaitSound);

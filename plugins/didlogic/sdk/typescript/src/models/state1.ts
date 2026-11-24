import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How far the call got. `agent_ringing` may be skipped — see the description above. */
export const State1 = {
  Accepted: "accepted",
  AgentRinging: "agent_ringing",
  AgentAnswered: "agent_answered",
  CustomerRinging: "customer_ringing",
  Bridged: "bridged",
  Completed: "completed",
  Failed: "failed",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How far the call has got. `agent_ringing` may be skipped — see the description above. */
export const State = {
  Accepted: "accepted",
  AgentRinging: "agent_ringing",
  AgentAnswered: "agent_answered",
  CustomerRinging: "customer_ringing",
  Bridged: "bridged",
  Completed: "completed",
  Failed: "failed",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);

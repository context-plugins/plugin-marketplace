import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bridgePhrasesAgentInfoSchema, type BridgePhrasesAgentInfo } from "../bridge-phrases-agent-info.js";

/** IDs and names of the agents linked to this bridge phrases config. */
export type AgentsInfo3 = BridgePhrasesAgentInfo[];

export const agentsInfo3Schema: Schema<AgentsInfo3> = s.of<AgentsInfo3>(
  s.union([s.array(s.lazy(() => bridgePhrasesAgentInfoSchema))]),
);

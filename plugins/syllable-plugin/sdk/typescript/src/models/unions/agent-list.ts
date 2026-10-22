import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of agents */
export type AgentList = number[] | string[];

export const agentListSchema: Schema<AgentList> = s.of<AgentList>(
  s.union([s.array(s.int()), s.array(s.string())]),
);

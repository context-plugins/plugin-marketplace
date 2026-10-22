import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the run. One of 'error', 'success'. */
export const AgentExecutionStatus = {
  Error: "error",
  Success: "success",
} as const;
export type AgentExecutionStatus =
  | (typeof AgentExecutionStatus)[keyof typeof AgentExecutionStatus]
  | (string & {});

export const agentExecutionStatusSchema: EnumSchema<AgentExecutionStatus> =
  s.enumOf<AgentExecutionStatus>(AgentExecutionStatus);

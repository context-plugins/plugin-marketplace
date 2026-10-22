import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the agent run. */
export const PlatformAgentExecutionStatus = {
  Error: "error",
  Success: "success",
} as const;
export type PlatformAgentExecutionStatus =
  | (typeof PlatformAgentExecutionStatus)[keyof typeof PlatformAgentExecutionStatus]
  | (string & {});

export const platformAgentExecutionStatusSchema: EnumSchema<PlatformAgentExecutionStatus> =
  s.enumOf<PlatformAgentExecutionStatus>(PlatformAgentExecutionStatus);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** State of the persisted workflow execution. REQUIRES_INPUT is nonterminal. */
export const PlatformAgentRunState = {
  Queued: "QUEUED",
  Running: "RUNNING",
  RequiresInput: "REQUIRES_INPUT",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelling: "CANCELLING",
  Cancelled: "CANCELLED",
  Expired: "EXPIRED",
} as const;
export type PlatformAgentRunState =
  | (typeof PlatformAgentRunState)[keyof typeof PlatformAgentRunState]
  | (string & {});

export const platformAgentRunStateSchema: EnumSchema<PlatformAgentRunState> =
  s.enumOf<PlatformAgentRunState>(PlatformAgentRunState);

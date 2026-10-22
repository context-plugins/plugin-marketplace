import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current lifecycle state of the run. */
export const PlatformAgentRunState1 = {
  Queued: "QUEUED",
  Running: "RUNNING",
  RequiresInput: "REQUIRES_INPUT",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelling: "CANCELLING",
  Cancelled: "CANCELLED",
  Expired: "EXPIRED",
} as const;
export type PlatformAgentRunState1 =
  | (typeof PlatformAgentRunState1)[keyof typeof PlatformAgentRunState1]
  | (string & {});

export const platformAgentRunState1Schema: EnumSchema<PlatformAgentRunState1> =
  s.enumOf<PlatformAgentRunState1>(PlatformAgentRunState1);

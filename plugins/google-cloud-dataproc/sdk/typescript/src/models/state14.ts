import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the migration execution. */
export const State14 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Starting: "STARTING",
  Running: "RUNNING",
  Cancelling: "CANCELLING",
  AwaitingUserAction: "AWAITING_USER_ACTION",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
  Deleting: "DELETING",
  RolledBack: "ROLLED_BACK",
} as const;
export type State14 = (typeof State14)[keyof typeof State14] | (string & {});

export const state14Schema: EnumSchema<State14> = s.enumOf<State14>(State14);

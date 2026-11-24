import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the deployment. */
export const State1 = {
  Pending: "PENDING",
  InProgress: "IN_PROGRESS",
  Successful: "SUCCESSFUL",
  Cancelled: "CANCELLED",
  Failed: "FAILED",
  RolledBack: "ROLLED_BACK",
  Unknown: "UNKNOWN",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);

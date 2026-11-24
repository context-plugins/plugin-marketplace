import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the resiliency group. */
export const State1 = {
  Pending: "pending",
  Available: "available",
  Deleting: "deleting",
  Deleted: "deleted",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);

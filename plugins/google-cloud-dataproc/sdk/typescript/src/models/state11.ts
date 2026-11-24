import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the metastore service. */
export const State11 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Suspending: "SUSPENDING",
  Suspended: "SUSPENDED",
  Updating: "UPDATING",
  Deleting: "DELETING",
  Error: "ERROR",
  Autoscaling: "AUTOSCALING",
  Migrating: "MIGRATING",
  Proxy: "PROXY",
} as const;
export type State11 = (typeof State11)[keyof typeof State11] | (string & {});

export const state11Schema: EnumSchema<State11> = s.enumOf<State11>(State11);

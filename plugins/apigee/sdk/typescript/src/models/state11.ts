import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the DNS Peering. Values other than `ACTIVE` mean the resource is not ready
 * to use.
 */
export const State11 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State11 = (typeof State11)[keyof typeof State11] | (string & {});

export const state11Schema: EnumSchema<State11> = s.enumOf<State11>(State11);

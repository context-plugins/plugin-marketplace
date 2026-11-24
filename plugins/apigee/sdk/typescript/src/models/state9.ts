import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the environment. Values other than ACTIVE means the resource is not ready
 * to use.
 */
export const State9 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State9 = (typeof State9)[keyof typeof State9] | (string & {});

export const state9Schema: EnumSchema<State9> = s.enumOf<State9>(State9);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is
 * not ready to use.
 */
export const State8 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State8 = (typeof State8)[keyof typeof State8] | (string & {});

export const state8Schema: EnumSchema<State8> = s.enumOf<State8>(State8);

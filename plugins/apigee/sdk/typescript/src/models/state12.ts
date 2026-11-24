import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the APIM service extension. Values other than `ACTIVE` mean the resource is
 * not ready to use.
 */
export const State12 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State12 = (typeof State12)[keyof typeof State12] | (string & {});

export const state12Schema: EnumSchema<State12> = s.enumOf<State12>(State12);

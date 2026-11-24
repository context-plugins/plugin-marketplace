import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to
 * use.
 */
export const State4 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State4 = (typeof State4)[keyof typeof State4] | (string & {});

export const state4Schema: EnumSchema<State4> = s.enumOf<State4>(State4);

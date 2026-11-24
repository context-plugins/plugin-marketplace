import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current state of the deployment. **Note**: This field is displayed only when viewing deployment
 * status.
 */
export const State1 = {
  RuntimeStateUnspecified: "RUNTIME_STATE_UNSPECIFIED",
  Ready: "READY",
  Progressing: "PROGRESSING",
  Error: "ERROR",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);

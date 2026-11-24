import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of SSL inspection for this policy. */
export const State = {
  Enabled: "enabled",
  Disabled: "disabled",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);

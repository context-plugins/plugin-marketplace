import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const State = {
  Enabled: "Enabled",
  Disabled: "Disabled",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);

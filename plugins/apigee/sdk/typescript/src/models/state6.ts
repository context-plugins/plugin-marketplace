import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its
 * expiration time will not be enforced.
 */
export const State6 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type State6 = (typeof State6)[keyof typeof State6] | (string & {});

export const state6Schema: EnumSchema<State6> = s.enumOf<State6>(State6);

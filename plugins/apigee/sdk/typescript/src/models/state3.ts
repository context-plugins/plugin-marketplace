import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the Analytics add-on. */
export const State3 = {
  AddonStateUnspecified: "ADDON_STATE_UNSPECIFIED",
  Enabling: "ENABLING",
  Enabled: "ENABLED",
  Disabling: "DISABLING",
  Disabled: "DISABLED",
} as const;
export type State3 = (typeof State3)[keyof typeof State3] | (string & {});

export const state3Schema: EnumSchema<State3> = s.enumOf<State3>(State3);

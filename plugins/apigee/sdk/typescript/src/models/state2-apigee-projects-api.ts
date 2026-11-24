import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the addon. */
export const State2ApigeeProjectsApi = {
  AddonStateUnspecified: "ADDON_STATE_UNSPECIFIED",
  Active: "ACTIVE",
  Updating: "UPDATING",
  Error: "ERROR",
  Inactive: "INACTIVE",
} as const;
export type State2ApigeeProjectsApi =
  | (typeof State2ApigeeProjectsApi)[keyof typeof State2ApigeeProjectsApi]
  | (string & {});

export const state2ApigeeProjectsApiSchema: EnumSchema<State2ApigeeProjectsApi> =
  s.enumOf<State2ApigeeProjectsApi>(State2ApigeeProjectsApi);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the plugin action in the plugin instance. */
export const State6ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Enabled: "ENABLED",
  Disabled: "DISABLED",
  Enabling: "ENABLING",
  Disabling: "DISABLING",
  Error: "ERROR",
} as const;
export type State6ApigeeProjectsApi =
  | (typeof State6ApigeeProjectsApi)[keyof typeof State6ApigeeProjectsApi]
  | (string & {});

export const state6ApigeeProjectsApiSchema: EnumSchema<State6ApigeeProjectsApi> =
  s.enumOf<State6ApigeeProjectsApi>(State6ApigeeProjectsApi);

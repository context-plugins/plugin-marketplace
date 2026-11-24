import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. Represents the state of the plugin. Note this field will not be set for plugins
 * developed via plugin framework as the state will be managed at plugin instance level.
 */
export const State3ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type State3ApigeeProjectsApi =
  | (typeof State3ApigeeProjectsApi)[keyof typeof State3ApigeeProjectsApi]
  | (string & {});

export const state3ApigeeProjectsApiSchema: EnumSchema<State3ApigeeProjectsApi> =
  s.enumOf<State3ApigeeProjectsApi>(State3ApigeeProjectsApi);

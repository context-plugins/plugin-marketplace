import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning).
 */
export const State7ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  ApplyingConfig: "APPLYING_CONFIG",
  Error: "ERROR",
  Failed: "FAILED",
  Deleting: "DELETING",
} as const;
export type State7ApigeeProjectsApi =
  | (typeof State7ApigeeProjectsApi)[keyof typeof State7ApigeeProjectsApi]
  | (string & {});

export const state7ApigeeProjectsApiSchema: EnumSchema<State7ApigeeProjectsApi> =
  s.enumOf<State7ApigeeProjectsApi>(State7ApigeeProjectsApi);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current lifecycle state. */
export const State1ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  SpecApiRegistered: "SPEC_API_REGISTERED",
  SpecGenerated: "SPEC_GENERATED",
  SpecAssociated: "SPEC_ASSOCIATED",
} as const;
export type State1ApigeeProjectsApi =
  | (typeof State1ApigeeProjectsApi)[keyof typeof State1ApigeeProjectsApi]
  | (string & {});

export const state1ApigeeProjectsApiSchema: EnumSchema<State1ApigeeProjectsApi> =
  s.enumOf<State1ApigeeProjectsApi>(State1ApigeeProjectsApi);

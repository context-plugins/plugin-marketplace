import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. State of the dependency. */
export const State5ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Proposed: "PROPOSED",
  Validated: "VALIDATED",
} as const;
export type State5ApigeeProjectsApi =
  | (typeof State5ApigeeProjectsApi)[keyof typeof State5ApigeeProjectsApi]
  | (string & {});

export const state5ApigeeProjectsApiSchema: EnumSchema<State5ApigeeProjectsApi> =
  s.enumOf<State5ApigeeProjectsApi>(State5ApigeeProjectsApi);

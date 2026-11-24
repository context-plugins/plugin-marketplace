import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the ApiHub instance. */
export const State4ApigeeProjectsApi = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Inactive: "INACTIVE",
  Creating: "CREATING",
  Active: "ACTIVE",
  Updating: "UPDATING",
  Deleting: "DELETING",
  Failed: "FAILED",
} as const;
export type State4ApigeeProjectsApi =
  | (typeof State4ApigeeProjectsApi)[keyof typeof State4ApigeeProjectsApi]
  | (string & {});

export const state4ApigeeProjectsApiSchema: EnumSchema<State4ApigeeProjectsApi> =
  s.enumOf<State4ApigeeProjectsApi>(State4ApigeeProjectsApi);

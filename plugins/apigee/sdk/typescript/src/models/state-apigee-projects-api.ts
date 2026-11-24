import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Lint state represents success or failure for linting. */
export const StateApigeeProjectsApi = {
  LintStateUnspecified: "LINT_STATE_UNSPECIFIED",
  LintStateSuccess: "LINT_STATE_SUCCESS",
  LintStateError: "LINT_STATE_ERROR",
} as const;
export type StateApigeeProjectsApi =
  | (typeof StateApigeeProjectsApi)[keyof typeof StateApigeeProjectsApi]
  | (string & {});

export const stateApigeeProjectsApiSchema: EnumSchema<StateApigeeProjectsApi> =
  s.enumOf<StateApigeeProjectsApi>(StateApigeeProjectsApi);

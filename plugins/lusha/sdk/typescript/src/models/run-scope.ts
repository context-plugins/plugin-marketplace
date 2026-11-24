import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls which rows a column operation applies to. `all` re-runs every row, including
 * already-processed ones. `missing` only runs rows that don't have a value for this column yet.
 * `specific` requires `entityIds`.
 */
export const RunScope = {
  All: "all",
  Missing: "missing",
  Specific: "specific",
} as const;
export type RunScope = (typeof RunScope)[keyof typeof RunScope] | (string & {});

export const runScopeSchema: EnumSchema<RunScope> = s.enumOf<RunScope>(RunScope);

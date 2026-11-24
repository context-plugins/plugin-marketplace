import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1DoiTBudgetSuggestionsApi = {
  Dismissed: "dismissed",
} as const;
export type Status1DoiTBudgetSuggestionsApi =
  | (typeof Status1DoiTBudgetSuggestionsApi)[keyof typeof Status1DoiTBudgetSuggestionsApi]
  | (string & {});

export const status1DoiTBudgetSuggestionsApiSchema: EnumSchema<Status1DoiTBudgetSuggestionsApi> =
  s.enumOf<Status1DoiTBudgetSuggestionsApi>(Status1DoiTBudgetSuggestionsApi);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonDoiTBudgetSuggestionsApi = {
  NotRelevant: "not_relevant",
  WrongAmount: "wrong_amount",
  CoveredElsewhere: "covered_elsewhere",
  Other: "other",
} as const;
export type ReasonDoiTBudgetSuggestionsApi =
  | (typeof ReasonDoiTBudgetSuggestionsApi)[keyof typeof ReasonDoiTBudgetSuggestionsApi]
  | (string & {});

export const reasonDoiTBudgetSuggestionsApiSchema: EnumSchema<ReasonDoiTBudgetSuggestionsApi> =
  s.enumOf<ReasonDoiTBudgetSuggestionsApi>(ReasonDoiTBudgetSuggestionsApi);

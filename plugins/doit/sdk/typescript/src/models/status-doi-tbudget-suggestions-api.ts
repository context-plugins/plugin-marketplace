import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDoiTBudgetSuggestionsApi = {
  Pending: "pending",
  Accepted: "accepted",
  Dismissed: "dismissed",
  SkippedDraft: "skippedDraft",
} as const;
export type StatusDoiTBudgetSuggestionsApi =
  | (typeof StatusDoiTBudgetSuggestionsApi)[keyof typeof StatusDoiTBudgetSuggestionsApi]
  | (string & {});

export const statusDoiTBudgetSuggestionsApiSchema: EnumSchema<StatusDoiTBudgetSuggestionsApi> =
  s.enumOf<StatusDoiTBudgetSuggestionsApi>(StatusDoiTBudgetSuggestionsApi);

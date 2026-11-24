import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { changeHistorySchema, type ChangeHistory } from "./change-history.js";

/** Average monthly amount for given class for defined period */
export type LoanInterests = {
  /** Average amount monthly */
  avgMonthly: string;
  changeHistory: ChangeHistory[];
  /** Summary period "monthly" */
  summary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loanInterestsSchema: Schema<LoanInterests> = s.object<LoanInterests>(
  {
    avgMonthly: s.string(),
    changeHistory: s.array(s.lazy(() => changeHistorySchema)),
    summary: s.string(),
  },
  { additionalProperties: s.json() },
);

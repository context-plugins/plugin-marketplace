import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Why report is null: nonpersist (team keeps no data), disabled (AI detector history off),
 * text_not_retained (history keeps no text), unconfirmed_email, quota (history full), unscorable,
 * error.
 */
export const ReportSkipReason = {
  Nonpersist: "nonpersist",
  Disabled: "disabled",
  TextNotRetained: "text_not_retained",
  UnconfirmedEmail: "unconfirmed_email",
  Quota: "quota",
  Unscorable: "unscorable",
  Error: "error",
} as const;
export type ReportSkipReason = (typeof ReportSkipReason)[keyof typeof ReportSkipReason] | (string & {});

export const reportSkipReasonSchema: EnumSchema<ReportSkipReason> =
  s.enumOf<ReportSkipReason>(ReportSkipReason);

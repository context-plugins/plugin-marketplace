import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateMonthSchema, type DateMonth } from "./unions/date-month.js";
import { dateYearSchema, type DateYear } from "./unions/date-year.js";
import { expireDateMonthSchema, type ExpireDateMonth } from "./unions/expire-date-month.js";
import { expireDateYearSchema, type ExpireDateYear } from "./unions/expire-date-year.js";

export type LinkedinCertification = {
  companyId?: number;
  companyName?: string;
  credentialId?: string;
  dateMonth?: DateMonth;
  dateYear?: DateYear;
  expireDateMonth?: ExpireDateMonth;
  expireDateYear?: ExpireDateYear;
  linkedinCompanyId?: number | null;
  summary?: string | null;
  title?: string;
  verifyUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinCertificationSchema: Schema<LinkedinCertification> = s.object<LinkedinCertification>(
  {
    companyId: s.optional(s.int()),
    companyName: s.optional(s.string()),
    credentialId: s.optional(s.string()),
    dateMonth: s.optional(s.lazy(() => dateMonthSchema)),
    dateYear: s.optional(s.lazy(() => dateYearSchema)),
    expireDateMonth: s.optional(s.lazy(() => expireDateMonthSchema)),
    expireDateYear: s.optional(s.lazy(() => expireDateYearSchema)),
    linkedinCompanyId: s.optionalNullable(s.int()),
    summary: s.optionalNullable(s.string()),
    title: s.optional(s.string()),
    verifyUrl: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

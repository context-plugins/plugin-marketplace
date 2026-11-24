import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateDaySchema, type DateDay } from "./unions/date-day.js";
import { dateMonth1Schema, type DateMonth1 } from "./unions/date-month1.js";
import { dateYear1Schema, type DateYear1 } from "./unions/date-year1.js";

export type LinkedinAward = {
  companyName?: string | null;
  dateDay?: DateDay;
  dateMonth?: DateMonth1;
  dateYear?: DateYear1;
  linkedinCompanyId?: string | null;
  summary?: string | null;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinAwardSchema: Schema<LinkedinAward> = s.object<LinkedinAward>(
  {
    companyName: s.optionalNullable(s.string()),
    dateDay: s.optional(s.lazy(() => dateDaySchema)),
    dateMonth: s.optional(s.lazy(() => dateMonth1Schema)),
    dateYear: s.optional(s.lazy(() => dateYear1Schema)),
    linkedinCompanyId: s.optionalNullable(s.string()),
    summary: s.optionalNullable(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

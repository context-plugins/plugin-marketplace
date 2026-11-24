import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldOfStudySchema, type FieldOfStudy } from "./field-of-study.js";
import { schoolSchema, type School } from "./school.js";
import { endDateMonthSchema, type EndDateMonth } from "./unions/end-date-month.js";
import { endDateYearSchema, type EndDateYear } from "./unions/end-date-year.js";
import { startDateMonthSchema, type StartDateMonth } from "./unions/start-date-month.js";
import { startDateYearSchema, type StartDateYear } from "./unions/start-date-year.js";

export type LinkedinCourse = {
  activities?: string | null;
  degree?: string | null;
  endDateMonth?: EndDateMonth;
  endDateYear?: EndDateYear;
  fieldOfStudy?: FieldOfStudy | null;
  grade?: string | null;
  school?: School | null;
  startDateMonth?: StartDateMonth;
  startDateYear?: StartDateYear;
  linkedinSchoolId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinCourseSchema: Schema<LinkedinCourse> = s.object<LinkedinCourse>(
  {
    activities: s.optionalNullable(s.string()),
    degree: s.optionalNullable(s.string()),
    endDateMonth: s.optional(s.lazy(() => endDateMonthSchema)),
    endDateYear: s.optional(s.lazy(() => endDateYearSchema)),
    fieldOfStudy: s.optionalNullable(s.lazy(() => fieldOfStudySchema)),
    grade: s.optionalNullable(s.string()),
    school: s.optionalNullable(s.lazy(() => schoolSchema)),
    startDateMonth: s.optional(s.lazy(() => startDateMonthSchema)),
    startDateYear: s.optional(s.lazy(() => startDateYearSchema)),
    linkedinSchoolId: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);

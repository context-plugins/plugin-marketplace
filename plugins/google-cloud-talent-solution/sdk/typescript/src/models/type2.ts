import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type of the event (see JobEventType). */
export const Type2 = {
  JobEventTypeUnspecified: "JOB_EVENT_TYPE_UNSPECIFIED",
  Impression: "IMPRESSION",
  View: "VIEW",
  ViewRedirect: "VIEW_REDIRECT",
  ApplicationStart: "APPLICATION_START",
  ApplicationFinish: "APPLICATION_FINISH",
  ApplicationQuickSubmission: "APPLICATION_QUICK_SUBMISSION",
  ApplicationRedirect: "APPLICATION_REDIRECT",
  ApplicationStartFromSearch: "APPLICATION_START_FROM_SEARCH",
  ApplicationRedirectFromSearch: "APPLICATION_REDIRECT_FROM_SEARCH",
  ApplicationCompanySubmit: "APPLICATION_COMPANY_SUBMIT",
  Bookmark: "BOOKMARK",
  Notification: "NOTIFICATION",
  Hired: "HIRED",
  SentCv: "SENT_CV",
  InterviewGranted: "INTERVIEW_GRANTED",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);

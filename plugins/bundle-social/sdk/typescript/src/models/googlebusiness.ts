import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { AlertType, alertTypeSchema } from "./alert-type.js";
import { callToActionTypeSchema, type CallToActionType } from "./call-to-action-type.js";
import { TopicType, topicTypeSchema } from "./topic-type.js";

export type Googlebusiness = {
  text?: string | null;
  /** IDs of images/videos uploaded to bundle.social. */
  uploadIds?: string[] | null;
  /** @default TopicType.Standard */
  topicType?: TopicType | null;
  /** Language tag like 'en' or 'en-US'. */
  languageCode?: string | null;
  callToActionType?: CallToActionType | null;
  callToActionUrl?: string | null;
  eventTitle?: string | null;
  eventStartDate?: Date | null;
  eventEndDate?: Date | null;
  offerCouponCode?: string | null;
  offerRedeemOnlineUrl?: string | null;
  offerTermsConditions?: string | null;
  /** Alert type for ALERT posts. @default AlertType.Covid19 */
  alertType?: AlertType | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googlebusinessSchema: Schema<Googlebusiness> = s.object<Googlebusiness>(
  {
    text: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    topicType: s.defaulted(s.nullable(s.lazy(() => topicTypeSchema)), TopicType.Standard),
    languageCode: s.optionalNullable(s.string()),
    callToActionType: s.optionalNullable(s.lazy(() => callToActionTypeSchema)),
    callToActionUrl: s.optionalNullable(s.string()),
    eventTitle: s.optionalNullable(s.string()),
    eventStartDate: s.optionalNullable(s.dateTime()),
    eventEndDate: s.optionalNullable(s.dateTime()),
    offerCouponCode: s.optionalNullable(s.string()),
    offerRedeemOnlineUrl: s.optionalNullable(s.string()),
    offerTermsConditions: s.optionalNullable(s.string()),
    alertType: s.defaulted(s.nullable(s.lazy(() => alertTypeSchema)), AlertType.Covid19),
  },
  { additionalProperties: s.json() },
);

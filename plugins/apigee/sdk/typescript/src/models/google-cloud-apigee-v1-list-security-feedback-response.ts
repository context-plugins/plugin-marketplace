import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityFeedbackSchema,
  type GoogleCloudApigeeV1SecurityFeedback,
} from "./google-cloud-apigee-v1-security-feedback.js";

/** Response for ListSecurityFeedback */
export type GoogleCloudApigeeV1ListSecurityFeedbackResponse = {
  /** List of SecurityFeedback reports. */
  securityFeedback?: GoogleCloudApigeeV1SecurityFeedback[];
  /**
   * A token that can be sent as `page_token` in `ListSecurityFeedbackRequest` to retrieve the next
   * page. If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityFeedbackResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityFeedbackResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityFeedbackResponse>(
    {
      securityFeedback: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityFeedbackSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

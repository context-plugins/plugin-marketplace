import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feedbackTypeSchema, type FeedbackType } from "./feedback-type.js";
import {
  googleCloudApigeeV1SecurityFeedbackFeedbackContextSchema,
  type GoogleCloudApigeeV1SecurityFeedbackFeedbackContext,
} from "./google-cloud-apigee-v1-security-feedback-feedback-context.js";
import { reasonSchema, type Reason } from "./reason.js";

/** Represents a feedback report from an Advanced API Security customer. */
export type GoogleCloudApigeeV1SecurityFeedback = {
  /** Output only. Identifier. The feedback name is intended to be a system-generated uuid. */
  name?: string;
  /** Required. One or more attribute/value pairs for constraining the feedback. */
  feedbackContexts?: GoogleCloudApigeeV1SecurityFeedbackFeedbackContext[];
  /** Output only. The time when this specific feedback id was created. */
  createTime?: string;
  /** Optional. Optional text the user can provide for additional, unstructured context. */
  comment?: string;
  /** Optional. The display name of the feedback. */
  displayName?: string;
  /** Output only. The time when this specific feedback id was updated. */
  updateTime?: string;
  /** Optional. The reason for the feedback. */
  reason?: Reason;
  /** Required. The type of feedback being submitted. */
  feedbackType?: FeedbackType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityFeedbackSchema: Schema<GoogleCloudApigeeV1SecurityFeedback> =
  s.object<GoogleCloudApigeeV1SecurityFeedback>(
    {
      name: s.optional(s.string()),
      feedbackContexts: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1SecurityFeedbackFeedbackContextSchema)),
      ),
      createTime: s.optional(s.string()),
      comment: s.optional(s.string()),
      displayName: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reasonSchema)),
      feedbackType: s.optional(s.lazy(() => feedbackTypeSchema)),
    },
    { additionalProperties: s.json() },
  );

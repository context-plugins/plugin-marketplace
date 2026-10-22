import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Why the event fired. */
export const PlatformTriggerEventReason = {
  Created: "CREATED",
  Updated: "UPDATED",
  Deleted: "DELETED",
  MeetsCondition: "MEETS_CONDITION",
  Assigned: "ASSIGNED",
  Unassigned: "UNASSIGNED",
  Labeled: "LABELED",
  Unlabeled: "UNLABELED",
  ReviewRequested: "REVIEW_REQUESTED",
  ReviewRequestRemoved: "REVIEW_REQUEST_REMOVED",
  ReadyForReview: "READY_FOR_REVIEW",
  ConvertedToDraft: "CONVERTED_TO_DRAFT",
  WebhookUpdated: "WEBHOOK_UPDATED",
  WebhookCreated: "WEBHOOK_CREATED",
} as const;
export type PlatformTriggerEventReason =
  | (typeof PlatformTriggerEventReason)[keyof typeof PlatformTriggerEventReason]
  | (string & {});

export const platformTriggerEventReasonSchema: EnumSchema<PlatformTriggerEventReason> =
  s.enumOf<PlatformTriggerEventReason>(PlatformTriggerEventReason);

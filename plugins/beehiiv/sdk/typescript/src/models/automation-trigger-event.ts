import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationTriggerEvent = {
  Api: "api",
  Downgrade: "downgrade",
  EmailSubmission: "email_submission",
  FormSubmission: "form_submission",
  Manual: "manual",
  PollSubmission: "poll_submission",
  PurchasedProduct: "purchased_product",
  ReferralAction: "referral_action",
  SegmentAction: "segment_action",
  Signup: "signup",
  Unengaged: "unengaged",
  Upgrade: "upgrade",
} as const;
export type AutomationTriggerEvent =
  | (typeof AutomationTriggerEvent)[keyof typeof AutomationTriggerEvent]
  | (string & {});

export const automationTriggerEventSchema: EnumSchema<AutomationTriggerEvent> =
  s.enumOf<AutomationTriggerEvent>(AutomationTriggerEvent);

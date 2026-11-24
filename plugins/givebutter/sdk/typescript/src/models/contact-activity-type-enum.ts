import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContactActivityTypeEnum = {
  Archived: "archived",
  CampaignJoined: "campaign.joined",
  Email: "email",
  EmailSubscribed: "email.subscribed",
  EmailUnsubscribed: "email.unsubscribed",
  Letter: "letter",
  Meeting: "meeting",
  Note: "note",
  PhoneCall: "phone_call",
  RecurringPlanCanceled: "recurring_plan.canceled",
  RecurringPlanCreated: "recurring_plan.created",
  RecurringPlanActivated: "recurring_plan.activated",
  SignupFormSubmitted: "signup_form.submitted",
  Sms: "sms",
  SmsSubscribed: "sms.subscribed",
  SmsUnsubscribed: "sms.unsubscribed",
  SubscriptionFormSubmitted: "subscription_form.submitted",
  CompletedTask: "completed_task",
  CreatedTask: "created_task",
  TicketIssued: "ticket.issued",
  TransactionRecieved: "transaction.recieved",
  TransactionSucceeded: "transaction.succeeded",
  TransactionAcknowledged: "transaction.acknowledged",
  TransactionUnacknowledged: "transaction.unacknowledged",
  Unarchived: "unarchived",
  VolunteerActivity: "volunteer_activity",
  SoftCredited: "soft_credited",
  Tagged: "tagged",
  Untagged: "untagged",
  CustomFieldUpdated: "custom_field.updated",
  VideoMessageSent: "video_message.sent",
  VideoMessageDeleted: "video_message.deleted",
} as const;
export type ContactActivityTypeEnum =
  | (typeof ContactActivityTypeEnum)[keyof typeof ContactActivityTypeEnum]
  | (string & {});

export const contactActivityTypeEnumSchema: EnumSchema<ContactActivityTypeEnum> =
  s.enumOf<ContactActivityTypeEnum>(ContactActivityTypeEnum);

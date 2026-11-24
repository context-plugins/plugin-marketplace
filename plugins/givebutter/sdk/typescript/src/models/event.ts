import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event = {
  CampaignCreated: "campaign.created",
  CampaignUpdated: "campaign.updated",
  TicketCreated: "ticket.created",
  TransactionSucceeded: "transaction.succeeded",
  ContactCreated: "contact.created",
  PlanCanceled: "plan.canceled",
  PlanCreated: "plan.created",
  PlanFailed: "plan.failed",
  PlanPaused: "plan.paused",
  PlanResumed: "plan.resumed",
  PlanUpdated: "plan.updated",
  RefundCreated: "refund.created",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);

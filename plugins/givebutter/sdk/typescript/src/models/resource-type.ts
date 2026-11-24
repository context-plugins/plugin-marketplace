import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType = {
  Transaction: "transaction",
  Plan: "plan",
  Ticket: "ticket",
  Message: "message",
  MailPiece: "mail_piece",
  SoftCredit: "soft_credit",
  SubscriptionLog: "subscription_log",
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType] | (string & {});

export const resourceTypeSchema: EnumSchema<ResourceType> = s.enumOf<ResourceType>(ResourceType);

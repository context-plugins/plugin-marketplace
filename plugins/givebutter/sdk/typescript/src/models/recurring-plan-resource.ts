import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecurringPlanResource = {
  id: string;
  contactId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  frequency: string;
  status: string;
  method: string;
  amount: string;
  feeCovered: string;
  createdAt: string;
  updatedAt: string;
  startAt: string;
  canceledAt: string;
  nextBillDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringPlanResourceSchema: Schema<RecurringPlanResource> = s.object<RecurringPlanResource>(
  {
    id: s.string(),
    contactId: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    phone: s.string(),
    frequency: s.string(),
    status: s.string(),
    method: s.string(),
    amount: s.string(),
    feeCovered: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    startAt: s.string(),
    canceledAt: s.string(),
    nextBillDate: s.string(),
    _keysMap: {
      contactId: "contact_id",
      firstName: "first_name",
      lastName: "last_name",
      feeCovered: "fee_covered",
      createdAt: "created_at",
      updatedAt: "updated_at",
      startAt: "start_at",
      canceledAt: "canceled_at",
      nextBillDate: "next_bill_date",
    },
  },
  { additionalProperties: s.json() },
);

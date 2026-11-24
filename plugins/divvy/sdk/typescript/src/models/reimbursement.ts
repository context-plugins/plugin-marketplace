import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fulfillmentTypeConnectEventsSubscriptionsApiSchema,
  type FulfillmentTypeConnectEventsSubscriptionsApi,
} from "./fulfillment-type-connect-events-subscriptions-api.js";
import {
  reimbursementStatusConnectEventsSubscriptionsApiSchema,
  type ReimbursementStatusConnectEventsSubscriptionsApi,
} from "./reimbursement-status-connect-events-subscriptions-api.js";

export type Reimbursement = {
  uuid?: string;
  note?: string;
  merchantName?: string;
  amount?: number;
  /** Enum for reimbursement status. */
  status?: ReimbursementStatusConnectEventsSubscriptionsApi;
  /** Enum for fulfillment type. */
  fulfillmentType?: FulfillmentTypeConnectEventsSubscriptionsApi;
  budgetUuid?: string;
  companyUuid?: string;
  userUuid?: string;
  occurredTime?: Date;
  updatedTime?: Date;
  retiredTime?: Date;
  submittedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reimbursementSchema: Schema<Reimbursement> = s.object<Reimbursement>(
  {
    uuid: s.optional(s.string()),
    note: s.optional(s.string()),
    merchantName: s.optional(s.string()),
    amount: s.optional(s.float64()),
    status: s.optional(s.lazy(() => reimbursementStatusConnectEventsSubscriptionsApiSchema)),
    fulfillmentType: s.optional(s.lazy(() => fulfillmentTypeConnectEventsSubscriptionsApiSchema)),
    budgetUuid: s.optional(s.string()),
    companyUuid: s.optional(s.string()),
    userUuid: s.optional(s.string()),
    occurredTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    retiredTime: s.optional(s.dateTime()),
    submittedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billClassificationsDtoConnectEventsSubscriptionsApiSchema,
  type BillClassificationsDtoConnectEventsSubscriptionsApi,
} from "./bill-classifications-dto-connect-events-subscriptions-api.js";
import {
  invoiceConnectEventsSubscriptionsApiSchema,
  type InvoiceConnectEventsSubscriptionsApi,
} from "./invoice-connect-events-subscriptions-api.js";

/** Bill transformed payload. */
export type BillPayloadV1 = {
  id?: string;
  vendorId?: string;
  vendorName?: string;
  /** Invoice information. */
  invoice?: InvoiceConnectEventsSubscriptionsApi;
  amount?: number;
  createdBy?: string;
  createdTime?: Date;
  updatedTime?: Date;
  archived?: boolean;
  description?: string;
  dueDate?: string;
  payFromChartOfAccountId?: string;
  paymentStatus?: string;
  /** General ledger classifications information for the bill. */
  classifications?: BillClassificationsDtoConnectEventsSubscriptionsApi;
  purchaseOrderNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billPayloadV1Schema: Schema<BillPayloadV1> = s.object<BillPayloadV1>(
  {
    id: s.optional(s.string()),
    vendorId: s.optional(s.string()),
    vendorName: s.optional(s.string()),
    invoice: s.optional(s.lazy(() => invoiceConnectEventsSubscriptionsApiSchema)),
    amount: s.optional(s.float64()),
    createdBy: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    archived: s.optional(s.boolean()),
    description: s.optional(s.string()),
    dueDate: s.optional(s.dateOnly()),
    payFromChartOfAccountId: s.optional(s.string()),
    paymentStatus: s.optional(s.string()),
    classifications: s.optional(s.lazy(() => billClassificationsDtoConnectEventsSubscriptionsApiSchema)),
    purchaseOrderNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

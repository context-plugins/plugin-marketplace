import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disbursementSchema, type Disbursement } from "./disbursement.js";
import {
  fundingConnectEventsSubscriptionsApiSchema,
  type FundingConnectEventsSubscriptionsApi,
} from "./funding-connect-events-subscriptions-api.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Payload for Payment. */
export type PaymentPayloadV1 = {
  id?: string;
  billIds?: string[];
  transactionNumber?: string;
  status?: string;
  createdBy?: string;
  createdTime?: Date;
  updatedTime?: Date;
  processDate?: string;
  /** Payment funding information. */
  funding?: FundingConnectEventsSubscriptionsApi;
  /** Payment disbursement information. */
  disbursement?: Disbursement;
  /** Vendor information. */
  vendor?: Vendor;
  billingType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPayloadV1Schema: Schema<PaymentPayloadV1> = s.object<PaymentPayloadV1>(
  {
    id: s.optional(s.string()),
    billIds: s.optional(s.array(s.string())),
    transactionNumber: s.optional(s.string()),
    status: s.optional(s.string()),
    createdBy: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    processDate: s.optional(s.dateOnly()),
    funding: s.optional(s.lazy(() => fundingConnectEventsSubscriptionsApiSchema)),
    disbursement: s.optional(s.lazy(() => disbursementSchema)),
    vendor: s.optional(s.lazy(() => vendorSchema)),
    billingType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayVirtualAccountsApiSchema,
  type EntityRazorpayVirtualAccountsApi,
} from "./entity-razorpay-virtual-accounts-api.js";
import { receiverInternalSchema, receiverSchema, type Receiver } from "./receiver.js";
import {
  statusRazorpayVirtualAccountsApiSchema,
  type StatusRazorpayVirtualAccountsApi,
} from "./status-razorpay-virtual-accounts-api.js";

/**
 * A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each
 * payment creates a BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_
 */
export type VirtualAccount = {
  /** Virtual account ID. Prefix: va_ */
  id?: string;
  /** Display name of the virtual account. */
  name?: string;
  entity?: EntityRazorpayVirtualAccountsApi;
  /** Purpose or description of the virtual account. */
  description?: string;
  /** Expected payment amount in paise. 0 means any amount is accepted. */
  amountExpected?: number;
  /** Total amount received so far in paise. */
  amountPaid?: number;
  /** active = accepting payments; closed = no longer accepting payments. */
  status?: StatusRazorpayVirtualAccountsApi;
  /**
   * Payment receivers assigned to this virtual account. Can include bank_account (ba_*) and/or vpa
   * (vpa_*) receivers.
   */
  receivers?: Receiver[];
  /** Unix timestamp by which the account will auto-close. Maximum value: 2147483647. */
  closeBy?: number;
  /** Unix timestamp when the account was closed. */
  closedAt?: number;
  /** Customer ID linked to this virtual account (cust_*). */
  customerId?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const virtualAccountProperties: s.Shape<VirtualAccount> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayVirtualAccountsApiSchema)),
  description: s.optional(s.string()),
  amountExpected: s.optional(s.int()),
  amountPaid: s.optional(s.int()),
  status: s.optional(s.lazy(() => statusRazorpayVirtualAccountsApiSchema)),
  receivers: s.optional(s.array(s.lazy(() => receiverInternalSchema))),
  closeBy: s.optional(s.int()),
  closedAt: s.optional(s.int()),
  customerId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    amountExpected: "amount_expected",
    amountPaid: "amount_paid",
    closeBy: "close_by",
    closedAt: "closed_at",
    customerId: "customer_id",
    createdAt: "created_at",
  },
};

export const virtualAccountInternalSchema: Schema<VirtualAccount> = s.object<VirtualAccount>(
  virtualAccountProperties,
  { additionalProperties: s.json() },
);

export const virtualAccountSchema: Schema<VirtualAccount> = s.lazySchema(() =>
  s.object<VirtualAccount>(
    {
      ...virtualAccountProperties,
      receivers: s.optional(s.array(s.lazy(() => receiverSchema))),
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { receiversSchema, type Receivers } from "./receivers.js";

export type VirtualAccountsRequest = {
  receivers: Receivers;
  /** Purpose of the virtual account. */
  description: string;
  /** Expected amount in paise. Set to 0 to accept any amount. */
  amount?: number;
  /** Link to an existing customer (cust_*). */
  customerId?: string;
  /** Unix timestamp to auto-close the account. Maximum: 2147483647. */
  closeBy?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const virtualAccountsRequestProperties: s.Shape<VirtualAccountsRequest> = {
  receivers: receiversSchema,
  description: s.string(),
  amount: s.optional(s.int()),
  customerId: s.optional(s.string()),
  closeBy: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    customerId: "customer_id",
    closeBy: "close_by",
  },
};

export const virtualAccountsRequestInternalSchema: Schema<VirtualAccountsRequest> =
  s.object<VirtualAccountsRequest>(virtualAccountsRequestProperties, { additionalProperties: s.json() });

export const virtualAccountsRequestSchema: Schema<VirtualAccountsRequest> = s.lazySchema(() =>
  s.object<VirtualAccountsRequest>(
    {
      ...virtualAccountsRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);

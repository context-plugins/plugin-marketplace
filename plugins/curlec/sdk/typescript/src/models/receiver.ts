import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayVirtualAccountsApiSchema,
  type Entity1RazorpayVirtualAccountsApi,
} from "./entity1-razorpay-virtual-accounts-api.js";
import { flowSchema, type Flow } from "./flow.js";

export type Receiver = {
  /** Receiver ID. Prefix: ba_ for bank account, vpa_ for VPA. */
  id?: string;
  entity?: Entity1RazorpayVirtualAccountsApi;
  /** IFSC code (bank accounts only). */
  ifsc?: string;
  /** Bank name (bank accounts only). */
  bankName?: string;
  /** Account holder name (bank accounts) or VPA address (VPAs). */
  name?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Virtual account number (bank accounts only). */
  accountNumber?: string;
  /** UPI username part of the VPA (VPAs only). */
  username?: string;
  /** UPI handle (e.g., razorpay) (VPAs only). */
  handle?: string;
  /** Flow type for VPA receivers. */
  flow?: Flow;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const receiverProperties: s.Shape<Receiver> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity1RazorpayVirtualAccountsApiSchema)),
  ifsc: s.optional(s.string()),
  bankName: s.optional(s.string()),
  name: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  accountNumber: s.optional(s.string()),
  username: s.optional(s.string()),
  handle: s.optional(s.string()),
  flow: s.optional(s.lazy(() => flowSchema)),
  _keysMap: {
    bankName: "bank_name",
    accountNumber: "account_number",
  },
};

export const receiverInternalSchema: Schema<Receiver> = s.object<Receiver>(receiverProperties, {
  additionalProperties: s.json(),
});

export const receiverSchema: Schema<Receiver> = s.lazySchema(() =>
  s.object<Receiver>(
    {
      ...receiverProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import {
  type2RazorpayVirtualAccountsApiSchema,
  type Type2RazorpayVirtualAccountsApi,
} from "./type2-razorpay-virtual-accounts-api.js";
import { vpaSchema, type Vpa } from "./vpa.js";

export type VirtualAccountsAllowedPayersRequest = {
  /** Type of allowed payer. */
  type: Type2RazorpayVirtualAccountsApi;
  /** Required if type=bank_account. */
  bankAccount?: BankAccount;
  /** Required if type=vpa. */
  vpa?: Vpa;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualAccountsAllowedPayersRequestSchema: Schema<VirtualAccountsAllowedPayersRequest> =
  s.object<VirtualAccountsAllowedPayersRequest>(
    {
      type: type2RazorpayVirtualAccountsApiSchema,
      bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
      vpa: s.optional(s.lazy(() => vpaSchema)),
      _keysMap: {
        bankAccount: "bank_account",
      },
    },
    { additionalProperties: s.json() },
  );

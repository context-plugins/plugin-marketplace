import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BankAccountStatus. */
export const VendorBankAccountStatusResponse = {
  NoAccount: "NO_ACCOUNT",
  NoNetLinkedAccount: "NO_NET_LINKED_ACCOUNT",
  NetLinkedAccount: "NET_LINKED_ACCOUNT",
  Undefined: "UNDEFINED",
} as const;
export type VendorBankAccountStatusResponse =
  | (typeof VendorBankAccountStatusResponse)[keyof typeof VendorBankAccountStatusResponse]
  | (string & {});

export const vendorBankAccountStatusResponseSchema: EnumSchema<VendorBankAccountStatusResponse> =
  s.enumOf<VendorBankAccountStatusResponse>(VendorBankAccountStatusResponse);

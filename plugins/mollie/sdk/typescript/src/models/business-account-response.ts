import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDetailsSchema, type AccountDetails } from "./account-details.js";
import { accountStatusSchema, type AccountStatus } from "./account-status.js";
import { balanceSchema, type Balance } from "./balance.js";
import { modeSchema, type Mode } from "./mode.js";

export type BusinessAccountResponse = {
  /**
   * Indicates the response contains a business account object. Will always contain the string
   * `business-account` for this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this business account. Mollie assigns this identifier at
   * account creation time.
   */
  id: string;
  /** The account holder details and bank account information for the business account. */
  accountDetails: AccountDetails;
  /** The balance of the business account. */
  balance: Balance;
  /** The status of the business account. */
  status: AccountStatus;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
};

export const businessAccountResponseSchema: Schema<BusinessAccountResponse> =
  s.object<BusinessAccountResponse>({
    resource: s.string(),
    id: s.string(),
    accountDetails: accountDetailsSchema,
    balance: balanceSchema,
    status: accountStatusSchema,
    mode: modeSchema,
    createdAt: s.string(),
  });

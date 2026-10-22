import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNumber7Schema, type AccountNumber7 } from "./unions/account-number7.js";
import { address111Schema, type Address111 } from "./unions/address111.js";
import { dateOfBirth1Schema, type DateOfBirth1 } from "./unions/date-of-birth1.js";

/** Recipient of an account funding transaction */
export type Recipient = {
  /** The first name of the recipient. */
  firstName: string;
  /** The last name of the recipient. */
  lastName: string;
  /** The recipient of the fund's address. */
  address?: Address111;
  /**
   * The account number of the recipient. Depending on the type of funds transfer, this could be a
   * wallet ID, bank accoutn number, or email address.
   */
  accountNumber?: AccountNumber7;
  /** The date of birth of the recipient. */
  dateOfBirth?: DateOfBirth1;
};

export const recipientSchema: Schema<Recipient> = s.object<Recipient>({
  firstName: s.string(),
  lastName: s.string(),
  address: s.optional(s.lazy(() => address111Schema)),
  accountNumber: s.optional(s.lazy(() => accountNumber7Schema)),
  dateOfBirth: s.optional(s.lazy(() => dateOfBirth1Schema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    accountNumber: "account_number",
    dateOfBirth: "date_of_birth",
  },
});

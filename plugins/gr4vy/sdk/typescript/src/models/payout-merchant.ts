import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address19Schema, type Address19 } from "./unions/address19.js";

export type PayoutMerchant = {
  /** The name of the merchant. */
  name: string;
  /** Unique value which identifies a merchant for processing transactions, also known as a MID. */
  identificationNumber: string;
  /**
   * The phone number for the merchant which should be formatted according to the E164 number
   * standard.
   */
  phoneNumber: string;
  /** Merchant website URL. */
  url: string;
  /** Value to explain charges or payments on bank statements. */
  statementDescriptor: string;
  /** Merchant classification for the type of goods or services it provides. */
  merchantCategoryCode: string;
  /** The address for the merchant. */
  address?: Address19;
};

export const payoutMerchantSchema: Schema<PayoutMerchant> = s.object<PayoutMerchant>({
  name: s.string(),
  identificationNumber: s.string(),
  phoneNumber: s.string(),
  url: s.string(),
  statementDescriptor: s.string(),
  merchantCategoryCode: s.string(),
  address: s.optional(s.lazy(() => address19Schema)),
  _keysMap: {
    identificationNumber: "identification_number",
    phoneNumber: "phone_number",
    statementDescriptor: "statement_descriptor",
    merchantCategoryCode: "merchant_category_code",
  },
});

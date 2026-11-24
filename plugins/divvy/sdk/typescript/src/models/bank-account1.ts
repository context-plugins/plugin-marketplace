import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountOwnerTypeSchema, type BankAccountOwnerType } from "./bank-account-owner-type.js";
import { bankAccountStatusSchema, type BankAccountStatus } from "./bank-account-status.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { bankInfo1Schema, type BankInfo1 } from "./bank-info1.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { nameValueSchema, type NameValue } from "./name-value.js";

export type BankAccount1 = {
  /** Vendor bank account name */
  nameOnAccount?: string;
  /**
   * Vendor bank account number. This field is required for enabling electronic payments to vendors.
   *
   * See [Create an international
   * vendor](https://developer.bill.com/docs/creating-an-international-vendor) for more information
   * on how to set up vendor payment information for an international (not US) vendor.
   */
  accountNumber: string;
  /**
   * Vendor bank routing number. This field is required for enabling electronic payments to vendors.
   * This field is empty for an IBAN `accountNumber`.
   *
   * See [Create an international
   * vendor](https://developer.bill.com/docs/creating-an-international-vendor) for more information
   * on how to set up vendor payment information for an international (not US) vendor.
   */
  routingNumber?: string;
  type?: BankAccountType;
  ownerType?: BankAccountOwnerType;
  /**
   * International bank account regulatory information. The `name` and `value` fields are required
   * for each required bank account regulatory field.
   *
   * See [Create an international
   * vendor](https://developer.bill.com/docs/creating-an-international-vendor) for more information
   * on how to set `regulatoryFields`.
   */
  regulatoryFields?: NameValue[];
  paymentCurrency?: CurrencyCode;
  bankInfo?: BankInfo1;
  status?: BankAccountStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankAccount1Properties: s.Shape<BankAccount1> = {
  nameOnAccount: s.optional(s.string()),
  accountNumber: s.string(),
  routingNumber: s.optional(s.string()),
  type: s.optional(s.lazy(() => bankAccountTypeSchema)),
  ownerType: s.optional(s.lazy(() => bankAccountOwnerTypeSchema)),
  regulatoryFields: s.optional(s.array(s.lazy(() => nameValueSchema))),
  paymentCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  bankInfo: s.optional(s.lazy(() => bankInfo1Schema)),
  status: s.optional(s.lazy(() => bankAccountStatusSchema)),
};

export const bankAccount1InternalSchema: Schema<BankAccount1> = s.object<BankAccount1>(
  bankAccount1Properties,
  { additionalProperties: s.json() },
);

export const bankAccount1Schema: Schema<BankAccount1> = s.lazySchema(() =>
  s.object<BankAccount1>(
    {
      ...bankAccount1Properties,
      accountNumber: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);

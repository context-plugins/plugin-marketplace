import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountOwnershipSchema, type AccountOwnership } from "./account-ownership.js";
import { classSchema, type Class } from "./class.js";
import { metaSchema, type Meta } from "./meta.js";
import { purseSchema, type Purse } from "./purse.js";
import { statusSchema, type Status } from "./status.js";
import { transactionIntervalSchema, type TransactionInterval } from "./transaction-interval.js";

/** Container object with account details */
export type AccountResponseResource = {
  /** Always "account". */
  type: string;
  /** Uniquely identifies the account. */
  id: string;
  /**
   * Mapped directly from CDR 'nickname'. Represents the user-defined name for the account without
   * fallback to displayName.
   */
  name: string;
  /**
   * Mapped directly from CDR 'displayName'. Represents the institution-defined display name for the
   * account.
   */
  displayName: string;
  /**
   * current rate to calculate interest earned being applied to deposit balances as it stands at the
   * time of the API call.
   */
  depositRate?: string;
  /**
   * The current rate to calculate interest payable being applied to lending balances as it stands
   * at the time of the API call.
   */
  lendingRate?: string;
  /**
   * The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros
   * included and no punctuation or spaces.
   */
  bsb?: string;
  /**
   * The unmasked account number for the account. Should not be supplied if the account number is a
   * PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros
   * included and no punctuation or spaces.
   */
  unmaskedAccNum?: string;
  /** Date that the account was created (if known). */
  creationDate?: string;
  /**
   * The name of the account holder as returned by the institution. No formatting is applied.
   * Returns a string or null when not available.
   */
  accountHolder: string | null;
  /**
   * A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.
   */
  maskedNumber?: string;
  /**
   * Value indicating the number of customers that have ownership of the account, according to the
   * data holder's definition of account ownership. Does not indicate that all account owners are
   * eligible consumers.
   */
  accountOwnership: AccountOwnership;
  /**
   * Flag indicating that the customer associated with the authorisation is an owner of the account.
   * Does not indicate sole ownership, however. If not present then 'true' is assumed.
   */
  isOwned: boolean;
  /**
   * Object representing the available limit amortised according to payment schedule. Assumed to be
   * zero if absent.
   */
  amortisedLimit?: string;
  /**
   * Optional field to indicate if this account is part of a bundle that is providing additional
   * benefit to the customer.
   */
  bundleName?: string;
  /**
   * Optional array of balances for the account in other currencies. Included to support accounts
   * that support multi-currency purses such as Travel Cards.
   */
  purses?: Purse[];
  /** BSB + account number. */
  accountNo: string;
  /**
   * Funds that are available to an account holder for withdrawal or other use. This may include
   * funds from an overdraft facility or line of credit. As well as funds classified as the
   * available balance, such as from cleared and existing deposits.
   */
  availableFunds: string | null;
  /**
   * Amount of funds in the account right now - excluding any pending transactions. For a credit
   * card this would be zero or the minus amount spent.
   */
  balance: string | null;
  /** Eligible account types are credit-card, loan and mortgage. */
  creditLimit: string | null;
  /** Describes the class (type) of accounts. */
  class: Class;
  /** The id of the connection resource that was used to retrieve the account. */
  connection: string;
  /** The currency the funds are stored in, using ISO 4217 standard. */
  currency: string;
  /** The id of the institution resource the account originated from. */
  institution: string;
  /** Timestamp of last update, UTC, RFC 3339 format e.g. "2017-09-28T13:39:33Z" */
  lastUpdated: string;
  /** Account status */
  status: Status;
  meta?: Meta;
  /**
   * An array of date intervals indicating the coverage of the transaction data relating to the
   * account. Will return a single element for accounts sourced from a single bank connection. Will
   * return multiple elements in cases where there have been multiple PDF/CSV uploads for an
   * account.
   */
  transactionIntervals: TransactionInterval[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountResponseResourceSchema: Schema<AccountResponseResource> =
  s.object<AccountResponseResource>(
    {
      type: s.string(),
      id: s.string(),
      name: s.string(),
      displayName: s.string(),
      depositRate: s.optional(s.string()),
      lendingRate: s.optional(s.string()),
      bsb: s.optional(s.string()),
      unmaskedAccNum: s.optional(s.string()),
      creationDate: s.optional(s.string()),
      accountHolder: s.nullable(s.string()),
      maskedNumber: s.optional(s.string()),
      accountOwnership: accountOwnershipSchema,
      isOwned: s.boolean(),
      amortisedLimit: s.optional(s.string()),
      bundleName: s.optional(s.string()),
      purses: s.optional(s.array(s.lazy(() => purseSchema))),
      accountNo: s.string(),
      availableFunds: s.nullable(s.string()),
      balance: s.nullable(s.string()),
      creditLimit: s.nullable(s.string()),
      class: classSchema,
      connection: s.string(),
      currency: s.string(),
      institution: s.string(),
      lastUpdated: s.string(),
      status: statusSchema,
      meta: s.optional(s.lazy(() => metaSchema)),
      transactionIntervals: s.array(s.lazy(() => transactionIntervalSchema)),
    },
    { additionalProperties: s.json() },
  );

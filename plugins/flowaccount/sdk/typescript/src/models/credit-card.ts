import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import { bankingChannelsStatusSchema, type BankingChannelsStatus } from "./banking-channels-status.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";
import { creditCardTypeSchema, type CreditCardType } from "./credit-card-type.js";

export type CreditCard = {
  id?: number;
  companyId: number;
  chartOfAccountId?: number | null;
  chartOfAccount?: ChartOfAccount;
  bankId?: number;
  bank?: Bank;
  bankName?: string | null;
  /** 1 = Personal 3 = Business */
  type?: CreditCardType;
  cardNumber?: string | null;
  cardHolderName?: string | null;
  cardName?: string | null;
  cashLimit?: number;
  statementDate?: number;
  dueDate?: number;
  /** 1 = Active 3 = InActive */
  status?: BankingChannelsStatus;
  /** @default false */
  isDelete?: boolean;
  createdOn?: Date;
  modifiedOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const creditCardProperties: s.Shape<CreditCard> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  bankId: s.optional(s.int()),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  bankName: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => creditCardTypeSchema)),
  cardNumber: s.optionalNullable(s.string()),
  cardHolderName: s.optionalNullable(s.string()),
  cardName: s.optionalNullable(s.string()),
  cashLimit: s.optional(s.float64()),
  statementDate: s.optional(s.int()),
  dueDate: s.optional(s.int()),
  status: s.optional(s.lazy(() => bankingChannelsStatusSchema)),
  isDelete: s.defaulted(s.boolean(), false),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
};

export const creditCardInternalSchema: Schema<CreditCard> = s.object<CreditCard>(creditCardProperties, {
  additionalProperties: s.json(),
});

export const creditCardSchema: Schema<CreditCard> = s.lazySchema(() =>
  s.object<CreditCard>(
    {
      ...creditCardProperties,
      chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
      bank: s.optional(s.lazy(() => bankSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

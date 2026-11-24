import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountInternalSchema, bankAccountSchema, type BankAccount } from "./bank-account.js";
import { bankingChannelsStatusSchema, type BankingChannelsStatus } from "./banking-channels-status.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";

export type Cheque = {
  id?: number;
  companyId: number;
  bankAccountId?: number;
  bankAccount?: BankAccount;
  chartOfAccountId?: number | null;
  chartOfAccount?: ChartOfAccount;
  /** 1 = Active 3 = InActive */
  status?: BankingChannelsStatus;
  /** @default false */
  isDelete?: boolean;
  createdOn?: Date;
  modifiedOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chequeProperties: s.Shape<Cheque> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  bankAccountId: s.optional(s.int()),
  bankAccount: s.optional(s.lazy(() => bankAccountInternalSchema)),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  status: s.optional(s.lazy(() => bankingChannelsStatusSchema)),
  isDelete: s.defaulted(s.boolean(), false),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
};

export const chequeInternalSchema: Schema<Cheque> = s.object<Cheque>(chequeProperties, {
  additionalProperties: s.json(),
});

export const chequeSchema: Schema<Cheque> = s.lazySchema(() =>
  s.object<Cheque>(
    {
      ...chequeProperties,
      bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
      chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

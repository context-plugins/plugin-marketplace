import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountInternalSchema, bankAccountSchema, type BankAccount } from "./bank-account.js";
import { chartOfAccountCategorySchema, type ChartOfAccountCategory } from "./chart-of-account-category.js";
import { chequeInternalSchema, chequeSchema, type Cheque } from "./cheque.js";
import { creditCardInternalSchema, creditCardSchema, type CreditCard } from "./credit-card.js";
import { otherChannelsInternalSchema, otherChannelsSchema, type OtherChannels } from "./other-channels.js";
import { pettyCashInternalSchema, pettyCashSchema, type PettyCash } from "./petty-cash.js";
import {
  systemChartOfAccountInternalSchema,
  systemChartOfAccountSchema,
  type SystemChartOfAccount,
} from "./system-chart-of-account.js";

export type ChartOfAccount = {
  id?: number;
  companyId?: number;
  code?: string | null;
  nameLocal?: string | null;
  nameForeign?: string | null;
  descriptionLocal?: string | null;
  descriptionForeign?: string | null;
  /** 1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses */
  category?: ChartOfAccountCategory;
  parentId?: number | null;
  isFolder?: boolean;
  isBank?: boolean;
  isReceivable?: boolean;
  /** @default false */
  isDelete?: boolean;
  /** @default false */
  isLock?: boolean;
  createdon: Date;
  modifiedon: Date;
  modifiedby?: number;
  value?: number;
  left?: number;
  right?: number;
  isDefault?: boolean;
  bankAccount?: BankAccount;
  pettyCash?: PettyCash;
  cheque?: Cheque;
  creditCard?: CreditCard;
  otherChannels?: OtherChannels;
  systemChartOfAccount?: SystemChartOfAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chartOfAccountProperties: s.Shape<ChartOfAccount> = {
  id: s.optional(s.int()),
  companyId: s.optional(s.int()),
  code: s.optionalNullable(s.string()),
  nameLocal: s.optionalNullable(s.string()),
  nameForeign: s.optionalNullable(s.string()),
  descriptionLocal: s.optionalNullable(s.string()),
  descriptionForeign: s.optionalNullable(s.string()),
  category: s.optional(s.lazy(() => chartOfAccountCategorySchema)),
  parentId: s.optionalNullable(s.int()),
  isFolder: s.optional(s.boolean()),
  isBank: s.optional(s.boolean()),
  isReceivable: s.optional(s.boolean()),
  isDelete: s.defaulted(s.boolean(), false),
  isLock: s.defaulted(s.boolean(), false),
  createdon: s.dateTime(),
  modifiedon: s.dateTime(),
  modifiedby: s.optional(s.int()),
  value: s.optional(s.float64()),
  left: s.optional(s.int()),
  right: s.optional(s.int()),
  isDefault: s.optional(s.boolean()),
  bankAccount: s.optional(s.lazy(() => bankAccountInternalSchema)),
  pettyCash: s.optional(s.lazy(() => pettyCashInternalSchema)),
  cheque: s.optional(s.lazy(() => chequeInternalSchema)),
  creditCard: s.optional(s.lazy(() => creditCardInternalSchema)),
  otherChannels: s.optional(s.lazy(() => otherChannelsInternalSchema)),
  systemChartOfAccount: s.optional(s.lazy(() => systemChartOfAccountInternalSchema)),
};

export const chartOfAccountInternalSchema: Schema<ChartOfAccount> = s.object<ChartOfAccount>(
  chartOfAccountProperties,
  { additionalProperties: s.json() },
);

export const chartOfAccountSchema: Schema<ChartOfAccount> = s.lazySchema(() =>
  s.object<ChartOfAccount>(
    {
      ...chartOfAccountProperties,
      code: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
      pettyCash: s.optional(s.lazy(() => pettyCashSchema)),
      cheque: s.optional(s.lazy(() => chequeSchema)),
      creditCard: s.optional(s.lazy(() => creditCardSchema)),
      otherChannels: s.optional(s.lazy(() => otherChannelsSchema)),
      systemChartOfAccount: s.optional(s.lazy(() => systemChartOfAccountSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

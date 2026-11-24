import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankingChannelsStatusSchema, type BankingChannelsStatus } from "./banking-channels-status.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type PettyCash = {
  id?: number;
  companyId: number;
  createdOn?: Date;
  modifiedOn?: Date;
  /** @default false */
  isDelete?: boolean;
  description?: string | null;
  name?: string | null;
  cashLimit?: number;
  chartOfAccountId?: number | null;
  chartOfAccount?: ChartOfAccount;
  cashHolderId?: number;
  cashHolder?: User;
  /** 1 = Active 3 = InActive */
  status?: BankingChannelsStatus;
  cashHolderName?: string | null;
  remainingBalance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pettyCashProperties: s.Shape<PettyCash> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  isDelete: s.defaulted(s.boolean(), false),
  description: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  cashLimit: s.optional(s.float64()),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  cashHolderId: s.optional(s.int()),
  cashHolder: s.optional(s.lazy(() => userInternalSchema)),
  status: s.optional(s.lazy(() => bankingChannelsStatusSchema)),
  cashHolderName: s.optionalNullable(s.string()),
  remainingBalance: s.optional(s.float64()),
};

export const pettyCashInternalSchema: Schema<PettyCash> = s.object<PettyCash>(pettyCashProperties, {
  additionalProperties: s.json(),
});

export const pettyCashSchema: Schema<PettyCash> = s.lazySchema(() =>
  s.object<PettyCash>(
    {
      ...pettyCashProperties,
      chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
      cashHolder: s.optional(s.lazy(() => userSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

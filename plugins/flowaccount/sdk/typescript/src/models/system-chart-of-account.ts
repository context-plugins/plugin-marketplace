import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";

export type SystemChartOfAccount = {
  chartOfAccountId?: number;
  companyId: number;
  systemCode: number;
  chartOfAccount?: ChartOfAccount;
  chartOfAccountIdCredit?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const systemChartOfAccountProperties: s.Shape<SystemChartOfAccount> = {
  chartOfAccountId: s.optional(s.int()),
  companyId: s.int(),
  systemCode: s.int(),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  chartOfAccountIdCredit: s.optionalNullable(s.int()),
};

export const systemChartOfAccountInternalSchema: Schema<SystemChartOfAccount> =
  s.object<SystemChartOfAccount>(systemChartOfAccountProperties, { additionalProperties: s.json() });

export const systemChartOfAccountSchema: Schema<SystemChartOfAccount> = s.lazySchema(() =>
  s.object<SystemChartOfAccount>(
    {
      ...systemChartOfAccountProperties,
      chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

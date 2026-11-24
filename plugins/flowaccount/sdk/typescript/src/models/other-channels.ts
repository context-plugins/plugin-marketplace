import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import { bankingChannelsStatusSchema, type BankingChannelsStatus } from "./banking-channels-status.js";
import {
  chartOfAccountInternalSchema,
  chartOfAccountSchema,
  type ChartOfAccount,
} from "./chart-of-account.js";
import { otherChannelsTypeSchema, type OtherChannelsType } from "./other-channels-type.js";
import { paymentChannelsTypeSchema, type PaymentChannelsType } from "./payment-channels-type.js";

export type OtherChannels = {
  id?: number;
  companyId: number;
  chartOfAccountId?: number | null;
  chartOfAccount?: ChartOfAccount;
  name?: string | null;
  /** 1 = Active 3 = InActive */
  status?: BankingChannelsStatus;
  /** 1 = POS 3 = PayemntGateWay 5 = EDC 7 = ECommerce */
  channel?: PaymentChannelsType;
  /** 1 = Receive 3 = ReceivePay 5 = Pay */
  type?: OtherChannelsType;
  description?: string | null;
  bankId?: number | null;
  bank?: Bank;
  bankName?: string | null;
  createdOn?: Date;
  modifiedOn?: Date;
  /** @default false */
  isDelete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const otherChannelsProperties: s.Shape<OtherChannels> = {
  id: s.optional(s.int()),
  companyId: s.int(),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccount: s.optional(s.lazy(() => chartOfAccountInternalSchema)),
  name: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => bankingChannelsStatusSchema)),
  channel: s.optional(s.lazy(() => paymentChannelsTypeSchema)),
  type: s.optional(s.lazy(() => otherChannelsTypeSchema)),
  description: s.optionalNullable(s.string()),
  bankId: s.optionalNullable(s.int()),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  bankName: s.optionalNullable(s.string()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  isDelete: s.defaulted(s.boolean(), false),
};

export const otherChannelsInternalSchema: Schema<OtherChannels> = s.object<OtherChannels>(
  otherChannelsProperties,
  { additionalProperties: s.json() },
);

export const otherChannelsSchema: Schema<OtherChannels> = s.lazySchema(() =>
  s.object<OtherChannels>(
    {
      ...otherChannelsProperties,
      chartOfAccount: s.optional(s.lazy(() => chartOfAccountSchema)),
      bank: s.optional(s.lazy(() => bankSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

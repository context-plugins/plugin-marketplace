import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packageListInternalSchema, packageListSchema, type PackageList } from "./package-list.js";
import { packageStatusSchema, type PackageStatus } from "./package-status.js";
import { paymentChannelSchema, type PaymentChannel } from "./payment-channel.js";
import { upgradeTypeSchema, type UpgradeType } from "./upgrade-type.js";

export type CompanySubscription = {
  id?: number;
  companyId?: number;
  packageId?: number;
  /** 10 = Pending 30 = Approve 50 = Suspend 70 = Terminated 90 = Delete */
  packageStatus?: PackageStatus;
  transactionDate?: Date;
  transactionId?: string | null;
  expirationDate?: Date;
  couponId?: number | null;
  paidBy?: number;
  createdOn?: Date;
  modifiedOn?: Date;
  days?: number;
  packageDays?: number;
  quantity?: number | null;
  /** 1 = Upgrade 3 = Renew 5 = ChangePackage */
  type?: UpgradeType;
  paymentChannel?: PaymentChannel;
  value?: number | null;
  isWithheld?: boolean;
  withheld?: number | null;
  internalFile?: string | null;
  invoiceId?: number | null;
  remarks?: string | null;
  isRequestInvoice?: boolean | null;
  addOn?: string | null;
  packageList?: PackageList;
  paySlipImageDate?: Date | null;
  paySlipImageTime?: string | null;
  paySlipImageAmount?: number | null;
  paySlipImageContact?: string | null;
};

const companySubscriptionProperties: s.Shape<CompanySubscription> = {
  id: s.optional(s.int()),
  companyId: s.optional(s.int()),
  packageId: s.optional(s.int()),
  packageStatus: s.optional(s.lazy(() => packageStatusSchema)),
  transactionDate: s.optional(s.dateTime()),
  transactionId: s.optionalNullable(s.string()),
  expirationDate: s.optional(s.dateTime()),
  couponId: s.optionalNullable(s.int()),
  paidBy: s.optional(s.int()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  days: s.optional(s.int()),
  packageDays: s.optional(s.int()),
  quantity: s.optionalNullable(s.int()),
  type: s.optional(s.lazy(() => upgradeTypeSchema)),
  paymentChannel: s.optional(s.lazy(() => paymentChannelSchema)),
  value: s.optionalNullable(s.float64()),
  isWithheld: s.optional(s.boolean()),
  withheld: s.optionalNullable(s.float64()),
  internalFile: s.optionalNullable(s.string()),
  invoiceId: s.optionalNullable(s.int()),
  remarks: s.optionalNullable(s.string()),
  isRequestInvoice: s.optionalNullable(s.boolean()),
  addOn: s.optionalNullable(s.string()),
  packageList: s.optional(s.lazy(() => packageListInternalSchema)),
  paySlipImageDate: s.optionalNullable(s.dateTime()),
  paySlipImageTime: s.optionalNullable(s.string()),
  paySlipImageAmount: s.optionalNullable(s.float64()),
  paySlipImageContact: s.optionalNullable(s.string()),
};

export const companySubscriptionInternalSchema: Schema<CompanySubscription> = s.object<CompanySubscription>(
  companySubscriptionProperties,
);

export const companySubscriptionSchema: Schema<CompanySubscription> = s.lazySchema(() =>
  s.object<CompanySubscription>({
    ...companySubscriptionProperties,
    packageList: s.optional(s.lazy(() => packageListSchema)),
  }),
);

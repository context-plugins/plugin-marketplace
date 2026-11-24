import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldResponseResourceSchema,
  type CustomFieldResponseResource,
} from "./custom-field-response-resource.js";
import { checkDepositedAtSchema, type CheckDepositedAt } from "./unions/check-deposited-at.js";
import { checkNumberSchema, type CheckNumber } from "./unions/check-number.js";
import {
  dedicationVariantQtelwfSchema,
  type DedicationVariantQtelwf,
} from "./unions/dedication-variant-qtelwf.js";
import { externalIdSchema, type ExternalId } from "./unions/external-id.js";
import { givingSpaceSchema, type GivingSpace } from "./unions/giving-space.js";
import { payoutIdSchema, type PayoutId } from "./unions/payout-id.js";

export type TransactionResource1 = {
  id: string;
  number: string;
  campaignId: string;
  campaignCode: string;
  campaignTitle: string;
  planId: string;
  pledgeId: string;
  teamId: string;
  teamName: string;
  memberId: string;
  memberName: string;
  fundId: string;
  fundCode: string;
  contactId: string;
  firstName: string;
  lastName: string;
  companyName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  paymentMethod: string;
  method: string;
  isOffline: string;
  checkNumber: CheckNumber;
  checkDepositedAt: CheckDepositedAt;
  internalNote: string;
  amount: number;
  fee: number;
  feeCovered: number;
  donated: number;
  payout: number;
  currency: string;
  transactedAt: string;
  createdAt: string;
  updatedAt: string;
  timezone: string;
  givingSpace: GivingSpace;
  dedication: DedicationVariantQtelwf;
  transactions: Record<string, unknown>[];
  customFields: CustomFieldResponseResource[];
  utmParameters: string;
  externalId: ExternalId;
  communicationOptIn: string;
  sessionId: string;
  attributionData: string;
  fairMarketValueAmount: string | null;
  taxDeductibleAmount: string | null;
  isRecurring: string;
  payoutId: PayoutId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionResource1Properties: s.Shape<TransactionResource1> = {
  id: s.string(),
  number: s.string(),
  campaignId: s.string(),
  campaignCode: s.string(),
  campaignTitle: s.string(),
  planId: s.string(),
  pledgeId: s.string(),
  teamId: s.string(),
  teamName: s.string(),
  memberId: s.string(),
  memberName: s.string(),
  fundId: s.string(),
  fundCode: s.string(),
  contactId: s.string(),
  firstName: s.string(),
  lastName: s.string(),
  companyName: s.string(),
  company: s.string(),
  email: s.string(),
  phone: s.string(),
  address: s.string(),
  status: s.string(),
  paymentMethod: s.string(),
  method: s.string(),
  isOffline: s.string(),
  checkNumber: checkNumberSchema,
  checkDepositedAt: checkDepositedAtSchema,
  internalNote: s.string(),
  amount: s.float64(),
  fee: s.float64(),
  feeCovered: s.float64(),
  donated: s.float64(),
  payout: s.float64(),
  currency: s.string(),
  transactedAt: s.string(),
  createdAt: s.string(),
  updatedAt: s.string(),
  timezone: s.string(),
  givingSpace: givingSpaceSchema,
  dedication: dedicationVariantQtelwfSchema,
  transactions: s.array(s.record(s.string(), s.unknown())),
  customFields: s.array(s.lazy(() => customFieldResponseResourceSchema)),
  utmParameters: s.string(),
  externalId: externalIdSchema,
  communicationOptIn: s.string(),
  sessionId: s.string(),
  attributionData: s.string(),
  fairMarketValueAmount: s.nullable(s.string()),
  taxDeductibleAmount: s.nullable(s.string()),
  isRecurring: s.string(),
  payoutId: payoutIdSchema,
  _keysMap: {
    campaignId: "campaign_id",
    campaignCode: "campaign_code",
    campaignTitle: "campaign_title",
    planId: "plan_id",
    pledgeId: "pledge_id",
    teamId: "team_id",
    teamName: "team_name",
    memberId: "member_id",
    memberName: "member_name",
    fundId: "fund_id",
    fundCode: "fund_code",
    contactId: "contact_id",
    firstName: "first_name",
    lastName: "last_name",
    companyName: "company_name",
    paymentMethod: "payment_method",
    isOffline: "is_offline",
    checkNumber: "check_number",
    checkDepositedAt: "check_deposited_at",
    internalNote: "internal_note",
    feeCovered: "fee_covered",
    transactedAt: "transacted_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    givingSpace: "giving_space",
    customFields: "custom_fields",
    utmParameters: "utm_parameters",
    externalId: "external_id",
    communicationOptIn: "communication_opt_in",
    sessionId: "session_id",
    attributionData: "attribution_data",
    fairMarketValueAmount: "fair_market_value_amount",
    taxDeductibleAmount: "tax_deductible_amount",
    isRecurring: "is_recurring",
    payoutId: "payout_id",
  },
};

export const transactionResource1InternalSchema: Schema<TransactionResource1> =
  s.object<TransactionResource1>(transactionResource1Properties, { additionalProperties: s.json() });

export const transactionResource1Schema: Schema<TransactionResource1> = s.lazySchema(() =>
  s.object<TransactionResource1>(
    {
      ...transactionResource1Properties,
      transactions: s.array(s.record(s.string(), s.unknown())).check(s.minLength(1), s.maxLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);

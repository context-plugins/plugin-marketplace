import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dedicationTypeSchema, type DedicationType } from "./dedication-type.js";
import { paymentMethodEnumSchema, type PaymentMethodEnum } from "./payment-method-enum.js";

export type StoreTransactionRequest = {
  campaignCode?: string | null;
  campaignTitle?: string;
  campaignTeamId?: number | null;
  teamMemberId?: number | null;
  contactId?: number | null;
  contactExternalId?: string | null;
  fundCode?: string | null;
  method: PaymentMethodEnum;
  transactedAt: Date;
  markDeposited?: boolean | null;
  timezone?: string | null;
  acknowledgedAt?: Date | null;
  externalLabel?: string | null;
  externalId?: string | null;
  contactContactSince?: Date | null;
  amount: string;
  feeCovered?: string | null;
  platformFee?: string | null;
  processingFee?: string | null;
  checkNumber?: string | null;
  checkDepositedAt?: Date | null;
  company?: string | null;
  internalNote?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country?: string | null;
  dedicationType?: DedicationType;
  dedicationName?: string | null;
  dedicationRecipientName?: string | null;
  dedicationRecipientEmail?: string | null;
  givingSpaceMessage?: string | null;
  appealCode?: string | null;
  appealName?: string | null;
  appealStatus?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeTransactionRequestProperties: s.Shape<StoreTransactionRequest> = {
  campaignCode: s.optionalNullable(s.string()),
  campaignTitle: s.optional(s.string()),
  campaignTeamId: s.optionalNullable(s.int()),
  teamMemberId: s.optionalNullable(s.int()),
  contactId: s.optionalNullable(s.int()),
  contactExternalId: s.optionalNullable(s.string()),
  fundCode: s.optionalNullable(s.string()),
  method: paymentMethodEnumSchema,
  transactedAt: s.dateTime(),
  markDeposited: s.optionalNullable(s.boolean()),
  timezone: s.optionalNullable(s.string()),
  acknowledgedAt: s.optionalNullable(s.dateTime()),
  externalLabel: s.optionalNullable(s.string()),
  externalId: s.optionalNullable(s.string()),
  contactContactSince: s.optionalNullable(s.dateTime()),
  amount: s.string(),
  feeCovered: s.optionalNullable(s.string()),
  platformFee: s.optionalNullable(s.string()),
  processingFee: s.optionalNullable(s.string()),
  checkNumber: s.optionalNullable(s.string()),
  checkDepositedAt: s.optionalNullable(s.dateTime()),
  company: s.optionalNullable(s.string()),
  internalNote: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  address1: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipcode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  dedicationType: s.optional(s.lazy(() => dedicationTypeSchema)),
  dedicationName: s.optionalNullable(s.string()),
  dedicationRecipientName: s.optionalNullable(s.string()),
  dedicationRecipientEmail: s.optionalNullable(s.string()),
  givingSpaceMessage: s.optionalNullable(s.string()),
  appealCode: s.optionalNullable(s.string()),
  appealName: s.optionalNullable(s.string()),
  appealStatus: s.optionalNullable(s.string()),
  _keysMap: {
    campaignCode: "campaign_code",
    campaignTitle: "campaign_title",
    campaignTeamId: "campaign_team_id",
    teamMemberId: "team_member_id",
    contactId: "contact_id",
    contactExternalId: "contact_external_id",
    fundCode: "fund_code",
    transactedAt: "transacted_at",
    markDeposited: "mark_deposited",
    acknowledgedAt: "acknowledged_at",
    externalLabel: "external_label",
    externalId: "external_id",
    contactContactSince: "contact_contact_since",
    feeCovered: "fee_covered",
    platformFee: "platform_fee",
    processingFee: "processing_fee",
    checkNumber: "check_number",
    checkDepositedAt: "check_deposited_at",
    internalNote: "internal_note",
    firstName: "first_name",
    lastName: "last_name",
    address1: "address_1",
    address2: "address_2",
    dedicationType: "dedication_type",
    dedicationName: "dedication_name",
    dedicationRecipientName: "dedication_recipient_name",
    dedicationRecipientEmail: "dedication_recipient_email",
    givingSpaceMessage: "giving_space_message",
    appealCode: "appeal_code",
    appealName: "appeal_name",
    appealStatus: "appeal_status",
  },
};

export const storeTransactionRequestInternalSchema: Schema<StoreTransactionRequest> =
  s.object<StoreTransactionRequest>(storeTransactionRequestProperties, { additionalProperties: s.json() });

export const storeTransactionRequestSchema: Schema<StoreTransactionRequest> = s.lazySchema(() =>
  s.object<StoreTransactionRequest>(
    {
      ...storeTransactionRequestProperties,
      campaignTitle: s.optional(s.string().check(s.maxLength(255))),
      contactExternalId: s.optionalNullable(s.string().check(s.maxLength(255))),
      fundCode: s.optionalNullable(s.string().check(s.maxLength(255))),
      externalLabel: s.optionalNullable(s.string().check(s.maxLength(255))),
      externalId: s.optionalNullable(s.string().check(s.maxLength(255))),
      checkNumber: s.optionalNullable(s.string().check(s.maxLength(255))),
      company: s.optionalNullable(s.string().check(s.maxLength(255))),
      internalNote: s.optionalNullable(s.string().check(s.maxLength(131070))),
      firstName: s.optionalNullable(s.string().check(s.maxLength(255))),
      lastName: s.optionalNullable(s.string().check(s.maxLength(255))),
      email: s.optionalNullable(s.string().check(s.maxLength(255))),
      address1: s.optionalNullable(s.string().check(s.maxLength(255))),
      address2: s.optionalNullable(s.string().check(s.maxLength(255))),
      city: s.optionalNullable(s.string().check(s.maxLength(255))),
      state: s.optionalNullable(s.string().check(s.maxLength(255))),
      zipcode: s.optionalNullable(s.string().check(s.maxLength(255))),
      dedicationName: s.optionalNullable(s.string().check(s.maxLength(255))),
      dedicationRecipientName: s.optionalNullable(s.string().check(s.maxLength(255))),
      givingSpaceMessage: s.optionalNullable(s.string().check(s.maxLength(65535))),
      appealCode: s.optionalNullable(s.string().check(s.maxLength(255))),
      appealName: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);

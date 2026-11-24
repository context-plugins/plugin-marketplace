import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dedicationInternalSchema, dedicationSchema, type Dedication } from "./dedication.js";

export type UpdateTransactionRequest = {
  transactionId?: string;
  internalNote?: string | null;
  checkNumber?: string | null;
  checkDepositedAt?: Date | null;
  customFields?: string[];
  teamId?: string;
  campaignMemberId?: string;
  fundId?: string;
  campaignId?: string;
  method?: string;
  transactedAt?: string;
  appealId?: string;
  offlinePaymentReceived?: string;
  dedication?: Dedication;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateTransactionRequestProperties: s.Shape<UpdateTransactionRequest> = {
  transactionId: s.optional(s.string()),
  internalNote: s.optionalNullable(s.string()),
  checkNumber: s.optionalNullable(s.string()),
  checkDepositedAt: s.optionalNullable(s.dateTime()),
  customFields: s.optional(s.array(s.string())),
  teamId: s.optional(s.string()),
  campaignMemberId: s.optional(s.string()),
  fundId: s.optional(s.string()),
  campaignId: s.optional(s.string()),
  method: s.optional(s.string()),
  transactedAt: s.optional(s.string()),
  appealId: s.optional(s.string()),
  offlinePaymentReceived: s.optional(s.string()),
  dedication: s.optional(s.lazy(() => dedicationInternalSchema)),
  _keysMap: {
    transactionId: "transaction_id",
    internalNote: "internal_note",
    checkNumber: "check_number",
    checkDepositedAt: "check_deposited_at",
    customFields: "custom_fields",
    teamId: "team_id",
    campaignMemberId: "campaign_member_id",
    fundId: "fund_id",
    campaignId: "campaign_id",
    transactedAt: "transacted_at",
    appealId: "appeal_id",
    offlinePaymentReceived: "offline_payment_received",
  },
};

export const updateTransactionRequestInternalSchema: Schema<UpdateTransactionRequest> =
  s.object<UpdateTransactionRequest>(updateTransactionRequestProperties, { additionalProperties: s.json() });

export const updateTransactionRequestSchema: Schema<UpdateTransactionRequest> = s.lazySchema(() =>
  s.object<UpdateTransactionRequest>(
    {
      ...updateTransactionRequestProperties,
      internalNote: s.optionalNullable(s.string().check(s.maxLength(131070))),
      checkNumber: s.optionalNullable(s.string().check(s.maxLength(255))),
      dedication: s.optional(s.lazy(() => dedicationSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

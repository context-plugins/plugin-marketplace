import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { billSchema, type Bill } from "./bill.js";
import { cardAccountSchema, type CardAccount } from "./card-account.js";
import {
  invoice1ConnectEventsSubscriptionsApiSchema,
  type Invoice1ConnectEventsSubscriptionsApi,
} from "./invoice1-connect-events-subscriptions-api.js";
import { paymentSchema, type Payment } from "./payment.js";
import { reimbursementSchema, type Reimbursement } from "./reimbursement.js";
import { riskVerificationSchema, type RiskVerification } from "./risk-verification.js";
import { threeDsChallengeSchema, type ThreeDsChallenge } from "./three-ds-challenge.js";
import { transactionSchema, type Transaction } from "./transaction.js";
import { vendor1Schema, type Vendor1 } from "./vendor1.js";

/** Generate a test event notification */
export type SendTestEventRequestDto = {
  /** Event type. You can get the BILL events catalog with `GET /v3/events/catalog`. */
  eventType?: string;
  /** Event type version */
  version?: string;
  vendor?: Vendor1;
  bill?: Bill;
  bankAccount?: BankAccount;
  cardAccount?: CardAccount;
  payment?: Payment;
  riskVerification?: RiskVerification;
  invoice?: Invoice1ConnectEventsSubscriptionsApi;
  transaction?: Transaction;
  threeDsChallenge?: ThreeDsChallenge;
  reimbursement?: Reimbursement;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendTestEventRequestDtoSchema: Schema<SendTestEventRequestDto> =
  s.object<SendTestEventRequestDto>(
    {
      eventType: s.optional(s.string()),
      version: s.optional(s.string()),
      vendor: s.optional(s.lazy(() => vendor1Schema)),
      bill: s.optional(s.lazy(() => billSchema)),
      bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
      cardAccount: s.optional(s.lazy(() => cardAccountSchema)),
      payment: s.optional(s.lazy(() => paymentSchema)),
      riskVerification: s.optional(s.lazy(() => riskVerificationSchema)),
      invoice: s.optional(s.lazy(() => invoice1ConnectEventsSubscriptionsApiSchema)),
      transaction: s.optional(s.lazy(() => transactionSchema)),
      threeDsChallenge: s.optional(s.lazy(() => threeDsChallengeSchema)),
      reimbursement: s.optional(s.lazy(() => reimbursementSchema)),
      _keysMap: {
        bankAccount: "bank-account",
        cardAccount: "card-account",
        riskVerification: "risk-verification",
      },
    },
    { additionalProperties: s.json() },
  );

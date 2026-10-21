import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationResponse1Schema,
  type AuthenticationResponse1,
} from "./unions/authentication-response1.js";
import { cardholderInfoSchema, type CardholderInfo } from "./unions/cardholder-info.js";
import { cavvSchema, type Cavv } from "./unions/cavv.js";
import { directoryResponseSchema, type DirectoryResponse } from "./unions/directory-response.js";
import {
  directoryTransactionIdSchema,
  type DirectoryTransactionId,
} from "./unions/directory-transaction-id.js";
import { eci1Schema, type Eci1 } from "./unions/eci1.js";
import { transactionReasonSchema, type TransactionReason } from "./unions/transaction-reason.js";

export type ThreeDSecureV2 = {
  version: string;
  authenticationResponse?: AuthenticationResponse1;
  directoryResponse?: DirectoryResponse;
  directoryTransactionId?: DirectoryTransactionId;
  transactionReason?: TransactionReason;
  cavv?: Cavv;
  eci?: Eci1;
  cardholderInfo?: CardholderInfo;
};

export const threeDSecureV2Schema: Schema<ThreeDSecureV2> = s.object<ThreeDSecureV2>({
  version: s.string(),
  authenticationResponse: s.optional(s.lazy(() => authenticationResponse1Schema)),
  directoryResponse: s.optional(s.lazy(() => directoryResponseSchema)),
  directoryTransactionId: s.optional(s.lazy(() => directoryTransactionIdSchema)),
  transactionReason: s.optional(s.lazy(() => transactionReasonSchema)),
  cavv: s.optional(s.lazy(() => cavvSchema)),
  eci: s.optional(s.lazy(() => eci1Schema)),
  cardholderInfo: s.optional(s.lazy(() => cardholderInfoSchema)),
  _keysMap: {
    authenticationResponse: "authentication_response",
    directoryResponse: "directory_response",
    directoryTransactionId: "directory_transaction_id",
    transactionReason: "transaction_reason",
    cardholderInfo: "cardholder_info",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount11Schema, type Amount11 } from "./unions/amount11.js";
import { authorizedAmountSchema, type AuthorizedAmount } from "./unions/authorized-amount.js";
import { capturedAmountSchema, type CapturedAmount } from "./unions/captured-amount.js";
import { connectionOptions3Schema, type ConnectionOptions3 } from "./unions/connection-options3.js";
import { externalIdentifier32Schema, type ExternalIdentifier32 } from "./unions/external-identifier32.js";
import { metadata11Schema, type Metadata11 } from "./unions/metadata11.js";
import {
  paymentServiceTransactionIdSchema,
  type PaymentServiceTransactionId,
} from "./unions/payment-service-transaction-id.js";
import { status1Schema, type Status1 } from "./unions/status1.js";

export type TransactionUpdate = {
  /**
   * The status of the transaction for the `payment_method`. The status may change over time as
   * asynchronous processing events occur.
   */
  status?: Status1;
  /** The total amount for this transaction across all funding sources including gift cards. */
  amount?: Amount11;
  /**
   * The amount for this transaction that has been authorized for the `payment_method`. This can be
   * less than the `amount` if gift cards were used.
   */
  authorizedAmount?: AuthorizedAmount;
  /**
   * The captured amount for this transaction. This can be the full value of the `authorized_amount`
   * or less.
   */
  capturedAmount?: CapturedAmount;
  /** The payment service's unique ID for the transaction. */
  paymentServiceTransactionId?: PaymentServiceTransactionId;
  /** An external identifier that can be used to match the transaction against your own records. */
  externalIdentifier?: ExternalIdentifier32;
  /**
   * Additional information about the transaction stored as key-value pairs. If provided, the whole
   * value will be overridden.
   */
  metadata?: Metadata11;
  /**
   * Allows for passing optional configuration per connection to take advantage of connection
   * specific features. When provided, the data is only passed to the target connection type to
   * prevent sharing configuration across connections. Please note that each of the keys this object
   * are in kebab-case, for example `cybersource-anti-fraud` as they represent the ID of the
   * connector. All the other keys will be snake case, for example `merchant_defined_data` or camel
   * case to match an external API that the connector uses. If provided, the whole value will be
   * overridden.
   */
  connectionOptions?: ConnectionOptions3;
};

export const transactionUpdateSchema: Schema<TransactionUpdate> = s.object<TransactionUpdate>({
  status: s.optional(s.lazy(() => status1Schema)),
  amount: s.optional(s.lazy(() => amount11Schema)),
  authorizedAmount: s.optional(s.lazy(() => authorizedAmountSchema)),
  capturedAmount: s.optional(s.lazy(() => capturedAmountSchema)),
  paymentServiceTransactionId: s.optional(s.lazy(() => paymentServiceTransactionIdSchema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier32Schema)),
  metadata: s.optional(s.lazy(() => metadata11Schema)),
  connectionOptions: s.optional(s.lazy(() => connectionOptions3Schema)),
  _keysMap: {
    authorizedAmount: "authorized_amount",
    capturedAmount: "captured_amount",
    paymentServiceTransactionId: "payment_service_transaction_id",
    externalIdentifier: "external_identifier",
    connectionOptions: "connection_options",
  },
});

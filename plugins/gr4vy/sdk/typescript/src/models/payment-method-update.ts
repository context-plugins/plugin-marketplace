import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expirationDate4Schema, type ExpirationDate4 } from "./unions/expiration-date4.js";
import {
  schemeTransactionIdScheme2Schema,
  type SchemeTransactionIdScheme2,
} from "./unions/scheme-transaction-id-scheme2.js";
import { schemeTransactionId2Schema, type SchemeTransactionId2 } from "./unions/scheme-transaction-id2.js";
import { transactionLinkId2Schema, type TransactionLinkId2 } from "./unions/transaction-link-id2.js";

/** Request body for updating a stored payment method. */
export type PaymentMethodUpdate = {
  /** The new expiration date for the payment method. */
  expirationDate?: ExpirationDate4;
  /**
   * A scheme transaction identifier to associate with this payment method. Explicitly setting this
   * field to `null` will also clear `scheme_transaction_id_scheme` as a side-effect. When setting a
   * new value and `scheme_transaction_id_scheme` is both omitted from the payload and previously
   * unset, `scheme_transaction_id_scheme` will be populated from the payment method's existing
   * `scheme`.
   */
  schemeTransactionId?: SchemeTransactionId2;
  /**
   * The scheme associated with `scheme_transaction_id`. Only applies to card payments. When setting
   * a new value for `scheme_transaction_id`, if `scheme_transaction_id_scheme` is both omitted from
   * the payload and previously unset, `scheme_transaction_id_scheme` will be populated from the
   * payment method's existing `scheme`.
   */
  schemeTransactionIdScheme?: SchemeTransactionIdScheme2;
  /** A transaction link identifier to associate with this payment method. */
  transactionLinkId?: TransactionLinkId2;
};

export const paymentMethodUpdateSchema: Schema<PaymentMethodUpdate> = s.object<PaymentMethodUpdate>({
  expirationDate: s.optional(s.lazy(() => expirationDate4Schema)),
  schemeTransactionId: s.optional(s.lazy(() => schemeTransactionId2Schema)),
  schemeTransactionIdScheme: s.optional(s.lazy(() => schemeTransactionIdScheme2Schema)),
  transactionLinkId: s.optional(s.lazy(() => transactionLinkId2Schema)),
  _keysMap: {
    expirationDate: "expiration_date",
    schemeTransactionId: "scheme_transaction_id",
    schemeTransactionIdScheme: "scheme_transaction_id_scheme",
    transactionLinkId: "transaction_link_id",
  },
});

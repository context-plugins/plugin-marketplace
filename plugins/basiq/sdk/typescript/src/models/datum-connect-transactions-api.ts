import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classConnectTransactionsApiSchema,
  type ClassConnectTransactionsApi,
} from "./class-connect-transactions-api.js";
import { currencySchema, type Currency } from "./currency.js";
import { directionSchema, type Direction } from "./direction.js";
import {
  enrichConnectTransactionsApiSchema,
  type EnrichConnectTransactionsApi,
} from "./enrich-connect-transactions-api.js";
import {
  linksConnectTransactionsApiSchema,
  type LinksConnectTransactionsApi,
} from "./links-connect-transactions-api.js";
import { paymentDetailsSchema, type PaymentDetails } from "./payment-details.js";
import {
  statusConnectTransactionsApiSchema,
  type StatusConnectTransactionsApi,
} from "./status-connect-transactions-api.js";
import {
  subClassConnectTransactionsApiSchema,
  type SubClassConnectTransactionsApi,
} from "./sub-class-connect-transactions-api.js";

export type DatumConnectTransactionsApi = {
  /** Value is "transaction". */
  type: string;
  /**
   * Uniquely identifies the transaction for this connection. Note that when a connection is
   * refreshed pending transactions will receive new id's, whilst posted transactions will receive
   * the same id's as before the refresh.
   */
  id: string;
  /**
   * Identifies if a transaction is pending or posted. A pending transaction is an approved debit or
   * credit transaction that has not been fully processed yet (i.e. has not been posted). Note that
   * pending transactions are not available for all institutions.
   */
  status: StatusConnectTransactionsApi;
  /** The transaction description as submitted by the institution. */
  description: string;
  /** The reference for the transaction provided by the originating institution. */
  reference: string;
  /** Transaction amount. Outgoing funds are expressed as negative values. */
  amount: string;
  /** Standard 3 character currency codes as per ISO-4217. */
  currency: Currency;
  /** The id of the account resource the transaction belongs to. */
  account: string;
  /**
   * Account balance at the time the transaction was completed. Included for Web connection
   * integrations. CDR does not supply transaction balance, so this field will be empty for CDR
   * connections.
   */
  balance?: string;
  /** Identifies if the transaction is of debit or credit type. */
  direction: Direction;
  /** Describes the class(type) of transaction. */
  class: ClassConnectTransactionsApi;
  /** The id of the institution resource the transaction originated from. */
  institution: string;
  /** The id of the connection resource that was used to retrieve the transaction. */
  connection: string;
  /**
   * Date that the user executed the transaction as provided by the institution. Note that not all
   * transactions provide this value (varies by institution) e.g. "2017-11-10T00:00:00Z"
   */
  transactionDate: string;
  paymentDetails?: PaymentDetails | null;
  /**
   * Date the transaction was posted as provided by the institution. This value is null if the
   * record is pending. e.g. "2017-11-10T21:46:44Z" or 2017-11-10T00:00:00Z.
   */
  postDate: string;
  /**
   * The subClass attribute will only return values for payment transactions (i.e. will be empty for
   * all others) plus [new] bank fee transactions for those relating to account conduct such as
   * account overdrawn and direct debit dishonours.
   */
  subClass: SubClassConnectTransactionsApi;
  enrich: EnrichConnectTransactionsApi;
  links: LinksConnectTransactionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumConnectTransactionsApiSchema: Schema<DatumConnectTransactionsApi> =
  s.object<DatumConnectTransactionsApi>(
    {
      type: s.string(),
      id: s.string(),
      status: statusConnectTransactionsApiSchema,
      description: s.string(),
      reference: s.string(),
      amount: s.string(),
      currency: currencySchema,
      account: s.string(),
      balance: s.optional(s.string()),
      direction: directionSchema,
      class: classConnectTransactionsApiSchema,
      institution: s.string(),
      connection: s.string(),
      transactionDate: s.string(),
      paymentDetails: s.optionalNullable(s.lazy(() => paymentDetailsSchema)),
      postDate: s.string(),
      subClass: subClassConnectTransactionsApiSchema,
      enrich: enrichConnectTransactionsApiSchema,
      links: linksConnectTransactionsApiSchema,
    },
    { additionalProperties: s.json() },
  );

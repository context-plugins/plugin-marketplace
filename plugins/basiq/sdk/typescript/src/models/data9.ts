import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  class1ReportingReportsApiSchema,
  type Class1ReportingReportsApi,
} from "./class1-reporting-reports-api.js";
import { directionSchema, type Direction } from "./direction.js";
import { enrichSchema, type Enrich } from "./enrich.js";
import {
  statusReportingReportsApiSchema,
  type StatusReportingReportsApi,
} from "./status-reporting-reports-api.js";

export type Data9 = {
  /** Value is "transaction". */
  type: string;
  /**
   * Uniquely identifies the transaction for this connection. Note that when a connection is
   * refreshed pending transactions will receive new id's, whilst posted transactions will receive
   * the same id's as before the refresh.
   */
  id: string;
  /** The id of the account resource the transaction belongs to. */
  account: string;
  /** Transaction amount. Outgoing funds are expressed as negative values. */
  amount: string;
  /** Value of the account balance at time the transaction was completed. */
  balance: string;
  /** Describes the class(type) of transaction. */
  class: Class1ReportingReportsApi;
  /** The id of the connection resource that was used to retrieve the transaction. */
  connection: string;
  /** The transaction description as submitted by the institution.. */
  description: string;
  /** Identifies if the transaction is of debit or credit type. */
  direction: Direction;
  enrich: Enrich;
  /** The id of the institution resource the transaction originated from. */
  institution: string;
  /**
   * Date the transaction was posted as provided by the institution (this is the same date that
   * appears on a bank statement). This value is null if the record is pending. e.g.
   * "2017-11-10T21:46:44Z" or 2017-11-10T00:00:00Z.
   */
  postDate: string;
  /**
   * Identifies if a transaction is pending or posted. A pending transaction is an approved debit or
   * credit transaction that has not been fully processed yet (i.e. has not been posted). Find out
   * more about pending transaction and how to deal with them within your app. Note that pending
   * transactions are not available for all institutions.
   */
  status: StatusReportingReportsApi;
  /**
   * Date that the user executed the transaction as provided by the institution. Note that not all
   * transactions provide this value (varies by institution) e.g. "2017-11-10T00:00:00Z"
   */
  transactionDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data9Schema: Schema<Data9> = s.object<Data9>(
  {
    type: s.string(),
    id: s.string(),
    account: s.string(),
    amount: s.string(),
    balance: s.string(),
    class: class1ReportingReportsApiSchema,
    connection: s.string(),
    description: s.string(),
    direction: directionSchema,
    enrich: enrichSchema,
    institution: s.string(),
    postDate: s.string(),
    status: statusReportingReportsApiSchema,
    transactionDate: s.string(),
  },
  { additionalProperties: s.json() },
);

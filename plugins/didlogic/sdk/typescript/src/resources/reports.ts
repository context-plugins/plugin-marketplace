import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1Transactions403Error1Schema,
  type ApiV1Transactions403Error1,
} from "../models/api-v1-transactions403-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  apiV1AsrReportResponse1Schema,
  type ApiV1AsrReportResponse1,
} from "../models/unions/api-v1-asr-report-response1.js";
import type { Servers } from "../servers.js";

export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get ASR (Answer-Seizure Ratio) report
   *
   * @remarks
   * Retrieve the Answer-Seizure Ratio (ASR) report in CSV format for specified date range.
   *
   * **ASR Metrics:**
   * - Number of calls
   * - Talk time in minutes
   * - ASR: Percentage of calls successfully connected
   * - Average call duration (ACD)
   *
   * **Requirements:**
   * - Date range is required (start_date and end_date)
   * - Dates must be in YYYY-MM-DD format
   * - On success returns CSV; 400 and 403 errors return JSON
   *
   * @returns Successfully returns ASR metrics report in CSV format
   *
   * @throws {@link Reports.AsrReportShowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  asrReportShow(
    request: Reports.AsrReportShowRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Reports.AsrReportShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/asr_report"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "start_date", value: request.startDate, schema: s.string() },
          { name: "end_date", value: request.endDate, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Reports.AsrReportShowError,
      },
      options,
    );
  }

  /**
   * Export transaction history
   *
   * @remarks
   * Export account transaction history as a CSV file for a date range and transaction type(s).
   *
   * **Requirements:**
   * - start_date, end_date and type are all required
   * - Dates must be in YYYY-MM-DD format
   * - `type` accepts one or more comma-separated values from the list below
   *
   * **Transaction types:** adjustments, paypal_in, paypal_out, cc_in, stripe_in, google_pay_in,
   * apple_pay_in, wire_transfer, call, call_fix_fee, connection, sip, webcall, sms, inbound_sms,
   * activation, month, subscription, porting, surcharge, risk_check, call_recording, hlr_lookup,
   * amd, paid_overstamping, service_charge, x_transfer, refund, channel
   *
   * `service_charge`, `x_transfer` and `refund` are manual withdrawals booked by our accounting
   * team: a fee for a service we provided, a transfer of funds to another account, and a refund of
   * funds to you.
   *
   * **Response:** The caller receives the generated CSV payload. The internal redirect used to
   * fetch that file is an implementation detail and is not part of the public contract.
   *
   * @returns Returns the generated transactions CSV file
   *
   * @throws {@link Reports.TransactionsIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsIndex(
    request: Reports.TransactionsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Reports.TransactionsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "start_date", value: request.startDate, schema: s.dateOnly() },
          { name: "end_date", value: request.endDate, schema: s.dateOnly() },
          { name: "type", value: request.type, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Reports.TransactionsIndexError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type AsrReportShowRequest = {
    /** Report start date (YYYY-MM-DD format) */
    startDate: string;
    /** Report end date (YYYY-MM-DD format) */
    endDate: string;
  };

  export class AsrReportShowError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"apiV1AsrReportResponse1", ApiV1AsrReportResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AsrReportShowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "apiV1AsrReportResponse1",
        decode: { kind: "json", schema: apiV1AsrReportResponse1Schema },
      },
    ];
  }

  export type TransactionsIndexRequest = {
    /** Start of the reporting period (YYYY-MM-DD) */
    startDate: string;
    /** End of the reporting period (YYYY-MM-DD) */
    endDate: string;
    /**
     * Comma-separated transaction type(s); see the operation description for the full list of
     * accepted values.
     */
    type: string;
  };

  export class TransactionsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"apiV1Transactions403Error1", ApiV1Transactions403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransactionsIndexError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "apiV1Transactions403Error1",
        decode: { kind: "json", schema: apiV1Transactions403Error1Schema },
      },
    ];
  }
}

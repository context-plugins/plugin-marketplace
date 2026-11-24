import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { reportsRequestSchema, type ReportsRequest } from "../models/reports-request.js";
import { reportsResponseSchema, type ReportsResponse } from "../models/reports-response.js";
import { reportsResponse2Schema, type ReportsResponse2 } from "../models/reports-response2.js";
import {
  reportsTransactions400Error1Schema,
  type ReportsTransactions400Error1,
} from "../models/reports-transactions400-error1.js";
import {
  reportsTransactions403Error1Schema,
  type ReportsTransactions403Error1,
} from "../models/reports-transactions403-error1.js";
import {
  reportsTransactions404Error1Schema,
  type ReportsTransactions404Error1,
} from "../models/reports-transactions404-error1.js";
import {
  reportsTransactions500Error1Schema,
  type ReportsTransactions500Error1,
} from "../models/reports-transactions500-error1.js";
import { reportsTypesResponseSchema, type ReportsTypesResponse } from "../models/reports-types-response.js";
import {
  reportsTypes400Error1Schema,
  type ReportsTypes400Error1,
} from "../models/reports-types400-error1.js";
import {
  reportsTypes403Error1Schema,
  type ReportsTypes403Error1,
} from "../models/reports-types403-error1.js";
import {
  reportsTypes404Error1Schema,
  type ReportsTypes404Error1,
} from "../models/reports-types404-error1.js";
import {
  reportsTypes500Error1Schema,
  type ReportsTypes500Error1,
} from "../models/reports-types500-error1.js";
import { reports400Error1Schema, type Reports400Error1 } from "../models/reports400-error1.js";
import { reports400Error21Schema, type Reports400Error21 } from "../models/reports400-error21.js";
import { reports403Error1Schema, type Reports403Error1 } from "../models/reports403-error1.js";
import { reports403Error21Schema, type Reports403Error21 } from "../models/reports403-error21.js";
import { reports403Error31Schema, type Reports403Error31 } from "../models/reports403-error31.js";
import { reports404Error1Schema, type Reports404Error1 } from "../models/reports404-error1.js";
import { reports404Error21Schema, type Reports404Error21 } from "../models/reports404-error21.js";
import { reports404Error31Schema, type Reports404Error31 } from "../models/reports404-error31.js";
import { reports500Error1Schema, type Reports500Error1 } from "../models/reports500-error1.js";
import { reports500Error21Schema, type Reports500Error21 } from "../models/reports500-error21.js";
import { reports500Error31Schema, type Reports500Error31 } from "../models/reports500-error31.js";
import {
  transactionsContainerObjectSchema,
  type TransactionsContainerObject,
} from "../models/transactions-container-object.js";
import { reportsResponse12Schema, type ReportsResponse12 } from "../models/unions/reports-response12.js";
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
   * Create a report
   *
   * @remarks
   * Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a
   * job will be returned to let you know the progress of the report generation. You can poll the
   * job to know when the report has been generated. You can create any supported report (see
   * reportTypes for a list of supported reports). Ensure you provide the necessary filters when
   * generating a report. All created reports, will store a copy of the data as a snapshot - this
   * ensures that you have access to the raw data that was used to create the report. This API
   * allows generating reports with various filters. The `filters` field in the report request
   * enables you to specify parameters for customizing the report content. > 📘 Note: The report
   * title cannot be longer than 50 characters.
   *
   * > 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t
   * automatically reflect these updates. To ensure your report reflects the latest Enrich data,
   * purge and refresh connections before generating a new report.
   *
   * ### Filters
   * Filters are used to narrow down the data included in the report. The available filters are:
   * - `fromDate`: Specifies the start date for the report data (format: YYYY-MM-DD).
   * - `toDate`: Specifies the end date for the report data (format: YYYY-MM-DD).
   * - `accounts`: List of account IDs to include in the report.
   * - `users`: List of user IDs to include in the report.
   * - `includeMetrics`: List of metric codes to include in the report. Supported values are
   *   specific to the report type. Rules for `includeMetrics`:
   * - If the array is empty (`"value": []`), all metrics will be shown.
   * - If no filter is provided, all metrics will be shown.
   * - If an array of codes is provided, only these specific metrics will be shown.
   * - If the value is `null`, no metrics will be shown.
   *
   * - `includeGroups`: List of group codes to include in the report. Supported values are specific
   *   to the report type. Rules for `includeGroups`:
   * - If the array is empty (`"value": []`), all groups will be shown.
   * - If no filter is provided, all groups will be shown.
   * - If an array of codes is provided, only these specific groups will be shown.
   * - If the value is `null`, no groups will be shown.
   *
   * @returns The server will return link to a job endpoint which can be polled to track the
   * progress of the report creation.
   *
   * @throws {@link Reports.CreatereportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createreport(
    request: Reports.CreatereportRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportsResponse, Reports.CreatereportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: reportsRequestSchema },
      },
      {
        success: { kind: "json", schema: reportsResponseSchema },
        errorFactory: Reports.CreatereportError,
      },
      options,
    );
  }

  /**
   * Delete a report
   *
   * @remarks
   * Permanently deletes a report and all associated snapshot data.
   *
   * @returns Deletion succeeded.
   *
   * @throws {@link Reports.DeleteReportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReport(
    request: Reports.DeleteReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Reports.DeleteReportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/reports/{id}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Reports.DeleteReportError,
      },
      options,
    );
  }

  /**
   * List report types
   *
   * @remarks
   * Use this endpoint to retrieve a list of supported reports. This identifies the complete list of
   * supported reports, which can be used to create reports on.
   *
   * @returns Success
   *
   * @throws {@link Reports.ListReportTypesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReportTypes(options?: RequestOptions): ApiPromise<ReportsTypesResponse, Reports.ListReportTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/types"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportsTypesResponseSchema },
        errorFactory: Reports.ListReportTypesError,
      },
      options,
    );
  }

  /**
   * List all reports
   *
   * @remarks
   * Use this endpoint to retrieve a list of created reports. Every created report is saved as a
   * snapshot and can be retrieved up to 24 hours after creation.You can call the reports/types
   * endpoint to see the list of supported reports. reports.
   *
   * @returns Success
   *
   * @throws {@link Reports.ListallreportsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listallreports(options?: RequestOptions): ApiPromise<ReportsResponse2, Reports.ListallreportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.servicesToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportsResponse2Schema },
        errorFactory: Reports.ListallreportsError,
      },
      options,
    );
  }

  /**
   * Retrieve a report
   *
   * @remarks
   * Use this endpoint to retrieve a specific report. Ensure you check the documentation for the
   * schema of each report type.
   *
   * | Request Header | Description |
   * |----------------|-----------------------------------------------------------------------------|
   * | Accept | Specifies the format of the response. Use `application/pdf` |
   *
   * If you want to generate the PDF, make sure to change `accept` in the CURL request to
   * `application/pdf` for PDF generation.
   *
   * @returns Success
   *
   * @throws {@link Reports.RetrieveReportError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveReport(
    request: Reports.RetrieveReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Reports.RetrieveReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{id}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Reports.RetrieveReportError,
      },
      options,
    );
  }

  /**
   * Retrieve Report transactions
   *
   * @remarks
   * Retrieve transactions belonging to the report identified by {reportId}.
   *
   * @returns Returns a list with a data property that contains an array of transactions. Each entry
   * in the array is a separate object. If no data is returned, the resulting array will be empty.
   *
   * @throws {@link Reports.RetrieveReportTransactionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveReportTransactions(
    request: Reports.RetrieveReportTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsContainerObject, Reports.RetrieveReportTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/{reportId}/transactions"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "reportId", value: request.reportId, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsContainerObjectSchema },
        errorFactory: Reports.RetrieveReportTransactionsError,
      },
      options,
    );
  }

  /**
   * Retrieve a report type
   *
   * @remarks
   * Retrieve information about a specific report type identified by {reportId}.
   *
   * @returns Success
   *
   * @throws {@link Reports.RetrieveSpecificReportTypeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveSpecificReportType(
    request: Reports.RetrieveSpecificReportTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ReportsTypesResponse, Reports.RetrieveSpecificReportTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports/types/{reportTypeId}"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "reportTypeId", value: request.reportTypeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportsTypesResponseSchema },
        errorFactory: Reports.RetrieveSpecificReportTypeError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type CreatereportRequest = {
    /** Include the details of the report you would like to create along with the filters. */
    body: ReportsRequest;
  };

  export class CreatereportError extends ApiError {
    declare readonly payload:
      | Declared<"reportsResponse12", ReportsResponse12>
      | Declared<"reports403Error1", Reports403Error1>
      | Declared<"reports404Error1", Reports404Error1>
      | Declared<"reports500Error1", Reports500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatereportError> = [
      { on: 400, kind: "reportsResponse12", decode: { kind: "json", schema: reportsResponse12Schema } },
      { on: 403, kind: "reports403Error1", decode: { kind: "json", schema: reports403Error1Schema } },
      { on: 404, kind: "reports404Error1", decode: { kind: "json", schema: reports404Error1Schema } },
      { on: 500, kind: "reports500Error1", decode: { kind: "json", schema: reports500Error1Schema } },
    ];
  }

  export type DeleteReportRequest = {
    /** The ID of the generated report */
    id: string;
  };

  export class DeleteReportError extends ApiError {
    declare readonly payload:
      | Declared<"reports400Error21", Reports400Error21>
      | Declared<"reports403Error31", Reports403Error31>
      | Declared<"reports404Error31", Reports404Error31>
      | Declared<"reports500Error31", Reports500Error31>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReportError> = [
      { on: 400, kind: "reports400Error21", decode: { kind: "json", schema: reports400Error21Schema } },
      { on: 403, kind: "reports403Error31", decode: { kind: "json", schema: reports403Error31Schema } },
      { on: 404, kind: "reports404Error31", decode: { kind: "json", schema: reports404Error31Schema } },
      { on: 500, kind: "reports500Error31", decode: { kind: "json", schema: reports500Error31Schema } },
    ];
  }

  export class ListReportTypesError extends ApiError {
    declare readonly payload:
      | Declared<"reportsTypes400Error1", ReportsTypes400Error1>
      | Declared<"reportsTypes403Error1", ReportsTypes403Error1>
      | Declared<"reportsTypes404Error1", ReportsTypes404Error1>
      | Declared<"reportsTypes500Error1", ReportsTypes500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReportTypesError> = [
      {
        on: 400,
        kind: "reportsTypes400Error1",
        decode: { kind: "json", schema: reportsTypes400Error1Schema },
      },
      {
        on: 403,
        kind: "reportsTypes403Error1",
        decode: { kind: "json", schema: reportsTypes403Error1Schema },
      },
      {
        on: 404,
        kind: "reportsTypes404Error1",
        decode: { kind: "json", schema: reportsTypes404Error1Schema },
      },
      {
        on: 500,
        kind: "reportsTypes500Error1",
        decode: { kind: "json", schema: reportsTypes500Error1Schema },
      },
    ];
  }

  export class ListallreportsError extends ApiError {
    declare readonly payload:
      | Declared<"reports400Error1", Reports400Error1>
      | Declared<"reports403Error21", Reports403Error21>
      | Declared<"reports404Error21", Reports404Error21>
      | Declared<"reports500Error21", Reports500Error21>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListallreportsError> = [
      { on: 400, kind: "reports400Error1", decode: { kind: "json", schema: reports400Error1Schema } },
      { on: 403, kind: "reports403Error21", decode: { kind: "json", schema: reports403Error21Schema } },
      { on: 404, kind: "reports404Error21", decode: { kind: "json", schema: reports404Error21Schema } },
      { on: 500, kind: "reports500Error21", decode: { kind: "json", schema: reports500Error21Schema } },
    ];
  }

  export type RetrieveReportRequest = {
    /** The ID of the generated report */
    id: string;
  };

  export class RetrieveReportError extends ApiError {
    declare readonly payload:
      | Declared<"reports400Error21", Reports400Error21>
      | Declared<"reports403Error31", Reports403Error31>
      | Declared<"reports404Error31", Reports404Error31>
      | Declared<"reports500Error31", Reports500Error31>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveReportError> = [
      { on: 400, kind: "reports400Error21", decode: { kind: "json", schema: reports400Error21Schema } },
      { on: 403, kind: "reports403Error31", decode: { kind: "json", schema: reports403Error31Schema } },
      { on: 404, kind: "reports404Error31", decode: { kind: "json", schema: reports404Error31Schema } },
      { on: 500, kind: "reports500Error31", decode: { kind: "json", schema: reports500Error31Schema } },
    ];
  }

  export type RetrieveReportTransactionsRequest = {
    /** The ID of the generated report */
    reportId: string;
    /**
     * - account.id.eq('15a28893-e8c9-4441-a076-470195218738')
     * - transaction.postDate.bt('2022-10-01,2022-10-10')
     * - transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z')
     * - institution.id.eq('AU00001')
     * - connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe')
     * - transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c')
     * - transaction.direction.eq('credit')
     * - transaction.class.eq('transfer')
     * - transaction.status.eq('posted')
     *
     * Transactions can be filtered based on date & datetime.
     */
    filter?: string;
  };

  export class RetrieveReportTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"reportsTransactions400Error1", ReportsTransactions400Error1>
      | Declared<"reportsTransactions403Error1", ReportsTransactions403Error1>
      | Declared<"reportsTransactions404Error1", ReportsTransactions404Error1>
      | Declared<"reportsTransactions500Error1", ReportsTransactions500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveReportTransactionsError> = [
      {
        on: 400,
        kind: "reportsTransactions400Error1",
        decode: { kind: "json", schema: reportsTransactions400Error1Schema },
      },
      {
        on: 403,
        kind: "reportsTransactions403Error1",
        decode: { kind: "json", schema: reportsTransactions403Error1Schema },
      },
      {
        on: 404,
        kind: "reportsTransactions404Error1",
        decode: { kind: "json", schema: reportsTransactions404Error1Schema },
      },
      {
        on: 500,
        kind: "reportsTransactions500Error1",
        decode: { kind: "json", schema: reportsTransactions500Error1Schema },
      },
    ];
  }

  export type RetrieveSpecificReportTypeRequest = {
    /** The type of the report */
    reportTypeId: string;
  };

  export class RetrieveSpecificReportTypeError extends ApiError {
    declare readonly payload:
      | Declared<"reportsTypes400Error1", ReportsTypes400Error1>
      | Declared<"reportsTypes403Error1", ReportsTypes403Error1>
      | Declared<"reportsTypes404Error1", ReportsTypes404Error1>
      | Declared<"reportsTypes500Error1", ReportsTypes500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveSpecificReportTypeError> = [
      {
        on: 400,
        kind: "reportsTypes400Error1",
        decode: { kind: "json", schema: reportsTypes400Error1Schema },
      },
      {
        on: 403,
        kind: "reportsTypes403Error1",
        decode: { kind: "json", schema: reportsTypes403Error1Schema },
      },
      {
        on: 404,
        kind: "reportsTypes404Error1",
        decode: { kind: "json", schema: reportsTypes404Error1Schema },
      },
      {
        on: 500,
        kind: "reportsTypes500Error1",
        decode: { kind: "json", schema: reportsTypes500Error1Schema },
      },
    ];
  }
}

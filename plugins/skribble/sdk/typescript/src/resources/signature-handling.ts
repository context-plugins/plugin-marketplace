import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  signatureCallbacksInResponseInternalSchema,
  type SignatureCallbacksInResponse,
} from "../models/signature-callbacks-in-response.js";
import {
  signatureResponseV3InternalSchema,
  type SignatureResponseV3,
} from "../models/signature-response-v3.js";
import { signatureResponseInternalSchema, type SignatureResponse } from "../models/signature-response.js";
import { signatureStatusCodeSchema, type SignatureStatusCode } from "../models/signature-status-code.js";
import {
  signatureStatusOverallSchema,
  type SignatureStatusOverall,
} from "../models/signature-status-overall.js";
import {
  TypeSkribbleSignatureHandlingApi,
  typeSkribbleSignatureHandlingApiSchema,
} from "../models/type-skribble-signature-handling-api.js";
import {
  updateSignatureRequestInternalSchema,
  type UpdateSignatureRequest,
} from "../models/update-signature-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for handling signature requests and callbacks.
 */
export class SignatureHandling {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Signature Requests by bulk
   *
   * @remarks
   * Retrieves multiple `SignatureRequest` objects in a single call.
   *
   * Provide a JSON array of `SignatureRequest` IDs in the request body to specify which records to
   * fetch. The response includes only the `SignatureRequests` that were successfully found. IDs
   * that do not match any existing record are silently ignored.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.BulkGetSignatureRequestsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkGetSignatureRequests(
    request: SignatureHandling.BulkGetSignatureRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponse[], SignatureHandling.BulkGetSignatureRequestsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests/bulk"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => signatureResponseInternalSchema)) },
        errorFactory: SignatureHandling.BulkGetSignatureRequestsError,
      },
      options,
    );
  }

  /**
   * Clear the expiry date of a Signature Request
   *
   * @remarks
   * **Early access.** This endpoint is available to opted-in businesses only. To request access,
   * contact support@skribble.com.
   *
   * Clearing the expiry requires the signature-request expiry feature to be enabled for the
   * business. If it is not, the request fails with `403 Forbidden` (problem type
   * `feature-not-enabled`).
   *
   * Clears the owner-set `expires_at` date from a `SignatureRequest` in `status_overall=DRAFT`.
   *
   * After this call the `SignatureRequest` no longer has an owner-set expiry. The `auto_delete_at`
   * retention date (if any) is unaffected.
   *
   * **Constraints**
   *
   * - Only allowed while `status_overall=DRAFT`. Calling this on a non-`DRAFT` request returns `400
   *   Bad Request`.
   * - Requires the same write access as updating the `SignatureRequest`.
   *
   * @returns Expiry date cleared.
   *
   * @throws {@link SignatureHandling.DeleteSignatureRequestExpiresAtError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSignatureRequestExpiresAt(
    request: SignatureHandling.DeleteSignatureRequestExpiresAtRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureHandling.DeleteSignatureRequestExpiresAtError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi(
          "/signature-requests/{SR_ID}/expires-at",
        ),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureHandling.DeleteSignatureRequestExpiresAtError,
      },
      options,
    );
  }

  /**
   * Get Signature Request Report
   *
   * @remarks
   * Provides the signature report for a specific signature request.
   *
   * By default, the report is returned as a human-readable, digitally signed PDF document.
   * Optionally, the report format can be changed using the `type` query parameter (e.g. JSON or
   * HTML).
   *
   * The report contains all relevant information about the signature process, including
   * signatories, timestamps, and verification details. It serves as legally valid proof of the
   * completed signing process and can be stored or shared for auditing, compliance, or
   * record-keeping purposes.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.GetSignatureReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureReport(
    request: SignatureHandling.GetSignatureReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, SignatureHandling.GetSignatureReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/report"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(typeSkribbleSignatureHandlingApiSchema, TypeSkribbleSignatureHandlingApi.Pdf),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: SignatureHandling.GetSignatureReportError,
      },
      options,
    );
  }

  /**
   * List and find Signature Requests
   *
   * @remarks
   * Returns all `SignatureRequest` objects that the current user has sufficient access rights to.
   *
   * **Filter**
   *
   * You can optionally filter results using one or more of the optional parameters.
   *
   * Filters search for an exact match of the corresponding field value. This means the filter is
   * case-sensitive and will not match partial values. For example,
   * _account_email=john.doe@skribble.com_ will only match a `SignatureRequest` where the
   * `account_email` field is exactly john.doe@skribble.com and will not match
   * another.john.doe@skribble.com.
   *
   * Exception: The `search` parameter searches for document titles that contain the search term.
   *
   * **Pagination**
   *
   * The result set can be controlled using the optional pagination parameters `page_number` and
   * `page_size`, which helps prevent excessively large result sets.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.GetSignatureRequestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureRequest(
    request: SignatureHandling.GetSignatureRequestRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3[], SignatureHandling.GetSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "account_email", value: request.accountEmail, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          {
            name: "signature_status",
            value: request.signatureStatus,
            schema: s.optional(s.lazy(() => signatureStatusCodeSchema)),
          },
          {
            name: "status_overall",
            value: request.statusOverall,
            schema: s.optional(s.lazy(() => signatureStatusOverallSchema)),
          },
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.float64()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => signatureResponseV3InternalSchema)) },
        errorFactory: SignatureHandling.GetSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Get callback details for a signature request
   *
   * @remarks
   * Returns detailed information about the callbacks associated with a `SignatureRequest`. Use this
   * endpoint to confirm whether a callback has been executed or to identify errors that occurred
   * during the callback process.
   *
   * **Result**
   *
   * If no callbacks have been triggered yet, the response will be an empty array. Otherwise, it
   * contains an array of `callback` objects that have already been executed.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.GetSignatureRequestCallbacksV3Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureRequestCallbacksV3(
    request: SignatureHandling.GetSignatureRequestCallbacksV3Request,
    options?: RequestOptions,
  ): ApiPromise<SignatureCallbacksInResponse[], SignatureHandling.GetSignatureRequestCallbacksV3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi(
          "/signature-requests/{SR_ID}/callbacks",
        ),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => signatureCallbacksInResponseInternalSchema)) },
        errorFactory: SignatureHandling.GetSignatureRequestCallbacksV3Error,
      },
      options,
    );
  }

  /**
   * Get a Signature Request
   *
   * @remarks
   * Fetches a `SignatureRequest` by its ID.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.GetSignatureRequestDetails2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureRequestDetails2(
    request: SignatureHandling.GetSignatureRequestDetails2Request,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3, SignatureHandling.GetSignatureRequestDetails2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureResponseV3InternalSchema },
        errorFactory: SignatureHandling.GetSignatureRequestDetails2Error,
      },
      options,
    );
  }

  /**
   * Remind Open Signers of a Signature Request
   *
   * @remarks
   * In addition to the automatic signature reminders, manual reminders can also be initiated via
   * the Skribble web application and also via the API.
   *
   * This allows for greater flexibility in managing signature requests, ensuring that important
   * documents are signed promptly. By using both automatic and manual reminders, you can tailor
   * your approach to suit the specific needs of your users or customers.
   *
   * **Limits**
   *
   * There is an hourly limit on the number of signature reminders that can be sent. This limit
   * ensures that reminders are used responsibly and prevents excessive notifications. Generally,
   * this restriction should not affect you if you use this feature appropriately. By adhering to
   * this limit, you can effectively manage your signature requests without overwhelming your users
   * or customers with frequent reminders.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.RemindSignatureRequestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  remindSignatureRequest(
    request: SignatureHandling.RemindSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureHandling.RemindSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests/{SR_ID}/remind"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureHandling.RemindSignatureRequestError,
      },
      options,
    );
  }

  /**
   * Update a Signature Request
   *
   * @remarks
   * Updates an existing `SignatureRequest`. We recommend creating the `SignatureRequest` with all
   * necessary information upfront and using this endpoint only when changes are required.
   *
   * The following fields can be updated: `title`, `message`, `legislation`, `quality`,
   * `signatures`, `callback_success_url`, `callback_error_url`, `callback_update_url`, `custom`,
   * `attach_on_success`, `read_access`, and `write_access`.
   *
   * Observers are managed separately via the dedicated `/observers` endpoints.
   *
   * **Updating signers**
   *
   * To add or remove signers, provide the complete desired state of the `signatures` array:
   *
   * - To add a signer, include the new entry alongside all existing signers.
   * - To remove a signer, omit their entry from the array.
   *
   * Alternatively, use the dedicated `/signatures` endpoints to add or remove individual signers
   * without having to send the full list.
   *
   * > **Important:** When updating via this endpoint, any signer not present in the `signatures`
   * array will be removed. Changes to signers can only be made as long as none of the signers have
   * already completed their signature.
   *
   * @returns OK
   *
   * @throws {@link SignatureHandling.UpdateSignatureRequestError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSignatureRequest(
    request: SignatureHandling.UpdateSignatureRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3, SignatureHandling.UpdateSignatureRequestError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultSkribbleSignatureHandlingApi("/signature-requests"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateSignatureRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: signatureResponseV3InternalSchema },
        errorFactory: SignatureHandling.UpdateSignatureRequestError,
      },
      options,
    );
  }
}

export namespace SignatureHandling {
  export type BulkGetSignatureRequestsRequest = {
    /** Array of SignatureRequest IDs to retrieve. */
    body: string[];
  };

  export class BulkGetSignatureRequestsError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkGetSignatureRequestsError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteSignatureRequestExpiresAtRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class DeleteSignatureRequestExpiresAtError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSignatureRequestExpiresAtError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureReportRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Format of the Report. @default TypeSkribbleSignatureHandlingApi.Pdf */
    type?: TypeSkribbleSignatureHandlingApi;
  };

  export class GetSignatureReportError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureReportError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureRequestRequest = {
    /** Filter on the field `signatures[].account_email` */
    accountEmail?: string;
    /** Filter on the field `title` to search for documents containing the serach term. */
    search?: string;
    /** Filter on the field `signatures[].status_code` with one of the valid Signature states */
    signatureStatus?: SignatureStatusCode;
    /** Filter on the field `status_overall` with one of the valid Signature states */
    statusOverall?: SignatureStatusOverall;
    /** Page number for pagination. By default pagination is disabled. */
    pageNumber?: number;
    /** Page size for pagination. @default 50 */
    pageSize?: number;
  };

  export const getSignatureRequestRequestSchema: Schema<GetSignatureRequestRequest> = s.lazySchema(() =>
    s.object<GetSignatureRequestRequest>({
      accountEmail: s.optional(s.string().check(s.email())),
      search: s.optional(s.string()),
      signatureStatus: s.optional(s.lazy(() => signatureStatusCodeSchema)),
      statusOverall: s.optional(s.lazy(() => signatureStatusOverallSchema)),
      pageNumber: s.optional(s.float64().check(s.gte(1))),
      pageSize: s.defaulted(s.float64().check(s.gte(0)), 50),
    }),
  );

  export class GetSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureRequestCallbacksV3Request = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class GetSignatureRequestCallbacksV3Error extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureRequestCallbacksV3Error> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureRequestDetails2Request = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class GetSignatureRequestDetails2Error extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureRequestDetails2Error> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type RemindSignatureRequestRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class RemindSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemindSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type UpdateSignatureRequestRequest = {
    /** Request body to update a SignatureRequest object */
    body: UpdateSignatureRequest;
  };

  export class UpdateSignatureRequestError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSignatureRequestError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkDocumentAccessRequestSchema,
  type CheckDocumentAccessRequest,
} from "../models/check-document-access-request.js";
import {
  checkDocumentAccessResponseSchema,
  type CheckDocumentAccessResponse,
} from "../models/check-document-access-response.js";
import {
  debugDatasourceStatusResponseSchema,
  type DebugDatasourceStatusResponse,
} from "../models/debug-datasource-status-response.js";
import {
  debugDocumentLifecycleRequestSchema,
  type DebugDocumentLifecycleRequest,
} from "../models/debug-document-lifecycle-request.js";
import {
  debugDocumentLifecycleResponseSchema,
  type DebugDocumentLifecycleResponse,
} from "../models/debug-document-lifecycle-response.js";
import { debugDocumentRequestSchema, type DebugDocumentRequest } from "../models/debug-document-request.js";
import {
  debugDocumentResponseSchema,
  type DebugDocumentResponse,
} from "../models/debug-document-response.js";
import {
  debugDocumentsRequestSchema,
  type DebugDocumentsRequest,
} from "../models/debug-documents-request.js";
import {
  debugDocumentsResponseSchema,
  type DebugDocumentsResponse,
} from "../models/debug-documents-response.js";
import { debugUserRequestSchema, type DebugUserRequest } from "../models/debug-user-request.js";
import { debugUserResponseSchema, type DebugUserResponse } from "../models/debug-user-response.js";
import {
  getDocumentCountRequestSchema,
  type GetDocumentCountRequest,
} from "../models/get-document-count-request.js";
import {
  getDocumentCountResponseSchema,
  type GetDocumentCountResponse,
} from "../models/get-document-count-response.js";
import {
  getDocumentStatusRequestSchema,
  type GetDocumentStatusRequest,
} from "../models/get-document-status-request.js";
import {
  getDocumentStatusResponseSchema,
  type GetDocumentStatusResponse,
} from "../models/get-document-status-response.js";
import { getUserCountRequestSchema, type GetUserCountRequest } from "../models/get-user-count-request.js";
import { getUserCountResponseSchema, type GetUserCountResponse } from "../models/get-user-count-response.js";
import type { Servers } from "../servers.js";

export class Troubleshooting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Beta: Get datasource status
   *
   * @remarks
   * Gather information about the datasource's overall status. Currently in beta, might undergo
   * breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting
   * tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.BetaGetDatasourceStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaGetDatasourceStatus(
    request: Troubleshooting.BetaGetDatasourceStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DebugDatasourceStatusResponse, Troubleshooting.BetaGetDatasourceStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/debug/{datasource}/status"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "datasource", value: request.datasource, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: debugDatasourceStatusResponseSchema },
        errorFactory: Troubleshooting.BetaGetDatasourceStatusError,
      },
      options,
    );
  }

  /**
   * Beta: Get document information
   *
   * @remarks
   * Gives various information that would help in debugging related to a particular document.
   * Currently in beta, might undergo breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting
   * tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.BetaGetDocumentInformationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaGetDocumentInformation(
    request: Troubleshooting.BetaGetDocumentInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DebugDocumentResponse, Troubleshooting.BetaGetDocumentInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/debug/{datasource}/document"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "datasource", value: request.datasource, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: debugDocumentRequestSchema },
      },
      {
        success: { kind: "json", schema: debugDocumentResponseSchema },
        errorFactory: Troubleshooting.BetaGetDocumentInformationError,
      },
      options,
    );
  }

  /**
   * Beta: Get document lifecycle events
   *
   * @remarks
   * Retrieves lifecycle events for a specific document including upload time, index times and
   * deletions. Rate limited to 1 request per minute per datasource. Currently in beta, might
   * undergo breaking changes without prior notice.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.BetaGetDocumentLifecycleEventsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaGetDocumentLifecycleEvents(
    request: Troubleshooting.BetaGetDocumentLifecycleEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<DebugDocumentLifecycleResponse, Troubleshooting.BetaGetDocumentLifecycleEventsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/debug/{datasource}/document/events"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "datasource", value: request.datasource, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: debugDocumentLifecycleRequestSchema },
      },
      {
        success: { kind: "json", schema: debugDocumentLifecycleResponseSchema },
        errorFactory: Troubleshooting.BetaGetDocumentLifecycleEventsError,
      },
      options,
    );
  }

  /**
   * Beta: Get information of a batch of documents
   *
   * @remarks
   * Gives various information that would help in debugging related to a batch of documents.
   * Currently in beta, might undergo breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting
   * tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.BetaGetInformationOfABatchOfDocumentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaGetInformationOfABatchOfDocuments(
    request: Troubleshooting.BetaGetInformationOfABatchOfDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DebugDocumentsResponse, Troubleshooting.BetaGetInformationOfABatchOfDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/debug/{datasource}/documents"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "datasource", value: request.datasource, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: debugDocumentsRequestSchema },
      },
      {
        success: { kind: "json", schema: debugDocumentsResponseSchema },
        errorFactory: Troubleshooting.BetaGetInformationOfABatchOfDocumentsError,
      },
      options,
    );
  }

  /**
   * Beta: Get user information
   *
   * @remarks
   * Gives various information that would help in debugging related to a particular user. Currently
   * in beta, might undergo breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting
   * tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.BetaGetUserInformationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  betaGetUserInformation(
    request: Troubleshooting.BetaGetUserInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DebugUserResponse, Troubleshooting.BetaGetUserInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/debug/{datasource}/user"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "datasource", value: request.datasource, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: debugUserRequestSchema },
      },
      {
        success: { kind: "json", schema: debugUserResponseSchema },
        errorFactory: Troubleshooting.BetaGetUserInformationError,
      },
      options,
    );
  }

  /**
   * Check document access
   *
   * @remarks
   * Check if a given user has access to access a document in a custom datasource
   *
   * Tip: Refer to the [Troubleshooting
   * tutorial](https://developers.glean.com/indexing/debugging/datasource-config) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.CheckDocumentAccessError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  checkDocumentAccess(
    request: Troubleshooting.CheckDocumentAccessRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CheckDocumentAccessResponse, Troubleshooting.CheckDocumentAccessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/checkdocumentaccess"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: checkDocumentAccessRequestSchema },
      },
      {
        success: { kind: "json", schema: checkDocumentAccessResponseSchema },
        errorFactory: Troubleshooting.CheckDocumentAccessError,
      },
      options,
    );
  }

  /**
   * Get document count
   *
   * @remarks
   * Fetches document count for the specified custom datasource.
   *
   * Tip: Use
   * [/debug/{datasource}/status](https://developers.glean.com/indexing/debugging/datasource-status)
   * for richer information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.GetDocumentCountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getDocumentCount(
    request: Troubleshooting.GetDocumentCountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetDocumentCountResponse, Troubleshooting.GetDocumentCountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/getdocumentcount"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDocumentCountRequestSchema },
      },
      {
        success: { kind: "json", schema: getDocumentCountResponseSchema },
        errorFactory: Troubleshooting.GetDocumentCountError,
      },
      options,
    );
  }

  /**
   * Get document upload and indexing status
   *
   * @remarks
   * Intended for debugging/validation. Fetches the current upload and indexing status of documents.
   *
   * Tip: Use
   * [/debug/{datasource}/document](https://developers.glean.com/indexing/debugging/datasource-document)
   * for richer information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.GetDocumentUploadAndIndexingStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getDocumentUploadAndIndexingStatus(
    request: Troubleshooting.GetDocumentUploadAndIndexingStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDocumentStatusResponse, Troubleshooting.GetDocumentUploadAndIndexingStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/getdocumentstatus"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDocumentStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: getDocumentStatusResponseSchema },
        errorFactory: Troubleshooting.GetDocumentUploadAndIndexingStatusError,
      },
      options,
    );
  }

  /**
   * Get user count
   *
   * @remarks
   * Fetches user count for the specified custom datasource.
   *
   * Tip: Use
   * [/debug/{datasource}/status](https://developers.glean.com/indexing/debugging/datasource-status)
   * for richer information.
   *
   * @returns OK
   *
   * @throws {@link Troubleshooting.GetUserCountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUserCount(
    request: Troubleshooting.GetUserCountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetUserCountResponse, Troubleshooting.GetUserCountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/getusercount"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getUserCountRequestSchema },
      },
      {
        success: { kind: "json", schema: getUserCountResponseSchema },
        errorFactory: Troubleshooting.GetUserCountError,
      },
      options,
    );
  }
}

export namespace Troubleshooting {
  export type BetaGetDatasourceStatusRequest = {
    /** The datasource to get debug status for. */
    datasource: string;
  };

  export class BetaGetDatasourceStatusError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BetaGetDatasourceStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type BetaGetDocumentInformationRequest = {
    /** The datasource to which the document belongs */
    datasource: string;
    body: DebugDocumentRequest;
  };

  export class BetaGetDocumentInformationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BetaGetDocumentInformationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type BetaGetDocumentLifecycleEventsRequest = {
    /** The datasource to which the document belongs */
    datasource: string;
    body: DebugDocumentLifecycleRequest;
  };

  export class BetaGetDocumentLifecycleEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BetaGetDocumentLifecycleEventsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type BetaGetInformationOfABatchOfDocumentsRequest = {
    /** The datasource to which the document belongs */
    datasource: string;
    body: DebugDocumentsRequest;
  };

  export class BetaGetInformationOfABatchOfDocumentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BetaGetInformationOfABatchOfDocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type BetaGetUserInformationRequest = {
    /** The datasource to which the user belongs */
    datasource: string;
    body: DebugUserRequest;
  };

  export class BetaGetUserInformationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BetaGetUserInformationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type CheckDocumentAccessRequestParams = {
    body: CheckDocumentAccessRequest;
  };

  export class CheckDocumentAccessError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckDocumentAccessError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetDocumentCountRequestParams = {
    body: GetDocumentCountRequest;
  };

  export class GetDocumentCountError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentCountError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type GetDocumentUploadAndIndexingStatusRequest = {
    body: GetDocumentStatusRequest;
  };

  export class GetDocumentUploadAndIndexingStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentUploadAndIndexingStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetUserCountRequestParams = {
    body: GetUserCountRequest;
  };

  export class GetUserCountError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserCountError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}

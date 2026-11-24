import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema,
  type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
} from "../models/async-job-start-response-ui-path-document-understanding-extraction-api.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import { extractionRequestSchema, type ExtractionRequest } from "../models/extraction-request.js";
import { extractionResultInternalSchema, type ExtractionResult } from "../models/extraction-result.js";
import type { Servers } from "../servers.js";

/**
 * Extract structured data fields from documents
 */
export class Extraction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Start Asynchronous Document Extraction
   *
   * @remarks
   * Submits a previously digitized document for asynchronous data extraction. The extractors to
   * apply and the document type must be specified in the request body. Returns a requestId to poll
   * for results. Results are retained for 24 hours. Use GET /extraction/{requestId}/result to
   * retrieve extracted field values once processing completes.
   *
   * @returns Extraction job started; use the returned requestId to poll for results
   *
   * @throws {@link Extraction.ExtractDocumentAsyncError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extractDocumentAsync(
    request: Extraction.ExtractDocumentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
    Extraction.ExtractDocumentAsyncError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/extraction/start",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: extractionRequestSchema },
      },
      {
        success: {
          kind: "json",
          schema: asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema,
        },
        errorFactory: Extraction.ExtractDocumentAsyncError,
      },
      options,
    );
  }

  /**
   * UiPath Get Asynchronous Extraction Result
   *
   * @remarks
   * Retrieves the result of an asynchronous extraction request by its requestId. The job status can
   * be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded
   * or Failed. Returns extracted field values with associated confidence scores. Results are
   * available for 24 hours from the time the job completed.
   *
   * @returns Extraction result or current job status
   *
   * @throws {@link Extraction.GetExtractionResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExtractionResult(
    request: Extraction.GetExtractionResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ExtractionResult, Extraction.GetExtractionResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/extraction/{requestId}/result",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "requestId", value: request.requestId, schema: s.string() },
        ],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: extractionResultInternalSchema },
        errorFactory: Extraction.GetExtractionResultError,
      },
      options,
    );
  }
}

export namespace Extraction {
  export type ExtractDocumentAsyncRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
    body: ExtractionRequest;
  };

  export class ExtractDocumentAsyncError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ExtractDocumentAsyncError> = [
      {
        on: 400,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type GetExtractionResultRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** Unique identifier of the asynchronous job request to retrieve results for */
    requestId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
  };

  export class GetExtractionResultError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExtractionResultError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}

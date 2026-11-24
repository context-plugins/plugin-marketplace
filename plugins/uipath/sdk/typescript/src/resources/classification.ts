import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  asyncJobStartResponseSchema,
  type AsyncJobStartResponse,
} from "../models/async-job-start-response.js";
import { classificationRequestSchema, type ClassificationRequest } from "../models/classification-request.js";
import {
  classificationResultInternalSchema,
  type ClassificationResult,
} from "../models/classification-result.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import type { Servers } from "../servers.js";

/**
 * Classify documents into predefined document types
 */
export class Classification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Start Asynchronous Document Classification
   *
   * @remarks
   * Submits a previously digitized document for asynchronous classification. Returns a requestId to
   * poll for results. Asynchronous mode is suited for multi-page documents and concurrent batch
   * workloads. Results are retained for 24 hours. Use GET /classification/{requestId}/result to
   * retrieve the classification outcome once processing is complete.
   *
   * @returns Classification job started; use the returned requestId to poll for results
   *
   * @throws {@link Classification.ClassifyDocumentAsyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  classifyDocumentAsync(
    request: Classification.ClassifyDocumentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<AsyncJobStartResponse, Classification.ClassifyDocumentAsyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/classification/start",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: classificationRequestSchema },
      },
      {
        success: { kind: "json", schema: asyncJobStartResponseSchema },
        errorFactory: Classification.ClassifyDocumentAsyncError,
      },
      options,
    );
  }

  /**
   * UiPath Get Asynchronous Classification Result
   *
   * @remarks
   * Retrieves the result of an asynchronous classification request by its requestId. The job status
   * can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is
   * Succeeded or Failed. Results are available for 24 hours from the time the job completed.
   *
   * @returns Classification result or current job status
   *
   * @throws {@link Classification.GetClassificationResultError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationResult(
    request: Classification.GetClassificationResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationResult, Classification.GetClassificationResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/classification/{requestId}/result",
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
        success: { kind: "json", schema: classificationResultInternalSchema },
        errorFactory: Classification.GetClassificationResultError,
      },
      options,
    );
  }
}

export namespace Classification {
  export type ClassifyDocumentAsyncRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
    body: ClassificationRequest;
  };

  export class ClassifyDocumentAsyncError extends ApiError {
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

    static readonly errors: ErrorDecoders<ClassifyDocumentAsyncError> = [
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

  export type GetClassificationResultRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** Unique identifier of the asynchronous job request to retrieve results for */
    requestId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
  };

  export class GetClassificationResultError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetClassificationResultError> = [
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

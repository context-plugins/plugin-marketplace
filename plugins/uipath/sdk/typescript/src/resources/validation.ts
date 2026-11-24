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
import { validationRequestInternalSchema, type ValidationRequest } from "../models/validation-request.js";
import type { Servers } from "../servers.js";

/**
 * Validate and correct digitization, classification, and extraction results
 */
export class Validation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Start Asynchronous Document Validation
   *
   * @remarks
   * Submits digitization, classification, and extraction results for asynchronous validation.
   * Validation checks the accuracy of previously processed results and may invoke human-in-the-loop
   * review for low-confidence extractions. Returns a requestId for polling.
   *
   * @returns Validation job started successfully
   *
   * @throws {@link Validation.ValidateDocumentAsyncError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validateDocumentAsync(
    request: Validation.ValidateDocumentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi,
    Validation.ValidateDocumentAsyncError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/validation/start",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: validationRequestInternalSchema },
      },
      {
        success: {
          kind: "json",
          schema: asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema,
        },
        errorFactory: Validation.ValidateDocumentAsyncError,
      },
      options,
    );
  }
}

export namespace Validation {
  export type ValidateDocumentAsyncRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
    body: ValidationRequest;
  };

  export class ValidateDocumentAsyncError extends ApiError {
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

    static readonly errors: ErrorDecoders<ValidateDocumentAsyncError> = [
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
}

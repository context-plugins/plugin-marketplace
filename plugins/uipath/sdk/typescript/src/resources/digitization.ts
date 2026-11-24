import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { digitizationRequestSchema, type DigitizationRequest } from "../models/digitization-request.js";
import { digitizationResultSchema, type DigitizationResult } from "../models/digitization-result.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import type { Servers } from "../servers.js";

/**
 * Convert documents into a digitized format for downstream processing
 */
export class Digitization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Digitize a Document
   *
   * @remarks
   * Submits a document for digitization, converting it into a structured digital representation
   * that can be used for classification, extraction, and validation. Supported input formats are
   * JPEG, PNG, PDF, and TIFF. The response includes a documentId that must be used in subsequent
   * classification, extraction, and validation requests. Digitized results are retained for seven
   * days.
   *
   * @returns Document digitized successfully
   *
   * @throws {@link Digitization.DigitizeDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  digitizeDocument(
    request: Digitization.DigitizeDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DigitizationResult, Digitization.DigitizeDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/digitization/start",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: digitizationRequestSchema },
      },
      {
        success: { kind: "json", schema: digitizationResultSchema },
        errorFactory: Digitization.DigitizeDocumentError,
      },
      options,
    );
  }
}

export namespace Digitization {
  export type DigitizeDocumentRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
    body: DigitizationRequest;
  };

  export class DigitizeDocumentError extends ApiError {
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

    static readonly errors: ErrorDecoders<DigitizeDocumentError> = [
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

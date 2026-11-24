import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import { deleteImportRequestSchema, type DeleteImportRequest } from "../models/delete-import-request.js";
import { deleteImportResponseSchema, type DeleteImportResponse } from "../models/delete-import-response.js";
import {
  describeImportResponseSchema,
  type DescribeImportResponse,
} from "../models/describe-import-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import { listImportsRequestSchema, type ListImportsRequest } from "../models/list-imports-request.js";
import { listImportsResponseSchema, type ListImportsResponse } from "../models/list-imports-response.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { startImportRequestSchema, type StartImportRequest } from "../models/start-import-request.js";
import { startImportResponseSchema, type StartImportResponse } from "../models/start-import-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Imports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Import
   *
   * @remarks
   * Removes a previous import and the associated file stored in an S3 bucket.
   *
   * @returns Success
   *
   * @throws {@link Imports.DeleteImportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteImport(
    request: Imports.DeleteImportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteImportResponse, Imports.DeleteImportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/imports/{importId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteImportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteImportResponseSchema },
        errorFactory: Imports.DeleteImportError,
      },
      options,
    );
  }

  /**
   * Describe Import
   *
   * @remarks
   * Gets information about a specific import.
   *
   * @returns Success
   *
   * @throws {@link Imports.DescribeImportError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeImport(
    request: Imports.DescribeImportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeImportResponse, Imports.DescribeImportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/imports/{importId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeImportResponseSchema },
        errorFactory: Imports.DescribeImportError,
      },
      options,
    );
  }

  /**
   * List Imports
   *
   * @remarks
   * Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for
   * 7 days.
   *
   * @returns Success
   *
   * @throws {@link Imports.ListImportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listImports(
    request: Imports.ListImportsRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListImportsResponse, Imports.ListImportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/imports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listImportsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listImportsResponseSchema },
        errorFactory: Imports.ListImportsError,
      },
      options,
    );
  }

  /**
   * Start Import
   *
   * @remarks
   * Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded
   * to an S3 bucket.
   *
   * @returns Success
   *
   * @throws {@link Imports.StartImportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startImport(
    request: Imports.StartImportRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<StartImportResponse, Imports.StartImportError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/imports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startImportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startImportResponseSchema },
        errorFactory: Imports.StartImportError,
      },
      options,
    );
  }
}

export namespace Imports {
  export type DeleteImportRequestParams = {
    importId: string;
    body?: DeleteImportRequest;
  };

  export class DeleteImportError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteImportError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeImportRequestParams = {
    importId: string;
  };

  export class DescribeImportError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeImportError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListImportsRequestParams = {
    body?: ListImportsRequest;
  };

  export class ListImportsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListImportsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartImportRequestParams = {
    body?: StartImportRequest;
  };

  export class StartImportError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartImportError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}

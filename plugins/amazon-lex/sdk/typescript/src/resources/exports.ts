import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import { createExportRequestSchema, type CreateExportRequest } from "../models/create-export-request.js";
import { createExportResponseSchema, type CreateExportResponse } from "../models/create-export-response.js";
import { deleteExportRequestSchema, type DeleteExportRequest } from "../models/delete-export-request.js";
import { deleteExportResponseSchema, type DeleteExportResponse } from "../models/delete-export-response.js";
import {
  describeExportResponseSchema,
  type DescribeExportResponse,
} from "../models/describe-export-response.js";
import { getExportResponseSchema, type GetExportResponse } from "../models/get-export-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import { listExportsRequestSchema, type ListExportsRequest } from "../models/list-exports-request.js";
import { listExportsResponseSchema, type ListExportsResponse } from "../models/list-exports-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
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
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { updateExportRequestSchema, type UpdateExportRequest } from "../models/update-export-request.js";
import { updateExportResponseSchema, type UpdateExportResponse } from "../models/update-export-response.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Exports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Export
   *
   * @remarks
   * Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a
   * directory structure that contains JSON files that define the bot. You can create an archive
   * that contains the complete definition of a bot, or you can specify that the archive contain
   * only the definition of a single bot locale. For more information about exporting bots, and
   * about the structure of the export archive, see Importing and exporting bots
   *
   * @returns Success
   *
   * @throws {@link Exports.CreateExportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExport(
    request: Exports.CreateExportRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<CreateExportResponse, Exports.CreateExportError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createExportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createExportResponseSchema },
        errorFactory: Exports.CreateExportError,
      },
      options,
    );
  }

  /**
   * Delete Export
   *
   * @remarks
   * Removes a previous export and the associated files stored in an S3 bucket.
   *
   * @returns Success
   *
   * @throws {@link Exports.DeleteExportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExport(
    request: Exports.DeleteExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteExportResponse, Exports.DeleteExportError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "exportId", value: request.exportId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteExportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteExportResponseSchema },
        errorFactory: Exports.DeleteExportError,
      },
      options,
    );
  }

  /**
   * Describe Export
   *
   * @remarks
   * Gets information about a specific export.
   *
   * @returns Success
   *
   * @throws {@link Exports.DescribeExportError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeExport(
    request: Exports.DescribeExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeExportResponse, Exports.DescribeExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "exportId", value: request.exportId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeExportResponseSchema },
        errorFactory: Exports.DescribeExportError,
      },
      options,
    );
  }

  /**
   * Get Export
   *
   * @remarks
   * Exports the contents of a Amazon Lex resource in a specified format.
   *
   * @returns Success
   *
   * @throws {@link Exports.GetExportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getExport(options?: RequestOptions): ApiPromise<GetExportResponse, Exports.GetExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getExportResponseSchema },
        errorFactory: Exports.GetExportError,
      },
      options,
    );
  }

  /**
   * List Exports
   *
   * @remarks
   * Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for
   * 7 days.
   *
   * @returns Success
   *
   * @throws {@link Exports.ListExportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExports(
    request: Exports.ListExportsRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListExportsResponse, Exports.ListExportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listExportsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listExportsResponseSchema },
        errorFactory: Exports.ListExportsError,
      },
      options,
    );
  }

  /**
   * Update Export
   *
   * @remarks
   * Updates the password used to protect an export zip archive. The password is not required. If
   * you don't supply a password, Amazon Lex generates a zip file that is not protected by a
   * password. This is the archive that is available at the pre-signed S3 URL provided by the
   * DescribeExport operation.
   *
   * @returns Success
   *
   * @throws {@link Exports.UpdateExportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateExport(
    request: Exports.UpdateExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateExportResponse, Exports.UpdateExportError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "exportId", value: request.exportId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateExportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateExportResponseSchema },
        errorFactory: Exports.UpdateExportError,
      },
      options,
    );
  }
}

export namespace Exports {
  export type CreateExportRequestParams = {
    body?: CreateExportRequest;
  };

  export class CreateExportError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateExportError> = [
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

  export type DeleteExportRequestParams = {
    exportId: string;
    body?: DeleteExportRequest;
  };

  export class DeleteExportError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteExportError> = [
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

  export type DescribeExportRequestParams = {
    exportId: string;
  };

  export class DescribeExportError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeExportError> = [
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

  export class GetExportError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExportError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type ListExportsRequestParams = {
    body?: ListExportsRequest;
  };

  export class ListExportsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListExportsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateExportRequestParams = {
    exportId: string;
    body?: UpdateExportRequest;
  };

  export class UpdateExportError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateExportError> = [
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

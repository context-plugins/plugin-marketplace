import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  createUploadUrlResponseSchema,
  type CreateUploadUrlResponse,
} from "../models/create-upload-url-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Createuploadurl {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Upload Url
   *
   * @remarks
   * Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a
   * bot locale.
   *
   * @returns Success
   *
   * @throws {@link Createuploadurl.CreateUploadUrlError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUploadUrl(
    request: Createuploadurl.CreateUploadUrlRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateUploadUrlResponse, Createuploadurl.CreateUploadUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/createuploadurl"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: createUploadUrlResponseSchema },
        errorFactory: Createuploadurl.CreateUploadUrlError,
      },
      options,
    );
  }
}

export namespace Createuploadurl {
  export type CreateUploadUrlRequest = {
    body?: Record<string, unknown>;
  };

  export class CreateUploadUrlError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUploadUrlError> = [
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
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}

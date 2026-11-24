import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  putEncryptionConfigRequestSchema,
  type PutEncryptionConfigRequest,
} from "../models/put-encryption-config-request.js";
import {
  putEncryptionConfigResultSchema,
  type PutEncryptionConfigResult,
} from "../models/put-encryption-config-result.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Putencryptionconfig {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Put Encryption Config
   *
   * @remarks
   * Updates the encryption configuration for X-Ray data.
   *
   * @returns Success
   *
   * @throws {@link Putencryptionconfig.PutEncryptionConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putEncryptionConfig(
    request: Putencryptionconfig.PutEncryptionConfigRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<PutEncryptionConfigResult, Putencryptionconfig.PutEncryptionConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/PutEncryptionConfig"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => putEncryptionConfigRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putEncryptionConfigResultSchema },
        errorFactory: Putencryptionconfig.PutEncryptionConfigError,
      },
      options,
    );
  }
}

export namespace Putencryptionconfig {
  export type PutEncryptionConfigRequestParams = {
    body?: PutEncryptionConfigRequest;
  };

  export class PutEncryptionConfigError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutEncryptionConfigError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}

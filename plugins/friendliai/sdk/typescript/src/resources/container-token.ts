import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  containerDetokenizationBodySchema,
  type ContainerDetokenizationBody,
} from "../models/container-detokenization-body.js";
import {
  containerDetokenizationSuccessSchema,
  type ContainerDetokenizationSuccess,
} from "../models/container-detokenization-success.js";
import {
  containerTokenizationBodySchema,
  type ContainerTokenizationBody,
} from "../models/container-tokenization-body.js";
import {
  containerTokenizationSuccessSchema,
  type ContainerTokenizationSuccess,
} from "../models/container-tokenization-success.js";
import type { Servers } from "../servers.js";

export class ContainerToken {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Detokenization
   *
   * @remarks
   * Convert a list of token IDs back into text.
   *
   * @returns Successfully detokenized the tokens.
   *
   * @throws {@link ContainerToken.ContainerDetokenizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerDetokenization(
    request: ContainerToken.ContainerDetokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<ContainerDetokenizationSuccess, ContainerToken.ContainerDetokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/detokenize"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerDetokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: containerDetokenizationSuccessSchema },
        errorFactory: ContainerToken.ContainerDetokenizationError,
      },
      options,
    );
  }

  /**
   * Tokenization
   *
   * @remarks
   * Convert text input into token IDs.
   *
   * @returns Successfully tokenized the text.
   *
   * @throws {@link ContainerToken.ContainerTokenizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerTokenization(
    request: ContainerToken.ContainerTokenizationRequest,
    options?: RequestOptions,
  ): ApiPromise<ContainerTokenizationSuccess, ContainerToken.ContainerTokenizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/tokenize"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerTokenizationBodySchema },
      },
      {
        success: { kind: "json", schema: containerTokenizationSuccessSchema },
        errorFactory: ContainerToken.ContainerTokenizationError,
      },
      options,
    );
  }
}

export namespace ContainerToken {
  export type ContainerDetokenizationRequest = {
    body: ContainerDetokenizationBody;
  };

  export class ContainerDetokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerDetokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerTokenizationRequest = {
    body: ContainerTokenizationBody;
  };

  export class ContainerTokenizationError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerTokenizationError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { v1CsrparserRequestSchema, type V1CsrparserRequest } from "../models/v1-csrparser-request.js";
import { v1CsrparserResponseSchema, type V1CsrparserResponse } from "../models/v1-csrparser-response.js";
import {
  v1DanevalidatorRequestSchema,
  type V1DanevalidatorRequest,
} from "../models/v1-danevalidator-request.js";
import {
  v1DanevalidatorResponseSchema,
  type V1DanevalidatorResponse,
} from "../models/v1-danevalidator-response.js";
import {
  v1HashgeneratorResponseSchema,
  type V1HashgeneratorResponse,
} from "../models/v1-hashgenerator-response.js";
import { v1HmacRequestSchema, type V1HmacRequest } from "../models/v1-hmac-request.js";
import { v1HmacResponseSchema, type V1HmacResponse } from "../models/v1-hmac-response.js";
import type { Servers } from "../servers.js";

export class Security {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CSR Parser
   *
   * @remarks
   * Parse a Certificate Signing Request and extract information
   *
   * @returns Successful Response
   *
   * @throws {@link Security.CsrparserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  csrparser(
    request: Security.CsrparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CsrparserResponse, Security.CsrparserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/csrparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CsrparserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CsrparserResponseSchema },
        errorFactory: Security.CsrparserError,
      },
      options,
    );
  }

  /**
   * DANE Record Validator
   *
   * @remarks
   * Validate a DANE/TLSA DNS record
   *
   * @returns Successful Response
   *
   * @throws {@link Security.DanevalidatorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  danevalidator(
    request: Security.DanevalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DanevalidatorResponse, Security.DanevalidatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/danevalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1DanevalidatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1DanevalidatorResponseSchema },
        errorFactory: Security.DanevalidatorError,
      },
      options,
    );
  }

  /**
   * Hash Generator
   *
   * @remarks
   * Generate cryptographic hashes using multiple algorithms
   *
   * @returns Successful Response
   *
   * @throws {@link Security.HashgeneratorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hashgenerator(
    request: Security.HashgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HashgeneratorResponse, Security.HashgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/hashgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.string() },
          { name: "algorithms", value: request.algorithms, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HashgeneratorResponseSchema },
        errorFactory: Security.HashgeneratorError,
      },
      options,
    );
  }

  /**
   * HMAC Generator
   *
   * @remarks
   * Generate an HMAC signature for a message
   *
   * @returns Successful Response
   *
   * @throws {@link Security.HmacError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hmac(
    request: Security.HmacRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HmacResponse, Security.HmacError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/hmac"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HmacRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HmacResponseSchema },
        errorFactory: Security.HmacError,
      },
      options,
    );
  }
}

export namespace Security {
  export type CsrparserRequest = {
    body: V1CsrparserRequest;
  };

  export class CsrparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CsrparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DanevalidatorRequest = {
    body: V1DanevalidatorRequest;
  };

  export class DanevalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DanevalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HashgeneratorRequest = {
    /** Text to hash */
    text: string;
    /** Comma-separated list of algorithms or 'all' */
    algorithms?: string;
  };

  export class HashgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HashgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HmacRequest = {
    body: V1HmacRequest;
  };

  export class HmacError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HmacError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

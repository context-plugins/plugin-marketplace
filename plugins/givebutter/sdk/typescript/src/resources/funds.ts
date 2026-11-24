import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import { fundResourceSchema, type FundResource } from "../models/fund-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { v1FundsRequestInternalSchema, type V1FundsRequest } from "../models/v1-funds-request.js";
import { v1FundsResponseInternalSchema, type V1FundsResponse } from "../models/v1-funds-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class Funds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a fund
   *
   * @throws {@link Funds.FundsDestroyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundsDestroy(
    request: Funds.FundsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Funds.FundsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/funds/{fund}"),
        auth: this.#auth.http,
        pathParams: [{ name: "fund", value: request.fund, schema: s.nullable(s.string()) }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Funds.FundsDestroyError,
      },
      options,
    );
  }

  /**
   * List all funds
   *
   * @returns Paginated set of `FundResource`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundsIndex(options?: RequestOptions): ApiPromise<V1FundsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/funds"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FundsResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a fund
   *
   * @returns `FundResource`
   *
   * @throws {@link Funds.FundsShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundsShow(
    request: Funds.FundsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<FundResource, Funds.FundsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/funds/{fund}"),
        auth: this.#auth.http,
        pathParams: [{ name: "fund", value: request.fund, schema: s.nullable(s.string()) }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundResourceSchema },
        errorFactory: Funds.FundsShowError,
      },
      options,
    );
  }

  /**
   * Create a fund
   *
   * @returns `FundResource`
   *
   * @throws {@link Funds.FundsStoreError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundsStore(
    request: Funds.FundsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<FundResource, Funds.FundsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/funds"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1FundsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: fundResourceSchema },
        errorFactory: Funds.FundsStoreError,
      },
      options,
    );
  }

  /**
   * Update a fund
   *
   * @returns `FundResource`
   *
   * @throws {@link Funds.FundsUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fundsUpdate(
    request: Funds.FundsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<FundResource, Funds.FundsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/funds/{fund}"),
        auth: this.#auth.http,
        pathParams: [{ name: "fund", value: request.fund, schema: s.nullable(s.string()) }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1FundsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: fundResourceSchema },
        errorFactory: Funds.FundsUpdateError,
      },
      options,
    );
  }
}

export namespace Funds {
  export type FundsDestroyRequest = {
    /** The fund fid */
    fund: string | null;
  };

  export class FundsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FundsDestroyError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type FundsShowRequest = {
    /** The fund fid */
    fund: string | null;
  };

  export class FundsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FundsShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type FundsStoreRequest = {
    body: V1FundsRequest;
  };

  export class FundsStoreError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<FundsStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type FundsUpdateRequest = {
    /** The fund fid */
    fund: string | null;
    body: V1FundsRequest;
  };

  export class FundsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<FundsUpdateError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}

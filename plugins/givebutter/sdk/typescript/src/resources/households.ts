import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  appHttpResourcesApiHouseholdResourceSchema,
  type AppHttpResourcesApiHouseholdResource,
} from "../models/app-http-resources-api-household-resource.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import { householdResourceSchema, type HouseholdResource } from "../models/household-resource.js";
import {
  householdStoreRequestInternalSchema,
  type HouseholdStoreRequest,
} from "../models/household-store-request.js";
import {
  householdUpdateRequestInternalSchema,
  type HouseholdUpdateRequest,
} from "../models/household-update-request.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class Households {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a household
   *
   * @returns No content
   *
   * @throws {@link Households.HouseholdsDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsDestroy(
    request: Households.HouseholdsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Households.HouseholdsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/households/{household}"),
        auth: this.#auth.http,
        pathParams: [{ name: "household", value: request.household, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Households.HouseholdsDestroyError,
      },
      options,
    );
  }

  /**
   * List all households
   *
   * @returns Array of `HouseholdResource`
   *
   * @throws {@link Households.HouseholdsIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsIndex(
    request: Households.HouseholdsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<HouseholdResource[], Households.HouseholdsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/households"),
        auth: this.#auth.http,
        pathParams: [],
        query: [
          { name: "headContactId", value: request.headContactId, schema: s.optionalNullable(s.string()) },
          { name: "contacts", value: request.contacts, schema: s.optionalNullable(s.string()) },
          { name: "query", value: request.query, schema: s.optionalNullable(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.optionalNullable(s.string()) },
          { name: "sortByDesc", value: request.sortByDesc, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.string(), "1") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => householdResourceSchema)) },
        errorFactory: Households.HouseholdsIndexError,
      },
      options,
    );
  }

  /**
   * Get a household
   *
   * @returns `App.Http.Resources.API.HouseholdResource`
   *
   * @throws {@link Households.HouseholdsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsShow(
    request: Households.HouseholdsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/households/{household}"),
        auth: this.#auth.http,
        pathParams: [{ name: "household", value: request.household, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appHttpResourcesApiHouseholdResourceSchema },
        errorFactory: Households.HouseholdsShowError,
      },
      options,
    );
  }

  /**
   * Create a household
   *
   * @returns `App.Http.Resources.API.HouseholdResource`
   *
   * @throws {@link Households.HouseholdsStoreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsStore(
    request: Households.HouseholdsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/households"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: householdStoreRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: appHttpResourcesApiHouseholdResourceSchema },
        errorFactory: Households.HouseholdsStoreError,
      },
      options,
    );
  }

  /**
   * Update a household
   *
   * @returns `App.Http.Resources.API.HouseholdResource`
   *
   * @throws {@link Households.HouseholdsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsUpdate(
    request: Households.HouseholdsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/households/{household}"),
        auth: this.#auth.http,
        pathParams: [{ name: "household", value: request.household, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => householdUpdateRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: appHttpResourcesApiHouseholdResourceSchema },
        errorFactory: Households.HouseholdsUpdateError,
      },
      options,
    );
  }
}

export namespace Households {
  export type HouseholdsDestroyRequest = {
    /** The household ID */
    household: number;
  };

  export class HouseholdsDestroyError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsDestroyError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type HouseholdsIndexRequest = {
    headContactId?: string | null;
    contacts?: string | null;
    query?: string | null;
    sortBy?: string | null;
    sortByDesc?: string | null;
    /** @default "1" */
    page?: string;
  };

  export class HouseholdsIndexError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsIndexError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type HouseholdsShowRequest = {
    /** The household ID */
    household: number;
  };

  export class HouseholdsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsShowError> = [
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

  export type HouseholdsStoreRequest = {
    body: HouseholdStoreRequest;
  };

  export class HouseholdsStoreError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsStoreError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type HouseholdsUpdateRequest = {
    /** The household ID */
    household: number;
    body?: HouseholdUpdateRequest;
  };

  export class HouseholdsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsUpdateError> = [
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
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }
}

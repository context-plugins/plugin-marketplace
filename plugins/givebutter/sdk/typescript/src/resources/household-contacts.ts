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
import { contactResourceSchema, type ContactResource } from "../models/contact-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  v1HouseholdsContactsRequestSchema,
  type V1HouseholdsContactsRequest,
} from "../models/v1-households-contacts-request.js";
import {
  v1HouseholdsContactsResponseInternalSchema,
  type V1HouseholdsContactsResponse,
} from "../models/v1-households-contacts-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class HouseholdContacts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove a contact from a household
   *
   * @returns `App.Http.Resources.API.HouseholdResource`
   *
   * @throws {@link HouseholdContacts.HouseholdsContactsDestroyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsContactsDestroy(
    request: HouseholdContacts.HouseholdsContactsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/households/{household}/contacts/{contact}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "household", value: request.household, schema: s.int() },
          { name: "contact", value: request.contact, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appHttpResourcesApiHouseholdResourceSchema },
        errorFactory: HouseholdContacts.HouseholdsContactsDestroyError,
      },
      options,
    );
  }

  /**
   * List all contacts associated with a household
   *
   * @returns Paginated set of `ContactResource`
   *
   * @throws {@link HouseholdContacts.HouseholdsContactsIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsContactsIndex(
    request: HouseholdContacts.HouseholdsContactsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HouseholdsContactsResponse, HouseholdContacts.HouseholdsContactsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/households/{household}/contacts"),
        auth: this.#auth.http,
        pathParams: [{ name: "household", value: request.household, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HouseholdsContactsResponseInternalSchema },
        errorFactory: HouseholdContacts.HouseholdsContactsIndexError,
      },
      options,
    );
  }

  /**
   * Get a contact associated with a household
   *
   * @returns `ContactResource`
   *
   * @throws {@link HouseholdContacts.HouseholdsContactsShowError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsContactsShow(
    request: HouseholdContacts.HouseholdsContactsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, HouseholdContacts.HouseholdsContactsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/households/{household}/contacts/{contact}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "household", value: request.household, schema: s.int() },
          { name: "contact", value: request.contact, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: HouseholdContacts.HouseholdsContactsShowError,
      },
      options,
    );
  }

  /**
   * Add a contact to a household
   *
   * @returns `App.Http.Resources.API.HouseholdResource`
   *
   * @throws {@link HouseholdContacts.HouseholdsContactsStoreError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  householdsContactsStore(
    request: HouseholdContacts.HouseholdsContactsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/households/{household}/contacts"),
        auth: this.#auth.http,
        pathParams: [{ name: "household", value: request.household, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HouseholdsContactsRequestSchema },
      },
      {
        success: { kind: "json", schema: appHttpResourcesApiHouseholdResourceSchema },
        errorFactory: HouseholdContacts.HouseholdsContactsStoreError,
      },
      options,
    );
  }
}

export namespace HouseholdContacts {
  export type HouseholdsContactsDestroyRequest = {
    /** The household ID */
    household: number;
    /** The contact ID */
    contact: number;
  };

  export class HouseholdsContactsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsContactsDestroyError> = [
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

  export type HouseholdsContactsIndexRequest = {
    /** The household ID */
    household: number;
  };

  export class HouseholdsContactsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsContactsIndexError> = [
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

  export type HouseholdsContactsShowRequest = {
    /** The household ID */
    household: number;
    /** The contact ID */
    contact: number;
  };

  export class HouseholdsContactsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsContactsShowError> = [
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

  export type HouseholdsContactsStoreRequest = {
    /** The household ID */
    household: number;
    body: V1HouseholdsContactsRequest;
  };

  export class HouseholdsContactsStoreError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<HouseholdsContactsStoreError> = [
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

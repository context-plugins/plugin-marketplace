import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  identitiesGetResponseResourceSchema,
  type IdentitiesGetResponseResource,
} from "../models/identities-get-response-resource.js";
import {
  usersIdentitiesResponseSchema,
  type UsersIdentitiesResponse,
} from "../models/users-identities-response.js";
import {
  usersIdentities400Error1Schema,
  type UsersIdentities400Error1,
} from "../models/users-identities400-error1.js";
import {
  usersIdentities403Error1Schema,
  type UsersIdentities403Error1,
} from "../models/users-identities403-error1.js";
import {
  usersIdentities404Error1Schema,
  type UsersIdentities404Error1,
} from "../models/users-identities404-error1.js";
import {
  usersIdentities500Error1Schema,
  type UsersIdentities500Error1,
} from "../models/users-identities500-error1.js";
import type { Servers } from "../servers.js";

export class Identities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve identities
   *
   * @remarks
   * Returns a list with a data property that contains an array of user identities. Each entry in
   * the array is a separate object. If no data is returned, the resulting array will be empty.
   *
   * @returns Returns list of identities.
   *
   * @throws {@link Identities.GetUserIdentitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserIdentities(
    request: Identities.GetUserIdentitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<IdentitiesGetResponseResource, Identities.GetUserIdentitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/identities"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: identitiesGetResponseResourceSchema },
        errorFactory: Identities.GetUserIdentitiesError,
      },
      options,
    );
  }

  /**
   * Retrieve an identity
   *
   * @remarks
   * Returns a specific identity object.
   *
   * @returns Returns identity.
   *
   * @throws {@link Identities.GetUserIdentityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserIdentity(
    request: Identities.GetUserIdentityRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersIdentitiesResponse, Identities.GetUserIdentityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/identities/{identityId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "identityId", value: request.identityId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersIdentitiesResponseSchema },
        errorFactory: Identities.GetUserIdentityError,
      },
      options,
    );
  }
}

export namespace Identities {
  export type GetUserIdentitiesRequest = {
    /** User identifier. */
    userId: string;
  };

  export class GetUserIdentitiesError extends ApiError {
    declare readonly payload:
      | Declared<"usersIdentities400Error1", UsersIdentities400Error1>
      | Declared<"usersIdentities403Error1", UsersIdentities403Error1>
      | Declared<"usersIdentities500Error1", UsersIdentities500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserIdentitiesError> = [
      {
        on: 400,
        kind: "usersIdentities400Error1",
        decode: { kind: "json", schema: usersIdentities400Error1Schema },
      },
      {
        on: 403,
        kind: "usersIdentities403Error1",
        decode: { kind: "json", schema: usersIdentities403Error1Schema },
      },
      {
        on: 500,
        kind: "usersIdentities500Error1",
        decode: { kind: "json", schema: usersIdentities500Error1Schema },
      },
    ];
  }

  export type GetUserIdentityRequest = {
    /** User identifier. */
    userId: string;
    /** Identity identifier. */
    identityId: string;
  };

  export class GetUserIdentityError extends ApiError {
    declare readonly payload:
      | Declared<"usersIdentities400Error1", UsersIdentities400Error1>
      | Declared<"usersIdentities403Error1", UsersIdentities403Error1>
      | Declared<"usersIdentities404Error1", UsersIdentities404Error1>
      | Declared<"usersIdentities500Error1", UsersIdentities500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserIdentityError> = [
      {
        on: 400,
        kind: "usersIdentities400Error1",
        decode: { kind: "json", schema: usersIdentities400Error1Schema },
      },
      {
        on: 403,
        kind: "usersIdentities403Error1",
        decode: { kind: "json", schema: usersIdentities403Error1Schema },
      },
      {
        on: 404,
        kind: "usersIdentities404Error1",
        decode: { kind: "json", schema: usersIdentities404Error1Schema },
      },
      {
        on: 500,
        kind: "usersIdentities500Error1",
        decode: { kind: "json", schema: usersIdentities500Error1Schema },
      },
    ];
  }
}

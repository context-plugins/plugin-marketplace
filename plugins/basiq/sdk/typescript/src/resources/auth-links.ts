import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { usersAuthLinkRequestSchema, type UsersAuthLinkRequest } from "../models/users-auth-link-request.js";
import {
  usersAuthLinkResponseSchema,
  type UsersAuthLinkResponse,
} from "../models/users-auth-link-response.js";
import {
  usersAuthLinkResponse1Schema,
  type UsersAuthLinkResponse1,
} from "../models/users-auth-link-response1.js";
import {
  usersAuthLink400Error1Schema,
  type UsersAuthLink400Error1,
} from "../models/users-auth-link400-error1.js";
import {
  usersAuthLink401Error1Schema,
  type UsersAuthLink401Error1,
} from "../models/users-auth-link401-error1.js";
import {
  usersAuthLink403Error1Schema,
  type UsersAuthLink403Error1,
} from "../models/users-auth-link403-error1.js";
import {
  usersAuthLink404Error1Schema,
  type UsersAuthLink404Error1,
} from "../models/users-auth-link404-error1.js";
import {
  usersAuthLink410Error1Schema,
  type UsersAuthLink410Error1,
} from "../models/users-auth-link410-error1.js";
import {
  usersAuthLink500Error1Schema,
  type UsersAuthLink500Error1,
} from "../models/users-auth-link500-error1.js";
import {
  usersAuthLink503Error1Schema,
  type UsersAuthLink503Error1,
} from "../models/users-auth-link503-error1.js";
import type { Servers } from "../servers.js";

export class AuthLinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete an auth_link
   *
   * @remarks
   * Note that this action cannot be undone.
   *
   * The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and
   * securely share data. When the user selects 'I have disclosed all my accounts' the auth_link is
   * automatically deleted.
   *
   * Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the
   * event of a failure.
   *
   * @returns Returns an empty body if the delete succeeded.
   *
   * @throws {@link AuthLinks.DeleteAuthLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAuthLink(
    request: AuthLinks.DeleteAuthLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AuthLinks.DeleteAuthLinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{userId}/auth_link"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthLinks.DeleteAuthLinkError,
      },
      options,
    );
  }

  /**
   * Retrieve an auth_link
   *
   * @remarks
   * Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.
   *
   * @returns Returns details of a connection.
   *
   * @throws {@link AuthLinks.GetAuthLinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuthLink(
    request: AuthLinks.GetAuthLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersAuthLinkResponse1, AuthLinks.GetAuthLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/auth_link"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersAuthLinkResponse1Schema },
        errorFactory: AuthLinks.GetAuthLinkError,
      },
      options,
    );
  }

  /**
   * Create an auth_link
   *
   * @remarks
   * Create a new auth_link object by making a POST request to the auth_link endpoint. The new
   * auth_link will effectively delete previous auth_link for that user, rendering the previous
   * URL(s) invalid.
   *
   * The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is
   * not specified, we will look up the mobile on the user object; if that is not specified either,
   * you will get an error. If both are specified, the mobile number on the auth_link will take
   * precedence.
   *
   * @returns Returns a created auth_link resource, if the operation succeeded
   *
   * @throws {@link AuthLinks.PostAuthLinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAuthLink(
    request: AuthLinks.PostAuthLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersAuthLinkResponse, AuthLinks.PostAuthLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/auth_link"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersAuthLinkRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: usersAuthLinkResponseSchema },
        errorFactory: AuthLinks.PostAuthLinkError,
      },
      options,
    );
  }
}

export namespace AuthLinks {
  export type DeleteAuthLinkRequest = {
    /** The identifier of the user. */
    userId: string;
  };

  export class DeleteAuthLinkError extends ApiError {
    declare readonly payload:
      | Declared<"usersAuthLink400Error1", UsersAuthLink400Error1>
      | Declared<"usersAuthLink401Error1", UsersAuthLink401Error1>
      | Declared<"usersAuthLink404Error1", UsersAuthLink404Error1>
      | Declared<"usersAuthLink500Error1", UsersAuthLink500Error1>
      | Declared<"usersAuthLink503Error1", UsersAuthLink503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAuthLinkError> = [
      {
        on: 400,
        kind: "usersAuthLink400Error1",
        decode: { kind: "json", schema: usersAuthLink400Error1Schema },
      },
      {
        on: 401,
        kind: "usersAuthLink401Error1",
        decode: { kind: "json", schema: usersAuthLink401Error1Schema },
      },
      {
        on: 404,
        kind: "usersAuthLink404Error1",
        decode: { kind: "json", schema: usersAuthLink404Error1Schema },
      },
      {
        on: 500,
        kind: "usersAuthLink500Error1",
        decode: { kind: "json", schema: usersAuthLink500Error1Schema },
      },
      {
        on: 503,
        kind: "usersAuthLink503Error1",
        decode: { kind: "json", schema: usersAuthLink503Error1Schema },
      },
    ];
  }

  export type GetAuthLinkRequest = {
    /** The identifier of the user. */
    userId: string;
  };

  export class GetAuthLinkError extends ApiError {
    declare readonly payload:
      | Declared<"usersAuthLink400Error1", UsersAuthLink400Error1>
      | Declared<"usersAuthLink401Error1", UsersAuthLink401Error1>
      | Declared<"usersAuthLink403Error1", UsersAuthLink403Error1>
      | Declared<"usersAuthLink404Error1", UsersAuthLink404Error1>
      | Declared<"usersAuthLink410Error1", UsersAuthLink410Error1>
      | Declared<"usersAuthLink500Error1", UsersAuthLink500Error1>
      | Declared<"usersAuthLink503Error1", UsersAuthLink503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuthLinkError> = [
      {
        on: 400,
        kind: "usersAuthLink400Error1",
        decode: { kind: "json", schema: usersAuthLink400Error1Schema },
      },
      {
        on: 401,
        kind: "usersAuthLink401Error1",
        decode: { kind: "json", schema: usersAuthLink401Error1Schema },
      },
      {
        on: 403,
        kind: "usersAuthLink403Error1",
        decode: { kind: "json", schema: usersAuthLink403Error1Schema },
      },
      {
        on: 404,
        kind: "usersAuthLink404Error1",
        decode: { kind: "json", schema: usersAuthLink404Error1Schema },
      },
      {
        on: 410,
        kind: "usersAuthLink410Error1",
        decode: { kind: "json", schema: usersAuthLink410Error1Schema },
      },
      {
        on: 500,
        kind: "usersAuthLink500Error1",
        decode: { kind: "json", schema: usersAuthLink500Error1Schema },
      },
      {
        on: 503,
        kind: "usersAuthLink503Error1",
        decode: { kind: "json", schema: usersAuthLink503Error1Schema },
      },
    ];
  }

  export type PostAuthLinkRequest = {
    userId: string;
    body?: UsersAuthLinkRequest;
  };

  export class PostAuthLinkError extends ApiError {
    declare readonly payload:
      | Declared<"usersAuthLink400Error1", UsersAuthLink400Error1>
      | Declared<"usersAuthLink401Error1", UsersAuthLink401Error1>
      | Declared<"usersAuthLink403Error1", UsersAuthLink403Error1>
      | Declared<"usersAuthLink404Error1", UsersAuthLink404Error1>
      | Declared<"usersAuthLink500Error1", UsersAuthLink500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAuthLinkError> = [
      {
        on: 400,
        kind: "usersAuthLink400Error1",
        decode: { kind: "json", schema: usersAuthLink400Error1Schema },
      },
      {
        on: 401,
        kind: "usersAuthLink401Error1",
        decode: { kind: "json", schema: usersAuthLink401Error1Schema },
      },
      {
        on: 403,
        kind: "usersAuthLink403Error1",
        decode: { kind: "json", schema: usersAuthLink403Error1Schema },
      },
      {
        on: 404,
        kind: "usersAuthLink404Error1",
        decode: { kind: "json", schema: usersAuthLink404Error1Schema },
      },
      {
        on: 500,
        kind: "usersAuthLink500Error1",
        decode: { kind: "json", schema: usersAuthLink500Error1Schema },
      },
    ];
  }
}

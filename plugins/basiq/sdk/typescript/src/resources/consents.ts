import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  usersConsentsResponseSchema,
  type UsersConsentsResponse,
} from "../models/users-consents-response.js";
import {
  usersConsents400Error1Schema,
  type UsersConsents400Error1,
} from "../models/users-consents400-error1.js";
import {
  usersConsents401Error1Schema,
  type UsersConsents401Error1,
} from "../models/users-consents401-error1.js";
import {
  usersConsents403Error1Schema,
  type UsersConsents403Error1,
} from "../models/users-consents403-error1.js";
import {
  usersConsents404Error1Schema,
  type UsersConsents404Error1,
} from "../models/users-consents404-error1.js";
import {
  usersConsents500Error1Schema,
  type UsersConsents500Error1,
} from "../models/users-consents500-error1.js";
import {
  usersConsents503Error1Schema,
  type UsersConsents503Error1,
} from "../models/users-consents503-error1.js";
import type { Servers } from "../servers.js";

export class Consents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a consent
   *
   * @remarks
   * Permanently deletes a users consent, this action cannot be undone.
   *
   * @returns Deletion succeeded.
   *
   * @throws {@link Consents.DeleteConsentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConsent(
    request: Consents.DeleteConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Consents.DeleteConsentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{userId}/consents/{consentId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "consentId", value: request.consentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Consents.DeleteConsentError,
      },
      options,
    );
  }

  /**
   * Retrieve consents
   *
   * @remarks
   * Retrieves a list of the user consents
   *
   * @returns Returns a list of user consents if they exist.
   *
   * @throws {@link Consents.GetConsentsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConsents(
    request: Consents.GetConsentsRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersConsentsResponse, Consents.GetConsentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/consents"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersConsentsResponseSchema },
        errorFactory: Consents.GetConsentsError,
      },
      options,
    );
  }
}

export namespace Consents {
  export type DeleteConsentRequest = {
    /** User identification. */
    userId: string;
    /** Consent identification. */
    consentId: string;
  };

  export class DeleteConsentError extends ApiError {
    declare readonly payload:
      | Declared<"usersConsents400Error1", UsersConsents400Error1>
      | Declared<"usersConsents401Error1", UsersConsents401Error1>
      | Declared<"usersConsents403Error1", UsersConsents403Error1>
      | Declared<"usersConsents404Error1", UsersConsents404Error1>
      | Declared<"usersConsents500Error1", UsersConsents500Error1>
      | Declared<"usersConsents503Error1", UsersConsents503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConsentError> = [
      {
        on: 400,
        kind: "usersConsents400Error1",
        decode: { kind: "json", schema: usersConsents400Error1Schema },
      },
      {
        on: 401,
        kind: "usersConsents401Error1",
        decode: { kind: "json", schema: usersConsents401Error1Schema },
      },
      {
        on: 403,
        kind: "usersConsents403Error1",
        decode: { kind: "json", schema: usersConsents403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConsents404Error1",
        decode: { kind: "json", schema: usersConsents404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConsents500Error1",
        decode: { kind: "json", schema: usersConsents500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConsents503Error1",
        decode: { kind: "json", schema: usersConsents503Error1Schema },
      },
    ];
  }

  export type GetConsentsRequest = {
    /** The identifier of the user */
    userId: string;
  };

  export class GetConsentsError extends ApiError {
    declare readonly payload:
      | Declared<"usersConsents400Error1", UsersConsents400Error1>
      | Declared<"usersConsents401Error1", UsersConsents401Error1>
      | Declared<"usersConsents403Error1", UsersConsents403Error1>
      | Declared<"usersConsents404Error1", UsersConsents404Error1>
      | Declared<"usersConsents500Error1", UsersConsents500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConsentsError> = [
      {
        on: 400,
        kind: "usersConsents400Error1",
        decode: { kind: "json", schema: usersConsents400Error1Schema },
      },
      {
        on: 401,
        kind: "usersConsents401Error1",
        decode: { kind: "json", schema: usersConsents401Error1Schema },
      },
      {
        on: 403,
        kind: "usersConsents403Error1",
        decode: { kind: "json", schema: usersConsents403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConsents404Error1",
        decode: { kind: "json", schema: usersConsents404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConsents500Error1",
        decode: { kind: "json", schema: usersConsents500Error1Schema },
      },
    ];
  }
}

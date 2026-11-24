import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiKeySchema, type ApiKey } from "../models/api-key.js";
import {
  universalCreditsUserModelWithExtraAttributesInternalSchema,
  type UniversalCreditsUserModelWithExtraAttributes,
} from "../models/universal-credits-user-model-with-extra-attributes.js";
import { userModelInternalSchema, type UserModel } from "../models/user-model.js";
import type { Servers } from "../servers.js";

export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a RocketReach API Account
   *
   * @remarks
   * Create New API Key
   *
   * @returns Success. Returns the new API key.
   *
   * @throws {@link Account.CreateNewApiKeyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewApiKey(
    request: Account.CreateNewApiKeyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiKey, Account.CreateNewApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/account/key/"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "api_key", value: request.apiKey, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiKeySchema },
        errorFactory: Account.CreateNewApiKeyError,
      },
      options,
    );
  }

  /**
   * RocketReach API Account
   *
   * @remarks
   * Retrieve & Manage Account Details
   *
   * @returns Success. Returns the account object.
   *
   * @throws {@link Account.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(options?: RequestOptions): ApiPromise<UserModel, Account.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/account/"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userModelInternalSchema },
        errorFactory: Account.GetAccountError,
      },
      options,
    );
  }

  /**
   * ⭐ RocketReach Universal API Account
   *
   * @remarks
   * Retrieve & Manage Account Details
   *
   * @returns Success. Returns the account object.
   *
   * @throws {@link Account.GetUniversalAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUniversalAccount(
    options?: RequestOptions,
  ): ApiPromise<UniversalCreditsUserModelWithExtraAttributes, Account.GetUniversalAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/universal/account/"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: universalCreditsUserModelWithExtraAttributesInternalSchema },
        errorFactory: Account.GetUniversalAccountError,
      },
      options,
    );
  }
}

export namespace Account {
  export type CreateNewApiKeyRequest = {
    /**
     * The API key for your account. You can also find your API key
     * [here](https://rocketreach.co/account?section=nav_gen_api).
     */
    apiKey?: string;
  };

  export class CreateNewApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateNewApiKeyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class GetUniversalAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUniversalAccountError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

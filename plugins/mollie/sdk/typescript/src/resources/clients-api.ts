import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Clients API
 */
export class ClientsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get client
   *
   * @remarks
   * Retrieve a single client by its ID.
   *
   * @returns The client object.
   *
   * @throws {@link ClientsApi.GetClientError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClient(
    request: ClientsApi.GetClientRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientsApi.GetClientError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/clients/{organizationId}"),
        auth: this.#auth.advancedAccessToken,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [{ name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientsApi.GetClientError,
      },
      options,
    );
  }

  /**
   * List clients
   *
   * @remarks
   * Retrieve a list of all clients linked to your account.
   *
   * The results are paginated.
   *
   * @returns A list of client objects. For a complete reference of the client object, refer to the
   * [Get client endpoint](get-client) documentation.
   *
   * @throws {@link ClientsApi.ListClientsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClients(
    request: ClientsApi.ListClientsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientsApi.ListClientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/clients"),
        auth: this.#auth.advancedAccessToken,
        pathParams: [],
        query: [
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientsApi.ListClientsError,
      },
      options,
    );
  }
}

export namespace ClientsApi {
  export type GetClientRequest = {
    /** Provide the ID of the related organization. */
    organizationId: string;
    /**
     * This endpoint allows embedding related API items by appending the following values via the
     * `embed` query string parameter.
     *
     * * `organization`: Include the organization of the client. Available for `signuplink`
     *   partners, or for `oauth` partners with the `organizations.read` scope.
     * * `onboarding`: Include the onboarding status of the client. Available for `signuplink`
     *   partners, or for `oauth` partners with the `onboarding.read` scope.
     * * `capabilities`: Include the [capabilities](list-capabilities) of the client organization.
     *   Available for *oauth* partners with the `onboarding.read` scope.
     */
    embed?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetClientError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetClientError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListClientsRequest = {
    /**
     * This endpoint allows embedding related API items by appending the following values via the
     * `embed` query string parameter.
     *
     * * `organization`: Include the organization of the client. Available for `signuplink`
     *   partners, or for `oauth` partners with the `organizations.read` scope.
     * * `onboarding`: Include the onboarding status of the client. Available for `signuplink`
     *   partners, or for `oauth` partners with the `onboarding.read` scope.
     * * `capabilities`: Include the [capabilities](list-capabilities) of the client organization.
     *   Available for *oauth* partners with the `onboarding.read` scope.
     */
    embed?: string | null;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListClientsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClientsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { connectLinkInternalSchema, type ConnectLink } from "../models/connect-link.js";
import { connectionCreatedInternalSchema, type ConnectionCreated } from "../models/connection-created.js";
import { connectionDeletedSchema, type ConnectionDeleted } from "../models/connection-deleted.js";
import { connectionInputInternalSchema, type ConnectionInput } from "../models/connection-input.js";
import { connectionListSchema, type ConnectionList } from "../models/connection-list.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import {
  v1ConnectLinksRequestInternalSchema,
  type V1ConnectLinksRequest,
} from "../models/v1-connect-links-request.js";
import type { Servers } from "../servers.js";

/**
 * Connect platform accounts by OAuth, credentials or listing URL, or with a connect link.
 */
export class Connections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a connect link
   *
   * @remarks
   * A link the owner of a platform account opens to connect it in their browser, with no Prisma
   * account or API key. Connections made through it belong to your workspace and to the mode of the
   * key that created the link, and carry `metadata: {"via": "connect_link"}`. Valid for 7 days and
   * reusable: treat it like a password-reset link. The body is optional.
   *
   * @returns The connect link.
   *
   * @throws {@link Connections.CreateConnectLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConnectLink(
    request: Connections.CreateConnectLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ConnectLink, Connections.CreateConnectLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/connect_links"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ConnectLinksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: connectLinkInternalSchema },
        errorFactory: Connections.CreateConnectLinkError,
      },
      options,
    );
  }

  /**
   * Create a connection
   *
   * @remarks
   * Connects one platform account and imports its locations. How depends on the platform (see `GET
   * /v1/platforms`): `oauth` platforms need `redirect_url` and return `status: "pending"` with an
   * `authorization_url` for the owner; `credentials` platforms need `credentials`, which Prisma
   * tries against the platform before storing anything; `listing_url` platforms need the public
   * `listing_url` of the listing. With a test key any platform connects at once, without
   * credentials, with sample locations and reviews. Locations over the plan limit are not created
   * and are counted in `locations_over_plan_limit`. Not idempotent: retrying creates a second
   * connection.
   *
   * @returns The new connection, plus `authorization_url` (OAuth) or `locations_created` and
   * `locations_over_plan_limit`.
   *
   * @throws {@link Connections.CreateConnectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConnection(
    request: Connections.CreateConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionCreated, Connections.CreateConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/connections"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectionInputInternalSchema },
      },
      {
        success: { kind: "json", schema: connectionCreatedInternalSchema },
        errorFactory: Connections.CreateConnectionError,
      },
      options,
    );
  }

  /**
   * Delete a connection
   *
   * @remarks
   * Disconnects the connection: its stored tokens and credentials are deleted at once and its
   * locations become `disconnected` (no more checks, not counted toward the plan). Their reviews
   * stay readable for 30 days and are then deleted. To reauthorize a connection, delete it and
   * create a new one.
   *
   * @returns The disconnected connection, plus `locations_disconnected`.
   *
   * @throws {@link Connections.DeleteConnectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConnection(
    request: Connections.DeleteConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionDeleted, Connections.DeleteConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/connections/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionDeletedSchema },
        errorFactory: Connections.DeleteConnectionError,
      },
      options,
    );
  }

  /**
   * List connections
   *
   * @remarks
   * Every connection of your workspace in the mode of your key, oldest first, including `pending`,
   * `reauth_required` and `disconnected` ones. Not paginated: `next_cursor` is always `null`.
   *
   * @returns All connections.
   *
   * @throws {@link Connections.ListConnectionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConnections(options?: RequestOptions): ApiPromise<ConnectionList, Connections.ListConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/connections"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionListSchema },
        errorFactory: Connections.ListConnectionsError,
      },
      options,
    );
  }
}

export namespace Connections {
  export type CreateConnectLinkRequest = {
    body?: V1ConnectLinksRequest;
  };

  export class CreateConnectLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateConnectLinkError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type CreateConnectionRequest = {
    body: ConnectionInput;
  };

  export class CreateConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateConnectionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 501, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteConnectionRequest = {
    /** Connection ID (`con_…`). */
    id: string;
  };

  export class DeleteConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConnectionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class ListConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListConnectionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}

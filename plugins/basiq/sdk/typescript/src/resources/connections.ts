import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectionGetResponseResourceSchema,
  type ConnectionGetResponseResource,
} from "../models/connection-get-response-resource.js";
import {
  connectionResponseResourceSchema,
  type ConnectionResponseResource,
} from "../models/connection-response-resource.js";
import {
  connectionsGetResponseResourceSchema,
  type ConnectionsGetResponseResource,
} from "../models/connections-get-response-resource.js";
import {
  connectionsRefreshResourceSchema,
  type ConnectionsRefreshResource,
} from "../models/connections-refresh-resource.js";
import {
  usersConnectionsPurge400Error1Schema,
  type UsersConnectionsPurge400Error1,
} from "../models/users-connections-purge400-error1.js";
import {
  usersConnectionsPurge403Error1Schema,
  type UsersConnectionsPurge403Error1,
} from "../models/users-connections-purge403-error1.js";
import {
  usersConnectionsPurge404Error1Schema,
  type UsersConnectionsPurge404Error1,
} from "../models/users-connections-purge404-error1.js";
import {
  usersConnectionsPurge500Error1Schema,
  type UsersConnectionsPurge500Error1,
} from "../models/users-connections-purge500-error1.js";
import {
  usersConnectionsPurge503Error1Schema,
  type UsersConnectionsPurge503Error1,
} from "../models/users-connections-purge503-error1.js";
import {
  usersConnectionsRefresh400Error1Schema,
  type UsersConnectionsRefresh400Error1,
} from "../models/users-connections-refresh400-error1.js";
import {
  usersConnectionsRefresh403Error1Schema,
  type UsersConnectionsRefresh403Error1,
} from "../models/users-connections-refresh403-error1.js";
import {
  usersConnectionsRefresh404Error1Schema,
  type UsersConnectionsRefresh404Error1,
} from "../models/users-connections-refresh404-error1.js";
import {
  usersConnectionsRefresh500Error1Schema,
  type UsersConnectionsRefresh500Error1,
} from "../models/users-connections-refresh500-error1.js";
import {
  usersConnectionsRefresh503Error1Schema,
  type UsersConnectionsRefresh503Error1,
} from "../models/users-connections-refresh503-error1.js";
import {
  usersConnections400Error1Schema,
  type UsersConnections400Error1,
} from "../models/users-connections400-error1.js";
import {
  usersConnections401Error1Schema,
  type UsersConnections401Error1,
} from "../models/users-connections401-error1.js";
import {
  usersConnections403Error1Schema,
  type UsersConnections403Error1,
} from "../models/users-connections403-error1.js";
import {
  usersConnections404Error1Schema,
  type UsersConnections404Error1,
} from "../models/users-connections404-error1.js";
import {
  usersConnections500Error1Schema,
  type UsersConnections500Error1,
} from "../models/users-connections500-error1.js";
import {
  usersConnections503Error1Schema,
  type UsersConnections503Error1,
} from "../models/users-connections503-error1.js";
import type { Servers } from "../servers.js";

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
   * Delete a connection
   *
   * @remarks
   * Permanently deletes a connection.
   *
   * @returns Returns an empty body if the delete succeeded.
   *
   * @throws {@link Connections.DeleteConnectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConnection(
    request: Connections.DeleteConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Connections.DeleteConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/users/{userId}/connections/{connectionId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "connectionId", value: request.connectionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Connections.DeleteConnectionError,
      },
      options,
    );
  }

  /**
   * Retrieve a connection
   *
   * @remarks
   * Use this to retrieve details of a specific connection. Note that due to security the loginId,
   * password, securityCode are never returned.
   *
   * @returns Returns details of a connection.
   *
   * @throws {@link Connections.GetConnectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnection(
    request: Connections.GetConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionGetResponseResource, Connections.GetConnectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/connections/{connectionId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "connectionId", value: request.connectionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionGetResponseResourceSchema },
        errorFactory: Connections.GetConnectionError,
      },
      options,
    );
  }

  /**
   * List all connections
   *
   * @remarks
   * Returns a list of connections belonging to this user. Each entry in the array is a separate
   * object. If no data is returned, the resulting array will be empty.
   *
   * @returns Returns details of connections.
   *
   * @throws {@link Connections.GetConnectionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnections(
    request: Connections.GetConnectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionsGetResponseResource, Connections.GetConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/connections"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionsGetResponseResourceSchema },
        errorFactory: Connections.GetConnectionsError,
      },
      options,
    );
  }

  /**
   * Purge connection data
   *
   * @remarks
   * Use this endpoint to remove all user data related to a specific institution. Purging is only
   * applicable for active user connections.
   *
   * When Enrich data is updated, the Enrich results under transactions won’t automatically reflect
   * these updates. To ensure the latest Enrich results are available, partners should first purge
   * and then refresh connections. Without this step, any new insight reports generated will not
   * include the latest enriched data.
   *
   * > 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.
   *
   * @returns Returns an empty body if the delete succeeded.
   *
   * @throws {@link Connections.PurgeConnectionDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purgeConnectionData(
    request: Connections.PurgeConnectionDataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Connections.PurgeConnectionDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/connections/{connectionId}/purge"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "connectionId", value: request.connectionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Connections.PurgeConnectionDataError,
      },
      options,
    );
  }

  /**
   * Refresh a connection
   *
   * @remarks
   * Use this to refresh an existing connection. This will not return a new connection. Instead will
   * return a job resource which is resonsible for refreshing the connection and fetching data
   * asynchronously. Use this job resource to track the connections progress.
   *
   * @returns Returns a created job resource, if the operation succeeded.
   *
   * @throws {@link Connections.RefreshConnectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshConnection(
    request: Connections.RefreshConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionResponseResource, Connections.RefreshConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/connections/{connectionId}/refresh"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "connectionId", value: request.connectionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionResponseResourceSchema },
        errorFactory: Connections.RefreshConnectionError,
      },
      options,
    );
  }

  /**
   * Refresh all connections
   *
   * @remarks
   * Use this to refresh all connections belonging to the specified user.
   *
   * @returns Returns a created jobs resource, if the operation succeeded.
   *
   * @throws {@link Connections.RefreshConnectionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshConnections(
    request: Connections.RefreshConnectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectionsRefreshResource, Connections.RefreshConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/connections/refresh"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionsRefreshResourceSchema },
        errorFactory: Connections.RefreshConnectionsError,
      },
      options,
    );
  }
}

export namespace Connections {
  export type DeleteConnectionRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the connection. */
    connectionId: string;
  };

  export class DeleteConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnections400Error1", UsersConnections400Error1>
      | Declared<"usersConnections403Error1", UsersConnections403Error1>
      | Declared<"usersConnections404Error1", UsersConnections404Error1>
      | Declared<"usersConnections500Error1", UsersConnections500Error1>
      | Declared<"usersConnections503Error1", UsersConnections503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConnectionError> = [
      {
        on: 400,
        kind: "usersConnections400Error1",
        decode: { kind: "json", schema: usersConnections400Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnections403Error1",
        decode: { kind: "json", schema: usersConnections403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnections404Error1",
        decode: { kind: "json", schema: usersConnections404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnections500Error1",
        decode: { kind: "json", schema: usersConnections500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConnections503Error1",
        decode: { kind: "json", schema: usersConnections503Error1Schema },
      },
    ];
  }

  export type GetConnectionRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the connection. */
    connectionId: string;
  };

  export class GetConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnections400Error1", UsersConnections400Error1>
      | Declared<"usersConnections401Error1", UsersConnections401Error1>
      | Declared<"usersConnections403Error1", UsersConnections403Error1>
      | Declared<"usersConnections404Error1", UsersConnections404Error1>
      | Declared<"usersConnections500Error1", UsersConnections500Error1>
      | Declared<"usersConnections503Error1", UsersConnections503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectionError> = [
      {
        on: 400,
        kind: "usersConnections400Error1",
        decode: { kind: "json", schema: usersConnections400Error1Schema },
      },
      {
        on: 401,
        kind: "usersConnections401Error1",
        decode: { kind: "json", schema: usersConnections401Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnections403Error1",
        decode: { kind: "json", schema: usersConnections403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnections404Error1",
        decode: { kind: "json", schema: usersConnections404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnections500Error1",
        decode: { kind: "json", schema: usersConnections500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConnections503Error1",
        decode: { kind: "json", schema: usersConnections503Error1Schema },
      },
    ];
  }

  export type GetConnectionsRequest = {
    /** User identifier. */
    userId: string;
    /** Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000') */
    filter?: string;
  };

  export class GetConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnections400Error1", UsersConnections400Error1>
      | Declared<"usersConnections403Error1", UsersConnections403Error1>
      | Declared<"usersConnections404Error1", UsersConnections404Error1>
      | Declared<"usersConnections500Error1", UsersConnections500Error1>
      | Declared<"usersConnections503Error1", UsersConnections503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectionsError> = [
      {
        on: 400,
        kind: "usersConnections400Error1",
        decode: { kind: "json", schema: usersConnections400Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnections403Error1",
        decode: { kind: "json", schema: usersConnections403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnections404Error1",
        decode: { kind: "json", schema: usersConnections404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnections500Error1",
        decode: { kind: "json", schema: usersConnections500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConnections503Error1",
        decode: { kind: "json", schema: usersConnections503Error1Schema },
      },
    ];
  }

  export type PurgeConnectionDataRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the connection. */
    connectionId: string;
  };

  export class PurgeConnectionDataError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnectionsPurge400Error1", UsersConnectionsPurge400Error1>
      | Declared<"usersConnectionsPurge403Error1", UsersConnectionsPurge403Error1>
      | Declared<"usersConnectionsPurge404Error1", UsersConnectionsPurge404Error1>
      | Declared<"usersConnectionsPurge500Error1", UsersConnectionsPurge500Error1>
      | Declared<"usersConnectionsPurge503Error1", UsersConnectionsPurge503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurgeConnectionDataError> = [
      {
        on: 400,
        kind: "usersConnectionsPurge400Error1",
        decode: { kind: "json", schema: usersConnectionsPurge400Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnectionsPurge403Error1",
        decode: { kind: "json", schema: usersConnectionsPurge403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnectionsPurge404Error1",
        decode: { kind: "json", schema: usersConnectionsPurge404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnectionsPurge500Error1",
        decode: { kind: "json", schema: usersConnectionsPurge500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConnectionsPurge503Error1",
        decode: { kind: "json", schema: usersConnectionsPurge503Error1Schema },
      },
    ];
  }

  export type RefreshConnectionRequest = {
    /** The identifier of the user. */
    userId: string;
    /** The identifier of the connection. */
    connectionId: string;
  };

  export class RefreshConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnectionsRefresh400Error1", UsersConnectionsRefresh400Error1>
      | Declared<"usersConnectionsRefresh403Error1", UsersConnectionsRefresh403Error1>
      | Declared<"usersConnectionsRefresh404Error1", UsersConnectionsRefresh404Error1>
      | Declared<"usersConnectionsRefresh500Error1", UsersConnectionsRefresh500Error1>
      | Declared<"usersConnectionsRefresh503Error1", UsersConnectionsRefresh503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshConnectionError> = [
      {
        on: 400,
        kind: "usersConnectionsRefresh400Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh400Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnectionsRefresh403Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnectionsRefresh404Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnectionsRefresh500Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh500Error1Schema },
      },
      {
        on: 503,
        kind: "usersConnectionsRefresh503Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh503Error1Schema },
      },
    ];
  }

  export type RefreshConnectionsRequest = {
    /** The identifier of the user. */
    userId: string;
  };

  export class RefreshConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"usersConnectionsRefresh400Error1", UsersConnectionsRefresh400Error1>
      | Declared<"usersConnectionsRefresh403Error1", UsersConnectionsRefresh403Error1>
      | Declared<"usersConnectionsRefresh404Error1", UsersConnectionsRefresh404Error1>
      | Declared<"usersConnectionsRefresh500Error1", UsersConnectionsRefresh500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshConnectionsError> = [
      {
        on: 400,
        kind: "usersConnectionsRefresh400Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh400Error1Schema },
      },
      {
        on: 403,
        kind: "usersConnectionsRefresh403Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh403Error1Schema },
      },
      {
        on: 404,
        kind: "usersConnectionsRefresh404Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh404Error1Schema },
      },
      {
        on: 500,
        kind: "usersConnectionsRefresh500Error1",
        decode: { kind: "json", schema: usersConnectionsRefresh500Error1Schema },
      },
    ];
  }
}

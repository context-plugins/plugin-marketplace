import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cloudflowConnectionListResponseInternalSchema,
  type CloudflowConnectionListResponse,
} from "../models/cloudflow-connection-list-response.js";
import {
  cloudflowConnectionInternalSchema,
  type CloudflowConnection,
} from "../models/cloudflow-connection.js";
import {
  cloudflowV1ConnectionsRequestInternalSchema,
  type CloudflowV1ConnectionsRequest,
} from "../models/cloudflow-v1-connections-request.js";
import {
  cloudflowV1ConnectionsRequest1InternalSchema,
  type CloudflowV1ConnectionsRequest1,
} from "../models/cloudflow-v1-connections-request1.js";
import {
  cloudflowV1Connections409Error1Schema,
  type CloudflowV1Connections409Error1,
} from "../models/cloudflow-v1-connections409-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Manage cloud provider connections used in CloudFlow workflows (AWS and GCP).
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
   * Create a connection
   *
   * @remarks
   * Creates a new cloud provider connection. Exactly one of `gcpConfig` or `awsConfig` must be
   * supplied. Returns `400 invalid_connection_config` when both or neither are present.
   *
   * @returns Created
   *
   * @throws {@link Connections.CreateCloudflowConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCloudflowConnection(
    request: Connections.CreateCloudflowConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowConnection, Connections.CreateCloudflowConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/connections"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudflowV1ConnectionsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: cloudflowConnectionInternalSchema },
        errorFactory: Connections.CreateCloudflowConnectionError,
      },
      options,
    );
  }

  /**
   * Delete a connection
   *
   * @remarks
   * Deletes a connection. Returns 409 if the connection is referenced by one or more flows.
   *
   * @returns No Content — connection deleted.
   *
   * @throws {@link Connections.DeleteCloudflowConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCloudflowConnection(
    request: Connections.DeleteCloudflowConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Connections.DeleteCloudflowConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/cloudflow/v1/connections/{connectionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "connectionId", value: request.connectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Connections.DeleteCloudflowConnectionError,
      },
      options,
    );
  }

  /**
   * Retrieve a connection
   *
   * @remarks
   * Returns a single connection by ID.
   *
   * @returns OK
   *
   * @throws {@link Connections.GetCloudflowConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudflowConnection(
    request: Connections.GetCloudflowConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowConnection, Connections.GetCloudflowConnectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/connections/{connectionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "connectionId", value: request.connectionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowConnectionInternalSchema },
        errorFactory: Connections.GetCloudflowConnectionError,
      },
      options,
    );
  }

  /**
   * List connections
   *
   * @remarks
   * Returns a cursor-paginated list of cloud provider connections for the authenticated tenant.
   *
   * @returns OK
   *
   * @throws {@link Connections.ListCloudflowConnectionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudflowConnections(
    request: Connections.ListCloudflowConnectionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CloudflowConnectionListResponse, Connections.ListCloudflowConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/connections"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowConnectionListResponseInternalSchema },
        errorFactory: Connections.ListCloudflowConnectionsError,
      },
      options,
    );
  }

  /**
   * Update a connection
   *
   * @remarks
   * Partially updates a connection. All fields are optional. At most one of `gcpConfig` or
   * `awsConfig` may be set per request.
   *
   * @returns OK
   *
   * @throws {@link Connections.UpdateCloudflowConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCloudflowConnection(
    request: Connections.UpdateCloudflowConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowConnection, Connections.UpdateCloudflowConnectionError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/cloudflow/v1/connections/{connectionId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "connectionId", value: request.connectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudflowV1ConnectionsRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: cloudflowConnectionInternalSchema },
        errorFactory: Connections.UpdateCloudflowConnectionError,
      },
      options,
    );
  }
}

export namespace Connections {
  export type CreateCloudflowConnectionRequest = {
    body: CloudflowV1ConnectionsRequest;
  };

  export class CreateCloudflowConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCloudflowConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCloudflowConnectionRequest = {
    connectionId: string;
  };

  export class DeleteCloudflowConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"cloudflowV1Connections409Error1", CloudflowV1Connections409Error1>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCloudflowConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      {
        on: 409,
        kind: "cloudflowV1Connections409Error1",
        decode: { kind: "json", schema: cloudflowV1Connections409Error1Schema },
      },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudflowConnectionRequest = {
    connectionId: string;
  };

  export class GetCloudflowConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudflowConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudflowConnectionsRequest = {
    /** Maximum number of connections to return (1–100). Defaults to 50. @default 50 */
    maxResults?: number;
    /** Pagination cursor returned by a previous call. */
    pageToken?: string;
  };

  export const listCloudflowConnectionsRequestSchema: Schema<ListCloudflowConnectionsRequest> = s.lazySchema(
    () =>
      s.object<ListCloudflowConnectionsRequest>({
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        pageToken: s.optional(s.string()),
      }),
  );

  export class ListCloudflowConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudflowConnectionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCloudflowConnectionRequest = {
    connectionId: string;
    body: CloudflowV1ConnectionsRequest1;
  };

  export class UpdateCloudflowConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCloudflowConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

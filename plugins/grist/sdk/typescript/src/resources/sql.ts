import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { docsSqlRequestSchema, type DocsSqlRequest } from "../models/docs-sql-request.js";
import { sqlResultSetSchema, type SqlResultSet } from "../models/sql-result-set.js";
import type { Servers } from "../servers.js";

/**
 * Sql endpoint to query data from documents.
 */
export class Sql {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Run an SQL query against a document, with options or parameters
   *
   * @remarks
   * Execute a read-only SQL SELECT query with support for parameterized queries and custom
   * timeouts. All Grist documents are SQLite databases, and queries are executed directly against
   * SQLite with security restrictions.
   *
   * @returns The result set for the query.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runSql(request: Sql.RunSqlRequest, options?: RequestOptions): ApiPromise<SqlResultSet, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/sql"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => docsSqlRequestSchema)) },
      },
      {
        success: { kind: "json", schema: sqlResultSetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Run an SQL query against a document
   *
   * @remarks
   * Execute a read-only SQL SELECT query against the document's SQLite database. This is a
   * simplified endpoint for basic queries. For queries with parameters or custom timeouts, use the
   * POST endpoint instead.
   *
   * @returns The result set for the query.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runSqlGet(request: Sql.RunSqlGetRequest, options?: RequestOptions): ApiPromise<SqlResultSet, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/sql"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "q", value: request.q, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sqlResultSetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Sql {
  export type RunSqlRequest = {
    /** A string id (UUID) */
    docId: string;
    /** Query options */
    body?: DocsSqlRequest;
  };

  export type RunSqlGetRequest = {
    /** A string id (UUID) */
    docId: string;
    q?: string;
  };
}

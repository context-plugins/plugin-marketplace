import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { apiSqlRequestSchema, type ApiSqlRequest } from "../models/api-sql-request.js";
import { apiV1SqlRequestSchema, type ApiV1SqlRequest } from "../models/api-v1-sql-request.js";
import { sqlResponseSchema, type SqlResponse } from "../models/sql-response.js";
import type { Servers } from "../servers.js";

/**
 * Ad-hoc read-only SQL over the warehouse. Paid keys only.
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
   * Run a read-only SQL query over the warehouse
   *
   * @remarks
   * Query the grants warehouse directly when the fixed endpoints can't express the question.
   *
   * Accepts ONE read-only statement: `SELECT` or `WITH ... SELECT`. Multiple statements, any
   * DDL/DML, and the file-reading functions (`read_parquet`, `read_csv`, …) are rejected — you
   * query named views, not files. The view list, every column, and the caveats that decide whether
   * an answer is right are documented at https://data.useplinth.com/developers/schema.
   *
   * `grants` is the US corpus in US dollars; Canadian T3010 filings are a separate view,
   * `grants_ca`, in Canadian dollars. Neither is a filter on the other, because a total spanning
   * both adds CAD to USD.
   *
   * Two ceilings, and they bound different things. Results are capped at 2,000 rows (`truncated:
   * true` says you hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled
   * after 30 seconds: the row cap limits the response, this limits the scan behind it. A cancelled
   * query returns 400, so narrow it with a `tax_year` or `funder_ein` filter and retry.
   *
   * Every response carries `x_plinth.datasets`: the licence and required attribution for each
   * corpus you can reach here. Which one answered is not knowable per query, so all of them are
   * listed. The Canadian attribution is a condition of the licence — reproduce it wherever you
   * publish figures drawn from it.
   *
   * Requires a paid key — there is no free SQL tier — and costs one call from your monthly
   * allowance, the same as any other endpoint. Asset-intelligence and governance tables
   * additionally need Pro.
   *
   * @returns The rows the query returned.
   *
   * @throws {@link Sql.PostApiV1SqlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postApiV1Sql(
    request: Sql.PostApiV1SqlRequest,
    options?: RequestOptions,
  ): ApiPromise<SqlResponse, Sql.PostApiV1SqlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sql"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SqlRequestSchema },
      },
      {
        success: { kind: "json", schema: sqlResponseSchema },
        errorFactory: Sql.PostApiV1SqlError,
      },
      options,
    );
  }

  /**
   * Run a read-only SQL query over the warehouse
   *
   * @remarks
   * Query the grants warehouse directly when the fixed endpoints can't express the question.
   *
   * Accepts ONE read-only statement: `SELECT` or `WITH ... SELECT`. Multiple statements, any
   * DDL/DML, and the file-reading functions (`read_parquet`, `read_csv`, …) are rejected — you
   * query named views, not files. The view list, every column, and the caveats that decide whether
   * an answer is right are documented at https://data.useplinth.com/developers/schema.
   *
   * Two ceilings, and they bound different things. Results are capped at 2,000 rows (`truncated:
   * true` says you hit it) — aggregate in SQL rather than paging. Separately, a query is cancelled
   * after 30 seconds: the row cap limits the response, this limits the scan behind it. A cancelled
   * query returns 400, so narrow it with a `tax_year` or `funder_ein` filter and retry.
   *
   * Requires a paid key — there is no free SQL tier — and costs one call from your monthly
   * allowance, the same as any other endpoint. Asset-intelligence and governance tables
   * additionally need Pro.
   *
   * @returns Successful Response
   *
   * @throws {@link Sql.RunSqlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  runSql(
    request: Sql.RunSqlRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Sql.RunSqlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/sql"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiSqlRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Sql.RunSqlError,
      },
      options,
    );
  }
}

export namespace Sql {
  export type PostApiV1SqlRequest = {
    body: ApiV1SqlRequest;
  };

  export class PostApiV1SqlError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1SqlError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type RunSqlRequest = {
    body: ApiSqlRequest;
  };

  export class RunSqlError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunSqlError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}

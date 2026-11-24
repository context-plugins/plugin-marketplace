import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { snapshotStatusSchema, type SnapshotStatus } from "../models/snapshot-status.js";
import type { Servers } from "../servers.js";

/**
 * IP WHOIS database snapshots
 */
export class DatabasesIpWhois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * IP WHOIS Snapshot
   *
   * @remarks
   * IP WHOIS Snapshot. Returns the file/snapshot described by this operation.
   *
   * @returns JSON gzipped
   *
   * @throws {@link DatabasesIpWhois.DbIpWhoisError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpWhois(
    request: DatabasesIpWhois.DbIpWhoisRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesIpWhois.DbIpWhoisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/snapshot/ip/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.dateOnly() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesIpWhois.DbIpWhoisError,
      },
      options,
    );
  }

  /**
   * IP WHOIS Snapshot Status
   *
   * @remarks
   * IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link DatabasesIpWhois.DbIpWhoisStatusError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpWhoisStatus(
    options?: RequestOptions,
  ): ApiPromise<SnapshotStatus, DatabasesIpWhois.DbIpWhoisStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/status/snapshot/ip/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotStatusSchema },
        errorFactory: DatabasesIpWhois.DbIpWhoisStatusError,
      },
      options,
    );
  }
}

export namespace DatabasesIpWhois {
  export type DbIpWhoisRequest = {
    date: string;
  };

  export class DbIpWhoisError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpWhoisError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DbIpWhoisStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpWhoisStatusError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

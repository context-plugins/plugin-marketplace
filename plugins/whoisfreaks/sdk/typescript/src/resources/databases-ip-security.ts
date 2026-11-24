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
 * IP security database snapshots
 */
export class DatabasesIpSecurity {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * IP Security Snapshot
   *
   * @remarks
   * IP Security Snapshot. Returns the file/snapshot described by this operation.
   *
   * @returns CSV
   *
   * @throws {@link DatabasesIpSecurity.DbIpSecurityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpSecurity(
    request: DatabasesIpSecurity.DbIpSecurityRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesIpSecurity.DbIpSecurityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/snapshot/ip/security"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.dateOnly() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesIpSecurity.DbIpSecurityError,
      },
      options,
    );
  }

  /**
   * IP Security Snapshot Status
   *
   * @remarks
   * IP Security Snapshot Status. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link DatabasesIpSecurity.DbIpSecurityStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpSecurityStatus(
    options?: RequestOptions,
  ): ApiPromise<SnapshotStatus, DatabasesIpSecurity.DbIpSecurityStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/status/snapshot/ip/security"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotStatusSchema },
        errorFactory: DatabasesIpSecurity.DbIpSecurityStatusError,
      },
      options,
    );
  }
}

export namespace DatabasesIpSecurity {
  export type DbIpSecurityRequest = {
    date: string;
  };

  export class DbIpSecurityError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpSecurityError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DbIpSecurityStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpSecurityStatusError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

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
 * ASN WHOIS database snapshots
 */
export class DatabasesAsnWhois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ASN WHOIS Snapshot
   *
   * @remarks
   * ASN WHOIS Snapshot. Returns the file/snapshot described by this operation.
   *
   * @returns JSON gzipped
   *
   * @throws {@link DatabasesAsnWhois.DbAsnWhoisError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbAsnWhois(
    request: DatabasesAsnWhois.DbAsnWhoisRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesAsnWhois.DbAsnWhoisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/snapshot/asn/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.dateOnly() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesAsnWhois.DbAsnWhoisError,
      },
      options,
    );
  }

  /**
   * ASN WHOIS Snapshot Status
   *
   * @remarks
   * ASN WHOIS Snapshot Status. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link DatabasesAsnWhois.DbAsnWhoisStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbAsnWhoisStatus(
    options?: RequestOptions,
  ): ApiPromise<SnapshotStatus, DatabasesAsnWhois.DbAsnWhoisStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/status/snapshot/asn/whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotStatusSchema },
        errorFactory: DatabasesAsnWhois.DbAsnWhoisStatusError,
      },
      options,
    );
  }
}

export namespace DatabasesAsnWhois {
  export type DbAsnWhoisRequest = {
    date: string;
  };

  export class DbAsnWhoisError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbAsnWhoisError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DbAsnWhoisStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbAsnWhoisStatusError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

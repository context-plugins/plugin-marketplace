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
 * IP geolocation database snapshots
 */
export class DatabasesIpGeolocation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * IP to City Snapshot
   *
   * @remarks
   * IP to City Snapshot. Returns the file/snapshot described by this operation.
   *
   * @returns ZIP archive
   *
   * @throws {@link DatabasesIpGeolocation.DbIpCityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpCity(
    request: DatabasesIpGeolocation.DbIpCityRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesIpGeolocation.DbIpCityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/snapshot/ip/city"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.dateOnly() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesIpGeolocation.DbIpCityError,
      },
      options,
    );
  }

  /**
   * IP to City Snapshot Status
   *
   * @remarks
   * IP to City Snapshot Status. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link DatabasesIpGeolocation.DbIpCityStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpCityStatus(
    options?: RequestOptions,
  ): ApiPromise<SnapshotStatus, DatabasesIpGeolocation.DbIpCityStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/status/snapshot/ip/city"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotStatusSchema },
        errorFactory: DatabasesIpGeolocation.DbIpCityStatusError,
      },
      options,
    );
  }

  /**
   * IP to Country Snapshot
   *
   * @remarks
   * IP to Country Snapshot. Returns the file/snapshot described by this operation.
   *
   * @returns ZIP archive
   *
   * @throws {@link DatabasesIpGeolocation.DbIpCountryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpCountry(
    request: DatabasesIpGeolocation.DbIpCountryRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DatabasesIpGeolocation.DbIpCountryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/download/snapshot/ip/country"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.dateOnly() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DatabasesIpGeolocation.DbIpCountryError,
      },
      options,
    );
  }

  /**
   * IP to Country Snapshot Status
   *
   * @remarks
   * IP to Country Snapshot Status. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link DatabasesIpGeolocation.DbIpCountryStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dbIpCountryStatus(
    options?: RequestOptions,
  ): ApiPromise<SnapshotStatus, DatabasesIpGeolocation.DbIpCountryStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.3/status/snapshot/ip/country"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapshotStatusSchema },
        errorFactory: DatabasesIpGeolocation.DbIpCountryStatusError,
      },
      options,
    );
  }
}

export namespace DatabasesIpGeolocation {
  export type DbIpCityRequest = {
    date: string;
  };

  export class DbIpCityError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpCityError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DbIpCityStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpCityStatusError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DbIpCountryRequest = {
    date: string;
  };

  export class DbIpCountryError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpCountryError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DbIpCountryStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DbIpCountryStatusError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

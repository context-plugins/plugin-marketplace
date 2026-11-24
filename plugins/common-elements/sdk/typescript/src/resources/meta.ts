import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { fillRatesSchema, type FillRates } from "../models/fill-rates.js";
import { formatSchema, type Format } from "../models/format.js";
import type { Servers } from "../servers.js";

/**
 * Spec, status, usage, and the data dictionary.
 */
export class Meta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Service status and version policy
   *
   * @remarks
   * Live availability of the API and its database dependency, the current contract version, the
   * supported-version table, the deprecation policy, and the age of the most recent ingest. Returns
   * 503 when the database probe fails, so an uptime monitor sees a non-200. Public and unmetered.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetApiStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiStatus(options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetApiStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta/status"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetApiStatusError,
      },
      options,
    );
  }

  /**
   * Data dictionary
   *
   * @remarks
   * Every resource and every field: type, meaning, source, how often the field is actually
   * populated, how many rows stand behind it, when a row last landed, and the refresh cadence of
   * the feed. Volumes and fill rates are measured at request time and each carries the method that
   * produced it — an estimate is never presented as exact.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetDataDictionaryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDataDictionary(
    request: Meta.GetDataDictionaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Meta.GetDataDictionaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta/dictionary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "resource", value: request.resource, schema: s.optional(s.string()) },
          { name: "fill_rates", value: request.fillRates, schema: s.optional(s.lazy(() => fillRatesSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetDataDictionaryError,
      },
      options,
    );
  }

  /**
   * Usage and quota for the calling key
   *
   * @remarks
   * What this key has spent this month, what remains, when it resets, which endpoints it called,
   * and its most recent errors. Reads the plan from the database at request time. Does not consume
   * quota.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetKeyUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeyUsage(
    request: Meta.GetKeyUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Meta.GetKeyUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "days", value: request.days, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetKeyUsageError,
      },
      options,
    );
  }

  /**
   * Meta namespace index
   *
   * @remarks
   * Discovery document: every meta endpoint, what it is for, and whether it needs a key.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetMetaIndexError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetaIndex(options?: RequestOptions): ApiPromise<Record<string, unknown>, Meta.GetMetaIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetMetaIndexError,
      },
      options,
    );
  }

  /**
   * This document
   *
   * @remarks
   * The OpenAPI 3.1 description of this API, generated from the same definitions the reference
   * documentation renders. `?format=yaml` returns YAML for gateways that require it. Public: no key
   * needed, because an evaluator has to be able to import the spec before they have one. Presenting
   * a key annotates the document with that key's plan and remaining quota.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetOpenApiDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOpenApiDocument(
    request: Meta.GetOpenApiDocumentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Meta.GetOpenApiDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/openapi"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetOpenApiDocumentError,
      },
      options,
    );
  }

  /**
   * Sandbox manifest and test key
   *
   * @remarks
   * The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and
   * test a client with no account, no plan and no quota consumption, then change the base URL and
   * the key to go live.
   *
   * @returns Success.
   *
   * @throws {@link Meta.GetSandboxManifestError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSandboxManifest(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Meta.GetSandboxManifestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta/sandbox"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Meta.GetSandboxManifestError,
      },
      options,
    );
  }
}

export namespace Meta {
  export class GetApiStatusError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiStatusError> = [
      { on: 500, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetDataDictionaryRequest = {
    /** Limit to one resource key, for example `associations`. */
    resource?: string;
    /**
     * `1` (default) measures per-field fill rates from planner statistics; `0` skips them for a
     * faster response.
     */
    fillRates?: FillRates;
  };

  export class GetDataDictionaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataDictionaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetKeyUsageRequest = {
    /** Days of daily history to return, 1-90. Default 30. */
    days?: number;
  };

  export const getKeyUsageRequestSchema: Schema<GetKeyUsageRequest> = s.lazySchema(() =>
    s.object<GetKeyUsageRequest>({
      days: s.optional(s.int().check(s.gte(1), s.lte(90))),
    }),
  );

  export class GetKeyUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKeyUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class GetMetaIndexError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetMetaIndexError> = [
      { on: 500, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetOpenApiDocumentRequest = {
    /** `json` (default) or `yaml`. */
    format?: Format;
  };

  export class GetOpenApiDocumentError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOpenApiDocumentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class GetSandboxManifestError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetSandboxManifestError> = [
      { on: 500, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}

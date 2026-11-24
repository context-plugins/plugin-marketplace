import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { v1CounterResponseSchema, type V1CounterResponse } from "../models/v1-counter-response.js";
import { v1HtmltotextRequestSchema, type V1HtmltotextRequest } from "../models/v1-htmltotext-request.js";
import { v1HtmltotextResponseSchema, type V1HtmltotextResponse } from "../models/v1-htmltotext-response.js";
import {
  v1MetadataextractorRequestSchema,
  type V1MetadataextractorRequest,
} from "../models/v1-metadataextractor-request.js";
import {
  v1MetadataextractorResponseSchema,
  type V1MetadataextractorResponse,
} from "../models/v1-metadataextractor-response.js";
import { v1MorsecodeRequestSchema, type V1MorsecodeRequest } from "../models/v1-morsecode-request.js";
import { v1MorsecodeResponseSchema, type V1MorsecodeResponse } from "../models/v1-morsecode-response.js";
import { v1MurmurhashRequestSchema, type V1MurmurhashRequest } from "../models/v1-murmurhash-request.js";
import { v1MurmurhashResponseSchema, type V1MurmurhashResponse } from "../models/v1-murmurhash-response.js";
import {
  v1SqlexplainerRequestSchema,
  type V1SqlexplainerRequest,
} from "../models/v1-sqlexplainer-request.js";
import {
  v1SqlexplainerResponseSchema,
  type V1SqlexplainerResponse,
} from "../models/v1-sqlexplainer-response.js";
import type { Servers } from "../servers.js";

export class DataProcessing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cloud Counter
   *
   * @remarks
   * Get the current value of the counter
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.CounterError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  counter(
    request: DataProcessing.CounterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CounterResponse, DataProcessing.CounterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/counter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CounterResponseSchema },
        errorFactory: DataProcessing.CounterError,
      },
      options,
    );
  }

  /**
   * HTML to Text
   *
   * @remarks
   * Convert HTML to text
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.HtmltotextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  htmltotext(
    request: DataProcessing.HtmltotextRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HtmltotextResponse, DataProcessing.HtmltotextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/htmltotext"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HtmltotextRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HtmltotextResponseSchema },
        errorFactory: DataProcessing.HtmltotextError,
      },
      options,
    );
  }

  /**
   * Metadata Extractor
   *
   * @remarks
   * Extract metadata from a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.MetadataextractorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metadataextractor(
    request: DataProcessing.MetadataextractorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MetadataextractorResponse, DataProcessing.MetadataextractorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/metadataextractor"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MetadataextractorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MetadataextractorResponseSchema },
        errorFactory: DataProcessing.MetadataextractorError,
      },
      options,
    );
  }

  /**
   * Morse Code
   *
   * @remarks
   * Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or
   * decoded Morse code.
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.MorsecodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  morsecode(
    request: DataProcessing.MorsecodeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MorsecodeResponse, DataProcessing.MorsecodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/morsecode"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MorsecodeRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MorsecodeResponseSchema },
        errorFactory: DataProcessing.MorsecodeError,
      },
      options,
    );
  }

  /**
   * MurmurHash
   *
   * @remarks
   * Generate a MurmurHash3 hash
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.MurmurhashError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  murmurhash(
    request: DataProcessing.MurmurhashRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MurmurhashResponse, DataProcessing.MurmurhashError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/murmurhash"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MurmurhashRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MurmurhashResponseSchema },
        errorFactory: DataProcessing.MurmurhashError,
      },
      options,
    );
  }

  /**
   * SQL Explainer
   *
   * @remarks
   * Get a plain English explanation of a SQL query
   *
   * @returns Successful Response
   *
   * @throws {@link DataProcessing.SqlexplainerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sqlexplainer(
    request: DataProcessing.SqlexplainerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SqlexplainerResponse, DataProcessing.SqlexplainerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/sqlexplainer"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SqlexplainerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SqlexplainerResponseSchema },
        errorFactory: DataProcessing.SqlexplainerError,
      },
      options,
    );
  }
}

export namespace DataProcessing {
  export type CounterRequest = {
    /** The ID of the counter (e.g., test_counter) */
    id: string;
  };

  export class CounterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CounterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HtmltotextRequest = {
    body: V1HtmltotextRequest;
  };

  export class HtmltotextError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HtmltotextError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MetadataextractorRequest = {
    body: V1MetadataextractorRequest;
  };

  export class MetadataextractorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetadataextractorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MorsecodeRequest = {
    body: V1MorsecodeRequest;
  };

  export class MorsecodeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MorsecodeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MurmurhashRequest = {
    body: V1MurmurhashRequest;
  };

  export class MurmurhashError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MurmurhashError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SqlexplainerRequest = {
    body: V1SqlexplainerRequest;
  };

  export class SqlexplainerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SqlexplainerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

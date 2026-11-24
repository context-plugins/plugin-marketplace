import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1HumannameparserResponseSchema,
  type V1HumannameparserResponse,
} from "../models/v1-humannameparser-response.js";
import { v1RsstojsonRequestSchema, type V1RsstojsonRequest } from "../models/v1-rsstojson-request.js";
import { v1RsstojsonResponseSchema, type V1RsstojsonResponse } from "../models/v1-rsstojson-response.js";
import {
  v1StreetaddressparserResponseSchema,
  type V1StreetaddressparserResponse,
} from "../models/v1-streetaddressparser-response.js";
import {
  v1UseragentparserRequestSchema,
  type V1UseragentparserRequest,
} from "../models/v1-useragentparser-request.js";
import {
  v1UseragentparserResponseSchema,
  type V1UseragentparserResponse,
} from "../models/v1-useragentparser-response.js";
import type { Servers } from "../servers.js";

export class Parsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Human Name Parser
   *
   * @remarks
   * Parse a human name into its components
   *
   * @returns Successful Response
   *
   * @throws {@link Parsers.HumannameparserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  humannameparser(
    request: Parsers.HumannameparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HumannameparserResponse, Parsers.HumannameparserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/humannameparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HumannameparserResponseSchema },
        errorFactory: Parsers.HumannameparserError,
      },
      options,
    );
  }

  /**
   * RSS to JSON
   *
   * @remarks
   * RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed
   * in JSON format.
   *
   * @returns Successful Response
   *
   * @throws {@link Parsers.RsstojsonError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rsstojson(
    request: Parsers.RsstojsonRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RsstojsonResponse, Parsers.RsstojsonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/rsstojson"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1RsstojsonRequestSchema },
      },
      {
        success: { kind: "json", schema: v1RsstojsonResponseSchema },
        errorFactory: Parsers.RsstojsonError,
      },
      options,
    );
  }

  /**
   * Street Address Parser
   *
   * @remarks
   * Parse the components of a street address
   *
   * @returns Successful Response
   *
   * @throws {@link Parsers.StreetaddressparserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  streetaddressparser(
    request: Parsers.StreetaddressparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StreetaddressparserResponse, Parsers.StreetaddressparserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/streetaddressparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "address", value: request.address, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1StreetaddressparserResponseSchema },
        errorFactory: Parsers.StreetaddressparserError,
      },
      options,
    );
  }

  /**
   * User Agent Parser
   *
   * @remarks
   * Parse the user agent string to get browser, OS, and more
   *
   * @returns Successful Response
   *
   * @throws {@link Parsers.UseragentparserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  useragentparser(
    request: Parsers.UseragentparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UseragentparserResponse, Parsers.UseragentparserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/useragentparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UseragentparserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UseragentparserResponseSchema },
        errorFactory: Parsers.UseragentparserError,
      },
      options,
    );
  }
}

export namespace Parsers {
  export type HumannameparserRequest = {
    /** The human name to parse */
    name: string;
  };

  export class HumannameparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HumannameparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RsstojsonRequest = {
    body: V1RsstojsonRequest;
  };

  export class RsstojsonError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RsstojsonError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StreetaddressparserRequest = {
    /** The street address to parse */
    address: string;
  };

  export class StreetaddressparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StreetaddressparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UseragentparserRequest = {
    body: V1UseragentparserRequest;
  };

  export class UseragentparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UseragentparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1ContactextractorRequestSchema,
  type V1ContactextractorRequest,
} from "../models/v1-contactextractor-request.js";
import {
  v1ContactextractorResponseSchema,
  type V1ContactextractorResponse,
} from "../models/v1-contactextractor-response.js";
import { v1LinkscraperRequestSchema, type V1LinkscraperRequest } from "../models/v1-linkscraper-request.js";
import {
  v1LinkscraperResponseSchema,
  type V1LinkscraperResponse,
} from "../models/v1-linkscraper-response.js";
import { v1SeoscraperRequestSchema, type V1SeoscraperRequest } from "../models/v1-seoscraper-request.js";
import { v1SeoscraperResponseSchema, type V1SeoscraperResponse } from "../models/v1-seoscraper-response.js";
import {
  v1WebimagescraperRequestSchema,
  type V1WebimagescraperRequest,
} from "../models/v1-webimagescraper-request.js";
import {
  v1WebimagescraperResponseSchema,
  type V1WebimagescraperResponse,
} from "../models/v1-webimagescraper-response.js";
import {
  v1WebscreenshotsRequestSchema,
  type V1WebscreenshotsRequest,
} from "../models/v1-webscreenshots-request.js";
import {
  v1WebscreenshotsResponseSchema,
  type V1WebscreenshotsResponse,
} from "../models/v1-webscreenshots-response.js";
import type { Servers } from "../servers.js";

export class DataScraping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Contact Extractor
   *
   * @remarks
   * Extract contact data from a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataScraping.ContactextractorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactextractor(
    request: DataScraping.ContactextractorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ContactextractorResponse, DataScraping.ContactextractorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contactextractor"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ContactextractorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ContactextractorResponseSchema },
        errorFactory: DataScraping.ContactextractorError,
      },
      options,
    );
  }

  /**
   * Link Scraper
   *
   * @remarks
   * Scrape all the links on a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataScraping.LinkscraperError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkscraper(
    request: DataScraping.LinkscraperRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LinkscraperResponse, DataScraping.LinkscraperError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/linkscraper"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LinkscraperRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LinkscraperResponseSchema },
        errorFactory: DataScraping.LinkscraperError,
      },
      options,
    );
  }

  /**
   * SEO Data Scraper
   *
   * @remarks
   * Scrape SEO data from a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataScraping.SeoscraperError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  seoscraper(
    request: DataScraping.SeoscraperRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SeoscraperResponse, DataScraping.SeoscraperError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/seoscraper"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SeoscraperRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SeoscraperResponseSchema },
        errorFactory: DataScraping.SeoscraperError,
      },
      options,
    );
  }

  /**
   * Website Images Scraper
   *
   * @remarks
   * Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of
   * the images found on the website.
   *
   * @returns Successful Response
   *
   * @throws {@link DataScraping.WebimagescraperError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webimagescraper(
    request: DataScraping.WebimagescraperRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebimagescraperResponse, DataScraping.WebimagescraperError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webimagescraper"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebimagescraperRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WebimagescraperResponseSchema },
        errorFactory: DataScraping.WebimagescraperError,
      },
      options,
    );
  }

  /**
   * Website Screenshot
   *
   * @remarks
   * Capture a screenshot of a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataScraping.WebscreenshotsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webscreenshots(
    request: DataScraping.WebscreenshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebscreenshotsResponse, DataScraping.WebscreenshotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webscreenshots"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebscreenshotsRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WebscreenshotsResponseSchema },
        errorFactory: DataScraping.WebscreenshotsError,
      },
      options,
    );
  }
}

export namespace DataScraping {
  export type ContactextractorRequest = {
    body: V1ContactextractorRequest;
  };

  export class ContactextractorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactextractorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LinkscraperRequest = {
    body: V1LinkscraperRequest;
  };

  export class LinkscraperError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LinkscraperError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SeoscraperRequest = {
    body: V1SeoscraperRequest;
  };

  export class SeoscraperError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SeoscraperError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebimagescraperRequest = {
    body: V1WebimagescraperRequest;
  };

  export class WebimagescraperError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebimagescraperError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebscreenshotsRequest = {
    body: V1WebscreenshotsRequest;
  };

  export class WebscreenshotsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebscreenshotsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

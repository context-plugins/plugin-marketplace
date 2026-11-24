import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { v1HtmltopdfRequestSchema, type V1HtmltopdfRequest } from "../models/v1-htmltopdf-request.js";
import { v1HtmltopdfResponseSchema, type V1HtmltopdfResponse } from "../models/v1-htmltopdf-response.js";
import {
  v1InvoicegeneratorRequestSchema,
  type V1InvoicegeneratorRequest,
} from "../models/v1-invoicegenerator-request.js";
import {
  v1InvoicegeneratorResponseSchema,
  type V1InvoicegeneratorResponse,
} from "../models/v1-invoicegenerator-response.js";
import {
  v1WebsitetopdfRequestSchema,
  type V1WebsitetopdfRequest,
} from "../models/v1-websitetopdf-request.js";
import {
  v1WebsitetopdfResponseSchema,
  type V1WebsitetopdfResponse,
} from "../models/v1-websitetopdf-response.js";
import type { Servers } from "../servers.js";

export class Documents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * HTML to PDF
   *
   * @remarks
   * Convert HTML content to a PDF file
   *
   * @returns Successful Response
   *
   * @throws {@link Documents.HtmltopdfError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  htmltopdf(
    request: Documents.HtmltopdfRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HtmltopdfResponse, Documents.HtmltopdfError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/htmltopdf"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HtmltopdfRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HtmltopdfResponseSchema },
        errorFactory: Documents.HtmltopdfError,
      },
      options,
    );
  }

  /**
   * Invoice Generator
   *
   * @remarks
   * Generate an invoice
   *
   * @returns Successful Response
   *
   * @throws {@link Documents.InvoicegeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  invoicegenerator(
    request: Documents.InvoicegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InvoicegeneratorResponse, Documents.InvoicegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/invoicegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1InvoicegeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1InvoicegeneratorResponseSchema },
        errorFactory: Documents.InvoicegeneratorError,
      },
      options,
    );
  }

  /**
   * Website to PDF
   *
   * @remarks
   * Convert a website to a PDF file
   *
   * @returns Successful Response
   *
   * @throws {@link Documents.WebsitetopdfError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  websitetopdf(
    request: Documents.WebsitetopdfRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebsitetopdfResponse, Documents.WebsitetopdfError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/websitetopdf"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebsitetopdfRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WebsitetopdfResponseSchema },
        errorFactory: Documents.WebsitetopdfError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type HtmltopdfRequest = {
    body: V1HtmltopdfRequest;
  };

  export class HtmltopdfError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HtmltopdfError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type InvoicegeneratorRequest = {
    body: V1InvoicegeneratorRequest;
  };

  export class InvoicegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InvoicegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebsitetopdfRequest = {
    body: V1WebsitetopdfRequest;
  };

  export class WebsitetopdfError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebsitetopdfError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

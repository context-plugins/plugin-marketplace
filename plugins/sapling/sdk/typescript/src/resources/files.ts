import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { orAnonymous } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1IngestChunkHtmlRequestInternalSchema,
  type ApiV1IngestChunkHtmlRequest,
} from "../models/api-v1-ingest-chunk-html-request.js";
import {
  apiV1IngestChunkHtmlResponseSchema,
  type ApiV1IngestChunkHtmlResponse,
} from "../models/api-v1-ingest-chunk-html-response.js";
import {
  apiV1IngestChunkTextRequestInternalSchema,
  type ApiV1IngestChunkTextRequest,
} from "../models/api-v1-ingest-chunk-text-request.js";
import {
  apiV1IngestChunkTextResponseSchema,
  type ApiV1IngestChunkTextResponse,
} from "../models/api-v1-ingest-chunk-text-response.js";
import {
  apiV1IngestDocxToTextResponseSchema,
  type ApiV1IngestDocxToTextResponse,
} from "../models/api-v1-ingest-docx-to-text-response.js";
import {
  apiV1IngestDocxToText400Error1Schema,
  type ApiV1IngestDocxToText400Error1,
} from "../models/api-v1-ingest-docx-to-text400-error1.js";
import {
  apiV1IngestDocxToText413Error1Schema,
  type ApiV1IngestDocxToText413Error1,
} from "../models/api-v1-ingest-docx-to-text413-error1.js";
import {
  apiV1IngestPdfToTextResponseSchema,
  type ApiV1IngestPdfToTextResponse,
} from "../models/api-v1-ingest-pdf-to-text-response.js";
import {
  apiV1IngestPdfToText400Error1Schema,
  type ApiV1IngestPdfToText400Error1,
} from "../models/api-v1-ingest-pdf-to-text400-error1.js";
import {
  apiV1IngestPdfToText413Error1Schema,
  type ApiV1IngestPdfToText413Error1,
} from "../models/api-v1-ingest-pdf-to-text413-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import type { Servers } from "../servers.js";

/**
 * PDF/Word text extraction and text chunking.
 */
export class Files {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Split HTML into chunks
   *
   * @remarks
   * Like chunk_text, for HTML input. Not billed.
   *
   * @returns Chunks in document order.
   *
   * @throws {@link Files.SaplingChunkHtmlError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingChunkHtml(
    request: Files.SaplingChunkHtmlRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IngestChunkHtmlResponse, Files.SaplingChunkHtmlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ingest/chunk_html"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1IngestChunkHtmlRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1IngestChunkHtmlResponseSchema },
        errorFactory: Files.SaplingChunkHtmlError,
      },
      options,
    );
  }

  /**
   * Split text into chunks
   *
   * @remarks
   * Split long text into overlapping chunks no longer than `max_length`, preferring sentence and
   * whitespace boundaries. Not billed.
   *
   * @returns Chunks in document order.
   *
   * @throws {@link Files.SaplingChunkTextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingChunkText(
    request: Files.SaplingChunkTextRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IngestChunkTextResponse, Files.SaplingChunkTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ingest/chunk_text"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1IngestChunkTextRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1IngestChunkTextResponseSchema },
        errorFactory: Files.SaplingChunkTextError,
      },
      options,
    );
  }

  /**
   * Extract text from a Word document
   *
   * @remarks
   * Upload a .docx and receive its text, tables included in document order. Not billed.
   *
   * @returns Extracted text.
   *
   * @throws {@link Files.SaplingDocxToTextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDocxToText(
    request: Files.SaplingDocxToTextRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IngestDocxToTextResponse, Files.SaplingDocxToTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ingest/docx_to_text"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsageQuery, schema: s.defaulted(s.boolean(), false) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "file", name: "jsonParams", value: request.jsonParams },
            {
              kind: "text",
              name: "return_usage",
              value: request.returnUsage,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV1IngestDocxToTextResponseSchema },
        errorFactory: Files.SaplingDocxToTextError,
      },
      options,
    );
  }

  /**
   * Extract text from a PDF
   *
   * @remarks
   * Upload a PDF and receive its text, with layout line breaks and hyphenation repaired.
   * Owner-locked PDFs are decrypted transparently; image-only PDFs answer 400. Not billed.
   *
   * @returns Extracted text.
   *
   * @throws {@link Files.SaplingPdfToTextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingPdfToText(
    request: Files.SaplingPdfToTextRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1IngestPdfToTextResponse, Files.SaplingPdfToTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ingest/pdf_to_text"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsageQuery, schema: s.defaulted(s.boolean(), false) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "file", name: "jsonParams", value: request.jsonParams },
            {
              kind: "text",
              name: "return_usage",
              value: request.returnUsage,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV1IngestPdfToTextResponseSchema },
        errorFactory: Files.SaplingPdfToTextError,
      },
      options,
    );
  }
}

export namespace Files {
  export type SaplingChunkHtmlRequest = {
    body: ApiV1IngestChunkHtmlRequest;
  };

  export class SaplingChunkHtmlError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingChunkHtmlError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingChunkTextRequest = {
    body: ApiV1IngestChunkTextRequest;
  };

  export class SaplingChunkTextError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingChunkTextError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDocxToTextRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
     * alternative to the query or header credential. Send it as a file part.
     */
    jsonParams?: FileInput;
    /**
     * When true, a successful JSON-object response additionally carries "usage": {"characters":
     * <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x
     * adjustment for logographic languages is included, so CJK requests report more than their raw
     * length). Repeat texts inside the billing deduplication window are still counted here even
     * though they are not re-charged, so the number is an upper bound on the final charge.
     * Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the
     * field. An existing usage field (such as account/status or completion token usage) is
     * preserved unchanged.
     *
     * @default false
     */
    returnUsage?: boolean;
  };

  export class SaplingDocxToTextError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1IngestDocxToText400Error1", ApiV1IngestDocxToText400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1IngestDocxToText413Error1", ApiV1IngestDocxToText413Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDocxToTextError> = [
      {
        on: 400,
        kind: "apiV1IngestDocxToText400Error1",
        decode: { kind: "json", schema: apiV1IngestDocxToText400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1IngestDocxToText413Error1",
        decode: { kind: "json", schema: apiV1IngestDocxToText413Error1Schema },
      },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingPdfToTextRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
     * alternative to the query or header credential. Send it as a file part.
     */
    jsonParams?: FileInput;
    /**
     * When true, a successful JSON-object response additionally carries "usage": {"characters":
     * <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x
     * adjustment for logographic languages is included, so CJK requests report more than their raw
     * length). Repeat texts inside the billing deduplication window are still counted here even
     * though they are not re-charged, so the number is an upper bound on the final charge.
     * Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the
     * field. An existing usage field (such as account/status or completion token usage) is
     * preserved unchanged.
     *
     * @default false
     */
    returnUsage?: boolean;
  };

  export class SaplingPdfToTextError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1IngestPdfToText400Error1", ApiV1IngestPdfToText400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1IngestPdfToText413Error1", ApiV1IngestPdfToText413Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingPdfToTextError> = [
      {
        on: 400,
        kind: "apiV1IngestPdfToText400Error1",
        decode: { kind: "json", schema: apiV1IngestPdfToText400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1IngestPdfToText413Error1",
        decode: { kind: "json", schema: apiV1IngestPdfToText413Error1Schema },
      },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

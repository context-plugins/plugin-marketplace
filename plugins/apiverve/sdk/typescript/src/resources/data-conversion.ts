import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1Ascii85EncoderResponseSchema,
  type V1Ascii85EncoderResponse,
} from "../models/v1-ascii85-encoder-response.js";
import { v1Base64ResponseSchema, type V1Base64Response } from "../models/v1-base64-response.js";
import {
  v1ColorconverterResponseSchema,
  type V1ColorconverterResponse,
} from "../models/v1-colorconverter-response.js";
import { v1CsvtojsonRequestSchema, type V1CsvtojsonRequest } from "../models/v1-csvtojson-request.js";
import { v1CsvtojsonResponseSchema, type V1CsvtojsonResponse } from "../models/v1-csvtojson-response.js";
import {
  v1FilesizeformatterResponseSchema,
  type V1FilesizeformatterResponse,
} from "../models/v1-filesizeformatter-response.js";
import {
  v1HtmlentitiesRequestSchema,
  type V1HtmlentitiesRequest,
} from "../models/v1-htmlentities-request.js";
import {
  v1HtmlentitiesResponseSchema,
  type V1HtmlentitiesResponse,
} from "../models/v1-htmlentities-response.js";
import { v1HtmltoimageRequestSchema, type V1HtmltoimageRequest } from "../models/v1-htmltoimage-request.js";
import {
  v1HtmltoimageResponseSchema,
  type V1HtmltoimageResponse,
} from "../models/v1-htmltoimage-response.js";
import { v1JsontocsvRequestSchema, type V1JsontocsvRequest } from "../models/v1-jsontocsv-request.js";
import { v1JsontocsvResponseSchema, type V1JsontocsvResponse } from "../models/v1-jsontocsv-response.js";
import { v1JsontojsonpRequestSchema, type V1JsontojsonpRequest } from "../models/v1-jsontojsonp-request.js";
import {
  v1JsontojsonpResponseSchema,
  type V1JsontojsonpResponse,
} from "../models/v1-jsontojsonp-response.js";
import { v1JwtdecoderRequestSchema, type V1JwtdecoderRequest } from "../models/v1-jwtdecoder-request.js";
import { v1JwtdecoderResponseSchema, type V1JwtdecoderResponse } from "../models/v1-jwtdecoder-response.js";
import {
  v1MarkdowntableRequestSchema,
  type V1MarkdowntableRequest,
} from "../models/v1-markdowntable-request.js";
import {
  v1MarkdowntableResponseSchema,
  type V1MarkdowntableResponse,
} from "../models/v1-markdowntable-response.js";
import {
  v1MarkdowntohtmlRequestSchema,
  type V1MarkdowntohtmlRequest,
} from "../models/v1-markdowntohtml-request.js";
import {
  v1MarkdowntohtmlResponseSchema,
  type V1MarkdowntohtmlResponse,
} from "../models/v1-markdowntohtml-response.js";
import {
  v1MarkdowntoimageRequestSchema,
  type V1MarkdowntoimageRequest,
} from "../models/v1-markdowntoimage-request.js";
import {
  v1MarkdowntoimageResponseSchema,
  type V1MarkdowntoimageResponse,
} from "../models/v1-markdowntoimage-response.js";
import {
  v1MarkdowntopdfRequestSchema,
  type V1MarkdowntopdfRequest,
} from "../models/v1-markdowntopdf-request.js";
import {
  v1MarkdowntopdfResponseSchema,
  type V1MarkdowntopdfResponse,
} from "../models/v1-markdowntopdf-response.js";
import { v1MathRequestSchema, type V1MathRequest } from "../models/v1-math-request.js";
import { v1MathResponseSchema, type V1MathResponse } from "../models/v1-math-response.js";
import {
  v1MeetingtimeconverterResponseSchema,
  type V1MeetingtimeconverterResponse,
} from "../models/v1-meetingtimeconverter-response.js";
import {
  v1NumberbaseconverterResponseSchema,
  type V1NumberbaseconverterResponse,
} from "../models/v1-numberbaseconverter-response.js";
import {
  v1NumbertowordsResponseSchema,
  type V1NumbertowordsResponse,
} from "../models/v1-numbertowords-response.js";
import {
  v1PlaceholdertextResponseSchema,
  type V1PlaceholdertextResponse,
} from "../models/v1-placeholdertext-response.js";
import { v1PunycodeResponseSchema, type V1PunycodeResponse } from "../models/v1-punycode-response.js";
import {
  v1QuerystringbuilderRequestSchema,
  type V1QuerystringbuilderRequest,
} from "../models/v1-querystringbuilder-request.js";
import {
  v1QuerystringbuilderResponseSchema,
  type V1QuerystringbuilderResponse,
} from "../models/v1-querystringbuilder-response.js";
import {
  v1RelativetimeformatterResponseSchema,
  type V1RelativetimeformatterResponse,
} from "../models/v1-relativetimeformatter-response.js";
import {
  v1RomanconverterResponseSchema,
  type V1RomanconverterResponse,
} from "../models/v1-romanconverter-response.js";
import {
  v1TexttocolorResponseSchema,
  type V1TexttocolorResponse,
} from "../models/v1-texttocolor-response.js";
import {
  v1UnicodeescapeRequestSchema,
  type V1UnicodeescapeRequest,
} from "../models/v1-unicodeescape-request.js";
import {
  v1UnicodeescapeResponseSchema,
  type V1UnicodeescapeResponse,
} from "../models/v1-unicodeescape-response.js";
import {
  v1UnitconverterResponseSchema,
  type V1UnitconverterResponse,
} from "../models/v1-unitconverter-response.js";
import {
  v1UnixtimestampResponseSchema,
  type V1UnixtimestampResponse,
} from "../models/v1-unixtimestamp-response.js";
import { v1UrlencodeRequestSchema, type V1UrlencodeRequest } from "../models/v1-urlencode-request.js";
import { v1UrlencodeResponseSchema, type V1UrlencodeResponse } from "../models/v1-urlencode-response.js";
import {
  v1UrltomarkdownRequestSchema,
  type V1UrltomarkdownRequest,
} from "../models/v1-urltomarkdown-request.js";
import {
  v1UrltomarkdownResponseSchema,
  type V1UrltomarkdownResponse,
} from "../models/v1-urltomarkdown-response.js";
import {
  v1VariablenameconverterRequestSchema,
  type V1VariablenameconverterRequest,
} from "../models/v1-variablenameconverter-request.js";
import {
  v1VariablenameconverterResponseSchema,
  type V1VariablenameconverterResponse,
} from "../models/v1-variablenameconverter-response.js";
import {
  v1WebsitetotextRequestSchema,
  type V1WebsitetotextRequest,
} from "../models/v1-websitetotext-request.js";
import {
  v1WebsitetotextResponseSchema,
  type V1WebsitetotextResponse,
} from "../models/v1-websitetotext-response.js";
import {
  v1WordstonumbersResponseSchema,
  type V1WordstonumbersResponse,
} from "../models/v1-wordstonumbers-response.js";
import { v1XmltojsonRequestSchema, type V1XmltojsonRequest } from "../models/v1-xmltojson-request.js";
import { v1XmltojsonResponseSchema, type V1XmltojsonResponse } from "../models/v1-xmltojson-response.js";
import type { Servers } from "../servers.js";

export class DataConversion {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ASCII85 Encoder
   *
   * @remarks
   * Encode text using ASCII85 (Base85) encoding
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.Ascii85EncoderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ascii85Encoder(
    request: DataConversion.Ascii85EncoderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1Ascii85EncoderResponse, DataConversion.Ascii85EncoderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ascii85encoder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.string() },
          { name: "action", value: request.action, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1Ascii85EncoderResponseSchema },
        errorFactory: DataConversion.Ascii85EncoderError,
      },
      options,
    );
  }

  /**
   * Base64 Encoder/Decoder
   *
   * @remarks
   * Encode text to Base64 format
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.Base64Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  base64(
    request: DataConversion.Base64Request,
    options?: RequestOptions,
  ): ApiPromise<V1Base64Response, DataConversion.Base64Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/base64"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.string() },
          { name: "action", value: request.action, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1Base64ResponseSchema },
        errorFactory: DataConversion.Base64Error,
      },
      options,
    );
  }

  /**
   * Color Converter
   *
   * @remarks
   * Convert a color to a different format
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.ColorconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  colorconverter(
    request: DataConversion.ColorconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ColorconverterResponse, DataConversion.ColorconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/colorconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "hex", value: request.hex, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ColorconverterResponseSchema },
        errorFactory: DataConversion.ColorconverterError,
      },
      options,
    );
  }

  /**
   * CSV to JSON Converter
   *
   * @remarks
   * Convert CSV data to JSON format with custom delimiter support
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.CsvtojsonError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  csvtojson(
    request: DataConversion.CsvtojsonRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CsvtojsonResponse, DataConversion.CsvtojsonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/csvtojson"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CsvtojsonRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CsvtojsonResponseSchema },
        errorFactory: DataConversion.CsvtojsonError,
      },
      options,
    );
  }

  /**
   * File Size Formatter
   *
   * @remarks
   * Convert bytes to human-readable file size
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.FilesizeformatterError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filesizeformatter(
    request: DataConversion.FilesizeformatterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1FilesizeformatterResponse, DataConversion.FilesizeformatterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/filesizeformatter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "bytes", value: request.bytes, schema: s.int() },
          { name: "unit", value: request.unit, schema: s.optional(s.string()) },
          { name: "precision", value: request.precision, schema: s.optional(s.int()) },
          { name: "standard", value: request.standard, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FilesizeformatterResponseSchema },
        errorFactory: DataConversion.FilesizeformatterError,
      },
      options,
    );
  }

  /**
   * HTML Entities Encoder/Decoder
   *
   * @remarks
   * Encode HTML special characters to entities for XSS prevention
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.HtmlentitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  htmlentities(
    request: DataConversion.HtmlentitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HtmlentitiesResponse, DataConversion.HtmlentitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/htmlentities"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HtmlentitiesRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HtmlentitiesResponseSchema },
        errorFactory: DataConversion.HtmlentitiesError,
      },
      options,
    );
  }

  /**
   * HTML to Image
   *
   * @remarks
   * Convert HTML code to image with customizable dimensions
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.HtmltoimageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  htmltoimage(
    request: DataConversion.HtmltoimageRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HtmltoimageResponse, DataConversion.HtmltoimageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/htmltoimage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HtmltoimageRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HtmltoimageResponseSchema },
        errorFactory: DataConversion.HtmltoimageError,
      },
      options,
    );
  }

  /**
   * JSON to CSV Converter
   *
   * @remarks
   * Convert JSON array data to CSV format
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.JsontocsvError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jsontocsv(
    request: DataConversion.JsontocsvRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JsontocsvResponse, DataConversion.JsontocsvError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/jsontocsv"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1JsontocsvRequestSchema },
      },
      {
        success: { kind: "json", schema: v1JsontocsvResponseSchema },
        errorFactory: DataConversion.JsontocsvError,
      },
      options,
    );
  }

  /**
   * JSON to JSONP
   *
   * @remarks
   * JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the
   * converted JSONP data.
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.JsontojsonpError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jsontojsonp(
    request: DataConversion.JsontojsonpRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JsontojsonpResponse, DataConversion.JsontojsonpError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/jsontojsonp"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1JsontojsonpRequestSchema },
      },
      {
        success: { kind: "json", schema: v1JsontojsonpResponseSchema },
        errorFactory: DataConversion.JsontojsonpError,
      },
      options,
    );
  }

  /**
   * JWT Decoder
   *
   * @remarks
   * Decode JWT token without verification
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.JwtdecoderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jwtdecoder(
    request: DataConversion.JwtdecoderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JwtdecoderResponse, DataConversion.JwtdecoderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/jwtdecoder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1JwtdecoderRequestSchema },
      },
      {
        success: { kind: "json", schema: v1JwtdecoderResponseSchema },
        errorFactory: DataConversion.JwtdecoderError,
      },
      options,
    );
  }

  /**
   * Markdown Table Generator
   *
   * @remarks
   * Convert data to a formatted markdown table
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MarkdowntableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markdowntable(
    request: DataConversion.MarkdowntableRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarkdowntableResponse, DataConversion.MarkdowntableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/markdowntable"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MarkdowntableRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MarkdowntableResponseSchema },
        errorFactory: DataConversion.MarkdowntableError,
      },
      options,
    );
  }

  /**
   * Markdown to HTML
   *
   * @remarks
   * Convert markdown text to HTML
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MarkdowntohtmlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markdowntohtml(
    request: DataConversion.MarkdowntohtmlRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarkdowntohtmlResponse, DataConversion.MarkdowntohtmlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/markdowntohtml"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MarkdowntohtmlRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MarkdowntohtmlResponseSchema },
        errorFactory: DataConversion.MarkdowntohtmlError,
      },
      options,
    );
  }

  /**
   * Markdown to Image
   *
   * @remarks
   * Convert markdown text to image file
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MarkdowntoimageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markdowntoimage(
    request: DataConversion.MarkdowntoimageRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarkdowntoimageResponse, DataConversion.MarkdowntoimageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/markdowntoimage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MarkdowntoimageRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MarkdowntoimageResponseSchema },
        errorFactory: DataConversion.MarkdowntoimageError,
      },
      options,
    );
  }

  /**
   * Markdown to PDF
   *
   * @remarks
   * Convert markdown text to PDF document
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MarkdowntopdfError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markdowntopdf(
    request: DataConversion.MarkdowntopdfRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarkdowntopdfResponse, DataConversion.MarkdowntopdfError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/markdowntopdf"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MarkdowntopdfRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MarkdowntopdfResponseSchema },
        errorFactory: DataConversion.MarkdowntopdfError,
      },
      options,
    );
  }

  /**
   * Math Calculator
   *
   * @remarks
   * Perform basic math operations: add, subtract, multiply, divide, power, modulo
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MathError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  math(
    request: DataConversion.MathRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MathResponse, DataConversion.MathError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/math"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MathRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MathResponseSchema },
        errorFactory: DataConversion.MathError,
      },
      options,
    );
  }

  /**
   * Meeting Time Converter
   *
   * @remarks
   * Convert meeting time between timezones
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.MeetingtimeconverterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  meetingtimeconverter(
    request: DataConversion.MeetingtimeconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MeetingtimeconverterResponse, DataConversion.MeetingtimeconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/meetingtimeconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "time", value: request.time, schema: s.string() },
          { name: "fromTimezone", value: request.fromTimezone, schema: s.string() },
          { name: "toTimezone", value: request.toTimezone, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MeetingtimeconverterResponseSchema },
        errorFactory: DataConversion.MeetingtimeconverterError,
      },
      options,
    );
  }

  /**
   * Number Base Converter
   *
   * @remarks
   * Convert a number from one base to another
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.NumberbaseconverterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numberbaseconverter(
    request: DataConversion.NumberbaseconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1NumberbaseconverterResponse, DataConversion.NumberbaseconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/numberbaseconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "value", value: request.value, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NumberbaseconverterResponseSchema },
        errorFactory: DataConversion.NumberbaseconverterError,
      },
      options,
    );
  }

  /**
   * Number to Words
   *
   * @remarks
   * Convert a number to words, including each word and the orginal equivalent
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.NumbertowordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbertowords(
    request: DataConversion.NumbertowordsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1NumbertowordsResponse, DataConversion.NumbertowordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/numbertowords"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "number", value: request.number, schema: s.float64() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NumbertowordsResponseSchema },
        errorFactory: DataConversion.NumbertowordsError,
      },
      options,
    );
  }

  /**
   * Placeholder Text Generator
   *
   * @remarks
   * Generate placeholder text in various styles
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.PlaceholdertextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeholdertext(
    request: DataConversion.PlaceholdertextRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PlaceholdertextResponse, DataConversion.PlaceholdertextError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/placeholdertext"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "style", value: request.style, schema: s.optional(s.string()) },
          { name: "paragraphs", value: request.paragraphs, schema: s.optional(s.int()) },
          { name: "sentences", value: request.sentences, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PlaceholdertextResponseSchema },
        errorFactory: DataConversion.PlaceholdertextError,
      },
      options,
    );
  }

  /**
   * Punycode Converter
   *
   * @remarks
   * Encode Unicode text to Punycode (ASCII-compatible encoding)
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.PunycodeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  punycode(
    request: DataConversion.PunycodeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PunycodeResponse, DataConversion.PunycodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/punycode"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.string() },
          { name: "mode", value: request.mode, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PunycodeResponseSchema },
        errorFactory: DataConversion.PunycodeError,
      },
      options,
    );
  }

  /**
   * Query String Builder
   *
   * @remarks
   * Build URL query string from JSON parameters
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.QuerystringbuilderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querystringbuilder(
    request: DataConversion.QuerystringbuilderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1QuerystringbuilderResponse, DataConversion.QuerystringbuilderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/querystringbuilder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1QuerystringbuilderRequestSchema },
      },
      {
        success: { kind: "json", schema: v1QuerystringbuilderResponseSchema },
        errorFactory: DataConversion.QuerystringbuilderError,
      },
      options,
    );
  }

  /**
   * Relative Time Formatter
   *
   * @remarks
   * Convert Unix timestamp to relative time format
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.RelativetimeformatterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  relativetimeformatter(
    request: DataConversion.RelativetimeformatterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RelativetimeformatterResponse, DataConversion.RelativetimeformatterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/relativetimeformatter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "style", value: request.style, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RelativetimeformatterResponseSchema },
        errorFactory: DataConversion.RelativetimeformatterError,
      },
      options,
    );
  }

  /**
   * Roman Numeral Converter
   *
   * @remarks
   * Convert a number to Roman numerals
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.RomanconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  romanconverter(
    request: DataConversion.RomanconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RomanconverterResponse, DataConversion.RomanconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/romanconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "number", value: request.number, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RomanconverterResponseSchema },
        errorFactory: DataConversion.RomanconverterError,
      },
      options,
    );
  }

  /**
   * Text to Color
   *
   * @remarks
   * Generate a color from text
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.TexttocolorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  texttocolor(
    request: DataConversion.TexttocolorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TexttocolorResponse, DataConversion.TexttocolorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/texttocolor"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "color", value: request.color, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TexttocolorResponseSchema },
        errorFactory: DataConversion.TexttocolorError,
      },
      options,
    );
  }

  /**
   * Unicode Escape/Unescape
   *
   * @remarks
   * Convert characters to Unicode escape sequences (\uXXXX format)
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.UnicodeescapeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unicodeescape(
    request: DataConversion.UnicodeescapeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UnicodeescapeResponse, DataConversion.UnicodeescapeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/unicodeescape"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UnicodeescapeRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UnicodeescapeResponseSchema },
        errorFactory: DataConversion.UnicodeescapeError,
      },
      options,
    );
  }

  /**
   * Unit Converter
   *
   * @remarks
   * Convert units from one to another
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.UnitconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unitconverter(
    request: DataConversion.UnitconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UnitconverterResponse, DataConversion.UnitconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/unitconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "value", value: request.value, schema: s.float64() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UnitconverterResponseSchema },
        errorFactory: DataConversion.UnitconverterError,
      },
      options,
    );
  }

  /**
   * Unix Timestamp Converter
   *
   * @remarks
   * Convert Unix timestamp to human-readable date
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.UnixtimestampError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unixtimestamp(
    request: DataConversion.UnixtimestampRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UnixtimestampResponse, DataConversion.UnixtimestampError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/unixtimestamp"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.string() },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UnixtimestampResponseSchema },
        errorFactory: DataConversion.UnixtimestampError,
      },
      options,
    );
  }

  /**
   * URL Encoder/Decoder
   *
   * @remarks
   * Encode text to URL-safe format (percent-encoding)
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.UrlencodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  urlencode(
    request: DataConversion.UrlencodeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UrlencodeResponse, DataConversion.UrlencodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urlencode"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UrlencodeRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UrlencodeResponseSchema },
        errorFactory: DataConversion.UrlencodeError,
      },
      options,
    );
  }

  /**
   * URL to Markdown
   *
   * @remarks
   * Convert a webpage URL to Markdown format
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.UrltomarkdownError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  urltomarkdown(
    request: DataConversion.UrltomarkdownRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UrltomarkdownResponse, DataConversion.UrltomarkdownError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urltomarkdown"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1UrltomarkdownRequestSchema },
      },
      {
        success: { kind: "json", schema: v1UrltomarkdownResponseSchema },
        errorFactory: DataConversion.UrltomarkdownError,
      },
      options,
    );
  }

  /**
   * Variable Name Converter
   *
   * @remarks
   * Convert variable names between naming conventions
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.VariablenameconverterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablenameconverter(
    request: DataConversion.VariablenameconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VariablenameconverterResponse, DataConversion.VariablenameconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/variablenameconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1VariablenameconverterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1VariablenameconverterResponseSchema },
        errorFactory: DataConversion.VariablenameconverterError,
      },
      options,
    );
  }

  /**
   * Website to Text
   *
   * @remarks
   * Convert a given webiste content to simple text
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.WebsitetotextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  websitetotext(
    request: DataConversion.WebsitetotextRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebsitetotextResponse, DataConversion.WebsitetotextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/websitetotext"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebsitetotextRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WebsitetotextResponseSchema },
        errorFactory: DataConversion.WebsitetotextError,
      },
      options,
    );
  }

  /**
   * Words to Numbers
   *
   * @remarks
   * Convert words to numbers, including each word and the orginal equivalent
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.WordstonumbersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordstonumbers(
    request: DataConversion.WordstonumbersRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WordstonumbersResponse, DataConversion.WordstonumbersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordstonumbers"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "words", value: request.words, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordstonumbersResponseSchema },
        errorFactory: DataConversion.WordstonumbersError,
      },
      options,
    );
  }

  /**
   * XML to JSON
   *
   * @remarks
   * Convert XML to JSON
   *
   * @returns Successful Response
   *
   * @throws {@link DataConversion.XmltojsonError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  xmltojson(
    request: DataConversion.XmltojsonRequest,
    options?: RequestOptions,
  ): ApiPromise<V1XmltojsonResponse, DataConversion.XmltojsonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/xmltojson"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1XmltojsonRequestSchema },
      },
      {
        success: { kind: "json", schema: v1XmltojsonResponseSchema },
        errorFactory: DataConversion.XmltojsonError,
      },
      options,
    );
  }
}

export namespace DataConversion {
  export type Ascii85EncoderRequest = {
    /** Text to encode */
    text: string;
    /** Action to perform */
    action?: string;
    /** Output format */
    format?: string;
  };

  export class Ascii85EncoderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<Ascii85EncoderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type Base64Request = {
    /** The text to encode */
    text: string;
    /** The action to perform */
    action?: string;
  };

  export class Base64Error extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<Base64Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ColorconverterRequest = {
    /** The color in hexadecimal format (e.g., FF0000). Make sure you ommit the # */
    hex: string;
  };

  export class ColorconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ColorconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CsvtojsonRequest = {
    body: V1CsvtojsonRequest;
  };

  export class CsvtojsonError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CsvtojsonError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FilesizeformatterRequest = {
    /** Number of bytes to format */
    bytes: number;
    /** Specific target unit (optional, auto-selects best unit if not specified) */
    unit?: string;
    /** Decimal places (0-10) */
    precision?: number;
    /** Standard to use: binary (1024) or decimal (1000) */
    standard?: string;
  };

  export class FilesizeformatterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FilesizeformatterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HtmlentitiesRequest = {
    body: V1HtmlentitiesRequest;
  };

  export class HtmlentitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HtmlentitiesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HtmltoimageRequest = {
    body: V1HtmltoimageRequest;
  };

  export class HtmltoimageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HtmltoimageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JsontocsvRequest = {
    body: V1JsontocsvRequest;
  };

  export class JsontocsvError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JsontocsvError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JsontojsonpRequest = {
    body: V1JsontojsonpRequest;
  };

  export class JsontojsonpError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JsontojsonpError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JwtdecoderRequest = {
    body: V1JwtdecoderRequest;
  };

  export class JwtdecoderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JwtdecoderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarkdowntableRequest = {
    body: V1MarkdowntableRequest;
  };

  export class MarkdowntableError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarkdowntableError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarkdowntohtmlRequest = {
    body: V1MarkdowntohtmlRequest;
  };

  export class MarkdowntohtmlError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarkdowntohtmlError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarkdowntoimageRequest = {
    body: V1MarkdowntoimageRequest;
  };

  export class MarkdowntoimageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarkdowntoimageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarkdowntopdfRequest = {
    body: V1MarkdowntopdfRequest;
  };

  export class MarkdowntopdfError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarkdowntopdfError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MathRequest = {
    body: V1MathRequest;
  };

  export class MathError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MathError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MeetingtimeconverterRequest = {
    /** Time in HH:MM format (24-hour) */
    time: string;
    /** Source IANA timezone identifier */
    fromTimezone: string;
    /** Target IANA timezone identifier */
    toTimezone: string;
    /** Optional date in YYYY-MM-DD format (defaults to today) */
    date?: string;
  };

  export class MeetingtimeconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MeetingtimeconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NumberbaseconverterRequest = {
    /** The number to convert */
    value: string;
    /** Source base (default: 10) */
    from?: number;
    /** Target base (returns all common bases if not specified) */
    to?: number;
  };

  export class NumberbaseconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumberbaseconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NumbertowordsRequest = {
    /** The number to convert to words */
    number: number;
  };

  export class NumbertowordsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbertowordsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PlaceholdertextRequest = {
    /** The style of placeholder text */
    style?: string;
    /** Number of paragraphs to generate */
    paragraphs?: number;
    /** Number of sentences per paragraph */
    sentences?: number;
  };

  export class PlaceholdertextError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlaceholdertextError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PunycodeRequest = {
    /** Unicode text or domain to encode (max 1000 characters) */
    text: string;
    /** Conversion mode */
    mode?: string;
  };

  export class PunycodeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PunycodeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type QuerystringbuilderRequest = {
    body: V1QuerystringbuilderRequest;
  };

  export class QuerystringbuilderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<QuerystringbuilderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RelativetimeformatterRequest = {
    /** Unix timestamp in seconds or milliseconds */
    timestamp: string;
    /** Reference time to compare against (default: current time) */
    reference?: string;
    /** Output style */
    style?: string;
  };

  export class RelativetimeformatterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RelativetimeformatterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RomanconverterRequest = {
    /** The number to convert to Roman numerals */
    number: number;
  };

  export class RomanconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RomanconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TexttocolorRequest = {
    /** The text to convert the color from */
    color: string;
  };

  export class TexttocolorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TexttocolorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnicodeescapeRequest = {
    body: V1UnicodeescapeRequest;
  };

  export class UnicodeescapeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnicodeescapeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnitconverterRequest = {
    /** The value to convert */
    value: number;
    /** The unit to convert from */
    from: string;
    /** The unit to convert to */
    to: string;
  };

  export class UnitconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnitconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnixtimestampRequest = {
    /** Unix timestamp to convert */
    timestamp: string;
    /** Timestamp format */
    format?: string;
  };

  export class UnixtimestampError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnixtimestampError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UrlencodeRequest = {
    body: V1UrlencodeRequest;
  };

  export class UrlencodeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UrlencodeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UrltomarkdownRequest = {
    body: V1UrltomarkdownRequest;
  };

  export class UrltomarkdownError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UrltomarkdownError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type VariablenameconverterRequest = {
    body: V1VariablenameconverterRequest;
  };

  export class VariablenameconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablenameconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebsitetotextRequest = {
    body: V1WebsitetotextRequest;
  };

  export class WebsitetotextError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebsitetotextError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordstonumbersRequest = {
    /** The words to convert to numbers */
    words: string;
  };

  export class WordstonumbersError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordstonumbersError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type XmltojsonRequest = {
    body: V1XmltojsonRequest;
  };

  export class XmltojsonError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<XmltojsonError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

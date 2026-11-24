import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1BirthstonesResponseSchema,
  type V1BirthstonesResponse,
} from "../models/v1-birthstones-response.js";
import { v1CaaparserRequestSchema, type V1CaaparserRequest } from "../models/v1-caaparser-request.js";
import { v1CaaparserResponseSchema, type V1CaaparserResponse } from "../models/v1-caaparser-response.js";
import {
  v1ColorbrightnessResponseSchema,
  type V1ColorbrightnessResponse,
} from "../models/v1-colorbrightness-response.js";
import {
  v1ColornamefinderResponseSchema,
  type V1ColornamefinderResponse,
} from "../models/v1-colornamefinder-response.js";
import {
  v1HttpstatuslookupResponseSchema,
  type V1HttpstatuslookupResponse,
} from "../models/v1-httpstatuslookup-response.js";
import {
  v1MayancalendarResponseSchema,
  type V1MayancalendarResponse,
} from "../models/v1-mayancalendar-response.js";
import {
  v1MimetypelookupResponseSchema,
  type V1MimetypelookupResponse,
} from "../models/v1-mimetypelookup-response.js";
import {
  v1PortnumberlookupResponseSchema,
  type V1PortnumberlookupResponse,
} from "../models/v1-portnumberlookup-response.js";
import {
  v1RingsizeconverterResponseSchema,
  type V1RingsizeconverterResponse,
} from "../models/v1-ringsizeconverter-response.js";
import {
  v1ShoesizeconverterResponseSchema,
  type V1ShoesizeconverterResponse,
} from "../models/v1-shoesizeconverter-response.js";
import { v1SrvparserRequestSchema, type V1SrvparserRequest } from "../models/v1-srvparser-request.js";
import { v1SrvparserResponseSchema, type V1SrvparserResponse } from "../models/v1-srvparser-response.js";
import type { Servers } from "../servers.js";

export class ReferenceData {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Birthstones
   *
   * @remarks
   * Get birthstone information for a specific month
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.BirthstonesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  birthstones(
    request: ReferenceData.BirthstonesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BirthstonesResponse, ReferenceData.BirthstonesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/birthstones"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "month", value: request.month, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BirthstonesResponseSchema },
        errorFactory: ReferenceData.BirthstonesError,
      },
      options,
    );
  }

  /**
   * CAA Record Parser
   *
   * @remarks
   * Parse a DNS CAA record and extract authorization details
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.CaaparserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  caaparser(
    request: ReferenceData.CaaparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CaaparserResponse, ReferenceData.CaaparserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/caaparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CaaparserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CaaparserResponseSchema },
        errorFactory: ReferenceData.CaaparserError,
      },
      options,
    );
  }

  /**
   * Color Brightness Calculator
   *
   * @remarks
   * Calculate brightness, luminance, and contrast ratios for a color
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.ColorbrightnessError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  colorbrightness(
    request: ReferenceData.ColorbrightnessRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ColorbrightnessResponse, ReferenceData.ColorbrightnessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/colorbrightness"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "hex", value: request.hex, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ColorbrightnessResponseSchema },
        errorFactory: ReferenceData.ColorbrightnessError,
      },
      options,
    );
  }

  /**
   * Color Name Finder
   *
   * @remarks
   * Find the closest named color for a hex color value
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.ColornamefinderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  colornamefinder(
    request: ReferenceData.ColornamefinderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ColornamefinderResponse, ReferenceData.ColornamefinderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/colornamefinder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "hex", value: request.hex, schema: s.string() },
          { name: "closest", value: request.closest, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ColornamefinderResponseSchema },
        errorFactory: ReferenceData.ColornamefinderError,
      },
      options,
    );
  }

  /**
   * HTTP Status Code Lookup
   *
   * @remarks
   * Get information about an HTTP status code
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.HttpstatuslookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  httpstatuslookup(
    request: ReferenceData.HttpstatuslookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HttpstatuslookupResponse, ReferenceData.HttpstatuslookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/httpstatuslookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "code", value: request.code, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HttpstatuslookupResponseSchema },
        errorFactory: ReferenceData.HttpstatuslookupError,
      },
      options,
    );
  }

  /**
   * Mayan Calendar
   *
   * @remarks
   * Convert a Gregorian date to Mayan calendar formats
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.MayancalendarError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mayancalendar(
    request: ReferenceData.MayancalendarRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MayancalendarResponse, ReferenceData.MayancalendarError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/mayancalendar"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MayancalendarResponseSchema },
        errorFactory: ReferenceData.MayancalendarError,
      },
      options,
    );
  }

  /**
   * MIME Type Lookup
   *
   * @remarks
   * Look up MIME type by file extension
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.MimetypelookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mimetypelookup(
    request: ReferenceData.MimetypelookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MimetypelookupResponse, ReferenceData.MimetypelookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/mimetypelookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "extension", value: request.extension, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MimetypelookupResponseSchema },
        errorFactory: ReferenceData.MimetypelookupError,
      },
      options,
    );
  }

  /**
   * Port Number Lookup
   *
   * @remarks
   * Look up service information by port number
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.PortnumberlookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  portnumberlookup(
    request: ReferenceData.PortnumberlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PortnumberlookupResponse, ReferenceData.PortnumberlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/portnumberlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "port", value: request.port, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PortnumberlookupResponseSchema },
        errorFactory: ReferenceData.PortnumberlookupError,
      },
      options,
    );
  }

  /**
   * Ring Size Converter
   *
   * @remarks
   * Convert ring size between international standards
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.RingsizeconverterError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ringsizeconverter(
    request: ReferenceData.RingsizeconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RingsizeconverterResponse, ReferenceData.RingsizeconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ringsizeconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RingsizeconverterResponseSchema },
        errorFactory: ReferenceData.RingsizeconverterError,
      },
      options,
    );
  }

  /**
   * Shoe Size Converter
   *
   * @remarks
   * Convert shoe size between international standards
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.ShoesizeconverterError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  shoesizeconverter(
    request: ReferenceData.ShoesizeconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ShoesizeconverterResponse, ReferenceData.ShoesizeconverterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/shoesizeconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.string() },
          { name: "from", value: request.from, schema: s.string() },
          { name: "gender", value: request.gender, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ShoesizeconverterResponseSchema },
        errorFactory: ReferenceData.ShoesizeconverterError,
      },
      options,
    );
  }

  /**
   * SRV Record Parser
   *
   * @remarks
   * Parse a DNS SRV record and extract service information
   *
   * @returns Successful Response
   *
   * @throws {@link ReferenceData.SrvparserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  srvparser(
    request: ReferenceData.SrvparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SrvparserResponse, ReferenceData.SrvparserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/srvparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SrvparserRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SrvparserResponseSchema },
        errorFactory: ReferenceData.SrvparserError,
      },
      options,
    );
  }
}

export namespace ReferenceData {
  export type BirthstonesRequest = {
    /** The month number (1-12) or name */
    month: string;
  };

  export class BirthstonesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BirthstonesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CaaparserRequest = {
    body: V1CaaparserRequest;
  };

  export class CaaparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CaaparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ColorbrightnessRequest = {
    /** Hex color value (with or without # prefix) */
    hex: string;
  };

  export class ColorbrightnessError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ColorbrightnessError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ColornamefinderRequest = {
    /** Hex color value (with or without # prefix) */
    hex: string;
    /** Number of closest color matches to return */
    closest?: number;
  };

  export class ColornamefinderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ColornamefinderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HttpstatuslookupRequest = {
    /** HTTP status code to lookup */
    code: number;
  };

  export class HttpstatuslookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HttpstatuslookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MayancalendarRequest = {
    /** The Gregorian date in YYYY-MM-DD format */
    date: string;
  };

  export class MayancalendarError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MayancalendarError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MimetypelookupRequest = {
    /** File extension to lookup (without the leading dot) */
    extension: string;
  };

  export class MimetypelookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MimetypelookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PortnumberlookupRequest = {
    /** Port number to lookup */
    port: number;
  };

  export class PortnumberlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PortnumberlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RingsizeconverterRequest = {
    /** The ring size to convert */
    size: string;
    /** Source region */
    from: string;
  };

  export class RingsizeconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RingsizeconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ShoesizeconverterRequest = {
    /** The shoe size to convert */
    size: string;
    /** Source region */
    from: string;
    /** Gender sizing */
    gender?: string;
  };

  export class ShoesizeconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ShoesizeconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SrvparserRequest = {
    body: V1SrvparserRequest;
  };

  export class SrvparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SrvparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { decodeVinSchema, type DecodeVin } from "../models/decode-vin.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { platedecoderResponseSchema, type PlatedecoderResponse } from "../models/platedecoder-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import {
  v1UsPlatedecoderResponseSchema,
  type V1UsPlatedecoderResponse,
} from "../models/v1-us-platedecoder-response.js";
import {
  v2PlatedecoderResponseSchema,
  type V2PlatedecoderResponse,
} from "../models/v2-platedecoder-response.js";
import type { Servers } from "../servers.js";

/**
 * Decode license plates into vehicle data
 */
export class PlateDecoder {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * License Plate Decoder (v1)
   *
   * @remarks
   * Decode a license plate into vehicle data. Internally proxies to the v2 plate decoder. The
   * `state` parameter accepts a two-letter US state code, Australian state, or one of the legacy
   * country codes `BR`, `UK`, `IR`, `IT`, `ES`, `IND`, `MX`, `NZ`.
   *
   * @returns Plate decoded.
   *
   * @throws {@link PlateDecoder.DecodePlateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  decodePlate(
    request: PlateDecoder.DecodePlateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatedecoderResponse, PlateDecoder.DecodePlateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/platedecoder"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "plate", value: request.plate, schema: s.string() },
          { name: "state", value: request.state, schema: s.string() },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platedecoderResponseSchema },
        errorFactory: PlateDecoder.DecodePlateError,
      },
      options,
    );
  }

  /**
   * License Plate Decoder (v2)
   *
   * @remarks
   * Decode a license plate into vehicle data across 60+ supported countries. `country` is an ISO
   * 3166-1 alpha-2 code (optional for `US`). `state` is required for `US`, `AU` and `CA`. For
   * Pakistan (`PK`) a `district` is also required for the Khyber-Pakhtunkhwa province.
   *
   * For Spain (`ES`), set `require_vin=true` to always include a VIN. Additional charges apply:
   * when `require_vin=true`, the request is billed 2x and usage counts 2x.
   *
   * @returns Plate decoded.
   *
   * @throws {@link PlateDecoder.DecodePlateV2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  decodePlateV2(
    request: PlateDecoder.DecodePlateV2Request,
    options?: RequestOptions,
  ): ApiPromise<V2PlatedecoderResponse, PlateDecoder.DecodePlateV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/platedecoder"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "plate", value: request.plate, schema: s.string() },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "district", value: request.district, schema: s.optional(s.string()) },
          { name: "require_vin", value: request.requireVin, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2PlatedecoderResponseSchema },
        errorFactory: PlateDecoder.DecodePlateV2Error,
      },
      options,
    );
  }

  /**
   * US Vehicle Plate Decoder
   *
   * @remarks
   * Look up a US vehicle by license plate number and state. Returns the VIN, year, make, model,
   * trim, engine, body style, transmission, drive type, fuel type and exterior color. Optionally
   * decodes the VIN to include the full vehicle specifications object. Accepts plates from all 50
   * US states, the District of Columbia (DC) and Puerto Rico (PR).
   *
   * This endpoint is **not** available on the free Sandbox tier.
   *
   * @returns Plate decoded successfully.
   *
   * @throws {@link PlateDecoder.DecodeUsPlateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  decodeUsPlate(
    request: PlateDecoder.DecodeUsPlateRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UsPlatedecoderResponse, PlateDecoder.DecodeUsPlateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/us-platedecoder"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "plate", value: request.plate, schema: s.string() },
          { name: "state", value: request.state, schema: s.string() },
          { name: "decodeVIN", value: request.decodeVin, schema: s.optional(s.lazy(() => decodeVinSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UsPlatedecoderResponseSchema },
        errorFactory: PlateDecoder.DecodeUsPlateError,
      },
      options,
    );
  }
}

export namespace PlateDecoder {
  export type DecodePlateRequest = {
    /** The vehicle registration number or license plate number. */
    plate: string;
    /**
     * The two letter state code (US) such as `CA` or `NY`, Australian state, or Brazil `BR`, United
     * Kingdom `UK`, Ireland `IR`, Italy `IT`, Spain `ES`, India `IND`, Mexico `MX`, New Zealand
     * `NZ`.
     */
    state: string;
    /** Country code, e.g. Australia `AU`. Optional for `US`. */
    country?: string;
    /** The format of the response. One of `json` or `xml`. @default Format.Json */
    format?: Format;
  };

  export class DecodePlateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DecodePlateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 504, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DecodePlateV2Request = {
    /** The vehicle registration number or license plate number. */
    plate: string;
    /**
     * ISO 3166-1 alpha-2 country code such as `AU` for Australia or `ZA` for South Africa. Optional
     * for `US`.
     */
    country?: string;
    /**
     * The two letter state code (US) such as `CA` or `NY`, an Australian state (e.g. `NSW`, `VIC`),
     * or a Canadian province (e.g. `ON`). Required only for `US`, `AU` and `CA`.
     */
    state?: string;
    /**
     * The district of the vehicle registration number. Required for Pakistan (`PK`) plates
     * registered in the Khyber-Pakhtunkhwa province.
     */
    district?: string;
    /**
     * Only supported when `country=ES`. Set to `true` to always include a VIN. The request is
     * billed 2x and usage counts 2x.
     */
    requireVin?: boolean;
  };

  export class DecodePlateV2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DecodePlateV2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
    ];
  }

  export type DecodeUsPlateRequest = {
    /** The vehicle registration number or license plate number. */
    plate: string;
    /**
     * Two-letter abbreviation for one of the 50 US states, the District of Columbia (`DC`), or
     * Puerto Rico (`PR`).
     */
    state: string;
    /**
     * Set to `true` or `1` to decode the resolved VIN and include a `vehicle_specs` object in the
     * response (identical in shape to the Specifications endpoint response).
     */
    decodeVin?: DecodeVin;
  };

  export class DecodeUsPlateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DecodeUsPlateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

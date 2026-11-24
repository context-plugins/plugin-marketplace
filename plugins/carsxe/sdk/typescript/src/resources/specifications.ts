import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deepdataSchema, type Deepdata } from "../models/deepdata.js";
import {
  disableIntVinDecodingSchema,
  type DisableIntVinDecoding,
} from "../models/disable-int-vin-decoding.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { specsResponseSchema, type SpecsResponse } from "../models/specs-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import {
  v1InternationalVinDecoderResponseSchema,
  type V1InternationalVinDecoderResponse,
} from "../models/v1-international-vin-decoder-response.js";
import type { Servers } from "../servers.js";

/**
 * VIN decoding and vehicle specifications
 */
export class Specifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * International VIN Decoder
   *
   * @remarks
   * Decode a non-US (international) VIN into vehicle attributes.
   *
   * @returns International VIN decoded.
   *
   * @throws {@link Specifications.GetInternationalVinDecoderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInternationalVinDecoder(
    request: Specifications.GetInternationalVinDecoderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InternationalVinDecoderResponse, Specifications.GetInternationalVinDecoderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/international-vin-decoder"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1InternationalVinDecoderResponseSchema },
        errorFactory: Specifications.GetInternationalVinDecoderError,
      },
      options,
    );
  }

  /**
   * Vehicle Specifications (VIN decoder)
   *
   * @remarks
   * Decode a 17-character VIN and return detailed vehicle specifications, including attributes,
   * colors, equipment and warranties. If the VIN cannot be decoded, an International VIN decoding
   * check is run as a fallback unless `disableIntVINDecoding=1` is set.
   *
   * @returns Vehicle specifications retrieved.
   *
   * @throws {@link Specifications.GetVehicleSpecsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleSpecs(
    request: Specifications.GetVehicleSpecsRequest,
    options?: RequestOptions,
  ): ApiPromise<SpecsResponse, Specifications.GetVehicleSpecsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/specs"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "vin", value: request.vin, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "deepdata", value: request.deepdata, schema: s.optional(s.lazy(() => deepdataSchema)) },
          {
            name: "disableIntVINDecoding",
            value: request.disableIntVinDecoding,
            schema: s.optional(s.lazy(() => disableIntVinDecodingSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: specsResponseSchema },
        errorFactory: Specifications.GetVehicleSpecsError,
      },
      options,
    );
  }
}

export namespace Specifications {
  export type GetInternationalVinDecoderRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
  };

  export const getInternationalVinDecoderRequestSchema: Schema<GetInternationalVinDecoderRequest> =
    s.lazySchema(() =>
      s.object<GetInternationalVinDecoderRequest>({
        vin: s.string().check(s.minLength(17), s.maxLength(17)),
      }),
    );

  export class GetInternationalVinDecoderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInternationalVinDecoderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVehicleSpecsRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
    /** The format of the response. One of `json` or `xml`. @default Format.Json */
    format?: Format;
    /**
     * Request extra data. Set to `1` to use. Significantly slower than the regular request but
     * retrieves additional data.
     */
    deepdata?: Deepdata;
    /**
     * Set to `1` to disable the International VIN decoding fallback and return an error instead of
     * a potential partial response.
     */
    disableIntVinDecoding?: DisableIntVinDecoding;
  };

  export const getVehicleSpecsRequestSchema: Schema<GetVehicleSpecsRequest> = s.lazySchema(() =>
    s.object<GetVehicleSpecsRequest>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
      format: s.defaulted(formatSchema, Format.Json),
      deepdata: s.optional(s.lazy(() => deepdataSchema)),
      disableIntVinDecoding: s.optional(s.lazy(() => disableIntVinDecodingSchema)),
    }),
  );

  export class GetVehicleSpecsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleSpecsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

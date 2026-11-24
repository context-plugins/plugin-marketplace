import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "../models/condition.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { marketvalueResponseSchema, type MarketvalueResponse } from "../models/marketvalue-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import {
  v2MarketvalueResponseSchema,
  type V2MarketvalueResponse,
} from "../models/v2-marketvalue-response.js";
import type { Servers } from "../servers.js";

/**
 * Vehicle market value by VIN
 */
export class MarketValue {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Vehicle Market Value (v1)
   *
   * @remarks
   * Get the market value of a vehicle by VIN, including retail, trade-in and auction values.
   *
   * @returns Market value retrieved.
   *
   * @throws {@link MarketValue.GetMarketValueError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketValue(
    request: MarketValue.GetMarketValueRequest,
    options?: RequestOptions,
  ): ApiPromise<MarketvalueResponse, MarketValue.GetMarketValueError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/marketvalue"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "vin", value: request.vin, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: marketvalueResponseSchema },
        errorFactory: MarketValue.GetMarketValueError,
      },
      options,
    );
  }

  /**
   * Vehicle Market Value (v2)
   *
   * @remarks
   * Get detailed market values for a VIN, including wholesale, retail and trade-in values across
   * condition tiers, with optional adjustments for US state, mileage and condition.
   *
   * @returns Market value retrieved.
   *
   * @throws {@link MarketValue.GetMarketValueV2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketValueV2(
    request: MarketValue.GetMarketValueV2Request,
    options?: RequestOptions,
  ): ApiPromise<V2MarketvalueResponse, MarketValue.GetMarketValueV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/marketvalue"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "vin", value: request.vin, schema: s.string() },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "mileage", value: request.mileage, schema: s.optional(s.float64()) },
          { name: "condition", value: request.condition, schema: s.optional(s.lazy(() => conditionSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2MarketvalueResponseSchema },
        errorFactory: MarketValue.GetMarketValueV2Error,
      },
      options,
    );
  }
}

export namespace MarketValue {
  export type GetMarketValueRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
    /** The format of the response. One of `json` or `xml`. @default Format.Json */
    format?: Format;
  };

  export const getMarketValueRequestSchema: Schema<GetMarketValueRequest> = s.lazySchema(() =>
    s.object<GetMarketValueRequest>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
      format: s.defaulted(formatSchema, Format.Json),
    }),
  );

  export class GetMarketValueError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketValueError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetMarketValueV2Request = {
    /** The 17 character long vehicle identification number. */
    vin: string;
    /** The US state of the vehicle to get the market value for. */
    state?: string;
    /**
     * The current mileage of the vehicle used to adjust the market value. Must be a valid numeric
     * value.
     */
    mileage?: number;
    /** The overall condition of the vehicle. */
    condition?: Condition;
  };

  export const getMarketValueV2RequestSchema: Schema<GetMarketValueV2Request> = s.lazySchema(() =>
    s.object<GetMarketValueV2Request>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
      state: s.optional(s.string()),
      mileage: s.optional(s.float64()),
      condition: s.optional(s.lazy(() => conditionSchema)),
    }),
  );

  export class GetMarketValueV2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketValueV2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

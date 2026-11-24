import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error503Schema, type Error503 } from "../models/error503.js";
import { priceTableSchema, type PriceTable } from "../models/price-table.js";
import { usageSchema, type Usage } from "../models/usage.js";
import type { Servers } from "../servers.js";

/**
 * Usage and prices. Free.
 */
export class AccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The price table
   *
   * @remarks
   * The price table every call is priced from, byte for byte. Free. `ETag` is its SHA-256 (`-gz` on
   * the gzip copy); 304 on a match. Gzip unless refused.
   *
   * @returns The table.
   *
   * @throws {@link AccountApi.GetPricingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPricing(options?: RequestOptions): ApiPromise<PriceTable, AccountApi.GetPricingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/pricing"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceTableSchema },
        errorFactory: AccountApi.GetPricingError,
      },
      options,
    );
  }

  /**
   * Your plan, balance, key, flood cap and scope
   *
   * @remarks
   * Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON.
   * `scope` and `scope_version` are your account's scope (both null when it has none);
   * `key.products` is your key's products within it.
   *
   * @returns Usage.
   *
   * @throws {@link AccountApi.GetUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OddsRelayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsage(options?: RequestOptions): ApiPromise<Usage, AccountApi.GetUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/usage"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usageSchema },
        errorFactory: AccountApi.GetUsageError,
      },
      options,
    );
  }
}

export namespace AccountApi {
  export class GetPricingError extends ApiError {
    declare readonly payload:
      | Declared<"error304", undefined>
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error503", Error503>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPricingError> = [
      { on: 304, kind: "error304", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 503, kind: "error503", decode: { kind: "json", schema: error503Schema } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export class GetUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error503", Error503>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 503, kind: "error503", decode: { kind: "json", schema: error503Schema } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }
}

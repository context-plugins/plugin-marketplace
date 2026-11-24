import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { shippingResponseSchema, type ShippingResponse } from "../models/shipping-response.js";
import type { Servers } from "../servers.js";

/**
 * Auction-to-port delivery prices.
 */
export class Shipping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get auction-to-port shipping prices
   *
   * @remarks
   * Get delivery prices from auction location to one or more destination ports by VIN or lot
   * number.
   *
   * @returns Auction-to-port shipping prices.
   *
   * @throws {@link Shipping.GetAuctionToPortShippingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuctionToPortShipping(
    request: Shipping.GetAuctionToPortShippingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ShippingResponse, Shipping.GetAuctionToPortShippingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/shipping/auction-to-port"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "vin", value: request.vin, schema: s.optional(s.string()) },
          { name: "lot_number", value: request.lotNumber, schema: s.optional(s.string()) },
          { name: "ports", value: request.ports, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingResponseSchema },
        errorFactory: Shipping.GetAuctionToPortShippingError,
      },
      options,
    );
  }

  /**
   * Get shipping prices for a vehicle
   *
   * @remarks
   * Get auction-to-port shipping prices for a vehicle by VIN or lot number.
   *
   * @returns Shipping prices for the selected vehicle.
   *
   * @throws {@link Shipping.GetVehicleShippingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleShipping(
    request: Shipping.GetVehicleShippingRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingResponse, Shipping.GetVehicleShippingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/{slugVin}/shipping"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "slugVin", value: request.slugVin, schema: s.string() }],
        query: [{ name: "ports", value: request.ports, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingResponseSchema },
        errorFactory: Shipping.GetVehicleShippingError,
      },
      options,
    );
  }
}

export namespace Shipping {
  export type GetAuctionToPortShippingRequest = {
    /** Vehicle VIN. */
    vin?: string;
    /** Auction lot number. */
    lotNumber?: string;
    /** Comma-separated list of destination ports to return. */
    ports?: string;
  };

  export class GetAuctionToPortShippingError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuctionToPortShippingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type GetVehicleShippingRequest = {
    /**
     * Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin
     * returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI
     * 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
     */
    slugVin: string;
    /** Comma-separated list of destination ports to return. */
    ports?: string;
  };

  export class GetVehicleShippingError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleShippingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}

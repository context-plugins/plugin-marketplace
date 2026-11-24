import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  vehiclesReserveResponseSchema,
  type VehiclesReserveResponse,
} from "../models/vehicles-reserve-response.js";
import type { Servers } from "../servers.js";

export class VehicleAuction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read observed seller reserve signals for a vehicle
   *
   * @remarks
   * Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed
   * bid threshold bounds are shown separately and only when confirmed by bid-crossing evidence.
   * Reserve Off may mean the reserve was removed. Include_events=1 adds recent observation history.
   * This endpoint consumes one standard API request.
   *
   * @returns Seller reserve status, observed limits and optional events
   *
   * @throws {@link VehicleAuction.GetVehicleSellerReserveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleSellerReserve(
    request: VehicleAuction.GetVehicleSellerReserveRequest,
    options?: RequestOptions,
  ): ApiPromise<VehiclesReserveResponse, VehicleAuction.GetVehicleSellerReserveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/{slugVin}/reserve"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "slugVin", value: request.slugVin, schema: s.string() }],
        query: [
          { name: "include_events", value: request.includeEvents, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehiclesReserveResponseSchema },
        errorFactory: VehicleAuction.GetVehicleSellerReserveError,
      },
      options,
    );
  }
}

export namespace VehicleAuction {
  export type GetVehicleSellerReserveRequest = {
    /** Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug. */
    slugVin: string;
    /** Include recent reserve observations. @default false */
    includeEvents?: boolean;
    /** Maximum number of events. @default 50 */
    limit?: number;
  };

  export const getVehicleSellerReserveRequestSchema: Schema<GetVehicleSellerReserveRequest> = s.lazySchema(
    () =>
      s.object<GetVehicleSellerReserveRequest>({
        slugVin: s.string(),
        includeEvents: s.defaulted(s.boolean(), false),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      }),
  );

  export class GetVehicleSellerReserveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleSellerReserveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}

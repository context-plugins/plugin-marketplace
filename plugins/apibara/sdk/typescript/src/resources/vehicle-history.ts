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
  vehicleHistoryResponseInternalSchema,
  type VehicleHistoryResponse,
} from "../models/vehicle-history-response.js";
import type { Servers } from "../servers.js";

/**
 * VIN and lot auction history.
 */
export class VehicleHistory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get vehicle auction history
   *
   * @remarks
   * Get auction history records for a vehicle by VIN or lot number.
   *
   * @returns Paginated vehicle auction history records.
   *
   * @throws {@link VehicleHistory.GetVehicleHistoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleHistory(
    request: VehicleHistory.GetVehicleHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<VehicleHistoryResponse, VehicleHistory.GetVehicleHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/{slugVin}/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "slugVin", value: request.slugVin, schema: s.string() }],
        query: [
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleHistoryResponseInternalSchema },
        errorFactory: VehicleHistory.GetVehicleHistoryError,
      },
      options,
    );
  }
}

export namespace VehicleHistory {
  export type GetVehicleHistoryRequest = {
    /**
     * Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin
     * returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI
     * 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
     */
    slugVin: string;
    /** Number of records per page. Maximum: 20. @default 20 */
    perPage?: number;
    /** Cursor for pagination. */
    cursor?: string;
  };

  export const getVehicleHistoryRequestSchema: Schema<GetVehicleHistoryRequest> = s.lazySchema(() =>
    s.object<GetVehicleHistoryRequest>({
      slugVin: s.string(),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 20),
      cursor: s.optional(s.string()),
    }),
  );

  export class GetVehicleHistoryError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetVehicleHistoryError> = [
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

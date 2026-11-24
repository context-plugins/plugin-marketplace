import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  vehicleListResponseInternalSchema,
  type VehicleListResponse,
} from "../models/vehicle-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Related and similar auction vehicles.
 */
export class RelatedVehicles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get related vehicles
   *
   * @remarks
   * Get related or similar auction vehicles by VIN or lot number.
   *
   * @returns Related auction vehicle records.
   *
   * @throws {@link RelatedVehicles.GetRelatedVehiclesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRelatedVehicles(
    request: RelatedVehicles.GetRelatedVehiclesRequest,
    options?: RequestOptions,
  ): ApiPromise<VehicleListResponse, RelatedVehicles.GetRelatedVehiclesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/{slugVin}/related"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "slugVin", value: request.slugVin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleListResponseInternalSchema },
        errorFactory: RelatedVehicles.GetRelatedVehiclesError,
      },
      options,
    );
  }
}

export namespace RelatedVehicles {
  export type GetRelatedVehiclesRequest = {
    /**
     * Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin
     * returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI
     * 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
     */
    slugVin: string;
  };

  export class GetRelatedVehiclesError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetRelatedVehiclesError> = [
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

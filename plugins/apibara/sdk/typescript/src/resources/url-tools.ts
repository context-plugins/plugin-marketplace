import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  vehicleDetailsResponseInternalSchema,
  type VehicleDetailsResponse,
} from "../models/vehicle-details-response.js";
import type { Servers } from "../servers.js";

/**
 * Resolve vehicle details from auction URLs.
 */
export class UrlTools {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get vehicle details from auction URL
   *
   * @remarks
   * Resolve vehicle auction details from a Copart or IAAI vehicle URL.
   *
   * @returns Vehicle details resolved from the URL.
   *
   * @throws {@link UrlTools.GetVehicleDetailsFromUrlError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleDetailsFromUrl(
    request: UrlTools.GetVehicleDetailsFromUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<VehicleDetailsResponse, UrlTools.GetVehicleDetailsFromUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/urltodetails"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "url", value: request.url, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleDetailsResponseInternalSchema },
        errorFactory: UrlTools.GetVehicleDetailsFromUrlError,
      },
      options,
    );
  }
}

export namespace UrlTools {
  export type GetVehicleDetailsFromUrlRequest = {
    /** Vehicle URL. */
    url: string;
  };

  export class GetVehicleDetailsFromUrlError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetVehicleDetailsFromUrlError> = [
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

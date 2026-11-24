import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { filtersResponseSchema, type FiltersResponse } from "../models/filters-response.js";
import type { Servers } from "../servers.js";

/**
 * Available filters metadata.
 */
export class Filters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get vehicle filters metadata
   *
   * @remarks
   * Get available filters metadata. With make, returns series/model-family options. With make plus
   * optional series and/or model, returns dependent generation options.
   *
   * @returns Available filters metadata.
   *
   * @throws {@link Filters.GetVehicleFiltersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleFilters(
    request: Filters.GetVehicleFiltersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FiltersResponse, Filters.GetVehicleFiltersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/filters"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "make", value: request.make, schema: s.optional(s.string()) },
          { name: "series", value: request.series, schema: s.optional(s.string()) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filtersResponseSchema },
        errorFactory: Filters.GetVehicleFiltersError,
      },
      options,
    );
  }
}

export namespace Filters {
  export type GetVehicleFiltersRequest = {
    /** Vehicle make used to return dependent generation options. */
    make?: string;
    /**
     * Optional series/model-family context used with make to narrow dependent generation options.
     */
    series?: string;
    /** Vehicle model used together with make to return dependent generation options. */
    model?: string;
  };

  export class GetVehicleFiltersError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetVehicleFiltersError> = [
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

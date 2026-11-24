import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { IncludeUnits, includeUnitsSchema } from "../models/include-units.js";
import {
  v1BuildingsByUrlResponseSchema,
  type V1BuildingsByUrlResponse,
} from "../models/v1-buildings-by-url-response.js";
import type { Servers } from "../servers.js";

export class Buildings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all units in a building
   *
   * @remarks
   * Extract all unit listings from a Zillow building, apartments, or community URL (/b/,
   * /apartments/, or /community/). Runs synchronously by default; set sync=false for large
   * buildings to receive a job_id. Billed at 1 credit per unit returned; failed calls are free.
   *
   * @returns Building units returned synchronously
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBuildingByUrl(
    request: Buildings.GetBuildingByUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BuildingsByUrlResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/buildings/by-url"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "url", value: request.url, schema: s.string() },
          {
            name: "include_units",
            value: request.includeUnits,
            schema: s.defaulted(includeUnitsSchema, IncludeUnits.All),
          },
          { name: "sync", value: request.sync, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BuildingsByUrlResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Buildings {
  export type GetBuildingByUrlRequest = {
    /** Building/apartments/community URL (must be /b/, /apartments/, or /community/). */
    url: string;
    /** Which units to include. @default IncludeUnits.All */
    includeUnits?: IncludeUnits;
    /**
     * When true (default) returns units synchronously. Set false for large buildings to run async
     * and return a job_id.
     *
     * @default true
     */
    sync?: boolean;
  };
}

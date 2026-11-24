import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { searchResponseSchema, type SearchResponse } from "../models/search-response.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Resolve a name or registry number to candidate files
   *
   * @remarks
   * Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI,
   * state numbers, French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN
   * or SIRET no file holds is looked up live on SIRENE (France) and becomes a file; with country=FR
   * a name is also searched on SIRENE (up to 5 business units, filed on demand, listed first).
   *
   * @returns Candidates
   *
   * @throws {@link Search.SearchBusinessesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  searchBusinesses(
    request: Search.SearchBusinessesRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.SearchBusinessesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/search"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: Search.SearchBusinessesError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchBusinessesRequest = {
    q: string;
    /** ISO 3166-1 alpha-2. FR also searches the French SIRENE register live. */
    country?: string;
  };

  export const searchBusinessesRequestSchema: Schema<SearchBusinessesRequest> = s.lazySchema(() =>
    s.object<SearchBusinessesRequest>({
      q: s.string().check(s.minLength(2), s.maxLength(200)),
      country: s.optional(s.string().check(s.pattern("^[A-Za-z]{2}$"))),
    }),
  );

  export class SearchBusinessesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<SearchBusinessesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

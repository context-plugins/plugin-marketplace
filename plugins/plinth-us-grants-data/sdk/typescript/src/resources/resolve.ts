import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { apiSearchResponseInternalSchema, type ApiSearchResponse } from "../models/api-search-response.js";
import {
  apiV1SearchResponseInternalSchema,
  type ApiV1SearchResponse,
} from "../models/api-v1-search-response.js";
import { JurisdictionEnum, jurisdictionEnumSchema } from "../models/jurisdiction-enum.js";
import { ModeEnum, modeEnumSchema } from "../models/mode-enum.js";
import type { Servers } from "../servers.js";

/**
 * Turn an organization name into an EIN and a canonical URL. No key required.
 */
export class Resolve {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Resolve an organization name to an EIN and canonical URL
   *
   * @remarks
   * Entity resolution — the step that precedes every other call when you have a name rather than an
   * EIN. Searches every US grantmaking foundation and funded nonprofit, or the Canadian charities
   * register under `jurisdiction=ca`. **No API key required and not metered.**
   *
   * `q` also accepts an EIN (`131684331` or `13-1684331`), which resolves against the index
   * directly rather than as text. A parameter this endpoint does not accept comes back named in
   * `x_plinth.warnings`, and `strict=1` turns that into a 400 — the same contract as the grant
   * endpoints. Omitting `q` is a 400 rather than an empty result set, because an empty result set
   * is indistinguishable from a genuine miss.
   *
   * @returns Matching organizations, best first.
   *
   * @throws {@link Resolve.GetApiV1SearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1Search(
    request: Resolve.GetApiV1SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SearchResponse, Resolve.GetApiV1SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/search"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.defaulted(jurisdictionEnumSchema, JurisdictionEnum.Us),
          },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "min", value: request.min, schema: s.optional(s.int()) },
          { name: "max", value: request.max, schema: s.optional(s.int()) },
          { name: "strict", value: request.strict, schema: s.optional(s.string()) },
          { name: "example", value: request.example, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SearchResponseInternalSchema },
        errorFactory: Resolve.GetApiV1SearchError,
      },
      options,
    );
  }

  /**
   * Resolve an organization name to an EIN and canonical URL
   *
   * @remarks
   * Entity resolution — the step that precedes every other call when you have a name rather than an
   * EIN. Searches every US grantmaking foundation and funded nonprofit. **No API key required and
   * not metered.**
   *
   * @returns Matching organizations, best first.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchOrganizations(
    request: Resolve.SearchOrganizationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiSearchResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/search"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "mode", value: request.mode, schema: s.defaulted(modeEnumSchema, ModeEnum.Text) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiSearchResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Resolve {
  export type GetApiV1SearchRequest = {
    /** Search text. Fewer than 2 characters returns an empty result set. */
    q: string;
    /**
     * Which register to search: `us` (IRS, the default) or `ca` (CRA). Case-insensitive. One
     * register per query, because `revenue` is the filing's own figure and the two currencies are
     * never combined. Any other value is a 400, as is a value that contradicts the namespace of an
     * organization key passed as `q`.
     *
     * @default JurisdictionEnum.Us
     */
    jurisdiction?: JurisdictionEnum;
    /**
     * Narrow to a two-letter region code — a US state, or a province or territory under
     * `jurisdiction=ca`. Case-insensitive; anything else is reported in x_plinth.warnings rather
     * than applied as a filter that cannot match.
     */
    state?: string;
    /**
     * Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
     *
     * @default 20
     */
    limit?: number;
    /**
     * Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian
     * dollars under `jurisdiction=ca`, which is stated back in x_plinth.warnings. Applied
     * server-side, so it cannot drop matches past the cut.
     */
    min?: number;
    /** Highest total revenue, in the same currency as `min`. */
    max?: number;
    /**
     * strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
     */
    strict?: string;
    /**
     * Return a canned example response instead of querying the index — keyless, unmetered, and the
     * only way to see this envelope without sending a real `q`. `?example=1` is the plain case;
     * `?example=list` names the others. Every example body carries `x_plinth.example`.
     */
    example?: string;
  };

  export const getApiV1SearchRequestSchema: Schema<GetApiV1SearchRequest> = s.lazySchema(() =>
    s.object<GetApiV1SearchRequest>({
      q: s.string(),
      jurisdiction: s.defaulted(jurisdictionEnumSchema, JurisdictionEnum.Us),
      state: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(50)), 20),
      min: s.optional(s.int()),
      max: s.optional(s.int()),
      strict: s.optional(s.string()),
      example: s.optional(s.string()),
    }),
  );

  export class GetApiV1SearchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1SearchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 503, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type SearchOrganizationsRequest = {
    /** Search text. Fewer than 2 characters returns an empty result set. */
    q: string;
    /** Narrow to a US state, two-letter code. */
    state?: string;
    /**
     * text is keyword matching; semantic/hybrid add vector matching and fall back to text if
     * unavailable.
     *
     * @default ModeEnum.Text
     */
    mode?: ModeEnum;
  };
}

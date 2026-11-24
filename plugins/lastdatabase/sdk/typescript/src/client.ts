import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import type { Schema } from "./core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
import { leadSearchResponseInternalSchema, type LeadSearchResponse } from "./models/lead-search-response.js";
import { Type, typeSchema } from "./models/type.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Official API specification for the LastDatabase Lead Search API.
 *
 * Search supported email, phone, and fax lead inventory using country, city, industry, keyword, and
 * result-limit parameters.
 *
 * Authentication uses an active LastDatabase API key supplied as a Bearer token.
 */
export class LastDatabaseClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "LAST_DATABASE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "LastDatabaseClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Search leads
   *
   * @remarks
   * Search email, phone, or fax lead inventory.
   *
   * The default lead type is email.
   *
   * For phone searches, the public industry parameter maps to the phone category field.
   *
   * The current endpoint does not expose page, offset, or cursor pagination.
   *
   * @returns Lead search completed successfully.
   *
   * @throws {@link LastDatabaseClient.SearchLeadsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LastDatabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchLeads(
    request: LastDatabaseClient.SearchLeadsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LeadSearchResponse, LastDatabaseClient.SearchLeadsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/leads/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(typeSchema, Type.Email) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.string()) },
          { name: "industry", value: request.industry, schema: s.optional(s.string()) },
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leadSearchResponseInternalSchema },
        errorFactory: LastDatabaseClient.SearchLeadsError,
      },
      options,
    );
  }
}

export namespace LastDatabaseClient {
  export type SearchLeadsRequest = {
    /**
     * Lead inventory type. Defaults to email.
     *
     * The current implementation falls back to email when an unrecognized type value is supplied.
     *
     * @default Type.Email
     */
    type?: Type;
    /** Filter results by country. */
    country?: string;
    /** Filter results by city. */
    city?: string;
    /** Filter by industry. For phone inventory, this parameter maps to the phone category field. */
    industry?: string;
    /**
     * Keyword filter.
     *
     * Email keyword matching covers country, city, industry, and company name.
     *
     * Phone keyword matching covers country, city, and category.
     *
     * Fax keyword matching covers country, city, industry, and company name.
     */
    keyword?: string;
    /** Number of records to return. @default 25 */
    limit?: number;
  };

  export const searchLeadsRequestSchema: Schema<SearchLeadsRequest> = s.lazySchema(() =>
    s.object<SearchLeadsRequest>({
      type: s.defaulted(typeSchema, Type.Email),
      country: s.optional(s.string()),
      city: s.optional(s.string()),
      industry: s.optional(s.string()),
      keyword: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
    }),
  );

  export class SearchLeadsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchLeadsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

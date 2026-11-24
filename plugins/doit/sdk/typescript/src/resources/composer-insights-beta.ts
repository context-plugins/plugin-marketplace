import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { composerRecipeListInternalSchema, type ComposerRecipeList } from "../models/composer-recipe-list.js";
import {
  composerRecipeResultListInternalSchema,
  type ComposerRecipeResultList,
} from "../models/composer-recipe-result-list.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  SortByDoiTComposerInsightsBetaApi,
  sortByDoiTComposerInsightsBetaApiSchema,
} from "../models/sort-by-doi-tcomposer-insights-beta-api.js";
import { SortBy1, sortBy1Schema } from "../models/sort-by1.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * Beta. Read-only access to Composer recipes and their results. A recipe evaluates your cloud
 * resources against a set of conditions; each result is a finding on one affected resource, and
 * published recipes surface as proprietary Insights in the Console.
 */
export class ComposerInsightsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Composer recipe results
   *
   * @remarks
   * Returns the results of one Composer recipe: one finding per affected resource, with the
   * resource's account, region, tags and cost metrics. An unknown recipe, one your customer isn't
   * entitled to, and a dismissed recipe all return `200` with an empty `items` list and `rowCount:
   * 0`.
   *
   * By default (`last_scan_only:true`) only results reported by the most recent scan of each
   * recently scanned account are returned. A resolved result keeps the ID of the last scan that
   * reported it, so resolved results rarely appear by default; add `last_scan_only:false` to
   * include them and results from earlier scans. `rowCount` can therefore be lower than the
   * recipe's `totalResultsCount`. Results are sorted by `detection_time`, descending, by default.
   * Ties break by `id`.
   *
   * `filter` is one string of `key:value` clauses: `,` separates alternative values for one key
   * (OR) and `|` separates keys (AND), for example `region:us-east-1,us-west-2|status:active`.
   * Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
   * - `account_id`: one or more cloud account IDs, matched exactly.
   * - `region`: one or more cloud regions, matched exactly.
   * - `issued_resource_name`: one or more names of the affected resource, matched exactly.
   * - `related_resource_name`: one or more names of related resources (for example an attached IAM
   *   policy), each matched as a substring anywhere in the result's related-resource details.
   * - `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or
   *   `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`; with
   *   the default it usually returns nothing.
   * - `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only
   *   results reported by each recently scanned account's most recent scan, and so rarely includes
   *   resolved results. `false` returns results from every scan and account, including resolved
   *   ones.
   * - `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Returns
   *   only results on resources in any of those allocations. An allocation you can't view returns
   *   `404`; if access can't be checked, the request returns `503` rather than unfiltered data.
   *
   * Requests are always served for the customer your API token belongs to.
   *
   * @returns OK - A page of the recipe's results matching the request.
   *
   * @throws {@link ComposerInsightsBeta.ListComposerRecipeResultsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listComposerRecipeResults(
    request: ComposerInsightsBeta.ListComposerRecipeResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<ComposerRecipeResultList, ComposerInsightsBeta.ListComposerRecipeResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/v2/recipes/{recipeId}/results"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "recipeId", value: request.recipeId, schema: s.int() }],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortBy1Schema, SortBy1.DetectionTime),
          },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: composerRecipeResultListInternalSchema },
        errorFactory: ComposerInsightsBeta.ListComposerRecipeResultsError,
      },
      options,
    );
  }

  /**
   * List Composer recipes
   *
   * @remarks
   * Returns the Composer recipes that have results in your recently scanned cloud accounts, with
   * counts of those results by status and their estimated savings. Recipes with no such results are
   * not listed. Dismissed recipes are listed with `status: dismissed` and every count set to 0.
   *
   * Recipes are sorted by `severity`, descending, by default. Ties break by title
   * (case-insensitive), then by `id`.
   *
   * `filter` is one string of `key:value` clauses: `,` separates alternative values for one key
   * (OR) and `|` separates keys (AND), for example `severity:critical,high|provider:aws,gcp`.
   * Because `,` and `|` are separators, a value itself can't contain them. Supported keys:
   * - `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`,
   *   `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.
   * - `severity`: one or more of `critical`, `high`, `medium`, `low`.
   * - `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`.
   *   `compliance` matches recipes tagged with at least one compliance standard.
   * - `has_active_results`: exactly one of `true` or `false`.
   * - `allocation`: up to 10 distinct allocation IDs from `GET /analytics/v1/allocations`. Lists
   *   only recipes with results on resources in any of those allocations; counts, savings and
   *   `rowCount` then cover only those resources. An allocation you can't view returns `404`; if
   *   access can't be checked, the request returns `503` rather than unfiltered data.
   *
   * Requests are always served for the customer your API token belongs to. To list the results of
   * one recipe, use its `id` with `GET /insights/v2/recipes/{recipeId}/results`.
   *
   * @returns OK - A page of recipes matching the request.
   *
   * @throws {@link ComposerInsightsBeta.ListComposerRecipesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listComposerRecipes(
    request: ComposerInsightsBeta.ListComposerRecipesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ComposerRecipeList, ComposerInsightsBeta.ListComposerRecipesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/v2/recipes"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(
              sortByDoiTComposerInsightsBetaApiSchema,
              SortByDoiTComposerInsightsBetaApi.Severity,
            ),
          },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: composerRecipeListInternalSchema },
        errorFactory: ComposerInsightsBeta.ListComposerRecipesError,
      },
      options,
    );
  }
}

export namespace ComposerInsightsBeta {
  export type ListComposerRecipeResultsRequest = {
    /**
     * ID of the Composer recipe whose results to list. Get recipe IDs from `GET
     * /insights/v2/recipes`.
     */
    recipeId: number;
    /**
     * Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
     * that range returns `400 validation_failed`.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Continuation token from the `pageToken` of the previous response. Omit it on the first
     * request; a response without `pageToken` is the last page.
     *
     * The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`,
     * `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`.
     * Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5
     * minutes after they are issued; an expired token returns `400 pagination_token_expired`. In
     * both cases, restart from the first page.
     */
    pageToken?: string;
    /**
     * Field to sort results by. Defaults to `detection_time`. Ties break by `id` (ascending),
     * whatever the `sortOrder`.
     *
     * @default SortBy1.DetectionTime
     */
    sortBy?: SortBy1;
    /** Sort direction for `sortBy`. Defaults to `desc`. @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /**
     * Restricts the results returned. One string of `key:value` clauses: `,` separates alternative
     * values for one key (OR) and `|` separates keys (AND). For example,
     * `region:us-east-1,us-west-2|status:active` returns active results in either region. Because
     * `,` and `|` are separators, a value itself can't contain them. Matching is exact unless a key
     * says otherwise. Omit `filter` to list the recipe's results from the most recent scan of each
     * recently scanned account, in every status.
     *
     * Keys:
     * - `account_id`: one or more cloud account IDs, matched exactly.
     * - `region`: one or more cloud regions, matched exactly.
     * - `issued_resource_name`: one or more names of the affected resource, matched exactly.
     * - `related_resource_name`: one or more names of resources related to the result (for example,
     *   an attached IAM policy). Each value is matched as a substring anywhere in the result's
     *   related-resource details, not only against names.
     * - `status`: exactly one of `active` (not resolved and not snoozed), `snoozed`, `resolved` or
     *   `all`. Omitting it is the same as `all`. Combine `resolved` with `last_scan_only:false`;
     *   with the default it usually returns nothing.
     * - `last_scan_only`: exactly one of `true` or `false`. Defaults to `true`, which returns only
     *   results reported by each recently scanned account's most recent scan. A resolved result
     *   keeps the ID of the last scan that reported it, so resolved results rarely appear by
     *   default. `false` returns results from every scan and account, including resolved ones.
     * - `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs
     *   from `GET /analytics/v1/allocations`. Matches results on resources in any of those
     *   allocations, as resolved by Cloud Analytics; `rowCount` then counts only those results. You
     *   must be able to view every listed allocation. Service-account API keys can use public
     *   allocations only. If allocation access can't be checked, the request returns `503` with
     *   `Retry-After` and never falls back to unfiltered data.
     *
     * Errors:
     * - An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise
     *   `400 validation_failed`.
     * - A `status` outside the allowed list, a non-boolean `last_scan_only`, more than one `status`
     *   or `last_scan_only` value, more than 10 distinct allocation IDs, an invalid allocation ID
     *   (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a
     *   malformed expression or an unsupported operator returns `400 validation_failed`.
     * - An allocation that doesn't exist or that you can't view returns `404
     *   composer-api.allocation_not_found`.
     */
    filter?: string;
  };

  export const listComposerRecipeResultsRequestSchema: Schema<ListComposerRecipeResultsRequest> =
    s.lazySchema(() =>
      s.object<ListComposerRecipeResultsRequest>({
        recipeId: s.int().check(s.gte(1)),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        pageToken: s.optional(s.string()),
        sortBy: s.defaulted(sortBy1Schema, SortBy1.DetectionTime),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        filter: s.optional(s.string()),
      }),
    );

  export class ListComposerRecipeResultsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListComposerRecipeResultsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListComposerRecipesRequest = {
    /**
     * Maximum number of items to return on one page, from 1 to 500. Defaults to 50. A value outside
     * that range returns `400 validation_failed`.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Continuation token from the `pageToken` of the previous response. Omit it on the first
     * request; a response without `pageToken` is the last page.
     *
     * The token records the position, the sort and the `allocation` filter IDs. Changing `sortBy`,
     * `sortOrder` or the allocation IDs while paginating returns `400 pagination_token_invalid`.
     * Keep the other `filter` keys and `maxResults` unchanged while paginating. Tokens expire 5
     * minutes after they are issued; an expired token returns `400 pagination_token_expired`. In
     * both cases, restart from the first page.
     */
    pageToken?: string;
    /**
     * Field to sort recipes by. Defaults to `severity`. Ties break by title (case-insensitive,
     * ascending), then by `id` (ascending), whatever the `sortOrder`.
     *
     * @default SortByDoiTComposerInsightsBetaApi.Severity
     */
    sortBy?: SortByDoiTComposerInsightsBetaApi;
    /** Sort direction for `sortBy`. Defaults to `desc`. @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /**
     * Restricts the recipes returned. One string of `key:value` clauses: `,` separates alternative
     * values for one key (OR) and `|` separates keys (AND). For example,
     * `severity:critical,high|provider:aws,gcp` returns recipes whose severity is critical or high
     * and whose provider is Amazon Web Services or Google Cloud Platform. Because `,` and `|` are
     * separators, a value itself can't contain them. Only equality matching is supported. Omit
     * `filter` to list every recipe that has results in your recently scanned accounts, including
     * dismissed recipes.
     *
     * Keys:
     * - `provider`: one or more of `aws`, `azure`, `azure_ad`, `gcp`, `general`,
     *   `google_cloud_source`, `google_workspace`, `k8s`, `oci`, `vmware`.
     * - `severity`: one or more of `critical`, `high`, `medium`, `low`.
     * - `pillar`: one or more of `cost`, `operations`, `performance`, `security`, `compliance`.
     *   Matches recipes tagged with that pillar; `compliance` matches recipes tagged with at least
     *   one compliance standard (such as SOC2 or HIPAA).
     * - `has_active_results`: exactly one of `true` or `false`.
     * - `allocation`: up to 10 distinct allocation IDs (duplicates are ignored); get allocation IDs
     *   from `GET /analytics/v1/allocations`. Matches recipes with results on resources in any of
     *   those allocations, as resolved by Cloud Analytics; counts, savings and `rowCount` then
     *   cover only those resources. You must be able to view every listed allocation.
     *   Service-account API keys can use public allocations only. If allocation access can't be
     *   checked, the request returns `503` with `Retry-After` and never falls back to unfiltered
     *   data.
     *
     * Errors:
     * - An unknown key returns `400 filter_key_not_supported` when it's the only problem, otherwise
     *   `400 validation_failed`.
     * - A value outside the allowed list, a non-boolean `has_active_results`, more than one
     *   `has_active_results` value, more than 10 distinct allocation IDs, an invalid allocation ID
     *   (blank, longer than 256 characters, or containing `/`, whitespace or control characters), a
     *   malformed expression or an unsupported operator returns `400 validation_failed`.
     * - An allocation that doesn't exist or that you can't view returns `404
     *   composer-api.allocation_not_found`.
     */
    filter?: string;
  };

  export const listComposerRecipesRequestSchema: Schema<ListComposerRecipesRequest> = s.lazySchema(() =>
    s.object<ListComposerRecipesRequest>({
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      pageToken: s.optional(s.string()),
      sortBy: s.defaulted(
        sortByDoiTComposerInsightsBetaApiSchema,
        SortByDoiTComposerInsightsBetaApi.Severity,
      ),
      sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
      filter: s.optional(s.string()),
    }),
  );

  export class ListComposerRecipesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListComposerRecipesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}

import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  paginatedResponseRegistryDetailResponseSchema,
  type PaginatedResponseRegistryDetailResponse,
} from "../models/paginated-response-registry-detail-response.js";
import {
  registryDetailResponseSchema,
  type RegistryDetailResponse,
} from "../models/registry-detail-response.js";
import {
  registrySourceUrlResponseSchema,
  type RegistrySourceUrlResponse,
} from "../models/registry-source-url-response.js";
import { scenarioResponseSchema, type ScenarioResponse } from "../models/scenario-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { buildId1Schema, type BuildId1 } from "../models/unions/build-id1.js";
import { buildId2Schema, type BuildId2 } from "../models/unions/build-id2.js";
import { projectId1Schema, type ProjectId1 } from "../models/unions/project-id1.js";
import {
  searchHudPlatformRegistryApiSchema,
  type SearchHudPlatformRegistryApi,
} from "../models/unions/search-hud-platform-registry-api.js";
import type { Servers } from "../servers.js";

export class RegistryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Registry Source Url
   *
   * @remarks
   * Get a presigned download URL for the registry's source archive.
   *
   * Readers outside the owning team download only the latest build of a public environment whose
   * owner published its source.
   *
   * @returns Successful Response
   *
   * @throws {@link RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(
    request: RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    RegistrySourceUrlResponse,
    RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/registry/{registry_id}/source-url"),
        auth: noneAuth,
        pathParams: [{ name: "registry_id", value: request.registryId, schema: s.string() }],
        query: [
          { name: "build_id", value: request.buildId, schema: s.optional(s.lazy(() => buildId1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: registrySourceUrlResponseSchema },
        errorFactory: RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError,
      },
      options,
    );
  }

  /**
   * Get Registry
   *
   * @remarks
   * Get a registry by id with its latest build details.
   *
   * @returns Successful Response
   *
   * @throws {@link RegistryApi.GetRegistryV2RegistryRegistryIdGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getRegistryV2RegistryRegistryIdGet(
    request: RegistryApi.GetRegistryV2RegistryRegistryIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryDetailResponse, RegistryApi.GetRegistryV2RegistryRegistryIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/registry/{registry_id}"),
        auth: noneAuth,
        pathParams: [{ name: "registry_id", value: request.registryId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: registryDetailResponseSchema },
        errorFactory: RegistryApi.GetRegistryV2RegistryRegistryIdGetError,
      },
      options,
    );
  }

  /**
   * List Registries
   *
   * @remarks
   * List registries visible to the caller, with search, ownership, and sort filters.
   *
   * @returns Successful Response
   *
   * @throws {@link RegistryApi.ListRegistriesV2RegistryGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listRegistriesV2RegistryGet(
    request: RegistryApi.ListRegistriesV2RegistryGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseRegistryDetailResponse, RegistryApi.ListRegistriesV2RegistryGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/registry"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "search",
            value: request.search,
            schema: s.optional(s.lazy(() => searchHudPlatformRegistryApiSchema)),
          },
          { name: "match_templates", value: request.matchTemplates, schema: s.defaulted(s.boolean(), false) },
          {
            name: "include_latest_scenarios",
            value: request.includeLatestScenarios,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "public_only", value: request.publicOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "featured_only", value: request.featuredOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "owner_only", value: request.ownerOnly, schema: s.defaulted(s.boolean(), false) },
          {
            name: "project_id",
            value: request.projectId,
            schema: s.optional(s.lazy(() => projectId1Schema)),
          },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.Starred) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseRegistryDetailResponseSchema },
        errorFactory: RegistryApi.ListRegistriesV2RegistryGetError,
      },
      options,
    );
  }

  /**
   * List Registry Scenarios
   *
   * @remarks
   * List scenarios for a registry build (latest build by default).
   *
   * @returns Successful Response
   *
   * @throws {@link RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listRegistryScenariosV2RegistryRegistryIdScenariosGet(
    request: RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ScenarioResponse[], RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/registry/{registry_id}/scenarios"),
        auth: noneAuth,
        pathParams: [{ name: "registry_id", value: request.registryId, schema: s.string() }],
        query: [
          { name: "build_id", value: request.buildId, schema: s.optional(s.lazy(() => buildId2Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scenarioResponseSchema)) },
        errorFactory: RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError,
      },
      options,
    );
  }
}

export namespace RegistryApi {
  export type GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest = {
    registryId: string;
    /**
     * Download a specific build's source archive. Defaults to the registry's latest build when
     * omitted.
     */
    buildId?: BuildId1;
  };

  export class GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetRegistryV2RegistryRegistryIdGetRequest = {
    registryId: string;
  };

  export class GetRegistryV2RegistryRegistryIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRegistryV2RegistryRegistryIdGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListRegistriesV2RegistryGetRequest = {
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** ILIKE-match on name */
    search?: SearchHudPlatformRegistryApi;
    /**
     * When search is set, also match environment description and latest-build template name,
     * description, and setup_description
     *
     * @default false
     */
    matchTemplates?: boolean;
    /** Embed latest-build templates on each list row @default false */
    includeLatestScenarios?: boolean;
    /** Only public registries; anonymous browsing requires this or featured_only @default false */
    publicOnly?: boolean;
    /** Only platform-featured registries, which are always public @default false */
    featuredOnly?: boolean;
    /**
     * Only registries owned by the caller's membership; ignored when public_only=True
     *
     * @default false
     */
    ownerOnly?: boolean;
    /** Only registries contained by this Project; omitted lists every Project */
    projectId?: ProjectId1;
    /**
     * Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars
     * (star_count DESC)
     *
     * @default SortBy.Starred
     */
    sortBy?: SortBy;
  };

  export const listRegistriesV2RegistryGetRequestSchema: Schema<ListRegistriesV2RegistryGetRequest> =
    s.lazySchema(() =>
      s.object<ListRegistriesV2RegistryGetRequest>({
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
        search: s.optional(s.lazy(() => searchHudPlatformRegistryApiSchema)),
        matchTemplates: s.defaulted(s.boolean(), false),
        includeLatestScenarios: s.defaulted(s.boolean(), false),
        publicOnly: s.defaulted(s.boolean(), false),
        featuredOnly: s.defaulted(s.boolean(), false),
        ownerOnly: s.defaulted(s.boolean(), false),
        projectId: s.optional(s.lazy(() => projectId1Schema)),
        sortBy: s.defaulted(sortBySchema, SortBy.Starred),
      }),
    );

  export class ListRegistriesV2RegistryGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRegistriesV2RegistryGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest = {
    registryId: string;
    /**
     * Filter scenarios to a specific build of this registry. Defaults to the registry's latest
     * build when omitted.
     */
    buildId?: BuildId2;
  };

  export class ListRegistryScenariosV2RegistryRegistryIdScenariosGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRegistryScenariosV2RegistryRegistryIdScenariosGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

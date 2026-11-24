<!-- Generated file — do not edit; regenerated with the SDK. -->

# RegistryApi — operations

Accessor: `client.registryApi` · Source: `src/resources/registry-api.ts` · 4 operations · Request and error types: namespace `RegistryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet

- **Signature**: `getRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(request: RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest, options?: RequestOptions): ApiPromise<RegistrySourceUrlResponse, RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError>`
- **Wire**: `GET /v2/registry/{registry_id}/source-url`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RegistrySourceUrlResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `registryId` | `path` | `registry_id` | `string` | yes |
| `buildId` | `query` | `build_id` | `BuildId1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildId1` | `buildId1Schema` | `src/models/unions/build-id1.ts` |
| `RegistrySourceUrlResponse` | `registrySourceUrlResponseSchema` | `src/models/registry-source-url-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getRegistryV2RegistryRegistryIdGet

- **Signature**: `getRegistryV2RegistryRegistryIdGet(request: RegistryApi.GetRegistryV2RegistryRegistryIdGetRequest, options?: RequestOptions): ApiPromise<RegistryDetailResponse, RegistryApi.GetRegistryV2RegistryRegistryIdGetError>`
- **Wire**: `GET /v2/registry/{registry_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RegistryDetailResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `RegistryApi.GetRegistryV2RegistryRegistryIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RegistryApi.GetRegistryV2RegistryRegistryIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `registryId` | `path` | `registry_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegistryDetailResponse` | `registryDetailResponseSchema` | `src/models/registry-detail-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRegistriesV2RegistryGet

- **Signature**: `listRegistriesV2RegistryGet(request?: RegistryApi.ListRegistriesV2RegistryGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseRegistryDetailResponse, RegistryApi.ListRegistriesV2RegistryGetError>`
- **Wire**: `GET /v2/registry`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseRegistryDetailResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `RegistryApi.ListRegistriesV2RegistryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RegistryApi.ListRegistriesV2RegistryGetRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |
| `search` | `query` | — | `SearchHudPlatformRegistryApi` | no | — |
| `matchTemplates` | `query` | `match_templates` | `boolean` | no | `false` |
| `includeLatestScenarios` | `query` | `include_latest_scenarios` | `boolean` | no | `false` |
| `publicOnly` | `query` | `public_only` | `boolean` | no | `false` |
| `featuredOnly` | `query` | `featured_only` | `boolean` | no | `false` |
| `ownerOnly` | `query` | `owner_only` | `boolean` | no | `false` |
| `projectId` | `query` | `project_id` | `ProjectId1` | no | — |
| `sortBy` | `query` | `sort_by` | `SortBy` | no | `SortBy.Starred` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchHudPlatformRegistryApi` | `searchHudPlatformRegistryApiSchema` | `src/models/unions/search-hud-platform-registry-api.ts` |
| `ProjectId1` | `projectId1Schema` | `src/models/unions/project-id1.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `PaginatedResponseRegistryDetailResponse` | `paginatedResponseRegistryDetailResponseSchema` | `src/models/paginated-response-registry-detail-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRegistryScenariosV2RegistryRegistryIdScenariosGet

- **Signature**: `listRegistryScenariosV2RegistryRegistryIdScenariosGet(request: RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest, options?: RequestOptions): ApiPromise<ScenarioResponse[], RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError>`
- **Wire**: `GET /v2/registry/{registry_id}/scenarios`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScenarioResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `HudError` with `kind: "api"`, an instance of `RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `registryId` | `path` | `registry_id` | `string` | yes |
| `buildId` | `query` | `build_id` | `BuildId2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildId2` | `buildId2Schema` | `src/models/unions/build-id2.ts` |
| `ScenarioResponse` | `scenarioResponseSchema` | `src/models/scenario-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |


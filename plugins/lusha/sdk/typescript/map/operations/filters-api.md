<!-- Generated file — do not edit; regenerated with the SDK. -->

# FiltersApi — operations

Accessor: `client.filtersApi` · Source: `src/resources/filters-api.ts` · 4 operations · Request and error types: namespace `FiltersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompanyFilterTypes

- **Signature**: `getCompanyFilterTypes(options?: RequestOptions): ApiPromise<FilterTypesDiscoveryResponse, FiltersApi.GetCompanyFilterTypesError>`
- **Wire**: `GET /v3/companies/prospecting/filters`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `FiltersApi.GetCompanyFilterTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterTypesDiscoveryResponse` | `filterTypesDiscoveryResponseSchema` | `src/models/filter-types-discovery-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCompanyFilterValues

- **Signature**: `getCompanyFilterValues(request: FiltersApi.GetCompanyFilterValuesRequest, options?: RequestOptions): ApiPromise<FilterValuesResponse, FiltersApi.GetCompanyFilterValuesError>`
- **Wire**: `GET /v3/companies/prospecting/filters/{filterType}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterValuesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `FiltersApi.GetCompanyFilterValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FiltersApi.GetCompanyFilterValuesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filterType` | `path` | `FilterType1` | yes |
| `query` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterType1` | `filterType1Schema` | `src/models/filter-type1.ts` |
| `FilterValuesResponse` | `filterValuesResponseSchema` | `src/models/filter-values-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactFilterTypes

- **Signature**: `getContactFilterTypes(options?: RequestOptions): ApiPromise<FilterTypesDiscoveryResponse, FiltersApi.GetContactFilterTypesError>`
- **Wire**: `GET /v3/contacts/prospecting/filters`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterTypesDiscoveryResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `FiltersApi.GetContactFilterTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterTypesDiscoveryResponse` | `filterTypesDiscoveryResponseSchema` | `src/models/filter-types-discovery-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getContactFilterValues

- **Signature**: `getContactFilterValues(request: FiltersApi.GetContactFilterValuesRequest, options?: RequestOptions): ApiPromise<FilterValuesResponse, FiltersApi.GetContactFilterValuesError>`
- **Wire**: `GET /v3/contacts/prospecting/filters/{filterType}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilterValuesResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `FiltersApi.GetContactFilterValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FiltersApi.GetContactFilterValuesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filterType` | `path` | `FilterType` | yes |
| `query` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FilterType` | `filterTypeSchema` | `src/models/filter-type.ts` |
| `FilterValuesResponse` | `filterValuesResponseSchema` | `src/models/filter-values-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |


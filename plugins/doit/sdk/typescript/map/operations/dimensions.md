<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dimensions — operations

Accessor: `client.dimensions` · Source: `src/resources/dimensions.ts` · 2 operations · Request and error types: namespace `Dimensions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDimensions

- **Signature**: `getDimensions(request: Dimensions.GetDimensionsRequest, options?: RequestOptions): ApiPromise<DimensionsExternalApiGetResponse, Dimensions.GetDimensionsError>`
- **Wire**: `GET /analytics/v1/dimension`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DimensionsExternalApiGetResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Dimensions.GetDimensionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dimensions.GetDimensionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `DimensionsTypes` | yes |
| `id` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DimensionsTypes` | `dimensionsTypesSchema` | `src/models/dimensions-types.ts` |
| `DimensionsExternalApiGetResponse` | `dimensionsExternalApiGetResponseSchema` | `src/models/dimensions-external-api-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listDimensions

- **Signature**: `listDimensions(request?: Dimensions.ListDimensionsRequest, options?: RequestOptions): ApiPromise<DimensionsExternalApiListResponse, Dimensions.ListDimensionsError>`
- **Wire**: `GET /analytics/v1/dimensions`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DimensionsExternalApiListResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Dimensions.ListDimensionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dimensions.ListDimensionsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `sortBy` | `query` | `SortByDoiTDimensionsApi` | no | `SortByDoiTDimensionsApi.Id` |
| `sortOrder` | `query` | `SortOrder` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByDoiTDimensionsApi` | `sortByDoiTDimensionsApiSchema` | `src/models/sort-by-doi-tdimensions-api.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `DimensionsExternalApiListResponse` | `dimensionsExternalApiListResponseSchema` | `src/models/dimensions-external-api-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


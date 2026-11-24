<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolve — operations

Accessor: `client.resolve` · Source: `src/resources/resolve.ts` · 2 operations · Request and error types: namespace `Resolve`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Search

- **Signature**: `getApiV1Search(request: Resolve.GetApiV1SearchRequest, options?: RequestOptions): ApiPromise<ApiV1SearchResponse, Resolve.GetApiV1SearchError>`
- **Wire**: `GET /api/v1/search`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1SearchResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Resolve.GetApiV1SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Resolve.GetApiV1SearchRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `jurisdiction` | `query` | `JurisdictionEnum` | no | `JurisdictionEnum.Us` |
| `state` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `20` |
| `min` | `query` | `number` | no | — |
| `max` | `query` | `number` | no | — |
| `strict` | `query` | `string` | no | — |
| `example` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `JurisdictionEnum` | `jurisdictionEnumSchema` | `src/models/jurisdiction-enum.ts` |
| `ApiV1SearchResponse` | `apiV1SearchResponseSchema` | `src/models/api-v1-search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### searchOrganizations

- **Signature**: `searchOrganizations(request: Resolve.SearchOrganizationsRequest, options?: RequestOptions): ApiPromise<ApiSearchResponse, ApiError>`
- **Wire**: `GET /api/search`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiSearchResponse`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Resolve.SearchOrganizationsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `state` | `query` | `string` | no | — |
| `mode` | `query` | `ModeEnum` | no | `ModeEnum.Text` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModeEnum` | `modeEnumSchema` | `src/models/mode-enum.ts` |
| `ApiSearchResponse` | `apiSearchResponseSchema` | `src/models/api-search-response.ts` |


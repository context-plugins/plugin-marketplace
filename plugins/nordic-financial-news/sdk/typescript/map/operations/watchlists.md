<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.watchlists` · Source: `src/resources/watchlists.ts` · 2 operations · Request and error types: namespace `Watchlists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Watchlists

- **Signature**: `getApiV1Watchlists(request?: Watchlists.GetApiV1WatchlistsRequest, options?: RequestOptions): ApiPromise<ApiV1WatchlistsResponse, Watchlists.GetApiV1WatchlistsError>`
- **Wire**: `GET /api/v1/watchlists`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WatchlistsResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Watchlists.GetApiV1WatchlistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.GetApiV1WatchlistsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WatchlistsResponse` | `apiV1WatchlistsResponseSchema` | `src/models/api-v1-watchlists-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1WatchlistsById

- **Signature**: `getApiV1WatchlistsById(request: Watchlists.GetApiV1WatchlistsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1WatchlistsResponse1, Watchlists.GetApiV1WatchlistsByIdError>`
- **Wire**: `GET /api/v1/watchlists/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WatchlistsResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Watchlists.GetApiV1WatchlistsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.GetApiV1WatchlistsByIdRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WatchlistsResponse1` | `apiV1WatchlistsResponse1Schema` | `src/models/api-v1-watchlists-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


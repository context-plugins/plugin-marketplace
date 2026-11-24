<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.watchlists` · Source: `src/resources/watchlists.ts` · 6 operations · Request and error types: namespace `Watchlists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWatchlist

- **Signature**: `createWatchlist(request: Watchlists.CreateWatchlistRequest, options?: RequestOptions): ApiPromise<WatchlistResult, Watchlists.CreateWatchlistError>`
- **Wire**: `POST /v1/api/watchlists`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.CreateWatchlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.CreateWatchlistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWatchlistParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWatchlistParams` | `createWatchlistParamsSchema` | `src/models/create-watchlist-params.ts` |
| `WatchlistResult` | `watchlistResultSchema` | `src/models/watchlist-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteWatchlist

- **Signature**: `deleteWatchlist(request: Watchlists.DeleteWatchlistRequest, options?: RequestOptions): ApiPromise<WatchlistResult, Watchlists.DeleteWatchlistError>`
- **Wire**: `DELETE /v1/api/watchlists/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.DeleteWatchlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.DeleteWatchlistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistResult` | `watchlistResultSchema` | `src/models/watchlist-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWatchlist

- **Signature**: `getWatchlist(request: Watchlists.GetWatchlistRequest, options?: RequestOptions): ApiPromise<WatchlistResult, Watchlists.GetWatchlistError>`
- **Wire**: `GET /v1/api/watchlists/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WatchlistResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.GetWatchlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.GetWatchlistRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistResult` | `watchlistResultSchema` | `src/models/watchlist-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listWatchlists

- **Signature**: `listWatchlists(request: Watchlists.ListWatchlistsRequest, options?: RequestOptions): ApiPromise<WatchlistListResult, Watchlists.ListWatchlistsError>`
- **Wire**: `GET /v1/api/watchlists`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WatchlistListResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.ListWatchlistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.ListWatchlistsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sortBy` | `query` | `WatchlistSortBy` | yes | — |
| `sortOrder` | `query` | `SortOrder` | yes | — |
| `name` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `0` |
| `size` | `query` | `number` | no | `10` |
| `nulls` | `query` | `Nulls` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistSortBy` | `watchlistSortBySchema` | `src/models/watchlist-sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Nulls` | `nullsSchema` | `src/models/nulls.ts` |
| `WatchlistListResult` | `watchlistListResultSchema` | `src/models/watchlist-list-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### resolveWatchlists

- **Signature**: `resolveWatchlists(request?: Watchlists.ResolveWatchlistsRequest, options?: RequestOptions): ApiPromise<WatchlistResolveResult, Watchlists.ResolveWatchlistsError>`
- **Wire**: `GET /v1/api/watchlists/resolve`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WatchlistResolveResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.ResolveWatchlistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.ResolveWatchlistsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistResolveResult` | `watchlistResolveResultSchema` | `src/models/watchlist-resolve-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWatchlist

- **Signature**: `updateWatchlist(request: Watchlists.UpdateWatchlistRequest, options?: RequestOptions): ApiPromise<WatchlistResult, Watchlists.UpdateWatchlistError>`
- **Wire**: `PATCH /v1/api/watchlists/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Watchlists.UpdateWatchlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlists.UpdateWatchlistRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `UpdateWatchlistParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWatchlistParams` | `updateWatchlistParamsSchema` | `src/models/update-watchlist-params.ts` |
| `WatchlistResult` | `watchlistResultSchema` | `src/models/watchlist-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |


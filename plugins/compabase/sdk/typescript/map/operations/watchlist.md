<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlist — operations

Accessor: `client.watchlist` · Source: `src/resources/watchlist.ts` · 3 operations · Request and error types: namespace `Watchlist`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteWatchlistKrsByKrs

- **Signature**: `deleteWatchlistKrsByKrs(request: Watchlist.DeleteWatchlistKrsByKrsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Watchlist.DeleteWatchlistKrsByKrsError>`
- **Wire**: `DELETE /watchlist/krs/{krs}`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Watchlist.DeleteWatchlistKrsByKrsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlist.DeleteWatchlistKrsByKrsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `krs` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | `dry_run` | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWatchlist

- **Signature**: `getWatchlist(request?: Watchlist.GetWatchlistRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Watchlist.GetWatchlistError>`
- **Wire**: `GET /watchlist`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Watchlist.GetWatchlistError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlist.GetWatchlistRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postWatchlistKrsByKrs

- **Signature**: `postWatchlistKrsByKrs(request: Watchlist.PostWatchlistKrsByKrsRequest, options?: RequestOptions): ApiPromise<WatchlistAddResponse, Watchlist.PostWatchlistKrsByKrsError>`
- **Wire**: `POST /watchlist/krs/{krs}`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WatchlistAddResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Watchlist.PostWatchlistKrsByKrsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Watchlist.PostWatchlistKrsByKrsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `krs` | `path` | — | `string` | yes | — |
| `dryRun` | `query` | `dry_run` | `boolean` | no | `false` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistAddResponse` | `watchlistAddResponseSchema` | `src/models/watchlist-add-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |


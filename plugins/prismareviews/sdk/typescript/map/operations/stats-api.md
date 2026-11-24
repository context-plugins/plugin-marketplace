<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatsApi — operations

Accessor: `client.statsApi` · Source: `src/resources/stats-api.ts` · 2 operations · Request and error types: namespace `StatsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLocationStats

- **Signature**: `getLocationStats(request: StatsApi.GetLocationStatsRequest, options?: RequestOptions): ApiPromise<Stats, StatsApi.GetLocationStatsError>`
- **Wire**: `GET /v1/locations/{id}/stats`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stats`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `StatsApi.GetLocationStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [422] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatsApi.GetLocationStatsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `since` | `query` | `Since` | no |
| `until` | `query` | `Until` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Since` | `sinceSchema` | `src/models/unions/since.ts` |
| `Until` | `untilSchema` | `src/models/unions/until.ts` |
| `Stats` | `statsSchema` | `src/models/stats.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getStats

- **Signature**: `getStats(request?: StatsApi.GetStatsRequest, options?: RequestOptions): ApiPromise<Stats, StatsApi.GetStatsError>`
- **Wire**: `GET /v1/stats`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stats`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `StatsApi.GetStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [422] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StatsApi.GetStatsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | no |
| `platform` | `query` | — | `PlatformId` | no |
| `since` | `query` | — | `Since` | no |
| `until` | `query` | — | `Until` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformId` | `platformIdSchema` | `src/models/platform-id.ts` |
| `Since` | `sinceSchema` | `src/models/unions/since.ts` |
| `Until` | `untilSchema` | `src/models/unions/until.ts` |
| `Stats` | `statsSchema` | `src/models/stats.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


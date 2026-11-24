<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatsApi — operations

Accessor: `client.stats_api` · Source: `prisma_reviews/apis/stats_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stats_api.get_location_stats

- **Route**: `GET /v1/locations/{id}/stats`
- **Auth**: `api_key`
- **Signature**: `def get_location_stats(id_: str, *, since: Since | SinceDict | None = None, until: Until | UntilDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `since` — query · `until` — query
- **Returns (parsed)**: `Stats`
- **Returns (raw)**: `ApiResult[Stats, GetLocationStatsErrorBody]`
- **Error**: `GetLocationStatsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Since` | `prisma_reviews/models/unions/since.py` |
| `SinceDict` | `prisma_reviews/models/unions/since.py` |
| `Until` | `prisma_reviews/models/unions/until.py` |
| `UntilDict` | `prisma_reviews/models/unions/until.py` |
| `Stats` | `prisma_reviews/models/stats.py` |
| `GetLocationStatsErrorBody` | `prisma_reviews/errors/get_location_stats_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.stats_api.get_stats

- **Route**: `GET /v1/stats`
- **Auth**: `api_key`
- **Signature**: `def get_stats(*, location_id: str | None = None, platform: PlatformIdOrStr | None = None, since: Since | SinceDict | None = None, until: Until | UntilDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `location_id` — query · `platform` — query · `since` — query · `until` — query
- **Returns (parsed)**: `Stats`
- **Returns (raw)**: `ApiResult[Stats, GetStatsErrorBody]`
- **Error**: `GetStatsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformIdOrStr` | `prisma_reviews/models/enums/platform_id.py` |
| `Since` | `prisma_reviews/models/unions/since.py` |
| `SinceDict` | `prisma_reviews/models/unions/since.py` |
| `Until` | `prisma_reviews/models/unions/until.py` |
| `UntilDict` | `prisma_reviews/models/unions/until.py` |
| `Stats` | `prisma_reviews/models/stats.py` |
| `GetStatsErrorBody` | `prisma_reviews/errors/get_stats_error.py` |
| `Error` | `prisma_reviews/models/error.py` |


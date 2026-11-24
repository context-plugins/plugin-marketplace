<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.platforms` · Source: `prisma_reviews/apis/platforms.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.platforms.get_platform

- **Route**: `GET /v1/platforms/{id}`
- **Auth**: `api_key`
- **Signature**: `def get_platform(id_: PlatformIdOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Platform`
- **Returns (raw)**: `ApiResult[Platform, GetPlatformErrorBody]`
- **Error**: `GetPlatformErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformIdOrStr` | `prisma_reviews/models/enums/platform_id.py` |
| `Platform` | `prisma_reviews/models/platform.py` |
| `GetPlatformErrorBody` | `prisma_reviews/errors/get_platform_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.platforms.list_platforms

- **Route**: `GET /v1/platforms`
- **Auth**: `api_key`
- **Signature**: `def list_platforms(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PlatformList`
- **Returns (raw)**: `ApiResult[PlatformList, ListPlatformsErrorBody]`
- **Error**: `ListPlatformsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformList` | `prisma_reviews/models/platform_list.py` |
| `ListPlatformsErrorBody` | `prisma_reviews/errors/list_platforms_error.py` |
| `Error` | `prisma_reviews/models/error.py` |


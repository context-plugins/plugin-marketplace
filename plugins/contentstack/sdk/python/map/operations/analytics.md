<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `contentstack/apis/analytics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.get_cache_revalidation_usage

- **Route**: `GET /organizations/cache-revalidation-usage`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default`
- **Signature**: `def get_cache_revalidation_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CacheUsage`
- **Returns (raw)**: `ApiResult[CacheUsage, GetCacheRevalidationUsageErrorBody]`
- **Error**: `GetCacheRevalidationUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CacheUsage` | `contentstack/models/cache_usage.py` |
| `GetCacheRevalidationUsageErrorBody` | `contentstack/errors/get_cache_revalidation_usage_error.py` |
| `Error` | `contentstack/models/error.py` |


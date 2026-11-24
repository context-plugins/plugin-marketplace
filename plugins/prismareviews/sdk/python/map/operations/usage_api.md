<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsageApi — operations

Accessor: `client.usage_api` · Source: `prisma_reviews/apis/usage_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.usage_api.get_usage

- **Route**: `GET /v1/usage`
- **Auth**: `api_key`
- **Signature**: `def get_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Usage`
- **Returns (raw)**: `ApiResult[Usage, GetUsageErrorBody]`
- **Error**: `GetUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Usage` | `prisma_reviews/models/usage.py` |
| `GetUsageErrorBody` | `prisma_reviews/errors/get_usage_error.py` |
| `Error` | `prisma_reviews/models/error.py` |


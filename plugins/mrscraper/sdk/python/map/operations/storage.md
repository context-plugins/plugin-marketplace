<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `mr_scraper/apis/storage.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.storage.get_storage_by_key

- **Route**: `GET /storage/{key}`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_storage_by_key(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetStorageByKeyErrorBody]`
- **Error**: `GetStorageByKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Storage400Error1` [400] · `Any` [401] · `Storage403Error1` [403] · `Storage404Error1` [404] · `Storage503Error1` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetStorageByKeyErrorBody` | `mr_scraper/errors/get_storage_by_key_error.py` |
| `Storage400Error1` | `mr_scraper/models/storage400_error1.py` |
| `Storage403Error1` | `mr_scraper/models/storage403_error1.py` |
| `Storage404Error1` | `mr_scraper/models/storage404_error1.py` |
| `Storage503Error1` | `mr_scraper/models/storage503_error1.py` |


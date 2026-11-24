<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collect — operations

Accessor: `client.collect` · Source: `coresignal/apis/collect.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.collect.bulk_collect_companies

- **Route**: `POST /bulk_collect`
- **Auth**: `api_key`
- **Signature**: `def bulk_collect_companies(body: BulkCollectRequest | BulkCollectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[Company]`
- **Returns (raw)**: `ApiResult[list[Company], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BulkCollectRequest` | `coresignal/models/bulk_collect_request.py` |
| `BulkCollectRequestDict` | `coresignal/models/bulk_collect_request.py` |
| `Company` | `coresignal/models/company.py` |

### client.collect.collect_company

- **Route**: `GET /collect/{id}`
- **Auth**: `api_key`
- **Signature**: `def collect_company(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, CollectCompanyErrorBody]`
- **Error**: `CollectCompanyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Company` | `coresignal/models/company.py` |
| `CollectCompanyErrorBody` | `coresignal/errors/collect_company_error.py` |


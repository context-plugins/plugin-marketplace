<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `common_elements/apis/vendors.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vendors.vendors_detail

- **Route**: `GET /api/v1/vendors/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def vendors_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1VendorsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1VendorsResponse1, VendorsDetailErrorBody]`
- **Error**: `VendorsDetailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1VendorsResponse1` | `common_elements/models/api_v1_vendors_response1.py` |
| `VendorsDetailErrorBody` | `common_elements/errors/vendors_detail_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.vendors.vendors_list

- **Route**: `GET /api/v1/vendors`
- **Auth**: `bearer_auth`
- **Signature**: `def vendors_list(*, q: str | None = None, state: str | None = None, category: str | None = None, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `state` — query · `category` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1VendorsResponse`
- **Returns (raw)**: `ApiResult[ApiV1VendorsResponse, VendorsListErrorBody]`
- **Error**: `VendorsListErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1VendorsResponse` | `common_elements/models/api_v1_vendors_response.py` |
| `VendorsListErrorBody` | `common_elements/errors/vendors_list_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.vendors.vendors_reviews

- **Route**: `GET /api/v1/vendors/{id}/reviews`
- **Auth**: `bearer_auth`
- **Signature**: `def vendors_reviews(id_: UUID, *, limit: float | None = None, offset: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1VendorsReviewsResponse`
- **Returns (raw)**: `ApiResult[ApiV1VendorsReviewsResponse, VendorsReviewsErrorBody]`
- **Error**: `VendorsReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1VendorsReviewsResponse` | `common_elements/models/api_v1_vendors_reviews_response.py` |
| `VendorsReviewsErrorBody` | `common_elements/errors/vendors_reviews_error.py` |
| `Error` | `common_elements/models/error.py` |


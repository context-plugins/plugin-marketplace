<!-- Generated file — do not edit; regenerated with the SDK. -->

# Purchases — operations

Accessor: `client.purchases` · Source: `did_logic/apis/purchases.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.purchases.purchases_index

- **Route**: `GET /api/v1/purchases`
- **Auth**: `bearer_auth`
- **Signature**: `def purchases_index(*, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV1PurchasesResponse`
- **Returns (raw)**: `ApiResult[ApiV1PurchasesResponse, PurchasesIndexErrorBody]`
- **Error**: `PurchasesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Purchases403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PurchasesResponse` | `did_logic/models/api_v1_purchases_response.py` |
| `PurchasesIndexErrorBody` | `did_logic/errors/purchases_index_error.py` |
| `ApiV1Purchases403Error1` | `did_logic/models/api_v1_purchases403_error1.py` |


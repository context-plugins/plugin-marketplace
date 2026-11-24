<!-- Generated file — do not edit; regenerated with the SDK. -->

# InboundDestinations — operations

Accessor: `client.inbound_destinations` · Source: `did_logic/apis/inbound_destinations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.inbound_destinations.purchases_destinations_create

- **Route**: `POST /api/v1/purchases/{purchase_id}/destinations`
- **Auth**: `bearer_auth`
- **Signature**: `def purchases_destinations_create(purchase_id: str, body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `purchase_id`, `body`
- **Params**: `purchase_id` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1PurchasesDestinationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PurchasesDestinationsResponse1, PurchasesDestinationsCreateErrorBody]`
- **Error**: `PurchasesDestinationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PurchasesDestinations403Error1` [403] · `Error` [404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PurchasesDestinationsRequest` | `did_logic/models/api_v1_purchases_destinations_request.py` |
| `ApiV1PurchasesDestinationsRequestDict` | `did_logic/models/api_v1_purchases_destinations_request.py` |
| `ApiV1PurchasesDestinationsResponse1` | `did_logic/models/api_v1_purchases_destinations_response1.py` |
| `PurchasesDestinationsCreateErrorBody` | `did_logic/errors/purchases_destinations_create_error.py` |
| `ApiV1PurchasesDestinations403Error1` | `did_logic/models/api_v1_purchases_destinations403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.inbound_destinations.purchases_destinations_destroy

- **Route**: `DELETE /api/v1/purchases/{purchase_id}/destinations/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def purchases_destinations_destroy(purchase_id: str, id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `purchase_id`, `id_`
- **Params**: `purchase_id` — path · `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PurchasesDestinationsDestroyErrorBody]`
- **Error**: `PurchasesDestinationsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PurchasesDestinations403Error1` [403] · `ApiV1PurchasesDestinationsResponse31` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchasesDestinationsDestroyErrorBody` | `did_logic/errors/purchases_destinations_destroy_error.py` |
| `ApiV1PurchasesDestinations403Error1` | `did_logic/models/api_v1_purchases_destinations403_error1.py` |
| `ApiV1PurchasesDestinationsResponse31` | `did_logic/models/unions/api_v1_purchases_destinations_response31.py` |

### client.inbound_destinations.purchases_destinations_index

- **Route**: `GET /api/v1/purchases/{purchase_id}/destinations`
- **Auth**: `bearer_auth`
- **Signature**: `def purchases_destinations_index(purchase_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `purchase_id`
- **Params**: `purchase_id` — path
- **Returns (parsed)**: `ApiV1PurchasesDestinationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1PurchasesDestinationsResponse, PurchasesDestinationsIndexErrorBody]`
- **Error**: `PurchasesDestinationsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PurchasesDestinations403Error1` [403] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PurchasesDestinationsResponse` | `did_logic/models/api_v1_purchases_destinations_response.py` |
| `PurchasesDestinationsIndexErrorBody` | `did_logic/errors/purchases_destinations_index_error.py` |
| `ApiV1PurchasesDestinations403Error1` | `did_logic/models/api_v1_purchases_destinations403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.inbound_destinations.purchases_destinations_update

- **Route**: `PATCH /api/v1/purchases/{purchase_id}/destinations/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def purchases_destinations_update(purchase_id: str, id_: int, body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `purchase_id`, `id_`, `body`
- **Params**: `purchase_id` — path · `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1PurchasesDestinationsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1PurchasesDestinationsResponse2, PurchasesDestinationsUpdateErrorBody]`
- **Error**: `PurchasesDestinationsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PurchasesDestinations403Error1` [403] · `ApiV1PurchasesDestinationsResponse31` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PurchasesDestinationsRequest1` | `did_logic/models/api_v1_purchases_destinations_request1.py` |
| `ApiV1PurchasesDestinationsRequest1Dict` | `did_logic/models/api_v1_purchases_destinations_request1.py` |
| `ApiV1PurchasesDestinationsResponse2` | `did_logic/models/api_v1_purchases_destinations_response2.py` |
| `PurchasesDestinationsUpdateErrorBody` | `did_logic/errors/purchases_destinations_update_error.py` |
| `ApiV1PurchasesDestinations403Error1` | `did_logic/models/api_v1_purchases_destinations403_error1.py` |
| `ApiV1PurchasesDestinationsResponse31` | `did_logic/models/unions/api_v1_purchases_destinations_response31.py` |


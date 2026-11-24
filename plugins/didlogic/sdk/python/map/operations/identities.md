<!-- Generated file — do not edit; regenerated with the SDK. -->

# Identities — operations

Accessor: `client.identities` · Source: `did_logic/apis/identities.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.identities.identities_create

- **Route**: `POST /api/v2/identities`
- **Auth**: `bearer_auth`
- **Signature**: `def identities_create(body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV2IdentitiesResponse1`
- **Returns (raw)**: `ApiResult[ApiV2IdentitiesResponse1, IdentitiesCreateErrorBody]`
- **Error**: `IdentitiesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Identities401Error1` [401] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2IdentitiesRequest` | `did_logic/models/api_v2_identities_request.py` |
| `ApiV2IdentitiesRequestDict` | `did_logic/models/api_v2_identities_request.py` |
| `ApiV2IdentitiesResponse1` | `did_logic/models/api_v2_identities_response1.py` |
| `IdentitiesCreateErrorBody` | `did_logic/errors/identities_create_error.py` |
| `ApiV2Identities401Error1` | `did_logic/models/api_v2_identities401_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.identities.identities_destroy

- **Route**: `DELETE /api/v2/identities/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def identities_destroy(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV2IdentitiesResponse2`
- **Returns (raw)**: `ApiResult[ApiV2IdentitiesResponse2, IdentitiesDestroyErrorBody]`
- **Error**: `IdentitiesDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Identities401Error1` [401] · `ApiV2Identities404Error1` [404] · `ApiV2Identities422Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2IdentitiesResponse2` | `did_logic/models/api_v2_identities_response2.py` |
| `IdentitiesDestroyErrorBody` | `did_logic/errors/identities_destroy_error.py` |
| `ApiV2Identities401Error1` | `did_logic/models/api_v2_identities401_error1.py` |
| `ApiV2Identities404Error1` | `did_logic/models/api_v2_identities404_error1.py` |
| `ApiV2Identities422Error1` | `did_logic/models/api_v2_identities422_error1.py` |

### client.identities.identities_index

- **Route**: `GET /api/v2/identities`
- **Auth**: `bearer_auth`
- **Signature**: `def identities_index(*, ids: str | None = None, name: str | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query · `name` — query · `created_at_from` — query · `created_at_to` — query · `order_by` — query · `order` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2IdentitiesResponse`
- **Returns (raw)**: `ApiResult[ApiV2IdentitiesResponse, IdentitiesIndexErrorBody]`
- **Error**: `IdentitiesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Identities401Error1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrderOrStr` | `did_logic/models/enums/order.py` |
| `ApiV2IdentitiesResponse` | `did_logic/models/api_v2_identities_response.py` |
| `IdentitiesIndexErrorBody` | `did_logic/errors/identities_index_error.py` |
| `ApiV2Identities401Error1` | `did_logic/models/api_v2_identities401_error1.py` |


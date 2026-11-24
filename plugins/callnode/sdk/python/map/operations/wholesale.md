<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wholesale — operations

Accessor: `client.wholesale` · Source: `call_node/apis/wholesale.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.wholesale.list_wholesale_areas

- **Route**: `GET /api/v1/wholesale/areas`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_wholesale_areas(*, country_id: str | None = None, state_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `country_id` — query `countryId` · `state_id` — query `stateId`
- **Returns (parsed)**: `ApiV1WholesaleAreasResponse`
- **Returns (raw)**: `ApiResult[ApiV1WholesaleAreasResponse, ListWholesaleAreasErrorBody]`
- **Error**: `ListWholesaleAreasErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleAreasResponse` | `call_node/models/api_v1_wholesale_areas_response.py` |
| `ListWholesaleAreasErrorBody` | `call_node/errors/list_wholesale_areas_error.py` |
| `Error` | `call_node/models/error.py` |

### client.wholesale.list_wholesale_countries

- **Route**: `GET /api/v1/wholesale/countries`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_wholesale_countries(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1WholesaleCountriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1WholesaleCountriesResponse, ListWholesaleCountriesErrorBody]`
- **Error**: `ListWholesaleCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleCountriesResponse` | `call_node/models/api_v1_wholesale_countries_response.py` |
| `ListWholesaleCountriesErrorBody` | `call_node/errors/list_wholesale_countries_error.py` |
| `Error` | `call_node/models/error.py` |

### client.wholesale.list_wholesale_states

- **Route**: `GET /api/v1/wholesale/states`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_wholesale_states(*, country_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `country_id` — query `countryId`
- **Returns (parsed)**: `ApiV1WholesaleStatesResponse`
- **Returns (raw)**: `ApiResult[ApiV1WholesaleStatesResponse, ListWholesaleStatesErrorBody]`
- **Error**: `ListWholesaleStatesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleStatesResponse` | `call_node/models/api_v1_wholesale_states_response.py` |
| `ListWholesaleStatesErrorBody` | `call_node/errors/list_wholesale_states_error.py` |
| `Error` | `call_node/models/error.py` |

### client.wholesale.order_wholesale_number

- **Route**: `POST /api/v1/wholesale/numbers`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def order_wholesale_number(body: ApiV1WholesaleNumbersRequest | ApiV1WholesaleNumbersRequestDict, *, x_idempotency_key: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_idempotency_key` — header `X-Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `ApiV1WholesaleNumbersResponse`
- **Returns (raw)**: `ApiResult[ApiV1WholesaleNumbersResponse, OrderWholesaleNumberErrorBody]`
- **Error**: `OrderWholesaleNumberErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 403, 502, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleNumbersRequest` | `call_node/models/api_v1_wholesale_numbers_request.py` |
| `ApiV1WholesaleNumbersRequestDict` | `call_node/models/api_v1_wholesale_numbers_request.py` |
| `ApiV1WholesaleNumbersResponse` | `call_node/models/api_v1_wholesale_numbers_response.py` |
| `OrderWholesaleNumberErrorBody` | `call_node/errors/order_wholesale_number_error.py` |

### client.wholesale.update_wholesale_delivery

- **Route**: `PATCH /api/v1/wholesale/numbers/{id}/delivery`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def update_wholesale_delivery(id_: str, body: ApiV1WholesaleNumbersDeliveryRequest | ApiV1WholesaleNumbersDeliveryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1WholesaleNumbersDeliveryResponse`
- **Returns (raw)**: `ApiResult[ApiV1WholesaleNumbersDeliveryResponse, UpdateWholesaleDeliveryErrorBody]`
- **Error**: `UpdateWholesaleDeliveryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WholesaleNumbersDeliveryRequest` | `call_node/models/api_v1_wholesale_numbers_delivery_request.py` |
| `ApiV1WholesaleNumbersDeliveryRequestDict` | `call_node/models/api_v1_wholesale_numbers_delivery_request.py` |
| `ApiV1WholesaleNumbersDeliveryResponse` | `call_node/models/api_v1_wholesale_numbers_delivery_response.py` |
| `UpdateWholesaleDeliveryErrorBody` | `call_node/errors/update_wholesale_delivery_error.py` |


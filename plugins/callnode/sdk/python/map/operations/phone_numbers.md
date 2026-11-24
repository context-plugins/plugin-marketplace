<!-- Generated file — do not edit; regenerated with the SDK. -->

# PhoneNumbers — operations

Accessor: `client.phone_numbers` · Source: `call_node/apis/phone_numbers.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.phone_numbers.get_number

- **Route**: `GET /api/v1/numbers/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_number(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1NumbersResponse1`
- **Returns (raw)**: `ApiResult[ApiV1NumbersResponse1, GetNumberErrorBody]`
- **Error**: `GetNumberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1NumbersResponse1` | `call_node/models/api_v1_numbers_response1.py` |
| `GetNumberErrorBody` | `call_node/errors/get_number_error.py` |
| `Error` | `call_node/models/error.py` |

### client.phone_numbers.list_numbers

- **Route**: `GET /api/v1/numbers`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_numbers(*, status: str | None = None, type_: Type3OrStr | None = None, purchase_source: PurchaseSource1OrStr | None = None, tag: str | None = None, q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `type_` — query `type` · `purchase_source` — query `purchaseSource` · `tag` — query · `q` — query
- **Returns (parsed)**: `ApiV1NumbersResponse`
- **Returns (raw)**: `ApiResult[ApiV1NumbersResponse, ListNumbersErrorBody]`
- **Error**: `ListNumbersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type3OrStr` | `call_node/models/enums/type3.py` |
| `PurchaseSource1OrStr` | `call_node/models/enums/purchase_source1.py` |
| `ApiV1NumbersResponse` | `call_node/models/api_v1_numbers_response.py` |
| `ListNumbersErrorBody` | `call_node/errors/list_numbers_error.py` |
| `Error` | `call_node/models/error.py` |

### client.phone_numbers.purchase_number

- **Route**: `POST /api/v1/numbers`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def purchase_number(body: PurchaseNumberRequest | PurchaseNumberRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PurchaseNumberResponse`
- **Returns (raw)**: `ApiResult[PurchaseNumberResponse, PurchaseNumberErrorBody]`
- **Error**: `PurchaseNumberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 409, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurchaseNumberRequest` | `call_node/models/purchase_number_request.py` |
| `PurchaseNumberRequestDict` | `call_node/models/purchase_number_request.py` |
| `PurchaseNumberResponse` | `call_node/models/purchase_number_response.py` |
| `PurchaseNumberErrorBody` | `call_node/errors/purchase_number_error.py` |
| `Error` | `call_node/models/error.py` |

### client.phone_numbers.release_number

- **Route**: `DELETE /api/v1/numbers/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def release_number(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1NumbersResponse3`
- **Returns (raw)**: `ApiResult[ApiV1NumbersResponse3, ReleaseNumberErrorBody]`
- **Error**: `ReleaseNumberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1NumbersResponse3` | `call_node/models/api_v1_numbers_response3.py` |
| `ReleaseNumberErrorBody` | `call_node/errors/release_number_error.py` |
| `Error` | `call_node/models/error.py` |

### client.phone_numbers.search_available_numbers

- **Route**: `GET /api/v1/numbers/available`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def search_available_numbers(*, type_: Type3OrStr | None = Type3.LOCAL, area_code: str | None = None, prefix: PrefixOrStr | None = None, vanity: str | None = None, quantity: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `area_code` — query `areaCode` · `prefix` — query · `vanity` — query · `quantity` — query
- **Returns (parsed)**: `ApiV1NumbersAvailableResponse`
- **Returns (raw)**: `ApiResult[ApiV1NumbersAvailableResponse, SearchAvailableNumbersErrorBody]`
- **Error**: `SearchAvailableNumbersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type3OrStr` | `call_node/models/enums/type3.py` |
| `PrefixOrStr` | `call_node/models/enums/prefix.py` |
| `ApiV1NumbersAvailableResponse` | `call_node/models/api_v1_numbers_available_response.py` |
| `SearchAvailableNumbersErrorBody` | `call_node/errors/search_available_numbers_error.py` |
| `Error` | `call_node/models/error.py` |

### client.phone_numbers.update_number

- **Route**: `PATCH /api/v1/numbers/{id}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def update_number(id_: str, body: ApiV1NumbersRequest | ApiV1NumbersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1NumbersResponse1`
- **Returns (raw)**: `ApiResult[ApiV1NumbersResponse1, UpdateNumberErrorBody]`
- **Error**: `UpdateNumberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1NumbersRequest` | `call_node/models/api_v1_numbers_request.py` |
| `ApiV1NumbersRequestDict` | `call_node/models/api_v1_numbers_request.py` |
| `ApiV1NumbersResponse1` | `call_node/models/api_v1_numbers_response1.py` |
| `UpdateNumberErrorBody` | `call_node/errors/update_number_error.py` |
| `Error` | `call_node/models/error.py` |


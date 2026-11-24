<!-- Generated file — do not edit; regenerated with the SDK. -->

# HlrLookups — operations

Accessor: `client.hlr_lookups` · Source: `did_logic/apis/hlr_lookups.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.hlr_lookups.hlr_create

- **Route**: `POST /api/v2/hlr`
- **Auth**: `bearer_auth`
- **Signature**: `def hlr_create(body: ApiV2HlrRequest | ApiV2HlrRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV2HlrResponse`
- **Returns (raw)**: `ApiResult[ApiV2HlrResponse, HlrCreateErrorBody]`
- **Error**: `HlrCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Hlr401Error1` [401] · `ApiV2Hlr403Error1` [403] · `ApiV2Hlr422Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2HlrRequest` | `did_logic/models/api_v2_hlr_request.py` |
| `ApiV2HlrRequestDict` | `did_logic/models/api_v2_hlr_request.py` |
| `ApiV2HlrResponse` | `did_logic/models/api_v2_hlr_response.py` |
| `HlrCreateErrorBody` | `did_logic/errors/hlr_create_error.py` |
| `ApiV2Hlr401Error1` | `did_logic/models/api_v2_hlr401_error1.py` |
| `ApiV2Hlr403Error1` | `did_logic/models/api_v2_hlr403_error1.py` |
| `ApiV2Hlr422Error1` | `did_logic/models/api_v2_hlr422_error1.py` |

### client.hlr_lookups.hlr_history

- **Route**: `GET /api/v2/hlr/history`
- **Auth**: `bearer_auth`
- **Signature**: `def hlr_history(*, ids: str | None = None, task_ids: str | None = None, number: str | None = None, number_start: int | None = None, status: Status1OrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query · `task_ids` — query · `number` — query · `number_start` — query · `status` — query · `created_at_from` — query · `created_at_to` — query · `processed_at_from` — query · `processed_at_to` — query · `order_by` — query · `order` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2HlrHistoryResponse`
- **Returns (raw)**: `ApiResult[ApiV2HlrHistoryResponse, HlrHistoryErrorBody]`
- **Error**: `HlrHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2HlrHistory401Error1` [401] · `ApiV2HlrHistory403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status1OrStr` | `did_logic/models/enums/status1.py` |
| `OrderOrStr` | `did_logic/models/enums/order.py` |
| `ApiV2HlrHistoryResponse` | `did_logic/models/api_v2_hlr_history_response.py` |
| `HlrHistoryErrorBody` | `did_logic/errors/hlr_history_error.py` |
| `ApiV2HlrHistory401Error1` | `did_logic/models/api_v2_hlr_history401_error1.py` |
| `ApiV2HlrHistory403Error1` | `did_logic/models/api_v2_hlr_history403_error1.py` |


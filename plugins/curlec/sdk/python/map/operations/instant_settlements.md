<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstantSettlements — operations

Accessor: `client.instant_settlements` · Source: `curlec/apis/instant_settlements.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.instant_settlements.create_instant_settlement

- **Route**: `POST /settlements/ondemand`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_instant_settlement(body: SettlementsOndemandRequest | SettlementsOndemandRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `InstantSettlement`
- **Returns (raw)**: `ApiResult[InstantSettlement, CreateInstantSettlementErrorBody]`
- **Error**: `CreateInstantSettlementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SettlementsOndemandRequest` | `curlec/models/settlements_ondemand_request.py` |
| `SettlementsOndemandRequestDict` | `curlec/models/settlements_ondemand_request.py` |
| `InstantSettlement` | `curlec/models/instant_settlement.py` |
| `CreateInstantSettlementErrorBody` | `curlec/errors/create_instant_settlement_error.py` |
| `Error` | `curlec/models/error.py` |

### client.instant_settlements.fetch_all_instant_settlements

- **Route**: `GET /settlements/ondemand`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_instant_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query · `expand` — query `expand[]`
- **Returns (parsed)**: `SettlementsOndemandResponse`
- **Returns (raw)**: `ApiResult[SettlementsOndemandResponse, FetchAllInstantSettlementsErrorBody]`
- **Error**: `FetchAllInstantSettlementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpandRazorpayInstantSettlementsApiOrStr` | `curlec/models/enums/expand_razorpay_instant_settlements_api.py` |
| `SettlementsOndemandResponse` | `curlec/models/settlements_ondemand_response.py` |
| `FetchAllInstantSettlementsErrorBody` | `curlec/errors/fetch_all_instant_settlements_error.py` |
| `Error` | `curlec/models/error.py` |

### client.instant_settlements.fetch_instant_settlement

- **Route**: `GET /settlements/ondemand/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_instant_settlement(id_: str, *, expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `expand` — query `expand[]`
- **Returns (parsed)**: `InstantSettlement`
- **Returns (raw)**: `ApiResult[InstantSettlement, FetchInstantSettlementErrorBody]`
- **Error**: `FetchInstantSettlementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpandRazorpayInstantSettlementsApiOrStr` | `curlec/models/enums/expand_razorpay_instant_settlements_api.py` |
| `InstantSettlement` | `curlec/models/instant_settlement.py` |
| `FetchInstantSettlementErrorBody` | `curlec/errors/fetch_instant_settlement_error.py` |
| `Error` | `curlec/models/error.py` |


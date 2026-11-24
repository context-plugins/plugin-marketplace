<!-- Generated file — do not edit; regenerated with the SDK. -->

# SettlementsApi — operations

Accessor: `client.settlements_api` · Source: `curlec/apis/settlements_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.settlements_api.fetch_all_settlements

- **Route**: `GET /settlements`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_settlements(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `SettlementsResponse`
- **Returns (raw)**: `ApiResult[SettlementsResponse, FetchAllSettlementsErrorBody]`
- **Error**: `FetchAllSettlementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SettlementsResponse` | `curlec/models/settlements_response.py` |
| `FetchAllSettlementsErrorBody` | `curlec/errors/fetch_all_settlements_error.py` |
| `Error` | `curlec/models/error.py` |

### client.settlements_api.fetch_settlement

- **Route**: `GET /settlements/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_settlement(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Settlement`
- **Returns (raw)**: `ApiResult[Settlement, FetchSettlementErrorBody]`
- **Error**: `FetchSettlementErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Settlement` | `curlec/models/settlement.py` |
| `FetchSettlementErrorBody` | `curlec/errors/fetch_settlement_error.py` |
| `Error` | `curlec/models/error.py` |

### client.settlements_api.fetch_settlement_recon

- **Route**: `GET /settlements/recon/combined`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_settlement_recon(year: int, month: int, *, day: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `year`, `month`
- **Params**: `year` — query · `month` — query · `day` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `SettlementsReconCombinedResponse`
- **Returns (raw)**: `ApiResult[SettlementsReconCombinedResponse, FetchSettlementReconErrorBody]`
- **Error**: `FetchSettlementReconErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SettlementsReconCombinedResponse` | `curlec/models/settlements_recon_combined_response.py` |
| `FetchSettlementReconErrorBody` | `curlec/errors/fetch_settlement_recon_error.py` |
| `Error` | `curlec/models/error.py` |


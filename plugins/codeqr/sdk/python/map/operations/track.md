<!-- Generated file — do not edit; regenerated with the SDK. -->

# Track — operations

Accessor: `client.track` · Source: `code_qr/apis/track.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.track.track_lead

- **Route**: `POST /track/lead`
- **Auth**: `token`
- **Signature**: `def track_lead(*, body: TrackLeadRequest | TrackLeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TrackLeadResponse`
- **Returns (raw)**: `ApiResult[TrackLeadResponse, TrackLeadErrorBody]`
- **Error**: `TrackLeadErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackLeadRequest` | `code_qr/models/track_lead_request.py` |
| `TrackLeadRequestDict` | `code_qr/models/track_lead_request.py` |
| `TrackLeadResponse` | `code_qr/models/track_lead_response.py` |
| `TrackLeadErrorBody` | `code_qr/errors/track_lead_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.track.track_sale

- **Route**: `POST /track/sale`
- **Auth**: `token`
- **Signature**: `def track_sale(*, body: TrackSaleRequest | TrackSaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TrackSaleResponse`
- **Returns (raw)**: `ApiResult[TrackSaleResponse, TrackSaleErrorBody]`
- **Error**: `TrackSaleErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrackSaleRequest` | `code_qr/models/track_sale_request.py` |
| `TrackSaleRequestDict` | `code_qr/models/track_sale_request.py` |
| `TrackSaleResponse` | `code_qr/models/track_sale_response.py` |
| `TrackSaleErrorBody` | `code_qr/errors/track_sale_error.py` |
| `M4001` | `code_qr/models/m4001.py` |


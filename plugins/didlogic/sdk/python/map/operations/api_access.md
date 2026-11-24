<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiAccess — operations

Accessor: `client.api_access` · Source: `did_logic/apis/api_access.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.api_access.capabilities_show

- **Route**: `GET /api/v1/capabilities`
- **Auth**: `bearer_auth`
- **Signature**: `def capabilities_show(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1CapabilitiesResponse`
- **Returns (raw)**: `ApiResult[ApiV1CapabilitiesResponse, CapabilitiesShowErrorBody]`
- **Error**: `CapabilitiesShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Capabilities401Error1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CapabilitiesResponse` | `did_logic/models/api_v1_capabilities_response.py` |
| `CapabilitiesShowErrorBody` | `did_logic/errors/capabilities_show_error.py` |
| `ApiV1Capabilities401Error1` | `did_logic/models/api_v1_capabilities401_error1.py` |


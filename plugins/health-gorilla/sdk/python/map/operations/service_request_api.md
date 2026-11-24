<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceRequestApi — operations

Accessor: `client.service_request_api` · Source: `health_gorilla/apis/service_request_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.service_request_api.create_service_request

- **Route**: `POST /ServiceRequest`
- **Auth**: `bearer_auth`
- **Signature**: `def create_service_request(body: ServiceRequest | ServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ServiceRequest`
- **Returns (raw)**: `ApiResult[ServiceRequest, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceRequest` | `health_gorilla/models/service_request.py` |
| `ServiceRequestDict` | `health_gorilla/models/service_request.py` |

### client.service_request_api.read_service_request

- **Route**: `GET /ServiceRequest/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_service_request(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ServiceRequest`
- **Returns (raw)**: `ApiResult[ServiceRequest, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ServiceRequest` | `health_gorilla/models/service_request.py` |

### client.service_request_api.search_service_requests

- **Route**: `GET /ServiceRequest`
- **Auth**: `bearer_auth`
- **Signature**: `def search_service_requests(*, patient: str | None = None, status: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `patient` — query · `status` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |


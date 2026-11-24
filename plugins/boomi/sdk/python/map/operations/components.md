<!-- Generated file — do not edit; regenerated with the SDK. -->

# Components — operations

Accessor: `client.components` · Source: `boomi/apis/components.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.components.create_packaged_component

- **Route**: `POST /PackagedComponent`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_packaged_component(body: PackagedComponentInput | PackagedComponentInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PackagedComponent`
- **Returns (raw)**: `ApiResult[PackagedComponent, CreatePackagedComponentErrorBody]`
- **Error**: `CreatePackagedComponentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PackagedComponentInput` | `boomi/models/packaged_component_input.py` |
| `PackagedComponentInputDict` | `boomi/models/packaged_component_input.py` |
| `PackagedComponent` | `boomi/models/packaged_component.py` |
| `CreatePackagedComponentErrorBody` | `boomi/errors/create_packaged_component_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.components.get_packaged_component

- **Route**: `GET /PackagedComponent/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_packaged_component(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PackagedComponent`
- **Returns (raw)**: `ApiResult[PackagedComponent, GetPackagedComponentErrorBody]`
- **Error**: `GetPackagedComponentErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PackagedComponent` | `boomi/models/packaged_component.py` |
| `GetPackagedComponentErrorBody` | `boomi/errors/get_packaged_component_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |


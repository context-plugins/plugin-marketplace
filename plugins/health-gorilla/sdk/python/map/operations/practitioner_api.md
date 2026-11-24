<!-- Generated file — do not edit; regenerated with the SDK. -->

# PractitionerApi — operations

Accessor: `client.practitioner_api` · Source: `health_gorilla/apis/practitioner_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.practitioner_api.read_practitioner

- **Route**: `GET /Practitioner/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_practitioner(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Practitioner`
- **Returns (raw)**: `ApiResult[Practitioner, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Practitioner` | `health_gorilla/models/practitioner.py` |

### client.practitioner_api.search_practitioners

- **Route**: `GET /Practitioner`
- **Auth**: `bearer_auth`
- **Signature**: `def search_practitioners(*, identifier: str | None = None, name: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `identifier` — query · `name` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |


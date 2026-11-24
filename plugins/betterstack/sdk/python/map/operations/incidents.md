<!-- Generated file — do not edit; regenerated with the SDK. -->

# Incidents — operations

Accessor: `client.incidents` · Source: `better_stack/apis/incidents.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.incidents.acknowledge_incident

- **Route**: `POST /incidents/{id}/acknowledge`
- **Auth**: `bearer_auth`
- **Signature**: `def acknowledge_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.create_incident

- **Route**: `POST /incidents`
- **Auth**: `bearer_auth`
- **Signature**: `def create_incident(body: IncidentCreate | IncidentCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `IncidentCreate` | `better_stack/models/incident_create.py` |
| `IncidentCreateDict` | `better_stack/models/incident_create.py` |

### client.incidents.delete_incident

- **Route**: `DELETE /incidents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.escalate_incident

- **Route**: `POST /incidents/{id}/escalate`
- **Auth**: `bearer_auth`
- **Signature**: `def escalate_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.get_incident

- **Route**: `GET /incidents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.get_incident_timeline

- **Route**: `GET /incidents/{id}/timeline`
- **Auth**: `bearer_auth`
- **Signature**: `def get_incident_timeline(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.list_incidents

- **Route**: `GET /incidents`
- **Auth**: `bearer_auth`
- **Signature**: `def list_incidents(*, per_page: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query · `page` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.reopen_incident

- **Route**: `POST /incidents/{id}/reopen`
- **Auth**: `bearer_auth`
- **Signature**: `def reopen_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.incidents.resolve_incident

- **Route**: `POST /incidents/{id}/resolve`
- **Auth**: `bearer_auth`
- **Signature**: `def resolve_incident(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**


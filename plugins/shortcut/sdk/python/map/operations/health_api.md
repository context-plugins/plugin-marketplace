<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.health_api` · Source: `shortcut/apis/health_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.health_api.update_health

- **Route**: `PUT /api/v3/health/{health-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_health(health_public_id: UUID, body: UpdateHealth | UpdateHealthDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `health_public_id`, `body`
- **Params**: `health_public_id` — path `health-public-id` · `body` — JSON body
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, UpdateHealthErrorBody]`
- **Error**: `UpdateHealthErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateHealth` | `shortcut/models/update_health.py` |
| `UpdateHealthDict` | `shortcut/models/update_health.py` |
| `Health` | `shortcut/models/health.py` |
| `UpdateHealthErrorBody` | `shortcut/errors/update_health_error.py` |


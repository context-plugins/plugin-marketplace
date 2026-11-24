<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.health_api` · Source: `celestia/apis/health_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.health_api.get_website_health

- **Route**: `GET /api/health/`
- **Server**: `default_celestia_website_contact_api`
- **Signature**: `def get_website_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Health`
- **Returns (raw)**: `ApiResult[Health, GetWebsiteHealthErrorBody]`
- **Error**: `GetWebsiteHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorCelestiaWebsiteContactApi` [405] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Health` | `celestia/models/health.py` |
| `GetWebsiteHealthErrorBody` | `celestia/errors/get_website_health_error.py` |
| `ErrorCelestiaWebsiteContactApi` | `celestia/models/error_celestia_website_contact_api.py` |

### client.health_api.head_website_health

- **Route**: `HEAD /api/health/`
- **Server**: `default_celestia_website_contact_api`
- **Signature**: `def head_website_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**


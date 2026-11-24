<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `relm_crm/apis/discovery.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.discovery.get_schema

- **Route**: `GET /schema`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_schema(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SchemaDoc`
- **Returns (raw)**: `ApiResult[SchemaDoc, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SchemaDoc` | `relm_crm/models/schema_doc.py` |

### client.discovery.get_settings

- **Route**: `GET /settings`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_settings(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Settings`
- **Returns (raw)**: `ApiResult[Settings, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Settings` | `relm_crm/models/settings.py` |

### client.discovery.get_usage

- **Route**: `GET /usage`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Usage`
- **Returns (raw)**: `ApiResult[Usage, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Usage` | `relm_crm/models/usage.py` |

### client.discovery.set_settings

- **Route**: `PATCH /settings`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def set_settings(body: SettingsRequest | SettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Settings`
- **Returns (raw)**: `ApiResult[Settings, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SettingsRequest` | `relm_crm/models/settings_request.py` |
| `SettingsRequestDict` | `relm_crm/models/settings_request.py` |
| `Settings` | `relm_crm/models/settings.py` |


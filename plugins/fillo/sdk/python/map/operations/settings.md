<!-- Generated file — do not edit; regenerated with the SDK. -->

# Settings — operations

Accessor: `client.settings` · Source: `fillo/apis/settings.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.settings.get_form_settings

- **Route**: `GET /api/v1/manage/forms/{form}/settings`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form_settings(form: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`
- **Params**: `form` — path
- **Returns (parsed)**: `FormSettingsEnvelope`
- **Returns (raw)**: `ApiResult[FormSettingsEnvelope, GetFormSettingsErrorBody]`
- **Error**: `GetFormSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormSettingsEnvelope` | `fillo/models/form_settings_envelope.py` |
| `GetFormSettingsErrorBody` | `fillo/errors/get_form_settings_error.py` |
| `Error` | `fillo/models/error.py` |

### client.settings.update_form_settings

- **Route**: `PATCH /api/v1/manage/forms/{form}/settings`
- **Auth**: `bearer_auth`
- **Signature**: `def update_form_settings(form: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `body`
- **Params**: `form` — path · `body` — JSON body
- **Returns (parsed)**: `FormSettingsEnvelope`
- **Returns (raw)**: `ApiResult[FormSettingsEnvelope, UpdateFormSettingsErrorBody]`
- **Error**: `UpdateFormSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormSettingsEnvelope` | `fillo/models/form_settings_envelope.py` |
| `UpdateFormSettingsErrorBody` | `fillo/errors/update_form_settings_error.py` |
| `Error` | `fillo/models/error.py` |


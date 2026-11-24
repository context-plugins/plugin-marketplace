<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `relm_crm/apis/automations.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.automations.automations_capabilities

- **Route**: `GET /automations-capabilities`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def automations_capabilities(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.automations.create_automation

- **Route**: `POST /automations`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_automation(body: AutomationInput | AutomationInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomationInput` | `relm_crm/models/automation_input.py` |
| `AutomationInputDict` | `relm_crm/models/automation_input.py` |

### client.automations.delete_automation

- **Route**: `DELETE /automations/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.automations.get_automation

- **Route**: `GET /automations/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_automation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.automations.list_automations

- **Route**: `GET /automations`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_automations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.automations.set_automation_enabled

- **Route**: `PATCH /automations/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def set_automation_enabled(id_: str, body: AutomationsRequest | AutomationsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomationsRequest` | `relm_crm/models/automations_request.py` |
| `AutomationsRequestDict` | `relm_crm/models/automations_request.py` |


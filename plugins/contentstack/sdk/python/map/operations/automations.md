<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `contentstack/apis/automations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.automations.activate_automation

- **Route**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/activate`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def activate_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `automation_uid`
- **Params**: `organization_uid` — path · `project_uid` — path · `automation_uid` — path
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, ActivateAutomationErrorBody]`
- **Error**: `ActivateAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Automation` | `contentstack/models/automation.py` |
| `ActivateAutomationErrorBody` | `contentstack/errors/activate_automation_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.automations.deactivate_automation

- **Route**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}/deactivate`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def deactivate_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `automation_uid`
- **Params**: `organization_uid` — path · `project_uid` — path · `automation_uid` — path
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, DeactivateAutomationErrorBody]`
- **Error**: `DeactivateAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Automation` | `contentstack/models/automation.py` |
| `DeactivateAutomationErrorBody` | `contentstack/errors/deactivate_automation_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.automations.get_all_automations

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/automations`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_all_automations(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `AutomationList`
- **Returns (raw)**: `ApiResult[AutomationList, GetAllAutomationsErrorBody]`
- **Error**: `GetAllAutomationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationList` | `contentstack/models/automation_list.py` |
| `GetAllAutomationsErrorBody` | `contentstack/errors/get_all_automations_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.automations.get_automation

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}/automations/{automation_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_automate_management_accounts_api`
- **Signature**: `def get_automation(organization_uid: str, project_uid: str, automation_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `automation_uid`
- **Params**: `organization_uid` — path · `project_uid` — path · `automation_uid` — path
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, GetAutomationErrorBody]`
- **Error**: `GetAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Automation` | `contentstack/models/automation.py` |
| `GetAutomationErrorBody` | `contentstack/errors/get_automation_error.py` |
| `Error` | `contentstack/models/error.py` |


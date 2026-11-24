<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `ui_path/apis/automations.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.automations.create_automation_idea

- **Route**: `POST /automations`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def create_automation_idea(body: CreateAutomationIdeaRequest | CreateAutomationIdeaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, CreateAutomationIdeaErrorBody]`
- **Error**: `CreateAutomationIdeaErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAutomationIdeaRequest` | `ui_path/models/create_automation_idea_request.py` |
| `CreateAutomationIdeaRequestDict` | `ui_path/models/create_automation_idea_request.py` |
| `Automation` | `ui_path/models/automation.py` |
| `CreateAutomationIdeaErrorBody` | `ui_path/errors/create_automation_idea_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.delete_automation

- **Route**: `DELETE /automations/{automationId}`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def delete_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `automation_id`
- **Params**: `automation_id` — path `automationId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAutomationErrorBody]`
- **Error**: `DeleteAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAutomationErrorBody` | `ui_path/errors/delete_automation_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.get_automation

- **Route**: `GET /automations/{automationId}`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def get_automation(automation_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `automation_id`
- **Params**: `automation_id` — path `automationId`
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, GetAutomationErrorBody]`
- **Error**: `GetAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Automation` | `ui_path/models/automation.py` |
| `GetAutomationErrorBody` | `ui_path/errors/get_automation_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.list_automation_collaborators

- **Route**: `GET /automations/{automationId}/collaborators`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def list_automation_collaborators(automation_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `automation_id`
- **Params**: `automation_id` — path `automationId`
- **Returns (parsed)**: `AutomationsCollaboratorsResponse`
- **Returns (raw)**: `ApiResult[AutomationsCollaboratorsResponse, ListAutomationCollaboratorsErrorBody]`
- **Error**: `ListAutomationCollaboratorsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationsCollaboratorsResponse` | `ui_path/models/automations_collaborators_response.py` |
| `ListAutomationCollaboratorsErrorBody` | `ui_path/errors/list_automation_collaborators_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.list_automations

- **Route**: `GET /automations`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def list_automations(*, phase: str | None = None, status: str | None = None, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `phase` — query · `status` — query · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `AutomationListResponse`
- **Returns (raw)**: `ApiResult[AutomationListResponse, ListAutomationsErrorBody]`
- **Error**: `ListAutomationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationListResponse` | `ui_path/models/automation_list_response.py` |
| `ListAutomationsErrorBody` | `ui_path/errors/list_automations_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.remove_automation_collaborator

- **Route**: `DELETE /automations/{automationId}/collaborators`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def remove_automation_collaborator(automation_id: int, user_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `automation_id`, `user_id`
- **Params**: `automation_id` — path `automationId` · `user_id` — query `userId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemoveAutomationCollaboratorErrorBody]`
- **Error**: `RemoveAutomationCollaboratorErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RemoveAutomationCollaboratorErrorBody` | `ui_path/errors/remove_automation_collaborator_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.automations.update_automation

- **Route**: `PATCH /automations/{automationId}`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def update_automation(automation_id: int, body: UpdateAutomationRequest | UpdateAutomationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `automation_id`, `body`
- **Params**: `automation_id` — path `automationId` · `body` — JSON body
- **Returns (parsed)**: `Automation`
- **Returns (raw)**: `ApiResult[Automation, UpdateAutomationErrorBody]`
- **Error**: `UpdateAutomationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateAutomationRequest` | `ui_path/models/update_automation_request.py` |
| `UpdateAutomationRequestDict` | `ui_path/models/update_automation_request.py` |
| `Automation` | `ui_path/models/automation.py` |
| `UpdateAutomationErrorBody` | `ui_path/errors/update_automation_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |


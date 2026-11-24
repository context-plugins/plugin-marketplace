<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automation — operations

Accessor: `client.automation` · Source: `bundle_social/apis/automation.py` · 17 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.automation.automation_activate_flow

- **Route**: `POST /api/v1/automations/{id}/activate`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_activate_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationsActivateResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsActivateResponse, AutomationActivateFlowErrorBody]`
- **Error**: `AutomationActivateFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsActivate400Error1` [400] · `ApiV1AutomationsActivate401Error1` [401] · `ApiV1AutomationsActivate403Error1` [403] · `ApiV1AutomationsActivate404Error1` [404] · `ApiV1AutomationsActivate429Error1` [429] · `ApiV1AutomationsActivate500Error1` [500] · `ApiV1AutomationsActivate502Error1` [502] · `ApiV1AutomationsActivate503Error1` [503] · `ApiV1AutomationsActivate504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsActivateResponse` | `bundle_social/models/api_v1_automations_activate_response.py` |
| `AutomationActivateFlowErrorBody` | `bundle_social/errors/automation_activate_flow_error.py` |
| `ApiV1AutomationsActivate400Error1` | `bundle_social/models/api_v1_automations_activate400_error1.py` |
| `ApiV1AutomationsActivate401Error1` | `bundle_social/models/api_v1_automations_activate401_error1.py` |
| `ApiV1AutomationsActivate403Error1` | `bundle_social/models/api_v1_automations_activate403_error1.py` |
| `ApiV1AutomationsActivate404Error1` | `bundle_social/models/api_v1_automations_activate404_error1.py` |
| `ApiV1AutomationsActivate429Error1` | `bundle_social/models/api_v1_automations_activate429_error1.py` |
| `ApiV1AutomationsActivate500Error1` | `bundle_social/models/api_v1_automations_activate500_error1.py` |
| `ApiV1AutomationsActivate502Error1` | `bundle_social/models/api_v1_automations_activate502_error1.py` |
| `ApiV1AutomationsActivate503Error1` | `bundle_social/models/api_v1_automations_activate503_error1.py` |
| `ApiV1AutomationsActivate504Error1` | `bundle_social/models/api_v1_automations_activate504_error1.py` |

### client.automation.automation_archive_flow

- **Route**: `POST /api/v1/automations/{id}/archive`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_archive_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationsArchiveResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsArchiveResponse, AutomationArchiveFlowErrorBody]`
- **Error**: `AutomationArchiveFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsArchive400Error1` [400] · `ApiV1AutomationsArchive401Error1` [401] · `ApiV1AutomationsArchive403Error1` [403] · `ApiV1AutomationsArchive404Error1` [404] · `ApiV1AutomationsArchive429Error1` [429] · `ApiV1AutomationsArchive500Error1` [500] · `ApiV1AutomationsArchive502Error1` [502] · `ApiV1AutomationsArchive503Error1` [503] · `ApiV1AutomationsArchive504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsArchiveResponse` | `bundle_social/models/api_v1_automations_archive_response.py` |
| `AutomationArchiveFlowErrorBody` | `bundle_social/errors/automation_archive_flow_error.py` |
| `ApiV1AutomationsArchive400Error1` | `bundle_social/models/api_v1_automations_archive400_error1.py` |
| `ApiV1AutomationsArchive401Error1` | `bundle_social/models/api_v1_automations_archive401_error1.py` |
| `ApiV1AutomationsArchive403Error1` | `bundle_social/models/api_v1_automations_archive403_error1.py` |
| `ApiV1AutomationsArchive404Error1` | `bundle_social/models/api_v1_automations_archive404_error1.py` |
| `ApiV1AutomationsArchive429Error1` | `bundle_social/models/api_v1_automations_archive429_error1.py` |
| `ApiV1AutomationsArchive500Error1` | `bundle_social/models/api_v1_automations_archive500_error1.py` |
| `ApiV1AutomationsArchive502Error1` | `bundle_social/models/api_v1_automations_archive502_error1.py` |
| `ApiV1AutomationsArchive503Error1` | `bundle_social/models/api_v1_automations_archive503_error1.py` |
| `ApiV1AutomationsArchive504Error1` | `bundle_social/models/api_v1_automations_archive504_error1.py` |

### client.automation.automation_copy_flows

- **Route**: `POST /api/v1/automations/copy`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_copy_flows(*, body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationsCopyResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsCopyResponse, AutomationCopyFlowsErrorBody]`
- **Error**: `AutomationCopyFlowsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsCopy400Error1` [400] · `ApiV1AutomationsCopy401Error1` [401] · `ApiV1AutomationsCopy403Error1` [403] · `ApiV1AutomationsCopy404Error1` [404] · `ApiV1AutomationsCopy429Error1` [429] · `ApiV1AutomationsCopy500Error1` [500] · `ApiV1AutomationsCopy502Error1` [502] · `ApiV1AutomationsCopy503Error1` [503] · `ApiV1AutomationsCopy504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsCopyRequest` | `bundle_social/models/api_v1_automations_copy_request.py` |
| `ApiV1AutomationsCopyRequestDict` | `bundle_social/models/api_v1_automations_copy_request.py` |
| `ApiV1AutomationsCopyResponse` | `bundle_social/models/api_v1_automations_copy_response.py` |
| `AutomationCopyFlowsErrorBody` | `bundle_social/errors/automation_copy_flows_error.py` |
| `ApiV1AutomationsCopy400Error1` | `bundle_social/models/api_v1_automations_copy400_error1.py` |
| `ApiV1AutomationsCopy401Error1` | `bundle_social/models/api_v1_automations_copy401_error1.py` |
| `ApiV1AutomationsCopy403Error1` | `bundle_social/models/api_v1_automations_copy403_error1.py` |
| `ApiV1AutomationsCopy404Error1` | `bundle_social/models/api_v1_automations_copy404_error1.py` |
| `ApiV1AutomationsCopy429Error1` | `bundle_social/models/api_v1_automations_copy429_error1.py` |
| `ApiV1AutomationsCopy500Error1` | `bundle_social/models/api_v1_automations_copy500_error1.py` |
| `ApiV1AutomationsCopy502Error1` | `bundle_social/models/api_v1_automations_copy502_error1.py` |
| `ApiV1AutomationsCopy503Error1` | `bundle_social/models/api_v1_automations_copy503_error1.py` |
| `ApiV1AutomationsCopy504Error1` | `bundle_social/models/api_v1_automations_copy504_error1.py` |

### client.automation.automation_create_flow

- **Route**: `POST /api/v1/automations`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_create_flow(*, body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsResponse1, AutomationCreateFlowErrorBody]`
- **Error**: `AutomationCreateFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Automations400Error1` [400] · `ApiV1Automations401Error1` [401] · `ApiV1Automations403Error1` [403] · `ApiV1Automations404Error1` [404] · `ApiV1Automations429Error1` [429] · `ApiV1Automations500Error1` [500] · `ApiV1Automations502Error1` [502] · `ApiV1Automations503Error1` [503] · `ApiV1Automations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsRequest` | `bundle_social/models/api_v1_automations_request.py` |
| `ApiV1AutomationsRequestDict` | `bundle_social/models/api_v1_automations_request.py` |
| `ApiV1AutomationsResponse1` | `bundle_social/models/api_v1_automations_response1.py` |
| `AutomationCreateFlowErrorBody` | `bundle_social/errors/automation_create_flow_error.py` |
| `ApiV1Automations400Error1` | `bundle_social/models/api_v1_automations400_error1.py` |
| `ApiV1Automations401Error1` | `bundle_social/models/api_v1_automations401_error1.py` |
| `ApiV1Automations403Error1` | `bundle_social/models/api_v1_automations403_error1.py` |
| `ApiV1Automations404Error1` | `bundle_social/models/api_v1_automations404_error1.py` |
| `ApiV1Automations429Error1` | `bundle_social/models/api_v1_automations429_error1.py` |
| `ApiV1Automations500Error1` | `bundle_social/models/api_v1_automations500_error1.py` |
| `ApiV1Automations502Error1` | `bundle_social/models/api_v1_automations502_error1.py` |
| `ApiV1Automations503Error1` | `bundle_social/models/api_v1_automations503_error1.py` |
| `ApiV1Automations504Error1` | `bundle_social/models/api_v1_automations504_error1.py` |

### client.automation.automation_delete_flow

- **Route**: `DELETE /api/v1/automations/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_delete_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsResponse1, AutomationDeleteFlowErrorBody]`
- **Error**: `AutomationDeleteFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Automations400Error1` [400] · `ApiV1Automations401Error1` [401] · `ApiV1Automations403Error1` [403] · `ApiV1Automations404Error1` [404] · `ApiV1Automations429Error1` [429] · `ApiV1Automations500Error1` [500] · `ApiV1Automations502Error1` [502] · `ApiV1Automations503Error1` [503] · `ApiV1Automations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsResponse1` | `bundle_social/models/api_v1_automations_response1.py` |
| `AutomationDeleteFlowErrorBody` | `bundle_social/errors/automation_delete_flow_error.py` |
| `ApiV1Automations400Error1` | `bundle_social/models/api_v1_automations400_error1.py` |
| `ApiV1Automations401Error1` | `bundle_social/models/api_v1_automations401_error1.py` |
| `ApiV1Automations403Error1` | `bundle_social/models/api_v1_automations403_error1.py` |
| `ApiV1Automations404Error1` | `bundle_social/models/api_v1_automations404_error1.py` |
| `ApiV1Automations429Error1` | `bundle_social/models/api_v1_automations429_error1.py` |
| `ApiV1Automations500Error1` | `bundle_social/models/api_v1_automations500_error1.py` |
| `ApiV1Automations502Error1` | `bundle_social/models/api_v1_automations502_error1.py` |
| `ApiV1Automations503Error1` | `bundle_social/models/api_v1_automations503_error1.py` |
| `ApiV1Automations504Error1` | `bundle_social/models/api_v1_automations504_error1.py` |

### client.automation.automation_get_execution

- **Route**: `GET /api/v1/automation-executions/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_get_execution(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationExecutionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationExecutionsResponse, AutomationGetExecutionErrorBody]`
- **Error**: `AutomationGetExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationExecutions400Error1` [400] · `ApiV1AutomationExecutions401Error1` [401] · `ApiV1AutomationExecutions403Error1` [403] · `ApiV1AutomationExecutions404Error1` [404] · `ApiV1AutomationExecutions429Error1` [429] · `ApiV1AutomationExecutions500Error1` [500] · `ApiV1AutomationExecutions502Error1` [502] · `ApiV1AutomationExecutions503Error1` [503] · `ApiV1AutomationExecutions504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationExecutionsResponse` | `bundle_social/models/api_v1_automation_executions_response.py` |
| `AutomationGetExecutionErrorBody` | `bundle_social/errors/automation_get_execution_error.py` |
| `ApiV1AutomationExecutions400Error1` | `bundle_social/models/api_v1_automation_executions400_error1.py` |
| `ApiV1AutomationExecutions401Error1` | `bundle_social/models/api_v1_automation_executions401_error1.py` |
| `ApiV1AutomationExecutions403Error1` | `bundle_social/models/api_v1_automation_executions403_error1.py` |
| `ApiV1AutomationExecutions404Error1` | `bundle_social/models/api_v1_automation_executions404_error1.py` |
| `ApiV1AutomationExecutions429Error1` | `bundle_social/models/api_v1_automation_executions429_error1.py` |
| `ApiV1AutomationExecutions500Error1` | `bundle_social/models/api_v1_automation_executions500_error1.py` |
| `ApiV1AutomationExecutions502Error1` | `bundle_social/models/api_v1_automation_executions502_error1.py` |
| `ApiV1AutomationExecutions503Error1` | `bundle_social/models/api_v1_automation_executions503_error1.py` |
| `ApiV1AutomationExecutions504Error1` | `bundle_social/models/api_v1_automation_executions504_error1.py` |

### client.automation.automation_get_flow

- **Route**: `GET /api/v1/automations/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_get_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsResponse1, AutomationGetFlowErrorBody]`
- **Error**: `AutomationGetFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Automations400Error1` [400] · `ApiV1Automations401Error1` [401] · `ApiV1Automations403Error1` [403] · `ApiV1Automations404Error1` [404] · `ApiV1Automations429Error1` [429] · `ApiV1Automations500Error1` [500] · `ApiV1Automations502Error1` [502] · `ApiV1Automations503Error1` [503] · `ApiV1Automations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsResponse1` | `bundle_social/models/api_v1_automations_response1.py` |
| `AutomationGetFlowErrorBody` | `bundle_social/errors/automation_get_flow_error.py` |
| `ApiV1Automations400Error1` | `bundle_social/models/api_v1_automations400_error1.py` |
| `ApiV1Automations401Error1` | `bundle_social/models/api_v1_automations401_error1.py` |
| `ApiV1Automations403Error1` | `bundle_social/models/api_v1_automations403_error1.py` |
| `ApiV1Automations404Error1` | `bundle_social/models/api_v1_automations404_error1.py` |
| `ApiV1Automations429Error1` | `bundle_social/models/api_v1_automations429_error1.py` |
| `ApiV1Automations500Error1` | `bundle_social/models/api_v1_automations500_error1.py` |
| `ApiV1Automations502Error1` | `bundle_social/models/api_v1_automations502_error1.py` |
| `ApiV1Automations503Error1` | `bundle_social/models/api_v1_automations503_error1.py` |
| `ApiV1Automations504Error1` | `bundle_social/models/api_v1_automations504_error1.py` |

### client.automation.automation_get_flow_executions

- **Route**: `GET /api/v1/automations/{id}/executions`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_get_flow_executions(id_: str, team_id: str, *, flow_version_id: str | None = None, trigger_id: str | None = None, social_account_id: str | None = None, platform: PlatformOrStr | None = None, status: Status31OrStr | None = None, conversation_id: str | None = None, fetched_comment_id: str | None = None, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `team_id`
- **Params**: `id_` — path `id` · `team_id` — query `teamId` · `flow_version_id` — query `flowVersionId` · `trigger_id` — query `triggerId` · `social_account_id` — query `socialAccountId` · `platform` — query · `status` — query · `conversation_id` — query `conversationId` · `fetched_comment_id` — query `fetchedCommentId` · `offset` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1AutomationsExecutionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsExecutionsResponse, AutomationGetFlowExecutionsErrorBody]`
- **Error**: `AutomationGetFlowExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsExecutions400Error1` [400] · `ApiV1AutomationsExecutions401Error1` [401] · `ApiV1AutomationsExecutions403Error1` [403] · `ApiV1AutomationsExecutions404Error1` [404] · `ApiV1AutomationsExecutions429Error1` [429] · `ApiV1AutomationsExecutions500Error1` [500] · `ApiV1AutomationsExecutions502Error1` [502] · `ApiV1AutomationsExecutions503Error1` [503] · `ApiV1AutomationsExecutions504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `bundle_social/models/enums/platform.py` |
| `Status31OrStr` | `bundle_social/models/enums/status31.py` |
| `ApiV1AutomationsExecutionsResponse` | `bundle_social/models/api_v1_automations_executions_response.py` |
| `AutomationGetFlowExecutionsErrorBody` | `bundle_social/errors/automation_get_flow_executions_error.py` |
| `ApiV1AutomationsExecutions400Error1` | `bundle_social/models/api_v1_automations_executions400_error1.py` |
| `ApiV1AutomationsExecutions401Error1` | `bundle_social/models/api_v1_automations_executions401_error1.py` |
| `ApiV1AutomationsExecutions403Error1` | `bundle_social/models/api_v1_automations_executions403_error1.py` |
| `ApiV1AutomationsExecutions404Error1` | `bundle_social/models/api_v1_automations_executions404_error1.py` |
| `ApiV1AutomationsExecutions429Error1` | `bundle_social/models/api_v1_automations_executions429_error1.py` |
| `ApiV1AutomationsExecutions500Error1` | `bundle_social/models/api_v1_automations_executions500_error1.py` |
| `ApiV1AutomationsExecutions502Error1` | `bundle_social/models/api_v1_automations_executions502_error1.py` |
| `ApiV1AutomationsExecutions503Error1` | `bundle_social/models/api_v1_automations_executions503_error1.py` |
| `ApiV1AutomationsExecutions504Error1` | `bundle_social/models/api_v1_automations_executions504_error1.py` |

### client.automation.automation_get_flows

- **Route**: `GET /api/v1/automations`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_get_flows(team_id: str, *, status: StatusBundleSocialAutomationApiOrStr | None = None, platform_scope: PlatformScopeOrStr | None = None, social_account_id: str | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `status` — query · `platform_scope` — query `platformScope` · `social_account_id` — query `socialAccountId` · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AutomationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsResponse, AutomationGetFlowsErrorBody]`
- **Error**: `AutomationGetFlowsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Automations400Error1` [400] · `ApiV1Automations401Error1` [401] · `ApiV1Automations403Error1` [403] · `ApiV1Automations404Error1` [404] · `ApiV1Automations429Error1` [429] · `ApiV1Automations500Error1` [500] · `ApiV1Automations502Error1` [502] · `ApiV1Automations503Error1` [503] · `ApiV1Automations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusBundleSocialAutomationApiOrStr` | `bundle_social/models/enums/status_bundle_social_automation_api.py` |
| `PlatformScopeOrStr` | `bundle_social/models/enums/platform_scope.py` |
| `ApiV1AutomationsResponse` | `bundle_social/models/api_v1_automations_response.py` |
| `AutomationGetFlowsErrorBody` | `bundle_social/errors/automation_get_flows_error.py` |
| `ApiV1Automations400Error1` | `bundle_social/models/api_v1_automations400_error1.py` |
| `ApiV1Automations401Error1` | `bundle_social/models/api_v1_automations401_error1.py` |
| `ApiV1Automations403Error1` | `bundle_social/models/api_v1_automations403_error1.py` |
| `ApiV1Automations404Error1` | `bundle_social/models/api_v1_automations404_error1.py` |
| `ApiV1Automations429Error1` | `bundle_social/models/api_v1_automations429_error1.py` |
| `ApiV1Automations500Error1` | `bundle_social/models/api_v1_automations500_error1.py` |
| `ApiV1Automations502Error1` | `bundle_social/models/api_v1_automations502_error1.py` |
| `ApiV1Automations503Error1` | `bundle_social/models/api_v1_automations503_error1.py` |
| `ApiV1Automations504Error1` | `bundle_social/models/api_v1_automations504_error1.py` |

### client.automation.automation_get_provider_settings

- **Route**: `GET /api/v1/automation-provider-settings`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_get_provider_settings(team_id: str, *, platform: PlatformOrStr | None = None, social_account_id: str | None = None, type_: Type112OrStr | None = None, status: Status59OrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `platform` — query · `social_account_id` — query `socialAccountId` · `type_` — query `type` · `status` — query · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AutomationProviderSettingsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationProviderSettingsResponse, AutomationGetProviderSettingsErrorBody]`
- **Error**: `AutomationGetProviderSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationProviderSettings400Error1` [400] · `ApiV1AutomationProviderSettings401Error1` [401] · `ApiV1AutomationProviderSettings403Error1` [403] · `ApiV1AutomationProviderSettings404Error1` [404] · `ApiV1AutomationProviderSettings429Error1` [429] · `ApiV1AutomationProviderSettings500Error1` [500] · `ApiV1AutomationProviderSettings502Error1` [502] · `ApiV1AutomationProviderSettings503Error1` [503] · `ApiV1AutomationProviderSettings504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `bundle_social/models/enums/platform.py` |
| `Type112OrStr` | `bundle_social/models/enums/type112.py` |
| `Status59OrStr` | `bundle_social/models/enums/status59.py` |
| `ApiV1AutomationProviderSettingsResponse` | `bundle_social/models/api_v1_automation_provider_settings_response.py` |
| `AutomationGetProviderSettingsErrorBody` | `bundle_social/errors/automation_get_provider_settings_error.py` |
| `ApiV1AutomationProviderSettings400Error1` | `bundle_social/models/api_v1_automation_provider_settings400_error1.py` |
| `ApiV1AutomationProviderSettings401Error1` | `bundle_social/models/api_v1_automation_provider_settings401_error1.py` |
| `ApiV1AutomationProviderSettings403Error1` | `bundle_social/models/api_v1_automation_provider_settings403_error1.py` |
| `ApiV1AutomationProviderSettings404Error1` | `bundle_social/models/api_v1_automation_provider_settings404_error1.py` |
| `ApiV1AutomationProviderSettings429Error1` | `bundle_social/models/api_v1_automation_provider_settings429_error1.py` |
| `ApiV1AutomationProviderSettings500Error1` | `bundle_social/models/api_v1_automation_provider_settings500_error1.py` |
| `ApiV1AutomationProviderSettings502Error1` | `bundle_social/models/api_v1_automation_provider_settings502_error1.py` |
| `ApiV1AutomationProviderSettings503Error1` | `bundle_social/models/api_v1_automation_provider_settings503_error1.py` |
| `ApiV1AutomationProviderSettings504Error1` | `bundle_social/models/api_v1_automation_provider_settings504_error1.py` |

### client.automation.automation_pause_flow

- **Route**: `POST /api/v1/automations/{id}/pause`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_pause_flow(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationsPauseResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsPauseResponse, AutomationPauseFlowErrorBody]`
- **Error**: `AutomationPauseFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsPause400Error1` [400] · `ApiV1AutomationsPause401Error1` [401] · `ApiV1AutomationsPause403Error1` [403] · `ApiV1AutomationsPause404Error1` [404] · `ApiV1AutomationsPause429Error1` [429] · `ApiV1AutomationsPause500Error1` [500] · `ApiV1AutomationsPause502Error1` [502] · `ApiV1AutomationsPause503Error1` [503] · `ApiV1AutomationsPause504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsPauseResponse` | `bundle_social/models/api_v1_automations_pause_response.py` |
| `AutomationPauseFlowErrorBody` | `bundle_social/errors/automation_pause_flow_error.py` |
| `ApiV1AutomationsPause400Error1` | `bundle_social/models/api_v1_automations_pause400_error1.py` |
| `ApiV1AutomationsPause401Error1` | `bundle_social/models/api_v1_automations_pause401_error1.py` |
| `ApiV1AutomationsPause403Error1` | `bundle_social/models/api_v1_automations_pause403_error1.py` |
| `ApiV1AutomationsPause404Error1` | `bundle_social/models/api_v1_automations_pause404_error1.py` |
| `ApiV1AutomationsPause429Error1` | `bundle_social/models/api_v1_automations_pause429_error1.py` |
| `ApiV1AutomationsPause500Error1` | `bundle_social/models/api_v1_automations_pause500_error1.py` |
| `ApiV1AutomationsPause502Error1` | `bundle_social/models/api_v1_automations_pause502_error1.py` |
| `ApiV1AutomationsPause503Error1` | `bundle_social/models/api_v1_automations_pause503_error1.py` |
| `ApiV1AutomationsPause504Error1` | `bundle_social/models/api_v1_automations_pause504_error1.py` |

### client.automation.automation_publish_flow

- **Route**: `POST /api/v1/automations/{id}/publish`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_publish_flow(id_: str, *, body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationsPublishResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsPublishResponse, AutomationPublishFlowErrorBody]`
- **Error**: `AutomationPublishFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsPublish400Error1` [400] · `ApiV1AutomationsPublish401Error1` [401] · `ApiV1AutomationsPublish403Error1` [403] · `ApiV1AutomationsPublish404Error1` [404] · `ApiV1AutomationsPublish429Error1` [429] · `ApiV1AutomationsPublish500Error1` [500] · `ApiV1AutomationsPublish502Error1` [502] · `ApiV1AutomationsPublish503Error1` [503] · `ApiV1AutomationsPublish504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsPublishRequest` | `bundle_social/models/api_v1_automations_publish_request.py` |
| `ApiV1AutomationsPublishRequestDict` | `bundle_social/models/api_v1_automations_publish_request.py` |
| `ApiV1AutomationsPublishResponse` | `bundle_social/models/api_v1_automations_publish_response.py` |
| `AutomationPublishFlowErrorBody` | `bundle_social/errors/automation_publish_flow_error.py` |
| `ApiV1AutomationsPublish400Error1` | `bundle_social/models/api_v1_automations_publish400_error1.py` |
| `ApiV1AutomationsPublish401Error1` | `bundle_social/models/api_v1_automations_publish401_error1.py` |
| `ApiV1AutomationsPublish403Error1` | `bundle_social/models/api_v1_automations_publish403_error1.py` |
| `ApiV1AutomationsPublish404Error1` | `bundle_social/models/api_v1_automations_publish404_error1.py` |
| `ApiV1AutomationsPublish429Error1` | `bundle_social/models/api_v1_automations_publish429_error1.py` |
| `ApiV1AutomationsPublish500Error1` | `bundle_social/models/api_v1_automations_publish500_error1.py` |
| `ApiV1AutomationsPublish502Error1` | `bundle_social/models/api_v1_automations_publish502_error1.py` |
| `ApiV1AutomationsPublish503Error1` | `bundle_social/models/api_v1_automations_publish503_error1.py` |
| `ApiV1AutomationsPublish504Error1` | `bundle_social/models/api_v1_automations_publish504_error1.py` |

### client.automation.automation_send_rich_message

- **Route**: `POST /api/v1/automation-rich-messages/conversations/{conversationId}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_send_rich_message(conversation_id: str, *, body: ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `conversation_id`
- **Params**: `conversation_id` — path `conversationId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationRichMessagesConversationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationRichMessagesConversationsResponse, AutomationSendRichMessageErrorBody]`
- **Error**: `AutomationSendRichMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationRichMessagesConversations400Error1` [400] · `ApiV1AutomationRichMessagesConversations401Error1` [401] · `ApiV1AutomationRichMessagesConversations403Error1` [403] · `ApiV1AutomationRichMessagesConversations404Error1` [404] · `ApiV1AutomationRichMessagesConversations429Error1` [429] · `ApiV1AutomationRichMessagesConversations500Error1` [500] · `ApiV1AutomationRichMessagesConversations502Error1` [502] · `ApiV1AutomationRichMessagesConversations503Error1` [503] · `ApiV1AutomationRichMessagesConversations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationRichMessagesConversationsRequest` | `bundle_social/models/api_v1_automation_rich_messages_conversations_request.py` |
| `ApiV1AutomationRichMessagesConversationsRequestDict` | `bundle_social/models/api_v1_automation_rich_messages_conversations_request.py` |
| `ApiV1AutomationRichMessagesConversationsResponse` | `bundle_social/models/api_v1_automation_rich_messages_conversations_response.py` |
| `AutomationSendRichMessageErrorBody` | `bundle_social/errors/automation_send_rich_message_error.py` |
| `ApiV1AutomationRichMessagesConversations400Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations400_error1.py` |
| `ApiV1AutomationRichMessagesConversations401Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations401_error1.py` |
| `ApiV1AutomationRichMessagesConversations403Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations403_error1.py` |
| `ApiV1AutomationRichMessagesConversations404Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations404_error1.py` |
| `ApiV1AutomationRichMessagesConversations429Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations429_error1.py` |
| `ApiV1AutomationRichMessagesConversations500Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations500_error1.py` |
| `ApiV1AutomationRichMessagesConversations502Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations502_error1.py` |
| `ApiV1AutomationRichMessagesConversations503Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations503_error1.py` |
| `ApiV1AutomationRichMessagesConversations504Error1` | `bundle_social/models/api_v1_automation_rich_messages_conversations504_error1.py` |

### client.automation.automation_sync_provider_setting

- **Route**: `POST /api/v1/automation-provider-settings/{id}/sync`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_sync_provider_setting(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AutomationProviderSettingsSyncResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationProviderSettingsSyncResponse, AutomationSyncProviderSettingErrorBody]`
- **Error**: `AutomationSyncProviderSettingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationProviderSettingsSync400Error1` [400] · `ApiV1AutomationProviderSettingsSync401Error1` [401] · `ApiV1AutomationProviderSettingsSync403Error1` [403] · `ApiV1AutomationProviderSettingsSync404Error1` [404] · `ApiV1AutomationProviderSettingsSync429Error1` [429] · `ApiV1AutomationProviderSettingsSync500Error1` [500] · `ApiV1AutomationProviderSettingsSync502Error1` [502] · `ApiV1AutomationProviderSettingsSync503Error1` [503] · `ApiV1AutomationProviderSettingsSync504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationProviderSettingsSyncResponse` | `bundle_social/models/api_v1_automation_provider_settings_sync_response.py` |
| `AutomationSyncProviderSettingErrorBody` | `bundle_social/errors/automation_sync_provider_setting_error.py` |
| `ApiV1AutomationProviderSettingsSync400Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync400_error1.py` |
| `ApiV1AutomationProviderSettingsSync401Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync401_error1.py` |
| `ApiV1AutomationProviderSettingsSync403Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync403_error1.py` |
| `ApiV1AutomationProviderSettingsSync404Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync404_error1.py` |
| `ApiV1AutomationProviderSettingsSync429Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync429_error1.py` |
| `ApiV1AutomationProviderSettingsSync500Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync500_error1.py` |
| `ApiV1AutomationProviderSettingsSync502Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync502_error1.py` |
| `ApiV1AutomationProviderSettingsSync503Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync503_error1.py` |
| `ApiV1AutomationProviderSettingsSync504Error1` | `bundle_social/models/api_v1_automation_provider_settings_sync504_error1.py` |

### client.automation.automation_test_flow

- **Route**: `POST /api/v1/automations/{id}/test`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_test_flow(id_: str, *, body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationsTestResponse`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsTestResponse, AutomationTestFlowErrorBody]`
- **Error**: `AutomationTestFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationsTest400Error1` [400] · `ApiV1AutomationsTest401Error1` [401] · `ApiV1AutomationsTest403Error1` [403] · `ApiV1AutomationsTest404Error1` [404] · `ApiV1AutomationsTest429Error1` [429] · `ApiV1AutomationsTest500Error1` [500] · `ApiV1AutomationsTest502Error1` [502] · `ApiV1AutomationsTest503Error1` [503] · `ApiV1AutomationsTest504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsTestRequest` | `bundle_social/models/api_v1_automations_test_request.py` |
| `ApiV1AutomationsTestRequestDict` | `bundle_social/models/api_v1_automations_test_request.py` |
| `ApiV1AutomationsTestResponse` | `bundle_social/models/api_v1_automations_test_response.py` |
| `AutomationTestFlowErrorBody` | `bundle_social/errors/automation_test_flow_error.py` |
| `ApiV1AutomationsTest400Error1` | `bundle_social/models/api_v1_automations_test400_error1.py` |
| `ApiV1AutomationsTest401Error1` | `bundle_social/models/api_v1_automations_test401_error1.py` |
| `ApiV1AutomationsTest403Error1` | `bundle_social/models/api_v1_automations_test403_error1.py` |
| `ApiV1AutomationsTest404Error1` | `bundle_social/models/api_v1_automations_test404_error1.py` |
| `ApiV1AutomationsTest429Error1` | `bundle_social/models/api_v1_automations_test429_error1.py` |
| `ApiV1AutomationsTest500Error1` | `bundle_social/models/api_v1_automations_test500_error1.py` |
| `ApiV1AutomationsTest502Error1` | `bundle_social/models/api_v1_automations_test502_error1.py` |
| `ApiV1AutomationsTest503Error1` | `bundle_social/models/api_v1_automations_test503_error1.py` |
| `ApiV1AutomationsTest504Error1` | `bundle_social/models/api_v1_automations_test504_error1.py` |

### client.automation.automation_update_flow

- **Route**: `PATCH /api/v1/automations/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_update_flow(id_: str, *, body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AutomationsResponse1, AutomationUpdateFlowErrorBody]`
- **Error**: `AutomationUpdateFlowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Automations400Error1` [400] · `ApiV1Automations401Error1` [401] · `ApiV1Automations403Error1` [403] · `ApiV1Automations404Error1` [404] · `ApiV1Automations429Error1` [429] · `ApiV1Automations500Error1` [500] · `ApiV1Automations502Error1` [502] · `ApiV1Automations503Error1` [503] · `ApiV1Automations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AutomationsRequest1` | `bundle_social/models/api_v1_automations_request1.py` |
| `ApiV1AutomationsRequest1Dict` | `bundle_social/models/api_v1_automations_request1.py` |
| `ApiV1AutomationsResponse1` | `bundle_social/models/api_v1_automations_response1.py` |
| `AutomationUpdateFlowErrorBody` | `bundle_social/errors/automation_update_flow_error.py` |
| `ApiV1Automations400Error1` | `bundle_social/models/api_v1_automations400_error1.py` |
| `ApiV1Automations401Error1` | `bundle_social/models/api_v1_automations401_error1.py` |
| `ApiV1Automations403Error1` | `bundle_social/models/api_v1_automations403_error1.py` |
| `ApiV1Automations404Error1` | `bundle_social/models/api_v1_automations404_error1.py` |
| `ApiV1Automations429Error1` | `bundle_social/models/api_v1_automations429_error1.py` |
| `ApiV1Automations500Error1` | `bundle_social/models/api_v1_automations500_error1.py` |
| `ApiV1Automations502Error1` | `bundle_social/models/api_v1_automations502_error1.py` |
| `ApiV1Automations503Error1` | `bundle_social/models/api_v1_automations503_error1.py` |
| `ApiV1Automations504Error1` | `bundle_social/models/api_v1_automations504_error1.py` |

### client.automation.automation_upsert_provider_setting

- **Route**: `PUT /api/v1/automation-provider-settings/{socialAccountId}/{type}`
- **Auth**: `api_key_auth`
- **Signature**: `def automation_upsert_provider_setting(social_account_id: str, type_: Type112OrStr, *, body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `social_account_id`, `type_`
- **Params**: `social_account_id` — path `socialAccountId` · `type_` — path `type` · `body` — JSON body
- **Returns (parsed)**: `ApiV1AutomationProviderSettingsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1AutomationProviderSettingsResponse1, AutomationUpsertProviderSettingErrorBody]`
- **Error**: `AutomationUpsertProviderSettingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AutomationProviderSettings400Error1` [400] · `ApiV1AutomationProviderSettings401Error1` [401] · `ApiV1AutomationProviderSettings403Error1` [403] · `ApiV1AutomationProviderSettings404Error1` [404] · `ApiV1AutomationProviderSettings429Error1` [429] · `ApiV1AutomationProviderSettings500Error1` [500] · `ApiV1AutomationProviderSettings502Error1` [502] · `ApiV1AutomationProviderSettings503Error1` [503] · `ApiV1AutomationProviderSettings504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type112OrStr` | `bundle_social/models/enums/type112.py` |
| `ApiV1AutomationProviderSettingsRequest` | `bundle_social/models/api_v1_automation_provider_settings_request.py` |
| `ApiV1AutomationProviderSettingsRequestDict` | `bundle_social/models/api_v1_automation_provider_settings_request.py` |
| `ApiV1AutomationProviderSettingsResponse1` | `bundle_social/models/api_v1_automation_provider_settings_response1.py` |
| `AutomationUpsertProviderSettingErrorBody` | `bundle_social/errors/automation_upsert_provider_setting_error.py` |
| `ApiV1AutomationProviderSettings400Error1` | `bundle_social/models/api_v1_automation_provider_settings400_error1.py` |
| `ApiV1AutomationProviderSettings401Error1` | `bundle_social/models/api_v1_automation_provider_settings401_error1.py` |
| `ApiV1AutomationProviderSettings403Error1` | `bundle_social/models/api_v1_automation_provider_settings403_error1.py` |
| `ApiV1AutomationProviderSettings404Error1` | `bundle_social/models/api_v1_automation_provider_settings404_error1.py` |
| `ApiV1AutomationProviderSettings429Error1` | `bundle_social/models/api_v1_automation_provider_settings429_error1.py` |
| `ApiV1AutomationProviderSettings500Error1` | `bundle_social/models/api_v1_automation_provider_settings500_error1.py` |
| `ApiV1AutomationProviderSettings502Error1` | `bundle_social/models/api_v1_automation_provider_settings502_error1.py` |
| `ApiV1AutomationProviderSettings503Error1` | `bundle_social/models/api_v1_automation_provider_settings503_error1.py` |
| `ApiV1AutomationProviderSettings504Error1` | `bundle_social/models/api_v1_automation_provider_settings504_error1.py` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# IntegrationsJira — operations

Accessor: `client.integrations_jira` · Source: `dev_cycle/apis/integrations_jira.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.integrations_jira.jira_integration_controller_remove

- **Route**: `DELETE /v1/integrations/jira/{token}`
- **Server**: `default`
- **Signature**: `def jira_integration_controller_remove(token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `token`
- **Params**: `token` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.integrations_jira.jira_integration_controller_remove_organization_connection

- **Route**: `DELETE /v1/integrations/jira/organization/{token}`
- **Server**: `default`
- **Signature**: `def jira_integration_controller_remove_organization_connection(token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `token`
- **Params**: `token` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, JiraIntegrationControllerRemoveOrganizationConnectionErrorBody]`
- **Error**: `JiraIntegrationControllerRemoveOrganizationConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `JiraIntegrationControllerRemoveOrganizationConnectionErrorBody` | `dev_cycle/errors/jira_integration_controller_remove_organization_connection_error.py` |

### client.integrations_jira.jira_integration_controller_remove_project_connection

- **Route**: `DELETE /v1/integrations/jira/project/{token}`
- **Server**: `default`
- **Signature**: `def jira_integration_controller_remove_project_connection(token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `token`
- **Params**: `token` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, JiraIntegrationControllerRemoveProjectConnectionErrorBody]`
- **Error**: `JiraIntegrationControllerRemoveProjectConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `JiraIntegrationControllerRemoveProjectConnectionErrorBody` | `dev_cycle/errors/jira_integration_controller_remove_project_connection_error.py` |


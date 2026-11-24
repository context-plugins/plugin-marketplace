<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.integrations` · Source: `fillo/apis/integrations.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.integrations.detach_integration_connection

- **Route**: `DELETE /api/v1/manage/integrations/connections/{provider}`
- **Auth**: `bearer_auth`
- **Signature**: `def detach_integration_connection(provider: Provider1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `provider`
- **Params**: `provider` — path
- **Returns (parsed)**: `ApiV1ManageIntegrationsConnectionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsConnectionsResponse, DetachIntegrationConnectionErrorBody]`
- **Error**: `DetachIntegrationConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Provider1OrStr` | `fillo/models/enums/provider1.py` |
| `ApiV1ManageIntegrationsConnectionsResponse` | `fillo/models/api_v1_manage_integrations_connections_response.py` |
| `DetachIntegrationConnectionErrorBody` | `fillo/errors/detach_integration_connection_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.disable_form_integration

- **Route**: `DELETE /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearer_auth`
- **Signature**: `def disable_form_integration(form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `provider`
- **Params**: `form` — path · `provider` — path
- **Returns (parsed)**: `FormIntegration`
- **Returns (raw)**: `ApiResult[FormIntegration, DisableFormIntegrationErrorBody]`
- **Error**: `DisableFormIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProviderOrStr` | `fillo/models/enums/provider.py` |
| `FormIntegration` | `fillo/models/form_integration.py` |
| `DisableFormIntegrationErrorBody` | `fillo/errors/disable_form_integration_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.disconnect_discord_server

- **Route**: `DELETE /api/v1/manage/integrations/discord/servers/{guildId}`
- **Auth**: `bearer_auth`
- **Signature**: `def disconnect_discord_server(guild_id: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `guild_id`, `body`
- **Params**: `guild_id` — path `guildId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageIntegrationsDiscordServersResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsDiscordServersResponse, DisconnectDiscordServerErrorBody]`
- **Error**: `DisconnectDiscordServerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageIntegrationsDiscordServersResponse` | `fillo/models/api_v1_manage_integrations_discord_servers_response.py` |
| `DisconnectDiscordServerErrorBody` | `fillo/errors/disconnect_discord_server_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.get_form_integration

- **Route**: `GET /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_form_integration(form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `provider`
- **Params**: `form` — path · `provider` — path
- **Returns (parsed)**: `FormIntegration`
- **Returns (raw)**: `ApiResult[FormIntegration, GetFormIntegrationErrorBody]`
- **Error**: `GetFormIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProviderOrStr` | `fillo/models/enums/provider.py` |
| `FormIntegration` | `fillo/models/form_integration.py` |
| `GetFormIntegrationErrorBody` | `fillo/errors/get_form_integration_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.list_hubspot_pipelines

- **Route**: `GET /api/v1/manage/integrations/hubspot/pipelines`
- **Auth**: `bearer_auth`
- **Signature**: `def list_hubspot_pipelines(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageIntegrationsHubspotPipelinesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsHubspotPipelinesResponse, ListHubspotPipelinesErrorBody]`
- **Error**: `ListHubspotPipelinesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageIntegrationsHubspotPipelinesResponse` | `fillo/models/api_v1_manage_integrations_hubspot_pipelines_response.py` |
| `ListHubspotPipelinesErrorBody` | `fillo/errors/list_hubspot_pipelines_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.list_hubspot_properties

- **Route**: `GET /api/v1/manage/integrations/hubspot/properties`
- **Auth**: `bearer_auth`
- **Signature**: `def list_hubspot_properties(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageIntegrationsHubspotPropertiesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsHubspotPropertiesResponse, ListHubspotPropertiesErrorBody]`
- **Error**: `ListHubspotPropertiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageIntegrationsHubspotPropertiesResponse` | `fillo/models/api_v1_manage_integrations_hubspot_properties_response.py` |
| `ListHubspotPropertiesErrorBody` | `fillo/errors/list_hubspot_properties_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.list_integration_connections

- **Route**: `GET /api/v1/manage/integrations/connections`
- **Auth**: `bearer_auth`
- **Signature**: `def list_integration_connections(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `IntegrationConnections`
- **Returns (raw)**: `ApiResult[IntegrationConnections, ListIntegrationConnectionsErrorBody]`
- **Error**: `ListIntegrationConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IntegrationConnections` | `fillo/models/integration_connections.py` |
| `ListIntegrationConnectionsErrorBody` | `fillo/errors/list_integration_connections_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.remove_integration_account

- **Route**: `DELETE /api/v1/manage/integrations/accounts/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def remove_integration_account(id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageIntegrationsAccountsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsAccountsResponse, RemoveIntegrationAccountErrorBody]`
- **Error**: `RemoveIntegrationAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageIntegrationsAccountsResponse` | `fillo/models/api_v1_manage_integrations_accounts_response.py` |
| `RemoveIntegrationAccountErrorBody` | `fillo/errors/remove_integration_account_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.rename_discord_channel

- **Route**: `PATCH /api/v1/manage/integrations/discord/accounts/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def rename_discord_channel(id_: str, body: ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageIntegrationsDiscordAccountsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageIntegrationsDiscordAccountsResponse, RenameDiscordChannelErrorBody]`
- **Error**: `RenameDiscordChannelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageIntegrationsDiscordAccountsRequest` | `fillo/models/api_v1_manage_integrations_discord_accounts_request.py` |
| `ApiV1ManageIntegrationsDiscordAccountsRequestDict` | `fillo/models/api_v1_manage_integrations_discord_accounts_request.py` |
| `ApiV1ManageIntegrationsDiscordAccountsResponse` | `fillo/models/api_v1_manage_integrations_discord_accounts_response.py` |
| `RenameDiscordChannelErrorBody` | `fillo/errors/rename_discord_channel_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.select_integration_connection

- **Route**: `PUT /api/v1/manage/integrations/connections/{provider}`
- **Auth**: `bearer_auth`
- **Signature**: `def select_integration_connection(provider: Provider1OrStr, body: ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `provider`, `body`
- **Params**: `provider` — path · `body` — JSON body
- **Returns (parsed)**: `IntegrationConnections`
- **Returns (raw)**: `ApiResult[IntegrationConnections, SelectIntegrationConnectionErrorBody]`
- **Error**: `SelectIntegrationConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Provider1OrStr` | `fillo/models/enums/provider1.py` |
| `ApiV1ManageIntegrationsConnectionsRequest` | `fillo/models/api_v1_manage_integrations_connections_request.py` |
| `ApiV1ManageIntegrationsConnectionsRequestDict` | `fillo/models/api_v1_manage_integrations_connections_request.py` |
| `IntegrationConnections` | `fillo/models/integration_connections.py` |
| `SelectIntegrationConnectionErrorBody` | `fillo/errors/select_integration_connection_error.py` |
| `Error` | `fillo/models/error.py` |

### client.integrations.set_form_integration

- **Route**: `PUT /api/v1/manage/forms/{form}/integrations/{provider}`
- **Auth**: `bearer_auth`
- **Signature**: `def set_form_integration(form: str, provider: ProviderOrStr, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `form`, `provider`
- **Params**: `form` — path · `provider` — path · `body` — JSON body
- **Returns (parsed)**: `FormIntegration`
- **Returns (raw)**: `ApiResult[FormIntegration, SetFormIntegrationErrorBody]`
- **Error**: `SetFormIntegrationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProviderOrStr` | `fillo/models/enums/provider.py` |
| `FormIntegration` | `fillo/models/form_integration.py` |
| `SetFormIntegrationErrorBody` | `fillo/errors/set_form_integration_error.py` |
| `Error` | `fillo/models/error.py` |


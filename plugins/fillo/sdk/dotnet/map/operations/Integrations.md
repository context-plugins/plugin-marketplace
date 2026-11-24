<!-- Generated file — do not edit; regenerated with the SDK. -->

# Integrations — operations

Accessor: `client.Integrations` · Source: `src/Fillo/Api/Integrations.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DetachIntegrationConnection

- **Auth**: `options.BearerAuth`
- **Signature**: `DetachIntegrationConnection(DetachIntegrationConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Provider`
- **Returns**: `ApiV1ManageIntegrationsConnectionsResponse`
- **Error**: `ApiException<DetachIntegrationConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetachIntegrationConnectionRequest` | `src/Fillo/Requests/Integrations/DetachIntegrationConnectionRequest.cs` |
| `Provider1` | `src/Fillo/Models/Enums/Provider1.cs` |
| `ApiV1ManageIntegrationsConnectionsResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsConnectionsResponse.cs` |
| `DetachIntegrationConnectionError` | `src/Fillo/Errors/DetachIntegrationConnectionError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### DisableFormIntegration

- **Auth**: `options.BearerAuth`
- **Signature**: `DisableFormIntegration(DisableFormIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Provider`
- **Returns**: `FormIntegration`
- **Error**: `ApiException<DisableFormIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisableFormIntegrationRequest` | `src/Fillo/Requests/Integrations/DisableFormIntegrationRequest.cs` |
| `Provider` | `src/Fillo/Models/Enums/Provider.cs` |
| `FormIntegration` | `src/Fillo/Models/FormIntegration.cs` |
| `DisableFormIntegrationError` | `src/Fillo/Errors/DisableFormIntegrationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### DisconnectDiscordServer

- **Auth**: `options.BearerAuth`
- **Signature**: `DisconnectDiscordServer(DisconnectDiscordServerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `GuildId`, `Body`
- **Returns**: `ApiV1ManageIntegrationsDiscordServersResponse`
- **Error**: `ApiException<DisconnectDiscordServerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisconnectDiscordServerRequest` | `src/Fillo/Requests/Integrations/DisconnectDiscordServerRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageIntegrationsDiscordServersResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsDiscordServersResponse.cs` |
| `DisconnectDiscordServerError` | `src/Fillo/Errors/DisconnectDiscordServerError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### GetFormIntegration

- **Auth**: `options.BearerAuth`
- **Signature**: `GetFormIntegration(GetFormIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Provider`
- **Returns**: `FormIntegration`
- **Error**: `ApiException<GetFormIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormIntegrationRequest` | `src/Fillo/Requests/Integrations/GetFormIntegrationRequest.cs` |
| `Provider` | `src/Fillo/Models/Enums/Provider.cs` |
| `FormIntegration` | `src/Fillo/Models/FormIntegration.cs` |
| `GetFormIntegrationError` | `src/Fillo/Errors/GetFormIntegrationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListHubspotPipelines

- **Auth**: `options.BearerAuth`
- **Signature**: `ListHubspotPipelines(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageIntegrationsHubspotPipelinesResponse`
- **Error**: `ApiException<ListHubspotPipelinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageIntegrationsHubspotPipelinesResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsHubspotPipelinesResponse.cs` |
| `ListHubspotPipelinesError` | `src/Fillo/Errors/ListHubspotPipelinesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListHubspotProperties

- **Auth**: `options.BearerAuth`
- **Signature**: `ListHubspotProperties(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ManageIntegrationsHubspotPropertiesResponse`
- **Error**: `ApiException<ListHubspotPropertiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1ManageIntegrationsHubspotPropertiesResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsHubspotPropertiesResponse.cs` |
| `ListHubspotPropertiesError` | `src/Fillo/Errors/ListHubspotPropertiesError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListIntegrationConnections

- **Auth**: `options.BearerAuth`
- **Signature**: `ListIntegrationConnections(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IntegrationConnections`
- **Error**: `ApiException<ListIntegrationConnectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IntegrationConnections` | `src/Fillo/Models/IntegrationConnections.cs` |
| `ListIntegrationConnectionsError` | `src/Fillo/Errors/ListIntegrationConnectionsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RemoveIntegrationAccount

- **Auth**: `options.BearerAuth`
- **Signature**: `RemoveIntegrationAccount(RemoveIntegrationAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageIntegrationsAccountsResponse`
- **Error**: `ApiException<RemoveIntegrationAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveIntegrationAccountRequest` | `src/Fillo/Requests/Integrations/RemoveIntegrationAccountRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageIntegrationsAccountsResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsAccountsResponse.cs` |
| `RemoveIntegrationAccountError` | `src/Fillo/Errors/RemoveIntegrationAccountError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RenameDiscordChannel

- **Auth**: `options.BearerAuth`
- **Signature**: `RenameDiscordChannel(RenameDiscordChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageIntegrationsDiscordAccountsResponse`
- **Error**: `ApiException<RenameDiscordChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenameDiscordChannelRequest` | `src/Fillo/Requests/Integrations/RenameDiscordChannelRequest.cs` |
| `ApiV1ManageIntegrationsDiscordAccountsRequest` | `src/Fillo/Models/ApiV1ManageIntegrationsDiscordAccountsRequest.cs` |
| `ApiV1ManageIntegrationsDiscordAccountsResponse` | `src/Fillo/Models/ApiV1ManageIntegrationsDiscordAccountsResponse.cs` |
| `RenameDiscordChannelError` | `src/Fillo/Errors/RenameDiscordChannelError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SelectIntegrationConnection

- **Auth**: `options.BearerAuth`
- **Signature**: `SelectIntegrationConnection(SelectIntegrationConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Provider`, `Body`
- **Returns**: `IntegrationConnections`
- **Error**: `ApiException<SelectIntegrationConnectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SelectIntegrationConnectionRequest` | `src/Fillo/Requests/Integrations/SelectIntegrationConnectionRequest.cs` |
| `Provider1` | `src/Fillo/Models/Enums/Provider1.cs` |
| `ApiV1ManageIntegrationsConnectionsRequest` | `src/Fillo/Models/ApiV1ManageIntegrationsConnectionsRequest.cs` |
| `IntegrationConnections` | `src/Fillo/Models/IntegrationConnections.cs` |
| `SelectIntegrationConnectionError` | `src/Fillo/Errors/SelectIntegrationConnectionError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetFormIntegration

- **Auth**: `options.BearerAuth`
- **Signature**: `SetFormIntegration(SetFormIntegrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Provider`
- **Returns**: `FormIntegration`
- **Error**: `ApiException<SetFormIntegrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetFormIntegrationRequest` | `src/Fillo/Requests/Integrations/SetFormIntegrationRequest.cs` |
| `Provider` | `src/Fillo/Models/Enums/Provider.cs` |
| `FormIntegration` | `src/Fillo/Models/FormIntegration.cs` |
| `SetFormIntegrationError` | `src/Fillo/Errors/SetFormIntegrationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |


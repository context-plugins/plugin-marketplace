<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.Automations` · Source: `src/UiPath/Api/Automations.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAutomationIdea

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateAutomationIdea(CreateAutomationIdeaOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Automation`
- **Error**: `ApiException<CreateAutomationIdeaError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAutomationIdeaOperationRequest` | `src/UiPath/Requests/Automations/CreateAutomationIdeaOperationRequest.cs` |
| `CreateAutomationIdeaRequest` | `src/UiPath/Models/CreateAutomationIdeaRequest.cs` |
| `Automation` | `src/UiPath/Models/Automation.cs` |
| `CreateAutomationIdeaError` | `src/UiPath/Errors/CreateAutomationIdeaError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### DeleteAutomation

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteAutomation(DeleteAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AutomationId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAutomationRequest` | `src/UiPath/Requests/Automations/DeleteAutomationRequest.cs` |
| `DeleteAutomationError` | `src/UiPath/Errors/DeleteAutomationError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### GetAutomation

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetAutomation(GetAutomationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AutomationId`
- **Returns**: `Automation`
- **Error**: `ApiException<GetAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAutomationRequest` | `src/UiPath/Requests/Automations/GetAutomationRequest.cs` |
| `Automation` | `src/UiPath/Models/Automation.cs` |
| `GetAutomationError` | `src/UiPath/Errors/GetAutomationError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### ListAutomationCollaborators

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListAutomationCollaborators(ListAutomationCollaboratorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AutomationId`
- **Returns**: `AutomationsCollaboratorsResponse`
- **Error**: `ApiException<ListAutomationCollaboratorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAutomationCollaboratorsRequest` | `src/UiPath/Requests/Automations/ListAutomationCollaboratorsRequest.cs` |
| `AutomationsCollaboratorsResponse` | `src/UiPath/Models/AutomationsCollaboratorsResponse.cs` |
| `ListAutomationCollaboratorsError` | `src/UiPath/Errors/ListAutomationCollaboratorsError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### ListAutomations

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListAutomations(ListAutomationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `phase` ← `Phase`, `status` ← `Status`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `AutomationListResponse`
- **Error**: `ApiException<ListAutomationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAutomationsRequest` | `src/UiPath/Requests/Automations/ListAutomationsRequest.cs` |
| `AutomationListResponse` | `src/UiPath/Models/AutomationListResponse.cs` |
| `ListAutomationsError` | `src/UiPath/Errors/ListAutomationsError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### RemoveAutomationCollaborator

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RemoveAutomationCollaborator(RemoveAutomationCollaboratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AutomationId`, `UserId`
- **Query params (wire ← C#)**: `userId` ← `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveAutomationCollaboratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveAutomationCollaboratorRequest` | `src/UiPath/Requests/Automations/RemoveAutomationCollaboratorRequest.cs` |
| `RemoveAutomationCollaboratorError` | `src/UiPath/Errors/RemoveAutomationCollaboratorError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### UpdateAutomation

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdateAutomation(UpdateAutomationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `AutomationId`, `Body`
- **Returns**: `Automation`
- **Error**: `ApiException<UpdateAutomationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAutomationOperationRequest` | `src/UiPath/Requests/Automations/UpdateAutomationOperationRequest.cs` |
| `UpdateAutomationRequest` | `src/UiPath/Models/UpdateAutomationRequest.cs` |
| `Automation` | `src/UiPath/Models/Automation.cs` |
| `UpdateAutomationError` | `src/UiPath/Errors/UpdateAutomationError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |


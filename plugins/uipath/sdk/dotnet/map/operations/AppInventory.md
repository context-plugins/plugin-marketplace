<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppInventory — operations

Accessor: `client.AppInventory` · Source: `src/UiPath/Api/AppInventory.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkUpsertAppInventory

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BulkUpsertAppInventory(BulkUpsertAppInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AppInventoryListResponse`
- **Error**: `ApiException<BulkUpsertAppInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpsertAppInventoryRequest` | `src/UiPath/Requests/AppInventory/BulkUpsertAppInventoryRequest.cs` |
| `AppinventoryRequest` | `src/UiPath/Models/AppinventoryRequest.cs` |
| `AppInventoryListResponse` | `src/UiPath/Models/AppInventoryListResponse.cs` |
| `BulkUpsertAppInventoryError` | `src/UiPath/Errors/BulkUpsertAppInventoryError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### DeleteApplication

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeleteApplication(DeleteApplicationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ApplicationId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApplicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApplicationRequest` | `src/UiPath/Requests/AppInventory/DeleteApplicationRequest.cs` |
| `DeleteApplicationError` | `src/UiPath/Errors/DeleteApplicationError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |

### ListAppInventory

- **Server group**: `DefaultUiPathAutomationHubAppInventoryApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListAppInventory(ListAppInventoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `AppInventoryListResponse`
- **Error**: `ApiException<ListAppInventoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathAutomationHubAppInventoryApi([NotNullWhen(true)] out ErrorResponseUiPathAutomationHubAppInventoryApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAppInventoryRequest` | `src/UiPath/Requests/AppInventory/ListAppInventoryRequest.cs` |
| `AppInventoryListResponse` | `src/UiPath/Models/AppInventoryListResponse.cs` |
| `ListAppInventoryError` | `src/UiPath/Errors/ListAppInventoryError.cs` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `src/UiPath/Models/ErrorResponseUiPathAutomationHubAppInventoryApi.cs` |


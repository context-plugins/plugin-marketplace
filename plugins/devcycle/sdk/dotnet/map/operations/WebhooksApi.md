<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/DevCycle/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebhooksControllerCreate

- **Signature**: `WebhooksControllerCreate(WebhooksControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`, `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<WebhooksControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksControllerCreateRequest` | `src/DevCycle/Requests/WebhooksApi/WebhooksControllerCreateRequest.cs` |
| `CreateWebhookDto` | `src/DevCycle/Models/CreateWebhookDto.cs` |
| `Webhook` | `src/DevCycle/Models/Webhook.cs` |
| `WebhooksControllerCreateError` | `src/DevCycle/Errors/WebhooksControllerCreateError.cs` |

### WebhooksControllerFindAll

- **Signature**: `WebhooksControllerFindAll(WebhooksControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`
- **Returns**: `IReadOnlyList<Webhook>`
- **Error**: `ApiException<WebhooksControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksControllerFindAllRequest` | `src/DevCycle/Requests/WebhooksApi/WebhooksControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Webhook` | `src/DevCycle/Models/Webhook.cs` |
| `WebhooksControllerFindAllError` | `src/DevCycle/Errors/WebhooksControllerFindAllError.cs` |

### WebhooksControllerFindOne

- **Signature**: `WebhooksControllerFindOne(WebhooksControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Project`
- **Returns**: `Webhook`
- **Error**: `ApiException<WebhooksControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksControllerFindOneRequest` | `src/DevCycle/Requests/WebhooksApi/WebhooksControllerFindOneRequest.cs` |
| `Webhook` | `src/DevCycle/Models/Webhook.cs` |
| `WebhooksControllerFindOneError` | `src/DevCycle/Errors/WebhooksControllerFindOneError.cs` |

### WebhooksControllerRemove

- **Signature**: `WebhooksControllerRemove(WebhooksControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Project`
- **Returns**: `Webhook`
- **Error**: `ApiException<WebhooksControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksControllerRemoveRequest` | `src/DevCycle/Requests/WebhooksApi/WebhooksControllerRemoveRequest.cs` |
| `Webhook` | `src/DevCycle/Models/Webhook.cs` |
| `WebhooksControllerRemoveError` | `src/DevCycle/Errors/WebhooksControllerRemoveError.cs` |

### WebhooksControllerUpdate

- **Signature**: `WebhooksControllerUpdate(WebhooksControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Project`, `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<WebhooksControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksControllerUpdateRequest` | `src/DevCycle/Requests/WebhooksApi/WebhooksControllerUpdateRequest.cs` |
| `UpdateWebhookDto` | `src/DevCycle/Models/UpdateWebhookDto.cs` |
| `Webhook` | `src/DevCycle/Models/Webhook.cs` |
| `WebhooksControllerUpdateError` | `src/DevCycle/Errors/WebhooksControllerUpdateError.cs` |


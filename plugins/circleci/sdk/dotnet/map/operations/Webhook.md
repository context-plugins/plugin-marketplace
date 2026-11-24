<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhook — operations

Accessor: `client.Webhook` · Source: `src/CircleCi/Api/Webhook.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `CreateWebhook(CreateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhookInfo`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookOperationRequest` | `src/CircleCi/Requests/Webhook/CreateWebhookOperationRequest.cs` |
| `CreateWebhookRequest` | `src/CircleCi/Models/CreateWebhookRequest.cs` |
| `WebhookInfo` | `src/CircleCi/Models/WebhookInfo.cs` |
| `CreateWebhookError` | `src/CircleCi/Errors/CreateWebhookError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteWebhook

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/CircleCi/Requests/Webhook/DeleteWebhookRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteWebhookError` | `src/CircleCi/Errors/DeleteWebhookError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetWebhook

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `WebhookInfo`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/CircleCi/Requests/Webhook/GetWebhookRequest.cs` |
| `WebhookInfo` | `src/CircleCi/Models/WebhookInfo.cs` |
| `GetWebhookError` | `src/CircleCi/Errors/GetWebhookError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListWebhooks

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScopeId`, `ScopeType`
- **Query params (wire ← C#)**: `scope-id` ← `ScopeId`, `scope-type` ← `ScopeType`
- **Returns**: `WebhookList`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksRequest` | `src/CircleCi/Requests/Webhook/ListWebhooksRequest.cs` |
| `ScopeType` | `src/CircleCi/Models/Enums/ScopeType.cs` |
| `WebhookList` | `src/CircleCi/Models/WebhookList.cs` |
| `ListWebhooksError` | `src/CircleCi/Errors/ListWebhooksError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### UpdateWebhook

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `UpdateWebhook(UpdateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `Body`
- **Returns**: `WebhookInfo`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookOperationRequest` | `src/CircleCi/Requests/Webhook/UpdateWebhookOperationRequest.cs` |
| `UpdateWebhookRequest` | `src/CircleCi/Models/UpdateWebhookRequest.cs` |
| `WebhookInfo` | `src/CircleCi/Models/WebhookInfo.cs` |
| `UpdateWebhookError` | `src/CircleCi/Errors/UpdateWebhookError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |


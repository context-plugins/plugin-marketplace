<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/UiPath/Api/WebhooksApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/UiPath/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `Webhook` | `src/UiPath/Models/Webhook.cs` |
| `CreateWebhookError` | `src/UiPath/Errors/CreateWebhookError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### DeleteWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/UiPath/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/UiPath/Errors/DeleteWebhookError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### GetWebhookEventTypes

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhookEventTypes(GetWebhookEventTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse`
- **Error**: `ApiException<GetWebhookEventTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookEventTypesRequest` | `src/UiPath/Requests/WebhooksApi/GetWebhookEventTypesRequest.cs` |
| `OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse` | `src/UiPath/Models/OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse.cs` |
| `GetWebhookEventTypesError` | `src/UiPath/Errors/GetWebhookEventTypesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### ListWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataWebhookCollection`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksRequest` | `src/UiPath/Requests/WebhooksApi/ListWebhooksRequest.cs` |
| `ODataWebhookCollection` | `src/UiPath/Models/ODataWebhookCollection.cs` |
| `ListWebhooksError` | `src/UiPath/Errors/ListWebhooksError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |


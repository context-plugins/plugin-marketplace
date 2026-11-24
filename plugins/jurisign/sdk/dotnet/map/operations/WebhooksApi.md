<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/JuriSign/Api/WebhooksApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhooksResponse1`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/JuriSign/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhooksRequest` | `src/JuriSign/Models/WebhooksRequest.cs` |
| `WebhooksResponse1` | `src/JuriSign/Models/WebhooksResponse1.cs` |
| `CreateWebhookError` | `src/JuriSign/Errors/CreateWebhookError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### DeleteWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/JuriSign/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeleteWebhookError` | `src/JuriSign/Errors/DeleteWebhookError.cs` |

### GetWebhookLogs

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhookLogs(GetWebhookLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`
- **Returns**: `WebhooksLogsResponse`
- **Error**: `ApiException<GetWebhookLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookLogsRequest` | `src/JuriSign/Requests/WebhooksApi/GetWebhookLogsRequest.cs` |
| `WebhooksLogsResponse` | `src/JuriSign/Models/WebhooksLogsResponse.cs` |
| `GetWebhookLogsError` | `src/JuriSign/Errors/GetWebhookLogsError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WebhooksResponse`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksResponse` | `src/JuriSign/Models/WebhooksResponse.cs` |
| `ListWebhooksError` | `src/JuriSign/Errors/ListWebhooksError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### RegenerateWebhookSecret

- **Auth**: `options.BearerAuth`
- **Signature**: `RegenerateWebhookSecret(RegenerateWebhookSecretRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WebhooksRegenerateSecretResponse`
- **Error**: `ApiException<RegenerateWebhookSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RegenerateWebhookSecretRequest` | `src/JuriSign/Requests/WebhooksApi/RegenerateWebhookSecretRequest.cs` |
| `WebhooksRegenerateSecretResponse` | `src/JuriSign/Models/WebhooksRegenerateSecretResponse.cs` |
| `RegenerateWebhookSecretError` | `src/JuriSign/Errors/RegenerateWebhookSecretError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### UpdateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `WebhooksResponse2`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/JuriSign/Requests/WebhooksApi/UpdateWebhookRequest.cs` |
| `WebhooksRequest1` | `src/JuriSign/Models/WebhooksRequest1.cs` |
| `WebhooksResponse2` | `src/JuriSign/Models/WebhooksResponse2.cs` |
| `UpdateWebhookError` | `src/JuriSign/Errors/UpdateWebhookError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Tabby/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XMerchantCode`
- **Returns**: `WebhookDelete`
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetError404NoSuchWebhook([NotNullWhen(true)] out Error404NoSuchWebhook? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/Tabby/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `WebhookDelete` | `src/Tabby/Models/WebhookDelete.cs` |
| `DeleteWebhookError` | `src/Tabby/Errors/DeleteWebhookError.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |
| `Error404NoSuchWebhook` | `src/Tabby/Models/Error404NoSuchWebhook.cs` |

### GetWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XMerchantCode`
- **Returns**: `Webhook`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [401] · `TryGetError404NoSuchWebhook([NotNullWhen(true)] out Error404NoSuchWebhook? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/Tabby/Requests/WebhooksApi/GetWebhookRequest.cs` |
| `Webhook` | `src/Tabby/Models/Webhook.cs` |
| `GetWebhookError` | `src/Tabby/Errors/GetWebhookError.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |
| `Error404NoSuchWebhook` | `src/Tabby/Models/Error404NoSuchWebhook.cs` |

### GetWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhooks(GetWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XMerchantCode`
- **Returns**: `WebhookResponseAll`
- **Error**: `ApiException<GetWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhooksRequest` | `src/Tabby/Requests/WebhooksApi/GetWebhooksRequest.cs` |
| `WebhookResponseAll` | `src/Tabby/Models/AnyOf/WebhookResponseAll.cs` |
| `GetWebhooksError` | `src/Tabby/Errors/GetWebhooksError.cs` |
| `Error401Authorization` | `src/Tabby/Models/Error401Authorization.cs` |

### PostWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `PostWebhook(PostWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XMerchantCode`, `Body`
- **Returns**: `WebhookRegistrationResponse`
- **Error**: `ApiException<PostWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [400] · `TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWebhookRequest` | `src/Tabby/Requests/WebhooksApi/PostWebhookRequest.cs` |
| `WebhookRegistration` | `src/Tabby/Models/WebhookRegistration.cs` |
| `WebhookRegistrationResponse` | `src/Tabby/Models/WebhookRegistrationResponse.cs` |
| `PostWebhookError` | `src/Tabby/Errors/PostWebhookError.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |
| `Error401Authorization` | `src/Tabby/Models/Error401Authorization.cs` |

### PutWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `PutWebhook(PutWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `XMerchantCode`, `Body`
- **Returns**: `WebhookUpdate`
- **Error**: `ApiException<PutWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError401InvalidSecretKey([NotNullWhen(true)] out Error401InvalidSecretKey? value)` [400] · `TryGetError401Authorization([NotNullWhen(true)] out Error401Authorization? value)` [401] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [403] · `TryGetError404NoSuchWebhook([NotNullWhen(true)] out Error404NoSuchWebhook? value)` [404] · `TryGetString([NotNullWhen(true)] out string? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutWebhookRequest` | `src/Tabby/Requests/WebhooksApi/PutWebhookRequest.cs` |
| `WebhookUpdate` | `src/Tabby/Models/WebhookUpdate.cs` |
| `PutWebhookError` | `src/Tabby/Errors/PutWebhookError.cs` |
| `Error401InvalidSecretKey` | `src/Tabby/Models/Error401InvalidSecretKey.cs` |
| `Error401Authorization` | `src/Tabby/Models/Error401Authorization.cs` |
| `Error403` | `src/Tabby/Models/Error403.cs` |
| `Error404NoSuchWebhook` | `src/Tabby/Models/Error404NoSuchWebhook.cs` |


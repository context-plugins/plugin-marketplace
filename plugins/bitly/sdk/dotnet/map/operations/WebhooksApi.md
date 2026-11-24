<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Bitly/Api/WebhooksApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<CreateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/Bitly/Requests/WebhooksApi/CreateWebhookRequest.cs` |
| `WebhookCreate` | `src/Bitly/Models/WebhookCreate.cs` |
| `Webhook` | `src/Bitly/Models/Webhook.cs` |
| `CreateWebhookError` | `src/Bitly/Errors/CreateWebhookError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### DeleteWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookGuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/Bitly/Requests/WebhooksApi/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/Bitly/Errors/DeleteWebhookError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookGuid`
- **Returns**: `Webhook`
- **Error**: `ApiException<GetWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhookRequest` | `src/Bitly/Requests/WebhooksApi/GetWebhookRequest.cs` |
| `Webhook` | `src/Bitly/Models/Webhook.cs` |
| `GetWebhookError` | `src/Bitly/Errors/GetWebhookError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWebhooks(GetWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationGuid`
- **Returns**: `WebhooksModel`
- **Error**: `ApiException<GetWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebhooksRequest` | `src/Bitly/Requests/WebhooksApi/GetWebhooksRequest.cs` |
| `WebhooksModel` | `src/Bitly/Models/WebhooksModel.cs` |
| `GetWebhooksError` | `src/Bitly/Errors/GetWebhooksError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookGuid`, `Body`
- **Returns**: `Webhook`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/Bitly/Requests/WebhooksApi/UpdateWebhookRequest.cs` |
| `WebhookUpdate` | `src/Bitly/Models/WebhookUpdate.cs` |
| `Webhook` | `src/Bitly/Models/Webhook.cs` |
| `UpdateWebhookError` | `src/Bitly/Errors/UpdateWebhookError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### VerifyWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `VerifyWebhook(VerifyWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookGuid`
- **Returns**: `Webhook`
- **Error**: `ApiException<VerifyWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyWebhookRequest` | `src/Bitly/Requests/WebhooksApi/VerifyWebhookRequest.cs` |
| `Webhook` | `src/Bitly/Models/Webhook.cs` |
| `VerifyWebhookError` | `src/Bitly/Errors/VerifyWebhookError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |


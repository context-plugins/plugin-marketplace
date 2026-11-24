<!-- Generated file — do not edit; regenerated with the SDK. -->

# MailerLiteClient — operations

Accessor: `client` · Source: `src/MailerLite/MailerLiteClient.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `src/MailerLite/Requests/CreateWebhookRequest.cs` |

### DeleteWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWebhookRequest` | `src/MailerLite/Requests/DeleteWebhookRequest.cs` |
| `DeleteWebhookError` | `src/MailerLite/Errors/DeleteWebhookError.cs` |

### GetCountOfWebhooks

- **Auth**: `options.ApiKey`
- **Signature**: `GetCountOfWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### PostWebhooks

- **Auth**: `options.ApiKey`
- **Signature**: `PostWebhooks(PostWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWebhooksRequest` | `src/MailerLite/Requests/PostWebhooksRequest.cs` |
| `Webhook` | `src/MailerLite/Models/Webhook.cs` |
| `PostWebhooksError` | `src/MailerLite/Errors/PostWebhooksError.cs` |

### ShowWebhookById

- **Auth**: `options.ApiKey`
- **Signature**: `ShowWebhookById(ShowWebhookByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `Webhook`
- **Error**: `ApiException<ShowWebhookByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShowWebhookByIdRequest` | `src/MailerLite/Requests/ShowWebhookByIdRequest.cs` |
| `Webhook` | `src/MailerLite/Models/Webhook.cs` |
| `ShowWebhookByIdError` | `src/MailerLite/Errors/ShowWebhookByIdError.cs` |

### UpdateWebhook

- **Auth**: `options.ApiKey`
- **Signature**: `UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `src/MailerLite/Requests/UpdateWebhookRequest.cs` |
| `UpdateWebhookError` | `src/MailerLite/Errors/UpdateWebhookError.cs` |


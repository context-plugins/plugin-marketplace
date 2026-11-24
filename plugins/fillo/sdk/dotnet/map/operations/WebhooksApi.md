<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Fillo/Api/WebhooksApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFormWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateFormWebhook(CreateFormWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `WebhookCreated`
- **Error**: `ApiException<CreateFormWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFormWebhookRequest` | `src/Fillo/Requests/WebhooksApi/CreateFormWebhookRequest.cs` |
| `ApiV1ManageFormsWebhooksRequest` | `src/Fillo/Models/ApiV1ManageFormsWebhooksRequest.cs` |
| `WebhookCreated` | `src/Fillo/Models/WebhookCreated.cs` |
| `CreateFormWebhookError` | `src/Fillo/Errors/CreateFormWebhookError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### DeleteFormWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteFormWebhook(DeleteFormWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Id`
- **Returns**: `ApiV1ManageFormsWebhooksResponse2`
- **Error**: `ApiException<DeleteFormWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFormWebhookRequest` | `src/Fillo/Requests/WebhooksApi/DeleteFormWebhookRequest.cs` |
| `ApiV1ManageFormsWebhooksResponse2` | `src/Fillo/Models/ApiV1ManageFormsWebhooksResponse2.cs` |
| `DeleteFormWebhookError` | `src/Fillo/Errors/DeleteFormWebhookError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListFormWebhooks

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFormWebhooks(ListFormWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsWebhooksResponse`
- **Error**: `ApiException<ListFormWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormWebhooksRequest` | `src/Fillo/Requests/WebhooksApi/ListFormWebhooksRequest.cs` |
| `ApiV1ManageFormsWebhooksResponse` | `src/Fillo/Models/ApiV1ManageFormsWebhooksResponse.cs` |
| `ListFormWebhooksError` | `src/Fillo/Errors/ListFormWebhooksError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### UpdateFormWebhook

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateFormWebhook(UpdateFormWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Id`, `Body`
- **Returns**: `ApiV1ManageFormsWebhooksResponse1`
- **Error**: `ApiException<UpdateFormWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFormWebhookRequest` | `src/Fillo/Requests/WebhooksApi/UpdateFormWebhookRequest.cs` |
| `ApiV1ManageFormsWebhooksRequest1` | `src/Fillo/Models/ApiV1ManageFormsWebhooksRequest1.cs` |
| `ApiV1ManageFormsWebhooksResponse1` | `src/Fillo/Models/ApiV1ManageFormsWebhooksResponse1.cs` |
| `UpdateFormWebhookError` | `src/Fillo/Errors/UpdateFormWebhookError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |


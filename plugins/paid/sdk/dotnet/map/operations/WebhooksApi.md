<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Paid/Api/WebhooksApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListWebhooks

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `WebhookListResponse`
- **Error**: `ApiException<ListWebhooksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWebhooksRequest` | `src/Paid/Requests/WebhooksApi/ListWebhooksRequest.cs` |
| `WebhookListResponse` | `src/Paid/Models/WebhookListResponse.cs` |
| `ListWebhooksError` | `src/Paid/Errors/ListWebhooksError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### RotateWebhookSecret

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `RotateWebhookSecret(RotateWebhookSecretRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `RotateWebhookSecretResponse`
- **Error**: `ApiException<RotateWebhookSecretError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotateWebhookSecretRequest` | `src/Paid/Requests/WebhooksApi/RotateWebhookSecretRequest.cs` |
| `RotateWebhookSecretResponse` | `src/Paid/Models/RotateWebhookSecretResponse.cs` |
| `RotateWebhookSecretError` | `src/Paid/Errors/RotateWebhookSecretError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### TestWebhook

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `TestWebhook(TestWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookName`, `Authorization`
- **Returns**: `WebhookTestResponse`
- **Error**: `ApiException<TestWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestWebhookRequest` | `src/Paid/Requests/WebhooksApi/TestWebhookRequest.cs` |
| `WebhooksWebhookNameTestPostParametersWebhookName` | `src/Paid/Models/Enums/WebhooksWebhookNameTestPostParametersWebhookName.cs` |
| `WebhookTestResponse` | `src/Paid/Models/WebhookTestResponse.cs` |
| `TestWebhookError` | `src/Paid/Errors/TestWebhookError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateWebhook

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateWebhook(UpdateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookName`, `Authorization`
- **Returns**: `WebhookUpdateResponse`
- **Error**: `ApiException<UpdateWebhookError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWebhookOperationRequest` | `src/Paid/Requests/WebhooksApi/UpdateWebhookOperationRequest.cs` |
| `WebhooksWebhookNamePatchParametersWebhookName` | `src/Paid/Models/Enums/WebhooksWebhookNamePatchParametersWebhookName.cs` |
| `UpdateWebhookRequest` | `src/Paid/Models/UpdateWebhookRequest.cs` |
| `WebhookUpdateResponse` | `src/Paid/Models/WebhookUpdateResponse.cs` |
| `UpdateWebhookError` | `src/Paid/Errors/UpdateWebhookError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |


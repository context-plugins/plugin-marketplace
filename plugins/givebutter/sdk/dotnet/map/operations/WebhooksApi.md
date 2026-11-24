<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.WebhooksApi` · Source: `src/Givebutter/Api/WebhooksApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WebhooksDestroy

- **Auth**: `options.Http`
- **Signature**: `WebhooksDestroy(WebhooksDestroyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Webhook`
- **Returns**: `void` (Task)
- **Error**: `ApiException<WebhooksDestroyError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksDestroyRequest` | `src/Givebutter/Requests/WebhooksApi/WebhooksDestroyRequest.cs` |
| `WebhooksDestroyError` | `src/Givebutter/Errors/WebhooksDestroyError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### WebhooksIndex

- **Auth**: `options.Http`
- **Signature**: `WebhooksIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1WebhooksResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1WebhooksResponse` | `src/Givebutter/Models/V1WebhooksResponse.cs` |

### WebhooksShow

- **Auth**: `options.Http`
- **Signature**: `WebhooksShow(WebhooksShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Webhook`
- **Returns**: `WebhookResource`
- **Error**: `ApiException<WebhooksShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksShowRequest` | `src/Givebutter/Requests/WebhooksApi/WebhooksShowRequest.cs` |
| `WebhookResource` | `src/Givebutter/Models/WebhookResource.cs` |
| `WebhooksShowError` | `src/Givebutter/Errors/WebhooksShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

### WebhooksStore

- **Auth**: `options.Http`
- **Signature**: `WebhooksStore(WebhooksStoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebhookResource`
- **Error**: `ApiException<WebhooksStoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksStoreRequest` | `src/Givebutter/Requests/WebhooksApi/WebhooksStoreRequest.cs` |
| `V1WebhooksRequest` | `src/Givebutter/Models/V1WebhooksRequest.cs` |
| `WebhookResource` | `src/Givebutter/Models/WebhookResource.cs` |
| `WebhooksStoreError` | `src/Givebutter/Errors/WebhooksStoreError.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |

### WebhooksUpdate

- **Auth**: `options.Http`
- **Signature**: `WebhooksUpdate(WebhooksUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Webhook`, `Body`
- **Returns**: `WebhookResource`
- **Error**: `ApiException<WebhooksUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebhooksUpdateRequest` | `src/Givebutter/Requests/WebhooksApi/WebhooksUpdateRequest.cs` |
| `V1WebhooksRequest1` | `src/Givebutter/Models/V1WebhooksRequest1.cs` |
| `WebhookResource` | `src/Givebutter/Models/WebhookResource.cs` |
| `WebhooksUpdateError` | `src/Givebutter/Errors/WebhooksUpdateError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |
| `ValidationException1` | `src/Givebutter/Models/ValidationException1.cs` |


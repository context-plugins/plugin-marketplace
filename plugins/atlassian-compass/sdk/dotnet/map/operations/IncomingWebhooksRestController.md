<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomingWebhooksRestController — operations

Accessor: `client.IncomingWebhooksRestController` · Source: `src/AtlassianCompass/Api/IncomingWebhooksRestController.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### HandleWebhookInvocation

- **Auth**: `options.BasicAuth`
- **Signature**: `HandleWebhookInvocation(HandleWebhookInvocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WebhookId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<HandleWebhookInvocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 401, 404, 405] · `TryGetString([NotNullWhen(true)] out string? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HandleWebhookInvocationRequest` | `src/AtlassianCompass/Requests/IncomingWebhooksRestController/HandleWebhookInvocationRequest.cs` |
| `HandleWebhookInvocationError` | `src/AtlassianCompass/Errors/HandleWebhookInvocationError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Completions — operations

Accessor: `client.Completions` · Source: `src/Hud/Api/Completions.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCompletionV2CompletionsPost

- **Signature**: `PostCompletionV2CompletionsPost(PostCompletionV2CompletionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CompletionResponse`
- **Error**: `ApiException<PostCompletionV2CompletionsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostCompletionV2CompletionsPostRequest` | `src/Hud/Requests/Completions/PostCompletionV2CompletionsPostRequest.cs` |
| `CompletionRequest` | `src/Hud/Models/CompletionRequest.cs` |
| `CompletionResponse` | `src/Hud/Models/CompletionResponse.cs` |
| `PostCompletionV2CompletionsPostError` | `src/Hud/Errors/PostCompletionV2CompletionsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |


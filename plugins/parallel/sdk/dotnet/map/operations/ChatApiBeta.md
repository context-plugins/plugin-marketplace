<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatApiBeta — operations

Accessor: `client.ChatApiBeta` · Source: `src/ParallelSdk/Api/ChatApiBeta.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ChatCompletionsV1BetaChatCompletionsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ChatCompletionsV1BetaChatCompletionsPost(ChatCompletionsV1BetaChatCompletionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ChatCompletion`
- **Error**: `ApiException<ChatCompletionsV1BetaChatCompletionsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ChatCompletionsV1BetaChatCompletionsPostRequest` | `src/ParallelSdk/Requests/ChatApiBeta/ChatCompletionsV1BetaChatCompletionsPostRequest.cs` |
| `ChatCompletionRequest` | `src/ParallelSdk/Models/ChatCompletionRequest.cs` |
| `ChatCompletion` | `src/ParallelSdk/Models/ChatCompletion.cs` |
| `ChatCompletionsV1BetaChatCompletionsPostError` | `src/ParallelSdk/Errors/ChatCompletionsV1BetaChatCompletionsPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |


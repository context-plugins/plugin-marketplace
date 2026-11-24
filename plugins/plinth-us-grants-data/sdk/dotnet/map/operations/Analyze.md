<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analyze — operations

Accessor: `client.Analyze` · Source: `src/PlinthUsGrantsData/Api/Analyze.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AskQuestion

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `AskQuestion(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<AskQuestionError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskQuestionError` | `src/PlinthUsGrantsData/Errors/AskQuestionError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |


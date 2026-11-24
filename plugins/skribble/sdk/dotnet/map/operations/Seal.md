<!-- Generated file — do not edit; regenerated with the SDK. -->

# Seal — operations

Accessor: `client.Seal` · Source: `src/Skribble/Api/Seal.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SealDocument

- **Server group**: `DefaultSkribbleSealApi`
- **Auth**: `options.Bearer`
- **Signature**: `SealDocument(SealDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CreateSealResponse`
- **Error**: `ApiException<SealDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 406, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SealDocumentRequest` | `src/Skribble/Requests/Seal/SealDocumentRequest.cs` |
| `CreateSealRequest` | `src/Skribble/Models/CreateSealRequest.cs` |
| `CreateSealResponse` | `src/Skribble/Models/CreateSealResponse.cs` |
| `SealDocumentError` | `src/Skribble/Errors/SealDocumentError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |


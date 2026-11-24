<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureSigner — operations

Accessor: `client.SignatureSigner` · Source: `src/Skribble/Api/SignatureSigner.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddSignatureSigner

- **Server group**: `DefaultSkribbleSignatureSignerApi`
- **Auth**: `options.Bearer`
- **Signature**: `AddSignatureSigner(AddSignatureSignerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `Body`
- **Returns**: `SignatureResponseV3`
- **Error**: `ApiException<AddSignatureSignerError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddSignatureSignerRequest` | `src/Skribble/Requests/SignatureSigner/AddSignatureSignerRequest.cs` |
| `SignatureRecipientModel` | `src/Skribble/Models/AnyOf/SignatureRecipientModel.cs` |
| `SignatureResponseV3` | `src/Skribble/Models/SignatureResponseV3.cs` |
| `AddSignatureSignerError` | `src/Skribble/Errors/AddSignatureSignerError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |

### RemoveSignatureSigner

- **Server group**: `DefaultSkribbleSignatureSignerApi`
- **Auth**: `options.Bearer`
- **Signature**: `RemoveSignatureSigner(RemoveSignatureSignerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SrId`, `Sid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveSignatureSignerError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem([NotNullWhen(true)] out Problem? value)` [400, 401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveSignatureSignerRequest` | `src/Skribble/Requests/SignatureSigner/RemoveSignatureSignerRequest.cs` |
| `RemoveSignatureSignerError` | `src/Skribble/Errors/RemoveSignatureSignerError.cs` |
| `Problem` | `src/Skribble/Models/Problem.cs` |


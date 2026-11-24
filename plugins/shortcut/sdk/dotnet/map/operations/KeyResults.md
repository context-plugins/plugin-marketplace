<!-- Generated file — do not edit; regenerated with the SDK. -->

# KeyResults — operations

Accessor: `client.KeyResults` · Source: `src/Shortcut/Api/KeyResults.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetKeyResult

- **Auth**: `options.ApiToken`
- **Signature**: `GetKeyResult(GetKeyResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyResultPublicId`
- **Returns**: `KeyResult`
- **Error**: `ApiException<GetKeyResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKeyResultRequest` | `src/Shortcut/Requests/KeyResults/GetKeyResultRequest.cs` |
| `KeyResult` | `src/Shortcut/Models/KeyResult.cs` |
| `GetKeyResultError` | `src/Shortcut/Errors/GetKeyResultError.cs` |

### UpdateKeyResult

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateKeyResult(UpdateKeyResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyResultPublicId`, `Body`
- **Returns**: `KeyResult`
- **Error**: `ApiException<UpdateKeyResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateKeyResultRequest` | `src/Shortcut/Requests/KeyResults/UpdateKeyResultRequest.cs` |
| `UpdateKeyResult` | `src/Shortcut/Models/UpdateKeyResult.cs` |
| `KeyResult` | `src/Shortcut/Models/KeyResult.cs` |
| `UpdateKeyResultError` | `src/Shortcut/Errors/UpdateKeyResultError.cs` |


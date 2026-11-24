<!-- Generated file — do not edit; regenerated with the SDK. -->

# BetaSemanticPatch — operations

Accessor: `client.BetaSemanticPatch` · Source: `src/DevCycle/Api/BetaSemanticPatch.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SemanticPatchControllerSemanticUpdate

- **Signature**: `SemanticPatchControllerSemanticUpdate(SemanticPatchControllerSemanticUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Project`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SemanticPatchControllerSemanticUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SemanticPatchControllerSemanticUpdateRequest` | `src/DevCycle/Requests/BetaSemanticPatch/SemanticPatchControllerSemanticUpdateRequest.cs` |
| `AudiencePatchDto` | `src/DevCycle/Models/AudiencePatchDto.cs` |
| `SemanticPatchControllerSemanticUpdateError` | `src/DevCycle/Errors/SemanticPatchControllerSemanticUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |


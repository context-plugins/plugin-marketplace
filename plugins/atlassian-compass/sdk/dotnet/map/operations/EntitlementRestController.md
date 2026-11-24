<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntitlementRestController — operations

Accessor: `client.EntitlementRestController` · Source: `src/AtlassianCompass/Api/EntitlementRestController.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EvaluateEntitlements

- **Auth**: `options.BasicAuth`
- **Signature**: `EvaluateEntitlements(EvaluateEntitlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EntitlementResponseDto`
- **Error**: `ApiException<EvaluateEntitlementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EvaluateEntitlementsRequest` | `src/AtlassianCompass/Requests/EntitlementRestController/EvaluateEntitlementsRequest.cs` |
| `EntitlementRequestDto` | `src/AtlassianCompass/Models/EntitlementRequestDto.cs` |
| `EntitlementResponseDto` | `src/AtlassianCompass/Models/EntitlementResponseDto.cs` |
| `EvaluateEntitlementsError` | `src/AtlassianCompass/Errors/EvaluateEntitlementsError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |


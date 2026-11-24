<!-- Generated file — do not edit; regenerated with the SDK. -->

# Replacements — operations

Accessor: `client.Replacements` · Source: `src/Instacart/Api/Replacements.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdateItemReplacement

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateItemReplacement(UpdateItemReplacementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `OrderItemId`, `Body`
- **Returns**: `ReplacementResponse`
- **Error**: `ApiException<UpdateItemReplacementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateItemReplacementRequest` | `src/Instacart/Requests/Replacements/UpdateItemReplacementRequest.cs` |
| `ReplacementDecisionRequest` | `src/Instacart/Models/ReplacementDecisionRequest.cs` |
| `ReplacementResponse` | `src/Instacart/Models/ReplacementResponse.cs` |
| `UpdateItemReplacementError` | `src/Instacart/Errors/UpdateItemReplacementError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |


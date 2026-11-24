<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rest — operations

Accessor: `client.Rest` · Source: `src/Instacart/Api/Rest.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Create

- **Server group**: `DefaultInstacartRestApi`
- **Signature**: `Create(CreateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOperationRequest` | `src/Instacart/Requests/Rest/CreateOperationRequest.cs` |
| `CreateRequest` | `src/Instacart/Models/CreateRequest.cs` |
| `CreateError` | `src/Instacart/Errors/CreateError.cs` |


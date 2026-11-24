<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.Items` · Source: `src/Instacart/Api/Items.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SubmitItems

- **Auth**: `options.BearerAuth`
- **Signature**: `SubmitItems(SubmitItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SubmissionResponse`
- **Error**: `ApiException<SubmitItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitItemsRequest` | `src/Instacart/Requests/Items/SubmitItemsRequest.cs` |
| `ItemSubmissionRequest` | `src/Instacart/Models/ItemSubmissionRequest.cs` |
| `SubmissionResponse` | `src/Instacart/Models/SubmissionResponse.cs` |
| `SubmitItemsError` | `src/Instacart/Errors/SubmitItemsError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |


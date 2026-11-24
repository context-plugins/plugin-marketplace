<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesAsnWhois — operations

Accessor: `client.DatabasesAsnWhois` · Source: `src/WhoisFreaks/Api/DatabasesAsnWhois.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbAsnWhois

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbAsnWhois(DbAsnWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbAsnWhoisError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbAsnWhoisRequest` | `src/WhoisFreaks/Requests/DatabasesAsnWhois/DbAsnWhoisRequest.cs` |
| `DbAsnWhoisError` | `src/WhoisFreaks/Errors/DbAsnWhoisError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbAsnWhoisStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbAsnWhoisStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SnapshotStatus`
- **Error**: `ApiException<DbAsnWhoisStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `src/WhoisFreaks/Models/SnapshotStatus.cs` |
| `DbAsnWhoisStatusError` | `src/WhoisFreaks/Errors/DbAsnWhoisStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |


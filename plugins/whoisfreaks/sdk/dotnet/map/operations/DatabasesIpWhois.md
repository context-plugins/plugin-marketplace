<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpWhois — operations

Accessor: `client.DatabasesIpWhois` · Source: `src/WhoisFreaks/Api/DatabasesIpWhois.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbIpWhois

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpWhois(DbIpWhoisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbIpWhoisError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbIpWhoisRequest` | `src/WhoisFreaks/Requests/DatabasesIpWhois/DbIpWhoisRequest.cs` |
| `DbIpWhoisError` | `src/WhoisFreaks/Errors/DbIpWhoisError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbIpWhoisStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpWhoisStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SnapshotStatus`
- **Error**: `ApiException<DbIpWhoisStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `src/WhoisFreaks/Models/SnapshotStatus.cs` |
| `DbIpWhoisStatusError` | `src/WhoisFreaks/Errors/DbIpWhoisStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |


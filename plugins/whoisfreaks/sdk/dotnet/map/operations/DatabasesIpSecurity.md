<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesIpSecurity — operations

Accessor: `client.DatabasesIpSecurity` · Source: `src/WhoisFreaks/Api/DatabasesIpSecurity.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DbIpSecurity

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpSecurity(DbIpSecurityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<DbIpSecurityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DbIpSecurityRequest` | `src/WhoisFreaks/Requests/DatabasesIpSecurity/DbIpSecurityRequest.cs` |
| `DbIpSecurityError` | `src/WhoisFreaks/Errors/DbIpSecurityError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### DbIpSecurityStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DbIpSecurityStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SnapshotStatus`
- **Error**: `ApiException<DbIpSecurityStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SnapshotStatus` | `src/WhoisFreaks/Models/SnapshotStatus.cs` |
| `DbIpSecurityStatusError` | `src/WhoisFreaks/Errors/DbIpSecurityStatusError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |


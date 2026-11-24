<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/Divvy/Api/Reports.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVendorAuditTrail

- **Signature**: `GetVendorAuditTrail(GetVendorAuditTrailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VendorId`
- **Query params (wire ← C#)**: `includeArchived` ← `IncludeArchived`, `start` ← `Start`, `max` ← `Max`
- **Returns**: `IReadOnlyList<AuditTrailEntry>`
- **Error**: `ApiException<GetVendorAuditTrailError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVendorAuditTrailRequest` | `src/Divvy/Requests/Reports/GetVendorAuditTrailRequest.cs` |
| `AuditTrailEntry` | `src/Divvy/Models/AuditTrailEntry.cs` |
| `GetVendorAuditTrailError` | `src/Divvy/Errors/GetVendorAuditTrailError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |


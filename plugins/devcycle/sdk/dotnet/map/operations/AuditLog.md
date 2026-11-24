<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLog — operations

Accessor: `client.AuditLog` · Source: `src/DevCycle/Api/AuditLog.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AuditLogControllerFindAll

- **Signature**: `AuditLogControllerFindAll(AuditLogControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Feature`, `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `environment` ← `Environment`, `a0_user` ← `A0User`, `startDate` ← `StartDate`, `endDate` ← `EndDate`
- **Returns**: `IReadOnlyList<AuditLogEntity>`
- **Error**: `ApiException<AuditLogControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuditLogControllerFindAllRequest` | `src/DevCycle/Requests/AuditLog/AuditLogControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `AuditLogEntity` | `src/DevCycle/Models/AuditLogEntity.cs` |
| `AuditLogControllerFindAllError` | `src/DevCycle/Errors/AuditLogControllerFindAllError.cs` |


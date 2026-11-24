<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectChangeRequests — operations

Accessor: `client.ProjectChangeRequests` · Source: `src/DevCycle/Api/ProjectChangeRequests.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProjectChangeRequestsControllerGetFeatureChangeRequests

- **Signature**: `ProjectChangeRequestsControllerGetFeatureChangeRequests(ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Project`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`, `status` ← `Status`, `reviewer` ← `Reviewer`
- **Returns**: `IReadOnlyList<FeatureChangeRequestSummary>`
- **Error**: `ApiException<ProjectChangeRequestsControllerGetFeatureChangeRequestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest` | `src/DevCycle/Requests/ProjectChangeRequests/ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Status1DevCycleManagementProjectChangeRequestsApi` | `src/DevCycle/Models/Enums/Status1DevCycleManagementProjectChangeRequestsApi.cs` |
| `FeatureChangeRequestSummary` | `src/DevCycle/Models/FeatureChangeRequestSummary.cs` |
| `ProjectChangeRequestsControllerGetFeatureChangeRequestsError` | `src/DevCycle/Errors/ProjectChangeRequestsControllerGetFeatureChangeRequestsError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |


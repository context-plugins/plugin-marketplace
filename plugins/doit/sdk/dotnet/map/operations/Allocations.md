<!-- Generated file — do not edit; regenerated with the SDK. -->

# Allocations — operations

Accessor: `client.Allocations` · Source: `src/DoiT/Api/Allocations.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAllocation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateAllocation(CreateAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Allocation`
- **Error**: `ApiException<CreateAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAllocationOperationRequest` | `src/DoiT/Requests/Allocations/CreateAllocationOperationRequest.cs` |
| `CreateAllocationRequest` | `src/DoiT/Models/CreateAllocationRequest.cs` |
| `Allocation` | `src/DoiT/Models/Allocation.cs` |
| `CreateAllocationError` | `src/DoiT/Errors/CreateAllocationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteAllocation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteAllocation(DeleteAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetListOfAllocationDeleteValidation([NotNullWhen(true)] out IReadOnlyList<AllocationDeleteValidation>? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAllocationRequest` | `src/DoiT/Requests/Allocations/DeleteAllocationRequest.cs` |
| `DeleteAllocationError` | `src/DoiT/Errors/DeleteAllocationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `AllocationDeleteValidation` | `src/DoiT/Models/AllocationDeleteValidation.cs` |

### GetAllocation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAllocation(GetAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Allocation`
- **Error**: `ApiException<GetAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllocationRequest` | `src/DoiT/Requests/Allocations/GetAllocationRequest.cs` |
| `Allocation` | `src/DoiT/Models/Allocation.cs` |
| `GetAllocationError` | `src/DoiT/Errors/GetAllocationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListAllocations

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListAllocations(ListAllocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `nameContains` ← `NameContains`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`
- **Returns**: `AnalyticsV1AllocationsResponse`
- **Error**: `ApiException<ListAllocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAllocationsRequest` | `src/DoiT/Requests/Allocations/ListAllocationsRequest.cs` |
| `SortByDoiTAllocationsApi` | `src/DoiT/Models/Enums/SortByDoiTAllocationsApi.cs` |
| `SortOrder` | `src/DoiT/Models/Enums/SortOrder.cs` |
| `AnalyticsV1AllocationsResponse` | `src/DoiT/Models/AnalyticsV1AllocationsResponse.cs` |
| `ListAllocationsError` | `src/DoiT/Errors/ListAllocationsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateAllocation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateAllocation(UpdateAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Allocation`
- **Error**: `ApiException<UpdateAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAllocationOperationRequest` | `src/DoiT/Requests/Allocations/UpdateAllocationOperationRequest.cs` |
| `UpdateAllocationRequest` | `src/DoiT/Models/UpdateAllocationRequest.cs` |
| `Allocation` | `src/DoiT/Models/Allocation.cs` |
| `UpdateAllocationError` | `src/DoiT/Errors/UpdateAllocationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |


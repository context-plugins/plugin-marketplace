<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.CustomerGroups` · Source: `src/Paid/Api/CustomerGroups.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomerGroup

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCustomerGroup(CreateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `CustomerGroupDetail`
- **Error**: `ApiException<CreateCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerGroupOperationRequest` | `src/Paid/Requests/CustomerGroups/CreateCustomerGroupOperationRequest.cs` |
| `CreateCustomerGroupRequest` | `src/Paid/Models/CreateCustomerGroupRequest.cs` |
| `CustomerGroupDetail` | `src/Paid/Models/CustomerGroupDetail.cs` |
| `CreateCustomerGroupError` | `src/Paid/Errors/CreateCustomerGroupError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### CreateCustomerGroupMembers

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `CreateCustomerGroupMembers(CreateCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `AddMembersResponse`
- **Error**: `ApiException<CreateCustomerGroupMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerGroupMembersRequest` | `src/Paid/Requests/CustomerGroups/CreateCustomerGroupMembersRequest.cs` |
| `MemberRequest` | `src/Paid/Models/MemberRequest.cs` |
| `AddMembersResponse` | `src/Paid/Models/AddMembersResponse.cs` |
| `CreateCustomerGroupMembersError` | `src/Paid/Errors/CreateCustomerGroupMembersError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### DeleteCustomerGroup

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `DeleteCustomerGroup(DeleteCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CustomerGroupDeleteResponse`
- **Error**: `ApiException<DeleteCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerGroupRequest` | `src/Paid/Requests/CustomerGroups/DeleteCustomerGroupRequest.cs` |
| `CustomerGroupDeleteResponse` | `src/Paid/Models/CustomerGroupDeleteResponse.cs` |
| `DeleteCustomerGroupError` | `src/Paid/Errors/DeleteCustomerGroupError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### DeleteCustomerGroupMembers

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `DeleteCustomerGroupMembers(DeleteCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `RemoveMembersResponse`
- **Error**: `ApiException<DeleteCustomerGroupMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerGroupMembersRequest` | `src/Paid/Requests/CustomerGroups/DeleteCustomerGroupMembersRequest.cs` |
| `MemberRequest` | `src/Paid/Models/MemberRequest.cs` |
| `RemoveMembersResponse` | `src/Paid/Models/RemoveMembersResponse.cs` |
| `DeleteCustomerGroupMembersError` | `src/Paid/Errors/DeleteCustomerGroupMembersError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### GetCustomerGroup

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `GetCustomerGroup(GetCustomerGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CustomerGroupDetail`
- **Error**: `ApiException<GetCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerGroupRequest` | `src/Paid/Requests/CustomerGroups/GetCustomerGroupRequest.cs` |
| `CustomerGroupDetail` | `src/Paid/Models/CustomerGroupDetail.cs` |
| `GetCustomerGroupError` | `src/Paid/Errors/GetCustomerGroupError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### ListCustomerGroups

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `ListCustomerGroups(ListCustomerGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `CustomerGroupListResponse`
- **Error**: `ApiException<ListCustomerGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerGroupsRequest` | `src/Paid/Requests/CustomerGroups/ListCustomerGroupsRequest.cs` |
| `CustomerGroupListResponse` | `src/Paid/Models/CustomerGroupListResponse.cs` |
| `ListCustomerGroupsError` | `src/Paid/Errors/ListCustomerGroupsError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateCustomerGroup

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `CustomerGroupDetail`
- **Error**: `ApiException<UpdateCustomerGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerGroupOperationRequest` | `src/Paid/Requests/CustomerGroups/UpdateCustomerGroupOperationRequest.cs` |
| `UpdateCustomerGroupRequest` | `src/Paid/Models/UpdateCustomerGroupRequest.cs` |
| `CustomerGroupDetail` | `src/Paid/Models/CustomerGroupDetail.cs` |
| `UpdateCustomerGroupError` | `src/Paid/Errors/UpdateCustomerGroupError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |

### UpdateCustomerGroupMembers

- **Server group**: `DefaultReferenceAnalyticsExperimentalApi`
- **Signature**: `UpdateCustomerGroupMembers(UpdateCustomerGroupMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Authorization`
- **Returns**: `SetMembersResponse`
- **Error**: `ApiException<UpdateCustomerGroupMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerGroupMembersRequest` | `src/Paid/Requests/CustomerGroups/UpdateCustomerGroupMembersRequest.cs` |
| `MemberRequest` | `src/Paid/Models/MemberRequest.cs` |
| `SetMembersResponse` | `src/Paid/Models/SetMembersResponse.cs` |
| `UpdateCustomerGroupMembersError` | `src/Paid/Errors/UpdateCustomerGroupMembersError.cs` |
| `ErrorResponseModel` | `src/Paid/Models/ErrorResponseModel.cs` |


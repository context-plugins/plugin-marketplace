<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillApprovals — operations

Accessor: `client.BillApprovals` · Source: `src/Divvy/Api/BillApprovals.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BillApproveDenyActions

- **Signature**: `BillApproveDenyActions(BillApproveDenyActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<BillApproveDenyActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BillApproveDenyActionsRequest` | `src/Divvy/Requests/BillApprovals/BillApproveDenyActionsRequest.cs` |
| `BillApproveDenyActionRequestDto` | `src/Divvy/Models/BillApproveDenyActionRequestDto.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `BillApproveDenyActionsError` | `src/Divvy/Errors/BillApproveDenyActionsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateBillApprovalPolicy

- **Signature**: `CreateBillApprovalPolicy(CreateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `ApiException<CreateBillApprovalPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillApprovalPolicyRequest` | `src/Divvy/Requests/BillApprovals/CreateBillApprovalPolicyRequest.cs` |
| `BillApprovalPolicyRequestDto` | `src/Divvy/Models/BillApprovalPolicyRequestDto.cs` |
| `BillApprovalPolicyResponseDto` | `src/Divvy/Models/BillApprovalPolicyResponseDto.cs` |
| `CreateBillApprovalPolicyError` | `src/Divvy/Errors/CreateBillApprovalPolicyError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeletePolicy

- **Signature**: `DeletePolicy(DeletePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyId`
- **Returns**: `StatusDto`
- **Error**: `ApiException<DeletePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePolicyRequest` | `src/Divvy/Requests/BillApprovals/DeletePolicyRequest.cs` |
| `StatusDto` | `src/Divvy/Models/StatusDto.cs` |
| `DeletePolicyError` | `src/Divvy/Errors/DeletePolicyError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBillApprovalPolicies

- **Signature**: `ListBillApprovalPolicies(ListBillApprovalPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<BillApprovalPolicyResponseDto>`
- **Error**: `ApiException<ListBillApprovalPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillApprovalPoliciesRequest` | `src/Divvy/Requests/BillApprovals/ListBillApprovalPoliciesRequest.cs` |
| `BillApprovalPolicyResponseDto` | `src/Divvy/Models/BillApprovalPolicyResponseDto.cs` |
| `ListBillApprovalPoliciesError` | `src/Divvy/Errors/ListBillApprovalPoliciesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBillUserApprovals

- **Signature**: `ListBillUserApprovals(ListBillUserApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListBillUserApprovalsResponseDto`
- **Error**: `ApiException<ListBillUserApprovalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillUserApprovalsRequest` | `src/Divvy/Requests/BillApprovals/ListBillUserApprovalsRequest.cs` |
| `ListBillUserApprovalsResponseDto` | `src/Divvy/Models/ListBillUserApprovalsResponseDto.cs` |
| `ListBillUserApprovalsError` | `src/Divvy/Errors/ListBillUserApprovalsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateBillApprovalPolicy

- **Signature**: `UpdateBillApprovalPolicy(UpdateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyId`, `Body`
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `ApiException<UpdateBillApprovalPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBillApprovalPolicyRequest` | `src/Divvy/Requests/BillApprovals/UpdateBillApprovalPolicyRequest.cs` |
| `BillApprovalPolicyRequestDto` | `src/Divvy/Models/BillApprovalPolicyRequestDto.cs` |
| `BillApprovalPolicyResponseDto` | `src/Divvy/Models/BillApprovalPolicyResponseDto.cs` |
| `UpdateBillApprovalPolicyError` | `src/Divvy/Errors/UpdateBillApprovalPolicyError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |


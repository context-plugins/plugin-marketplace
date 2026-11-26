<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillApprovals — operations

Accessor: `client.BillApprovals` · Source: `src/Bill/Api/BillApprovals.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BillApproveDenyActions

- **Signature**: `BillApproveDenyActions(BillApproveDenyActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `StatusDto`
- **Error**: `ApiException<BillApproveDenyActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BillApproveDenyActionsRequest` | `src/Bill/Requests/BillApprovals/BillApproveDenyActionsRequest.cs` |
| `BillApproveDenyActionRequestDto` | `src/Bill/Models/BillApproveDenyActionRequestDto.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `BillApproveDenyActionsError` | `src/Bill/Errors/BillApproveDenyActionsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateBillApprovalPolicy

- **Signature**: `CreateBillApprovalPolicy(CreateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `ApiException<CreateBillApprovalPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillApprovalPolicyRequest` | `src/Bill/Requests/BillApprovals/CreateBillApprovalPolicyRequest.cs` |
| `BillApprovalPolicyRequestDto` | `src/Bill/Models/BillApprovalPolicyRequestDto.cs` |
| `BillApprovalPolicyResponseDto` | `src/Bill/Models/BillApprovalPolicyResponseDto.cs` |
| `CreateBillApprovalPolicyError` | `src/Bill/Errors/CreateBillApprovalPolicyError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeletePolicy

- **Signature**: `DeletePolicy(DeletePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyId`
- **Returns**: `StatusDto`
- **Error**: `ApiException<DeletePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePolicyRequest` | `src/Bill/Requests/BillApprovals/DeletePolicyRequest.cs` |
| `StatusDto` | `src/Bill/Models/StatusDto.cs` |
| `DeletePolicyError` | `src/Bill/Errors/DeletePolicyError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBillApprovalPolicies

- **Signature**: `ListBillApprovalPolicies(ListBillApprovalPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<BillApprovalPolicyResponseDto>`
- **Error**: `ApiException<ListBillApprovalPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillApprovalPoliciesRequest` | `src/Bill/Requests/BillApprovals/ListBillApprovalPoliciesRequest.cs` |
| `BillApprovalPolicyResponseDto` | `src/Bill/Models/BillApprovalPolicyResponseDto.cs` |
| `ListBillApprovalPoliciesError` | `src/Bill/Errors/ListBillApprovalPoliciesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBillUserApprovals

- **Signature**: `ListBillUserApprovals(ListBillUserApprovalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListBillUserApprovalsResponseDto`
- **Error**: `ApiException<ListBillUserApprovalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillUserApprovalsRequest` | `src/Bill/Requests/BillApprovals/ListBillUserApprovalsRequest.cs` |
| `ListBillUserApprovalsResponseDto` | `src/Bill/Models/ListBillUserApprovalsResponseDto.cs` |
| `ListBillUserApprovalsError` | `src/Bill/Errors/ListBillUserApprovalsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateBillApprovalPolicy

- **Signature**: `UpdateBillApprovalPolicy(UpdateBillApprovalPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PolicyId`, `Body`
- **Returns**: `BillApprovalPolicyResponseDto`
- **Error**: `ApiException<UpdateBillApprovalPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBillApprovalPolicyRequest` | `src/Bill/Requests/BillApprovals/UpdateBillApprovalPolicyRequest.cs` |
| `BillApprovalPolicyRequestDto` | `src/Bill/Models/BillApprovalPolicyRequestDto.cs` |
| `BillApprovalPolicyResponseDto` | `src/Bill/Models/BillApprovalPolicyResponseDto.cs` |
| `UpdateBillApprovalPolicyError` | `src/Bill/Errors/UpdateBillApprovalPolicyError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |


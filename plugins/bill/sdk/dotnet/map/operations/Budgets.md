<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.Budgets` · Source: `src/Bill/Api/Budgets.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBudget

- **Signature**: `CreateBudget(CreateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<CreateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBudgetRequest` | `src/Bill/Requests/Budgets/CreateBudgetRequest.cs` |
| `BudgetCreateDto` | `src/Bill/Models/BudgetCreateDto.cs` |
| `BudgetResponseDto` | `src/Bill/Models/BudgetResponseDto.cs` |
| `CreateBudgetError` | `src/Bill/Errors/CreateBudgetError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteBudget

- **Signature**: `DeleteBudget(DeleteBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBudgetRequest` | `src/Bill/Requests/Budgets/DeleteBudgetRequest.cs` |
| `DeleteBudgetError` | `src/Bill/Errors/DeleteBudgetError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteBudgetMember

- **Signature**: `DeleteBudgetMember(DeleteBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBudgetMemberRequest` | `src/Bill/Requests/Budgets/DeleteBudgetMemberRequest.cs` |
| `DeleteBudgetMemberError` | `src/Bill/Errors/DeleteBudgetMemberError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetBudget

- **Signature**: `GetBudget(GetBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<GetBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBudgetRequest` | `src/Bill/Requests/Budgets/GetBudgetRequest.cs` |
| `BudgetResponseDto` | `src/Bill/Models/BudgetResponseDto.cs` |
| `GetBudgetError` | `src/Bill/Errors/GetBudgetError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetBudgetMember

- **Signature**: `GetBudgetMember(GetBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `ApiException<GetBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBudgetMemberRequest` | `src/Bill/Requests/Budgets/GetBudgetMemberRequest.cs` |
| `BudgetMemberResponseDto` | `src/Bill/Models/BudgetMemberResponseDto.cs` |
| `GetBudgetMemberError` | `src/Bill/Errors/GetBudgetMemberError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBudgetMembers

- **Signature**: `ListBudgetMembers(ListBudgetMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoBudgetMemberResponseDto`
- **Error**: `ApiException<ListBudgetMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBudgetMembersRequest` | `src/Bill/Requests/Budgets/ListBudgetMembersRequest.cs` |
| `PaginationResponseDtoBudgetMemberResponseDto` | `src/Bill/Models/PaginationResponseDtoBudgetMemberResponseDto.cs` |
| `ListBudgetMembersError` | `src/Bill/Errors/ListBudgetMembersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListBudgets

- **Signature**: `ListBudgets(ListBudgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoBudgetResponseDto`
- **Error**: `ApiException<ListBudgetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBudgetsRequest` | `src/Bill/Requests/Budgets/ListBudgetsRequest.cs` |
| `PaginationResponseDtoBudgetResponseDto` | `src/Bill/Models/PaginationResponseDtoBudgetResponseDto.cs` |
| `ListBudgetsError` | `src/Bill/Errors/ListBudgetsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateBudget

- **Signature**: `UpdateBudget(UpdateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `Body`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<UpdateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBudgetRequest` | `src/Bill/Requests/Budgets/UpdateBudgetRequest.cs` |
| `BudgetUpdateDto` | `src/Bill/Models/BudgetUpdateDto.cs` |
| `BudgetResponseDto` | `src/Bill/Models/BudgetResponseDto.cs` |
| `UpdateBudgetError` | `src/Bill/Errors/UpdateBudgetError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpsertBudgetMember

- **Signature**: `UpsertBudgetMember(UpsertBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`, `Body`
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `ApiException<UpsertBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertBudgetMemberRequest` | `src/Bill/Requests/Budgets/UpsertBudgetMemberRequest.cs` |
| `BudgetMemberUpsertRequestDto` | `src/Bill/Models/BudgetMemberUpsertRequestDto.cs` |
| `BudgetMemberResponseDto` | `src/Bill/Models/BudgetMemberResponseDto.cs` |
| `UpsertBudgetMemberError` | `src/Bill/Errors/UpsertBudgetMemberError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpsertBulkBudgetUsers

- **Signature**: `UpsertBulkBudgetUsers(UpsertBulkBudgetUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `Body`
- **Returns**: `SpendStatusDto`
- **Error**: `ApiException<UpsertBulkBudgetUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertBulkBudgetUsersRequest` | `src/Bill/Requests/Budgets/UpsertBulkBudgetUsersRequest.cs` |
| `BudgetMemberBulkUpsertRequestDto` | `src/Bill/Models/BudgetMemberBulkUpsertRequestDto.cs` |
| `SpendStatusDto` | `src/Bill/Models/SpendStatusDto.cs` |
| `UpsertBulkBudgetUsersError` | `src/Bill/Errors/UpsertBulkBudgetUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |


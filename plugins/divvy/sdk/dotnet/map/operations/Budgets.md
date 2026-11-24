<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.Budgets` · Source: `src/Divvy/Api/Budgets.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBudget

- **Signature**: `CreateBudget(CreateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<CreateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBudgetRequest` | `src/Divvy/Requests/Budgets/CreateBudgetRequest.cs` |
| `BudgetCreateDto` | `src/Divvy/Models/BudgetCreateDto.cs` |
| `BudgetResponseDto` | `src/Divvy/Models/BudgetResponseDto.cs` |
| `CreateBudgetError` | `src/Divvy/Errors/CreateBudgetError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteBudget

- **Signature**: `DeleteBudget(DeleteBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBudgetRequest` | `src/Divvy/Requests/Budgets/DeleteBudgetRequest.cs` |
| `DeleteBudgetError` | `src/Divvy/Errors/DeleteBudgetError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteBudgetMember

- **Signature**: `DeleteBudgetMember(DeleteBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBudgetMemberRequest` | `src/Divvy/Requests/Budgets/DeleteBudgetMemberRequest.cs` |
| `DeleteBudgetMemberError` | `src/Divvy/Errors/DeleteBudgetMemberError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetBudget

- **Signature**: `GetBudget(GetBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<GetBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBudgetRequest` | `src/Divvy/Requests/Budgets/GetBudgetRequest.cs` |
| `BudgetResponseDto` | `src/Divvy/Models/BudgetResponseDto.cs` |
| `GetBudgetError` | `src/Divvy/Errors/GetBudgetError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetBudgetMember

- **Signature**: `GetBudgetMember(GetBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `ApiException<GetBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBudgetMemberRequest` | `src/Divvy/Requests/Budgets/GetBudgetMemberRequest.cs` |
| `BudgetMemberResponseDto` | `src/Divvy/Models/BudgetMemberResponseDto.cs` |
| `GetBudgetMemberError` | `src/Divvy/Errors/GetBudgetMemberError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBudgetMembers

- **Signature**: `ListBudgetMembers(ListBudgetMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoBudgetMemberResponseDto`
- **Error**: `ApiException<ListBudgetMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBudgetMembersRequest` | `src/Divvy/Requests/Budgets/ListBudgetMembersRequest.cs` |
| `PaginationResponseDtoBudgetMemberResponseDto` | `src/Divvy/Models/PaginationResponseDtoBudgetMemberResponseDto.cs` |
| `ListBudgetMembersError` | `src/Divvy/Errors/ListBudgetMembersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListBudgets

- **Signature**: `ListBudgets(ListBudgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoBudgetResponseDto`
- **Error**: `ApiException<ListBudgetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBudgetsRequest` | `src/Divvy/Requests/Budgets/ListBudgetsRequest.cs` |
| `PaginationResponseDtoBudgetResponseDto` | `src/Divvy/Models/PaginationResponseDtoBudgetResponseDto.cs` |
| `ListBudgetsError` | `src/Divvy/Errors/ListBudgetsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateBudget

- **Signature**: `UpdateBudget(UpdateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `Body`
- **Returns**: `BudgetResponseDto`
- **Error**: `ApiException<UpdateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBudgetRequest` | `src/Divvy/Requests/Budgets/UpdateBudgetRequest.cs` |
| `BudgetUpdateDto` | `src/Divvy/Models/BudgetUpdateDto.cs` |
| `BudgetResponseDto` | `src/Divvy/Models/BudgetResponseDto.cs` |
| `UpdateBudgetError` | `src/Divvy/Errors/UpdateBudgetError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpsertBudgetMember

- **Signature**: `UpsertBudgetMember(UpsertBudgetMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `UserId`, `Body`
- **Returns**: `BudgetMemberResponseDto`
- **Error**: `ApiException<UpsertBudgetMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertBudgetMemberRequest` | `src/Divvy/Requests/Budgets/UpsertBudgetMemberRequest.cs` |
| `BudgetMemberUpsertRequestDto` | `src/Divvy/Models/BudgetMemberUpsertRequestDto.cs` |
| `BudgetMemberResponseDto` | `src/Divvy/Models/BudgetMemberResponseDto.cs` |
| `UpsertBudgetMemberError` | `src/Divvy/Errors/UpsertBudgetMemberError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpsertBulkBudgetUsers

- **Signature**: `UpsertBulkBudgetUsers(UpsertBulkBudgetUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BudgetId`, `Body`
- **Returns**: `SpendStatusDto`
- **Error**: `ApiException<UpsertBulkBudgetUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpsertBulkBudgetUsersRequest` | `src/Divvy/Requests/Budgets/UpsertBulkBudgetUsersRequest.cs` |
| `BudgetMemberBulkUpsertRequestDto` | `src/Divvy/Models/BudgetMemberBulkUpsertRequestDto.cs` |
| `SpendStatusDto` | `src/Divvy/Models/SpendStatusDto.cs` |
| `UpsertBulkBudgetUsersError` | `src/Divvy/Errors/UpsertBulkBudgetUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |


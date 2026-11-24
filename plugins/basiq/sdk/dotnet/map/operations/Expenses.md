<!-- Generated file — do not edit; regenerated with the SDK. -->

# Expenses — operations

Accessor: `client.Expenses` · Source: `src/Basiq/Api/Expenses.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetExpenses

- **Auth**: `options.ServicesToken`
- **Signature**: `GetExpenses(GetExpensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `SnapshotId`
- **Returns**: `ExpensesResponse`
- **Error**: `ApiException<GetExpensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersExpenses400Error1([NotNullWhen(true)] out UsersExpenses400Error1? value)` [400] · `TryGetUsersExpenses403Error1([NotNullWhen(true)] out UsersExpenses403Error1? value)` [403] · `TryGetUsersExpenses404Error1([NotNullWhen(true)] out UsersExpenses404Error1? value)` [404] · `TryGetUsersExpenses500Error1([NotNullWhen(true)] out UsersExpenses500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpensesRequest` | `src/Basiq/Requests/Expenses/GetExpensesRequest.cs` |
| `ExpensesResponse` | `src/Basiq/Models/ExpensesResponse.cs` |
| `GetExpensesError` | `src/Basiq/Errors/GetExpensesError.cs` |
| `UsersExpenses400Error1` | `src/Basiq/Models/UsersExpenses400Error1.cs` |
| `UsersExpenses403Error1` | `src/Basiq/Models/UsersExpenses403Error1.cs` |
| `UsersExpenses404Error1` | `src/Basiq/Models/UsersExpenses404Error1.cs` |
| `UsersExpenses500Error1` | `src/Basiq/Models/UsersExpenses500Error1.cs` |

### PostExpenses

- **Auth**: `options.ServicesToken`
- **Signature**: `PostExpenses(PostExpensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `ExpensesResponse`
- **Error**: `ApiException<PostExpensesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersExpenses400Error1([NotNullWhen(true)] out UsersExpenses400Error1? value)` [400] · `TryGetUsersExpenses403Error1([NotNullWhen(true)] out UsersExpenses403Error1? value)` [403] · `TryGetUsersExpenses404Error1([NotNullWhen(true)] out UsersExpenses404Error1? value)` [404] · `TryGetUsersExpenses500Error1([NotNullWhen(true)] out UsersExpenses500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostExpensesRequest` | `src/Basiq/Requests/Expenses/PostExpensesRequest.cs` |
| `UsersExpensesRequest` | `src/Basiq/Models/UsersExpensesRequest.cs` |
| `ExpensesResponse` | `src/Basiq/Models/ExpensesResponse.cs` |
| `PostExpensesError` | `src/Basiq/Errors/PostExpensesError.cs` |
| `UsersExpenses400Error1` | `src/Basiq/Models/UsersExpenses400Error1.cs` |
| `UsersExpenses403Error1` | `src/Basiq/Models/UsersExpenses403Error1.cs` |
| `UsersExpenses404Error1` | `src/Basiq/Models/UsersExpenses404Error1.cs` |
| `UsersExpenses500Error1` | `src/Basiq/Models/UsersExpenses500Error1.cs` |


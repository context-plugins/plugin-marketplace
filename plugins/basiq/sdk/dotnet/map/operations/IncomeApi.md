<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeApi — operations

Accessor: `client.IncomeApi` · Source: `src/Basiq/Api/IncomeApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetIncome

- **Auth**: `options.ServicesToken`
- **Signature**: `GetIncome(GetIncomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `SnapshotId`
- **Returns**: `IncomeResponse`
- **Error**: `ApiException<GetIncomeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersIncome400Error1([NotNullWhen(true)] out UsersIncome400Error1? value)` [400] · `TryGetUsersIncome403Error1([NotNullWhen(true)] out UsersIncome403Error1? value)` [403] · `TryGetUsersIncome404Error1([NotNullWhen(true)] out UsersIncome404Error1? value)` [404] · `TryGetUsersIncome500Error1([NotNullWhen(true)] out UsersIncome500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIncomeRequest` | `src/Basiq/Requests/IncomeApi/GetIncomeRequest.cs` |
| `IncomeResponse` | `src/Basiq/Models/IncomeResponse.cs` |
| `GetIncomeError` | `src/Basiq/Errors/GetIncomeError.cs` |
| `UsersIncome400Error1` | `src/Basiq/Models/UsersIncome400Error1.cs` |
| `UsersIncome403Error1` | `src/Basiq/Models/UsersIncome403Error1.cs` |
| `UsersIncome404Error1` | `src/Basiq/Models/UsersIncome404Error1.cs` |
| `UsersIncome500Error1` | `src/Basiq/Models/UsersIncome500Error1.cs` |

### PostIncome

- **Auth**: `options.ServicesToken`
- **Signature**: `PostIncome(PostIncomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `IncomeResponse`
- **Error**: `ApiException<PostIncomeError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsersIncome400Error1([NotNullWhen(true)] out UsersIncome400Error1? value)` [400] · `TryGetUsersIncome403Error1([NotNullWhen(true)] out UsersIncome403Error1? value)` [403] · `TryGetUsersIncome404Error1([NotNullWhen(true)] out UsersIncome404Error1? value)` [404] · `TryGetUsersIncome500Error1([NotNullWhen(true)] out UsersIncome500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostIncomeRequest` | `src/Basiq/Requests/IncomeApi/PostIncomeRequest.cs` |
| `UsersIncomeRequest` | `src/Basiq/Models/UsersIncomeRequest.cs` |
| `IncomeResponse` | `src/Basiq/Models/IncomeResponse.cs` |
| `PostIncomeError` | `src/Basiq/Errors/PostIncomeError.cs` |
| `UsersIncome400Error1` | `src/Basiq/Models/UsersIncome400Error1.cs` |
| `UsersIncome403Error1` | `src/Basiq/Models/UsersIncome403Error1.cs` |
| `UsersIncome404Error1` | `src/Basiq/Models/UsersIncome404Error1.cs` |
| `UsersIncome500Error1` | `src/Basiq/Models/UsersIncome500Error1.cs` |


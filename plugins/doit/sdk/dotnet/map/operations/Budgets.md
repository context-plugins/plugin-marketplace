<!-- Generated file — do not edit; regenerated with the SDK. -->

# Budgets — operations

Accessor: `client.Budgets` · Source: `src/DoiT/Api/Budgets.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBudget

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateBudget(CreateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BudgetApi`
- **Error**: `ApiException<CreateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBudgetRequest` | `src/DoiT/Requests/Budgets/CreateBudgetRequest.cs` |
| `BudgetCreateUpdateRequest` | `src/DoiT/Models/BudgetCreateUpdateRequest.cs` |
| `BudgetApi` | `src/DoiT/Models/BudgetApi.cs` |
| `CreateBudgetError` | `src/DoiT/Errors/CreateBudgetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteBudget

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteBudget(DeleteBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBudgetRequest` | `src/DoiT/Requests/Budgets/DeleteBudgetRequest.cs` |
| `DeleteBudgetError` | `src/DoiT/Errors/DeleteBudgetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetBudget

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetBudget(GetBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BudgetApi`
- **Error**: `ApiException<GetBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBudgetRequest` | `src/DoiT/Requests/Budgets/GetBudgetRequest.cs` |
| `BudgetApi` | `src/DoiT/Models/BudgetApi.cs` |
| `GetBudgetError` | `src/DoiT/Errors/GetBudgetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListBudgets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBudgets(ListBudgetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `nameContains` ← `NameContains`, `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`
- **Returns**: `AnalyticsV1BudgetsResponse`
- **Error**: `ApiException<ListBudgetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBudgetsRequest` | `src/DoiT/Requests/Budgets/ListBudgetsRequest.cs` |
| `AnalyticsV1BudgetsResponse` | `src/DoiT/Models/AnalyticsV1BudgetsResponse.cs` |
| `ListBudgetsError` | `src/DoiT/Errors/ListBudgetsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateBudget

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateBudget(UpdateBudgetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BudgetApi`
- **Error**: `ApiException<UpdateBudgetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBudgetRequest` | `src/DoiT/Requests/Budgets/UpdateBudgetRequest.cs` |
| `BudgetCreateUpdateRequest` | `src/DoiT/Models/BudgetCreateUpdateRequest.cs` |
| `BudgetApi` | `src/DoiT/Models/BudgetApi.cs` |
| `UpdateBudgetError` | `src/DoiT/Errors/UpdateBudgetError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |


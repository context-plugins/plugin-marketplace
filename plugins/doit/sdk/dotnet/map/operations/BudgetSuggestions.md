<!-- Generated file — do not edit; regenerated with the SDK. -->

# BudgetSuggestions — operations

Accessor: `client.BudgetSuggestions` · Source: `src/DoiT/Api/BudgetSuggestions.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AcceptBudgetSuggestion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AcceptBudgetSuggestion(AcceptBudgetSuggestionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `AnalyticsV1BudgetSuggestionsActionsAcceptResponse`
- **Error**: `ApiException<AcceptBudgetSuggestionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AcceptBudgetSuggestionRequest` | `src/DoiT/Requests/BudgetSuggestions/AcceptBudgetSuggestionRequest.cs` |
| `BudgetSuggestionAcceptRequest` | `src/DoiT/Models/BudgetSuggestionAcceptRequest.cs` |
| `AnalyticsV1BudgetSuggestionsActionsAcceptResponse` | `src/DoiT/Models/AnalyticsV1BudgetSuggestionsActionsAcceptResponse.cs` |
| `AcceptBudgetSuggestionError` | `src/DoiT/Errors/AcceptBudgetSuggestionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DismissBudgetSuggestion

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DismissBudgetSuggestion(DismissBudgetSuggestionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `AnalyticsV1BudgetSuggestionsActionsDismissResponse`
- **Error**: `ApiException<DismissBudgetSuggestionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DismissBudgetSuggestionRequest` | `src/DoiT/Requests/BudgetSuggestions/DismissBudgetSuggestionRequest.cs` |
| `BudgetSuggestionDismissRequest` | `src/DoiT/Models/BudgetSuggestionDismissRequest.cs` |
| `AnalyticsV1BudgetSuggestionsActionsDismissResponse` | `src/DoiT/Models/AnalyticsV1BudgetSuggestionsActionsDismissResponse.cs` |
| `DismissBudgetSuggestionError` | `src/DoiT/Errors/DismissBudgetSuggestionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListBudgetSuggestions

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBudgetSuggestions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AnalyticsV1BudgetSuggestionsResponse`
- **Error**: `ApiException<ListBudgetSuggestionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnalyticsV1BudgetSuggestionsResponse` | `src/DoiT/Models/AnalyticsV1BudgetSuggestionsResponse.cs` |
| `ListBudgetSuggestionsError` | `src/DoiT/Errors/ListBudgetSuggestionsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |


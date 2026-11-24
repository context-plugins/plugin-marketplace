<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.Insights` · Source: `src/Basiq/Api/Insights.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateInsight

- **Auth**: `options.ServicesToken`
- **Signature**: `CreateInsight(CreateInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PostInsightsResponse`
- **Error**: `ApiException<CreateInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateInsightRequest` | `src/Basiq/Requests/Insights/CreateInsightRequest.cs` |
| `PostInsightsRequest` | `src/Basiq/Models/PostInsightsRequest.cs` |
| `PostInsightsResponse` | `src/Basiq/Models/PostInsightsResponse.cs` |
| `CreateInsightError` | `src/Basiq/Errors/CreateInsightError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetAccountInsights

- **Auth**: `options.ServicesToken`
- **Signature**: `GetAccountInsights(GetAccountInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `AccountInsightResponse`
- **Error**: `ApiException<GetAccountInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAccountInsightsRequest` | `src/Basiq/Requests/Insights/GetAccountInsightsRequest.cs` |
| `UsersInsightsAccountRequest` | `src/Basiq/Models/UsersInsightsAccountRequest.cs` |
| `AccountInsightResponse` | `src/Basiq/Models/AccountInsightResponse.cs` |
| `GetAccountInsightsError` | `src/Basiq/Errors/GetAccountInsightsError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetBalanceInsights

- **Auth**: `options.ServicesToken`
- **Signature**: `GetBalanceInsights(GetBalanceInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `BalanceInsightResponse`
- **Error**: `ApiException<GetBalanceInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBalanceInsightsRequest` | `src/Basiq/Requests/Insights/GetBalanceInsightsRequest.cs` |
| `BalanceInsightRequest` | `src/Basiq/Models/BalanceInsightRequest.cs` |
| `BalanceInsightResponse` | `src/Basiq/Models/BalanceInsightResponse.cs` |
| `GetBalanceInsightsError` | `src/Basiq/Errors/GetBalanceInsightsError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetExpenseRatioInsights

- **Auth**: `options.ServicesToken`
- **Signature**: `GetExpenseRatioInsights(GetExpenseRatioInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `ExpenseRatioInsightResponse`
- **Error**: `ApiException<GetExpenseRatioInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExpenseRatioInsightsRequest` | `src/Basiq/Requests/Insights/GetExpenseRatioInsightsRequest.cs` |
| `ExpenseRatioInsightRequest` | `src/Basiq/Models/ExpenseRatioInsightRequest.cs` |
| `ExpenseRatioInsightResponse` | `src/Basiq/Models/ExpenseRatioInsightResponse.cs` |
| `GetExpenseRatioInsightsError` | `src/Basiq/Errors/GetExpenseRatioInsightsError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetIdentityInsights

- **Auth**: `options.ServicesToken`
- **Signature**: `GetIdentityInsights(GetIdentityInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `IdentityInsightResponse`
- **Error**: `ApiException<GetIdentityInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIdentityInsightsRequest` | `src/Basiq/Requests/Insights/GetIdentityInsightsRequest.cs` |
| `IdentityInsightRequest` | `src/Basiq/Models/IdentityInsightRequest.cs` |
| `IdentityInsightResponse` | `src/Basiq/Models/IdentityInsightResponse.cs` |
| `GetIdentityInsightsError` | `src/Basiq/Errors/GetIdentityInsightsError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetInsightById

- **Auth**: `options.ServicesToken`
- **Signature**: `GetInsightById(GetInsightByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `InsightId`
- **Returns**: `Insight`
- **Error**: `ApiException<GetInsightByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightByIdRequest` | `src/Basiq/Requests/Insights/GetInsightByIdRequest.cs` |
| `Insight` | `src/Basiq/Models/Insight.cs` |
| `GetInsightByIdError` | `src/Basiq/Errors/GetInsightByIdError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetInsightType

- **Auth**: `options.ServicesToken`
- **Signature**: `GetInsightType(GetInsightTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TypeId`
- **Returns**: `InsightTypeItem`
- **Error**: `ApiException<GetInsightTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightTypeRequest` | `src/Basiq/Requests/Insights/GetInsightTypeRequest.cs` |
| `TypeId` | `src/Basiq/Models/Enums/TypeId.cs` |
| `InsightTypeItem` | `src/Basiq/Models/InsightTypeItem.cs` |
| `GetInsightTypeError` | `src/Basiq/Errors/GetInsightTypeError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### GetInsightTypes

- **Auth**: `options.ServicesToken`
- **Signature**: `GetInsightTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `InsightTypesList`
- **Error**: `ApiException<GetInsightTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InsightTypesList` | `src/Basiq/Models/InsightTypesList.cs` |
| `GetInsightTypesError` | `src/Basiq/Errors/GetInsightTypesError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### ListUserInsights

- **Auth**: `options.ServicesToken`
- **Signature**: `ListUserInsights(ListUserInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `InsightListResponse`
- **Error**: `ApiException<ListUserInsightsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUserInsightsRequest` | `src/Basiq/Requests/Insights/ListUserInsightsRequest.cs` |
| `InsightListResponse` | `src/Basiq/Models/InsightListResponse.cs` |
| `ListUserInsightsError` | `src/Basiq/Errors/ListUserInsightsError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |

### VerifyIncomeInsight

- **Auth**: `options.ServicesToken`
- **Signature**: `VerifyIncomeInsight(VerifyIncomeInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `IncomeInsightResponse`
- **Error**: `ApiException<VerifyIncomeInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VerifyIncomeInsightRequest` | `src/Basiq/Requests/Insights/VerifyIncomeInsightRequest.cs` |
| `IncomeInsightRequest` | `src/Basiq/Models/IncomeInsightRequest.cs` |
| `IncomeInsightResponse` | `src/Basiq/Models/IncomeInsightResponse.cs` |
| `VerifyIncomeInsightError` | `src/Basiq/Errors/VerifyIncomeInsightError.cs` |
| `ErrorResponseModel` | `src/Basiq/Models/ErrorResponseModel.cs` |


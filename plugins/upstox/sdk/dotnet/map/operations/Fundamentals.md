<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fundamentals — operations

Accessor: `client.Fundamentals` · Source: `src/Upstox/Api/Fundamentals.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalanceSheet

- **Auth**: `options.Oauth2`
- **Signature**: `GetBalanceSheet(GetBalanceSheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Query params (wire ← C#)**: `type` ← `Type`, `fs` ← `Fs`
- **Returns**: `BalanceSheetResponse`
- **Error**: `ApiException<GetBalanceSheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBalanceSheetRequest` | `src/Upstox/Requests/Fundamentals/GetBalanceSheetRequest.cs` |
| `BalanceSheetResponse` | `src/Upstox/Models/BalanceSheetResponse.cs` |
| `GetBalanceSheetError` | `src/Upstox/Errors/GetBalanceSheetError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetCashFlow

- **Auth**: `options.Oauth2`
- **Signature**: `GetCashFlow(GetCashFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Query params (wire ← C#)**: `type` ← `Type`, `fs` ← `Fs`
- **Returns**: `CashFlowResponse`
- **Error**: `ApiException<GetCashFlowError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCashFlowRequest` | `src/Upstox/Requests/Fundamentals/GetCashFlowRequest.cs` |
| `CashFlowResponse` | `src/Upstox/Models/CashFlowResponse.cs` |
| `GetCashFlowError` | `src/Upstox/Errors/GetCashFlowError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetCompanyProfile

- **Auth**: `options.Oauth2`
- **Signature**: `GetCompanyProfile(GetCompanyProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Returns**: `CompanyProfileResponse`
- **Error**: `ApiException<GetCompanyProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompanyProfileRequest` | `src/Upstox/Requests/Fundamentals/GetCompanyProfileRequest.cs` |
| `CompanyProfileResponse` | `src/Upstox/Models/CompanyProfileResponse.cs` |
| `GetCompanyProfileError` | `src/Upstox/Errors/GetCompanyProfileError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetCompetitors

- **Auth**: `options.Oauth2`
- **Signature**: `GetCompetitors(GetCompetitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`
- **Returns**: `CompetitorsResponse`
- **Error**: `ApiException<GetCompetitorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompetitorsRequest` | `src/Upstox/Requests/Fundamentals/GetCompetitorsRequest.cs` |
| `CompetitorsResponse` | `src/Upstox/Models/CompetitorsResponse.cs` |
| `GetCompetitorsError` | `src/Upstox/Errors/GetCompetitorsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetCorporateActions

- **Auth**: `options.Oauth2`
- **Signature**: `GetCorporateActions(GetCorporateActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Returns**: `CorporateActionsResponse`
- **Error**: `ApiException<GetCorporateActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCorporateActionsRequest` | `src/Upstox/Requests/Fundamentals/GetCorporateActionsRequest.cs` |
| `CorporateActionsResponse` | `src/Upstox/Models/CorporateActionsResponse.cs` |
| `GetCorporateActionsError` | `src/Upstox/Errors/GetCorporateActionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIncomeStatement

- **Auth**: `options.Oauth2`
- **Signature**: `GetIncomeStatement(GetIncomeStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Query params (wire ← C#)**: `type` ← `Type`, `time_period` ← `TimePeriod`, `fs` ← `Fs`
- **Returns**: `IncomeStatementResponse`
- **Error**: `ApiException<GetIncomeStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIncomeStatementRequest` | `src/Upstox/Requests/Fundamentals/GetIncomeStatementRequest.cs` |
| `IncomeStatementResponse` | `src/Upstox/Models/IncomeStatementResponse.cs` |
| `GetIncomeStatementError` | `src/Upstox/Errors/GetIncomeStatementError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetKeyRatios

- **Auth**: `options.Oauth2`
- **Signature**: `GetKeyRatios(GetKeyRatiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Returns**: `KeyRatiosResponse`
- **Error**: `ApiException<GetKeyRatiosError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetKeyRatiosRequest` | `src/Upstox/Requests/Fundamentals/GetKeyRatiosRequest.cs` |
| `KeyRatiosResponse` | `src/Upstox/Models/KeyRatiosResponse.cs` |
| `GetKeyRatiosError` | `src/Upstox/Errors/GetKeyRatiosError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetShareHoldings

- **Auth**: `options.Oauth2`
- **Signature**: `GetShareHoldings(GetShareHoldingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Isin`
- **Returns**: `ShareHoldingsResponse`
- **Error**: `ApiException<GetShareHoldingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetShareHoldingsRequest` | `src/Upstox/Requests/Fundamentals/GetShareHoldingsRequest.cs` |
| `ShareHoldingsResponse` | `src/Upstox/Models/ShareHoldingsResponse.cs` |
| `GetShareHoldingsError` | `src/Upstox/Errors/GetShareHoldingsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |


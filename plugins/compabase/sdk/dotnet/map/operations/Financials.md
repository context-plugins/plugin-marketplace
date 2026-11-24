<!-- Generated file — do not edit; regenerated with the SDK. -->

# Financials — operations

Accessor: `client.Financials` · Source: `src/Compabase/Api/Financials.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesKrsByKrsFinancialDocuments

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsFinancialDocuments(GetCompaniesKrsByKrsFinancialDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsFinancialDocumentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFinancialDocumentsRequest` | `src/Compabase/Requests/Financials/GetCompaniesKrsByKrsFinancialDocumentsRequest.cs` |
| `GetCompaniesKrsByKrsFinancialDocumentsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsFinancialDocumentsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsFinancialStatements

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsFinancialStatements(GetCompaniesKrsByKrsFinancialStatementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsFinancialStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsFinancialStatementsRequest` | `src/Compabase/Requests/Financials/GetCompaniesKrsByKrsFinancialStatementsRequest.cs` |
| `GetCompaniesKrsByKrsFinancialStatementsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsFinancialStatementsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |

### GetCompaniesKrsByKrsStatistics

- **Auth**: `options.ApiKeyAuth` OR `options.BearerAuth`
- **Signature**: `GetCompaniesKrsByKrsStatistics(GetCompaniesKrsByKrsStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Krs`
- **Query params (wire ← C#)**: `locale` ← `Locale`
- **Returns**: `object`
- **Error**: `ApiException<GetCompaniesKrsByKrsStatisticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStatisticsRequest` | `src/Compabase/Requests/Financials/GetCompaniesKrsByKrsStatisticsRequest.cs` |
| `GetCompaniesKrsByKrsStatisticsError` | `src/Compabase/Errors/GetCompaniesKrsByKrsStatisticsError.cs` |
| `ErrorResponseModel` | `src/Compabase/Models/ErrorResponseModel.cs` |


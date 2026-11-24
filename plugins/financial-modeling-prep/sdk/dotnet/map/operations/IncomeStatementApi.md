<!-- Generated file — do not edit; regenerated with the SDK. -->

# IncomeStatementApi — operations

Accessor: `client.IncomeStatementApi` · Source: `src/FinancialModelingPrep/Api/IncomeStatementApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetIncomeStatement

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetIncomeStatement(GetIncomeStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `period` ← `Period`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<IncomeStatement>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetIncomeStatementRequest` | `src/FinancialModelingPrep/Requests/IncomeStatementApi/GetIncomeStatementRequest.cs` |
| `Period` | `src/FinancialModelingPrep/Models/Enums/Period.cs` |
| `IncomeStatement` | `src/FinancialModelingPrep/Models/IncomeStatement.cs` |


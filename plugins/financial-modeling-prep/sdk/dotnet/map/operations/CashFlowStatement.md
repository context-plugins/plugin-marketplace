<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashFlowStatement — operations

Accessor: `client.CashFlowStatement` · Source: `src/FinancialModelingPrep/Api/CashFlowStatement.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCashFlowStatement

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetCashFlowStatement(GetCashFlowStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `period` ← `Period`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCashFlowStatementRequest` | `src/FinancialModelingPrep/Requests/CashFlowStatement/GetCashFlowStatementRequest.cs` |
| `Period` | `src/FinancialModelingPrep/Models/Enums/Period.cs` |


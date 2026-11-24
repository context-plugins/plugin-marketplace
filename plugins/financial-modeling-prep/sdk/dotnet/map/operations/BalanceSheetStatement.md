<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceSheetStatement — operations

Accessor: `client.BalanceSheetStatement` · Source: `src/FinancialModelingPrep/Api/BalanceSheetStatement.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalanceSheet

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetBalanceSheet(GetBalanceSheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `period` ← `Period`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBalanceSheetRequest` | `src/FinancialModelingPrep/Requests/BalanceSheetStatement/GetBalanceSheetRequest.cs` |
| `Period` | `src/FinancialModelingPrep/Models/Enums/Period.cs` |


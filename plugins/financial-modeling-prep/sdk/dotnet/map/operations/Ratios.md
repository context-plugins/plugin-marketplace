<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ratios — operations

Accessor: `client.Ratios` · Source: `src/FinancialModelingPrep/Api/Ratios.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFinancialRatios

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetFinancialRatios(GetFinancialRatiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Query params (wire ← C#)**: `period` ← `Period`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetFinancialRatiosRequest` | `src/FinancialModelingPrep/Requests/Ratios/GetFinancialRatiosRequest.cs` |
| `Period` | `src/FinancialModelingPrep/Models/Enums/Period.cs` |


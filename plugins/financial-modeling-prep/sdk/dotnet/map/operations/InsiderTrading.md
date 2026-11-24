<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsiderTrading — operations

Accessor: `client.InsiderTrading` · Source: `src/FinancialModelingPrep/Api/InsiderTrading.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInsiderTrading

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetInsiderTrading(GetInsiderTradingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `symbol` ← `Symbol`, `limit` ← `Limit`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetInsiderTradingRequest` | `src/FinancialModelingPrep/Requests/InsiderTrading/GetInsiderTradingRequest.cs` |


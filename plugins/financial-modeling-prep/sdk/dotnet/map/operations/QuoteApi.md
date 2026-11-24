<!-- Generated file — do not edit; regenerated with the SDK. -->

# QuoteApi — operations

Accessor: `client.QuoteApi` · Source: `src/FinancialModelingPrep/Api/QuoteApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetQuote

- **Auth**: `options.ApiKeyQuery`
- **Signature**: `GetQuote(GetQuoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Symbol`
- **Returns**: `IReadOnlyList<Quote>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetQuoteRequest` | `src/FinancialModelingPrep/Requests/QuoteApi/GetQuoteRequest.cs` |
| `Quote` | `src/FinancialModelingPrep/Models/Quote.cs` |


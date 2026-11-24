<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credit — operations

Accessor: `client.Credit` · Source: `src/BundleSocial/Api/Credit.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreditGetCreditBalance

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreditGetCreditBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1BillingCreditsBalanceResponse`
- **Error**: `ApiException<CreditGetCreditBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1BillingCreditsBalance400Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance400Error1? value)` [400] · `TryGetApiV1BillingCreditsBalance401Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance401Error1? value)` [401] · `TryGetApiV1BillingCreditsBalance403Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance403Error1? value)` [403] · `TryGetApiV1BillingCreditsBalance404Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance404Error1? value)` [404] · `TryGetApiV1BillingCreditsBalance429Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance429Error1? value)` [429] · `TryGetApiV1BillingCreditsBalance500Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance500Error1? value)` [500] · `TryGetApiV1BillingCreditsBalance502Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance502Error1? value)` [502] · `TryGetApiV1BillingCreditsBalance503Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance503Error1? value)` [503] · `TryGetApiV1BillingCreditsBalance504Error1([NotNullWhen(true)] out ApiV1BillingCreditsBalance504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApiV1BillingCreditsBalanceResponse` | `src/BundleSocial/Models/ApiV1BillingCreditsBalanceResponse.cs` |
| `CreditGetCreditBalanceError` | `src/BundleSocial/Errors/CreditGetCreditBalanceError.cs` |
| `ApiV1BillingCreditsBalance400Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance400Error1.cs` |
| `ApiV1BillingCreditsBalance401Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance401Error1.cs` |
| `ApiV1BillingCreditsBalance403Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance403Error1.cs` |
| `ApiV1BillingCreditsBalance404Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance404Error1.cs` |
| `ApiV1BillingCreditsBalance429Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance429Error1.cs` |
| `ApiV1BillingCreditsBalance500Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance500Error1.cs` |
| `ApiV1BillingCreditsBalance502Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance502Error1.cs` |
| `ApiV1BillingCreditsBalance503Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance503Error1.cs` |
| `ApiV1BillingCreditsBalance504Error1` | `src/BundleSocial/Models/ApiV1BillingCreditsBalance504Error1.cs` |

### CreditQuoteBillableUsage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreditQuoteBillableUsage(CreditQuoteBillableUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1BillingBillableUsageQuoteResponse`
- **Error**: `ApiException<CreditQuoteBillableUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1BillingBillableUsageQuote400Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote400Error1? value)` [400] · `TryGetApiV1BillingBillableUsageQuote401Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote401Error1? value)` [401] · `TryGetApiV1BillingBillableUsageQuote403Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote403Error1? value)` [403] · `TryGetApiV1BillingBillableUsageQuote404Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote404Error1? value)` [404] · `TryGetApiV1BillingBillableUsageQuote429Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote429Error1? value)` [429] · `TryGetApiV1BillingBillableUsageQuote500Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote500Error1? value)` [500] · `TryGetApiV1BillingBillableUsageQuote502Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote502Error1? value)` [502] · `TryGetApiV1BillingBillableUsageQuote503Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote503Error1? value)` [503] · `TryGetApiV1BillingBillableUsageQuote504Error1([NotNullWhen(true)] out ApiV1BillingBillableUsageQuote504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreditQuoteBillableUsageRequest` | `src/BundleSocial/Requests/Credit/CreditQuoteBillableUsageRequest.cs` |
| `ApiV1BillingBillableUsageQuoteRequest` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuoteRequest.cs` |
| `ApiV1BillingBillableUsageQuoteResponse` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuoteResponse.cs` |
| `CreditQuoteBillableUsageError` | `src/BundleSocial/Errors/CreditQuoteBillableUsageError.cs` |
| `ApiV1BillingBillableUsageQuote400Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote400Error1.cs` |
| `ApiV1BillingBillableUsageQuote401Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote401Error1.cs` |
| `ApiV1BillingBillableUsageQuote403Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote403Error1.cs` |
| `ApiV1BillingBillableUsageQuote404Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote404Error1.cs` |
| `ApiV1BillingBillableUsageQuote429Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote429Error1.cs` |
| `ApiV1BillingBillableUsageQuote500Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote500Error1.cs` |
| `ApiV1BillingBillableUsageQuote502Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote502Error1.cs` |
| `ApiV1BillingBillableUsageQuote503Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote503Error1.cs` |
| `ApiV1BillingBillableUsageQuote504Error1` | `src/BundleSocial/Models/ApiV1BillingBillableUsageQuote504Error1.cs` |


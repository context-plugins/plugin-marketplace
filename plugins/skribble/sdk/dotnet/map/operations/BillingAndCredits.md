<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingAndCredits — operations

Accessor: `client.BillingAndCredits` · Source: `src/Skribble/Api/BillingAndCredits.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBillingCreditsInfos

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Signature**: `GetBillingCreditsInfos(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BillingCreditInfos`
- **Error**: `ApiException<GetBillingCreditsInfosError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BillingCreditInfos` | `src/Skribble/Models/BillingCreditInfos.cs` |
| `GetBillingCreditsInfosError` | `src/Skribble/Errors/GetBillingCreditsInfosError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### GetBillingCreditsInvoiced

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetBillingCreditsInvoiced(GetBillingCreditsInvoicedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `period` ← `Period`
- **Returns**: `BillingCreditUsage`
- **Error**: `ApiException<GetBillingCreditsInvoicedError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillingCreditsInvoicedRequest` | `src/Skribble/Requests/BillingAndCredits/GetBillingCreditsInvoicedRequest.cs` |
| `BillingCreditUsage` | `src/Skribble/Models/BillingCreditUsage.cs` |
| `GetBillingCreditsInvoicedError` | `src/Skribble/Errors/GetBillingCreditsInvoicedError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |

### GetBillingCreditsUsage

- **Server group**: `DefaultSkribbleAdditionalInformationApi`
- **Auth**: `options.Bearer`
- **Signature**: `GetBillingCreditsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BillingCreditUsage`
- **Error**: `ApiException<GetBillingCreditsUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value)` [400, 401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BillingCreditUsage` | `src/Skribble/Models/BillingCreditUsage.cs` |
| `GetBillingCreditsUsageError` | `src/Skribble/Errors/GetBillingCreditsUsageError.cs` |
| `ProblemSkribbleAdditionalInformationApi` | `src/Skribble/Models/ProblemSkribbleAdditionalInformationApi.cs` |


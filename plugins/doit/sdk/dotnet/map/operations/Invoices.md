<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.Invoices` · Source: `src/DoiT/Api/Invoices.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInvoice

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetInvoice(GetInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BillingV1InvoicesResponse1`
- **Error**: `ApiException<GetInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInvoiceRequest` | `src/DoiT/Requests/Invoices/GetInvoiceRequest.cs` |
| `BillingV1InvoicesResponse1` | `src/DoiT/Models/BillingV1InvoicesResponse1.cs` |
| `GetInvoiceError` | `src/DoiT/Errors/GetInvoiceError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### ListInvoices

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListInvoices(ListInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`
- **Returns**: `BillingV1InvoicesResponse`
- **Error**: `ApiException<ListInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListInvoicesRequest` | `src/DoiT/Requests/Invoices/ListInvoicesRequest.cs` |
| `BillingV1InvoicesResponse` | `src/DoiT/Models/BillingV1InvoicesResponse.cs` |
| `ListInvoicesError` | `src/DoiT/Errors/ListInvoicesError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |


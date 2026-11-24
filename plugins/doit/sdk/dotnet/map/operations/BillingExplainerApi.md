<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingExplainerApi — operations

Accessor: `client.BillingExplainerApi` · Source: `src/DoiT/Api/BillingExplainerApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBillingExplainerPerPayer

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetBillingExplainerPerPayer(GetBillingExplainerPerPayerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InvoiceMonth`
- **Returns**: `BillingExplainerCustomer`
- **Error**: `ApiException<GetBillingExplainerPerPayerError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillingExplainerPerPayerRequest` | `src/DoiT/Requests/BillingExplainerApi/GetBillingExplainerPerPayerRequest.cs` |
| `BillingExplainerCustomer` | `src/DoiT/Models/BillingExplainerCustomer.cs` |
| `GetBillingExplainerPerPayerError` | `src/DoiT/Errors/GetBillingExplainerPerPayerError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |

### GetEntityInvoiceExplainer

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetEntityInvoiceExplainer(GetEntityInvoiceExplainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BillingProfileId`, `InvoiceNumber`
- **Returns**: `EntityInvoiceExplainer`
- **Error**: `ApiException<GetEntityInvoiceExplainerError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEntityInvoiceExplainerRequest` | `src/DoiT/Requests/BillingExplainerApi/GetEntityInvoiceExplainerRequest.cs` |
| `EntityInvoiceExplainer` | `src/DoiT/Models/EntityInvoiceExplainer.cs` |
| `GetEntityInvoiceExplainerError` | `src/DoiT/Errors/GetEntityInvoiceExplainerError.cs` |
| `ProblemDetails` | `src/DoiT/Models/ProblemDetails.cs` |


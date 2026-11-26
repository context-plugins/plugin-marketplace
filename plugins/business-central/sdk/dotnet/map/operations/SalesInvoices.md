<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesInvoices — operations

Accessor: `client.SalesInvoices` · Source: `src/Dynamics365BusinessCentral/Api/SalesInvoices.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSalesInvoice

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateSalesInvoice(CreateSalesInvoiceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `SalesInvoice`
- **Error**: `ApiException<CreateSalesInvoiceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSalesInvoiceRequest` | `src/Dynamics365BusinessCentral/Requests/SalesInvoices/CreateSalesInvoiceRequest.cs` |
| `SalesInvoiceCreate` | `src/Dynamics365BusinessCentral/Models/SalesInvoiceCreate.cs` |
| `SalesInvoice` | `src/Dynamics365BusinessCentral/Models/SalesInvoice.cs` |
| `CreateSalesInvoiceError` | `src/Dynamics365BusinessCentral/Errors/CreateSalesInvoiceError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListSalesInvoices

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListSalesInvoices(ListSalesInvoicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `CompaniesApiSalesInvoicesResponse`
- **Error**: `ApiException<ListSalesInvoicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSalesInvoicesRequest` | `src/Dynamics365BusinessCentral/Requests/SalesInvoices/ListSalesInvoicesRequest.cs` |
| `CompaniesApiSalesInvoicesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiSalesInvoicesResponse.cs` |
| `ListSalesInvoicesError` | `src/Dynamics365BusinessCentral/Errors/ListSalesInvoicesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |


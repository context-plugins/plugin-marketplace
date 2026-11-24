<!-- Generated file — do not edit; regenerated with the SDK. -->

# VendorPayments — operations

Accessor: `client.VendorPayments` · Source: `src/MicrosoftDynamicsNav/Api/VendorPayments.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListVendorPaymentJournals

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListVendorPaymentJournals(ListVendorPaymentJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiVendorPaymentJournalsResponse`
- **Error**: `ApiException<ListVendorPaymentJournalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVendorPaymentJournalsRequest` | `src/MicrosoftDynamicsNav/Requests/VendorPayments/ListVendorPaymentJournalsRequest.cs` |
| `CompaniesApiVendorPaymentJournalsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiVendorPaymentJournalsResponse.cs` |
| `ListVendorPaymentJournalsError` | `src/MicrosoftDynamicsNav/Errors/ListVendorPaymentJournalsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


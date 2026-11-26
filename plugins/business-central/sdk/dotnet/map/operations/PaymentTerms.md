<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.PaymentTerms` · Source: `src/Dynamics365BusinessCentral/Api/PaymentTerms.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPaymentTerms

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListPaymentTerms(ListPaymentTermsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiPaymentTermsResponse`
- **Error**: `ApiException<ListPaymentTermsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentTermsRequest` | `src/Dynamics365BusinessCentral/Requests/PaymentTerms/ListPaymentTermsRequest.cs` |
| `CompaniesApiPaymentTermsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiPaymentTermsResponse.cs` |
| `ListPaymentTermsError` | `src/Dynamics365BusinessCentral/Errors/ListPaymentTermsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentMethods — operations

Accessor: `client.PaymentMethods` · Source: `src/Dynamics365BusinessCentral/Api/PaymentMethods.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListPaymentMethods

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListPaymentMethods(ListPaymentMethodsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiPaymentMethodsResponse`
- **Error**: `ApiException<ListPaymentMethodsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPaymentMethodsRequest` | `src/Dynamics365BusinessCentral/Requests/PaymentMethods/ListPaymentMethodsRequest.cs` |
| `CompaniesApiPaymentMethodsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiPaymentMethodsResponse.cs` |
| `ListPaymentMethodsError` | `src/Dynamics365BusinessCentral/Errors/ListPaymentMethodsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |


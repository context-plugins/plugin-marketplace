<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerPayments — operations

Accessor: `client.CustomerPayments` · Source: `src/MicrosoftDynamicsNav/Api/CustomerPayments.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListCustomerPaymentJournals

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListCustomerPaymentJournals(ListCustomerPaymentJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiCustomerPaymentJournalsResponse`
- **Error**: `ApiException<ListCustomerPaymentJournalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomerPaymentJournalsRequest` | `src/MicrosoftDynamicsNav/Requests/CustomerPayments/ListCustomerPaymentJournalsRequest.cs` |
| `CompaniesApiCustomerPaymentJournalsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiCustomerPaymentJournalsResponse.cs` |
| `ListCustomerPaymentJournalsError` | `src/MicrosoftDynamicsNav/Errors/ListCustomerPaymentJournalsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/MicrosoftDynamicsNav/Api/Customers.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomer

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `Customer`
- **Error**: `ApiException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerRequest` | `src/MicrosoftDynamicsNav/Requests/Customers/CreateCustomerRequest.cs` |
| `CustomerCreate` | `src/MicrosoftDynamicsNav/Models/CustomerCreate.cs` |
| `Customer` | `src/MicrosoftDynamicsNav/Models/Customer.cs` |
| `CreateCustomerError` | `src/MicrosoftDynamicsNav/Errors/CreateCustomerError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### DeleteCustomer

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteCustomer(DeleteCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `CustomerId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomerRequest` | `src/MicrosoftDynamicsNav/Requests/Customers/DeleteCustomerRequest.cs` |
| `DeleteCustomerError` | `src/MicrosoftDynamicsNav/Errors/DeleteCustomerError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### GetCustomer

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `CustomerId`
- **Query params (wire ← C#)**: `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `Customer`
- **Error**: `ApiException<GetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerRequest` | `src/MicrosoftDynamicsNav/Requests/Customers/GetCustomerRequest.cs` |
| `Customer` | `src/MicrosoftDynamicsNav/Models/Customer.cs` |
| `GetCustomerError` | `src/MicrosoftDynamicsNav/Errors/GetCustomerError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListCustomers

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListCustomers(ListCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `CompaniesApiCustomersResponse`
- **Error**: `ApiException<ListCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomersRequest` | `src/MicrosoftDynamicsNav/Requests/Customers/ListCustomersRequest.cs` |
| `CompaniesApiCustomersResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiCustomersResponse.cs` |
| `ListCustomersError` | `src/MicrosoftDynamicsNav/Errors/ListCustomersError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### UpdateCustomer

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `CustomerId`, `IfMatch`, `Body`
- **Returns**: `Customer`
- **Error**: `ApiException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `src/MicrosoftDynamicsNav/Requests/Customers/UpdateCustomerRequest.cs` |
| `CustomerUpdate` | `src/MicrosoftDynamicsNav/Models/CustomerUpdate.cs` |
| `Customer` | `src/MicrosoftDynamicsNav/Models/Customer.cs` |
| `UpdateCustomerError` | `src/MicrosoftDynamicsNav/Errors/UpdateCustomerError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/Curlec/Api/Customers.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateCustomer(CreateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `ApiException<CreateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomerRequest` | `src/Curlec/Requests/Customers/CreateCustomerRequest.cs` |
| `CustomersRequest` | `src/Curlec/Models/CustomersRequest.cs` |
| `CustomerRazorpayCustomersApi` | `src/Curlec/Models/CustomerRazorpayCustomersApi.cs` |
| `CreateCustomerError` | `src/Curlec/Errors/CreateCustomerError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllCustomers

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllCustomers(FetchAllCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `CustomersResponse`
- **Error**: `ApiException<FetchAllCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllCustomersRequest` | `src/Curlec/Requests/Customers/FetchAllCustomersRequest.cs` |
| `CustomersResponse` | `src/Curlec/Models/CustomersResponse.cs` |
| `FetchAllCustomersError` | `src/Curlec/Errors/FetchAllCustomersError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchCustomer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchCustomer(FetchCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `ApiException<FetchCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchCustomerRequest` | `src/Curlec/Requests/Customers/FetchCustomerRequest.cs` |
| `CustomerRazorpayCustomersApi` | `src/Curlec/Models/CustomerRazorpayCustomersApi.cs` |
| `FetchCustomerError` | `src/Curlec/Errors/FetchCustomerError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateCustomer

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `ApiException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `src/Curlec/Requests/Customers/UpdateCustomerRequest.cs` |
| `CustomersRequest1` | `src/Curlec/Models/CustomersRequest1.cs` |
| `CustomerRazorpayCustomersApi` | `src/Curlec/Models/CustomerRazorpayCustomersApi.cs` |
| `UpdateCustomerError` | `src/Curlec/Errors/UpdateCustomerError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |


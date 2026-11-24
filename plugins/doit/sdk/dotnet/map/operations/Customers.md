<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/DoiT/Api/Customers.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCustomer

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `Customer`
- **Error**: `ApiException<GetCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomerRequest` | `src/DoiT/Requests/Customers/GetCustomerRequest.cs` |
| `Customer` | `src/DoiT/Models/Customer.cs` |
| `GetCustomerError` | `src/DoiT/Errors/GetCustomerError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateCustomer

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateCustomer(UpdateCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateCustomerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 415, 422, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomerRequest` | `src/DoiT/Requests/Customers/UpdateCustomerRequest.cs` |
| `CustomerUpdate` | `src/DoiT/Models/CustomerUpdate.cs` |
| `UpdateCustomerError` | `src/DoiT/Errors/UpdateCustomerError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.Customers` · Source: `src/Airwallex/Api/Customers.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomer

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `CreateCustomer(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### GetCustomer

- **Auth**: `options.BearerAuth` OR (`options.ClientIdHeader` AND `options.ApiKeyHeader`)
- **Signature**: `GetCustomer(GetCustomerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetCustomerRequest` | `src/Airwallex/Requests/Customers/GetCustomerRequest.cs` |


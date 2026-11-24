<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.Orders` · Source: `src/Curlec/Api/Orders.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOrder

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateOrder(CreateOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Order`
- **Error**: `ApiException<CreateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrderRequest` | `src/Curlec/Requests/Orders/CreateOrderRequest.cs` |
| `OrdersRequest` | `src/Curlec/Models/OrdersRequest.cs` |
| `Order` | `src/Curlec/Models/Order.cs` |
| `CreateOrderError` | `src/Curlec/Errors/CreateOrderError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchAllOrders

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchAllOrders(FetchAllOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `from` ← `From`, `to` ← `To`, `count` ← `Count`, `skip` ← `Skip`, `authorized` ← `Authorized`, `receipt` ← `Receipt`, `expand[]` ← `Expand`
- **Returns**: `OrdersResponse`
- **Error**: `ApiException<FetchAllOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchAllOrdersRequest` | `src/Curlec/Requests/Orders/FetchAllOrdersRequest.cs` |
| `Authorized` | `src/Curlec/Models/Enums/Authorized.cs` |
| `ExpandRazorpayOrdersApi` | `src/Curlec/Models/Enums/ExpandRazorpayOrdersApi.cs` |
| `OrdersResponse` | `src/Curlec/Models/OrdersResponse.cs` |
| `FetchAllOrdersError` | `src/Curlec/Errors/FetchAllOrdersError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchOrder

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchOrder(FetchOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Order`
- **Error**: `ApiException<FetchOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchOrderRequest` | `src/Curlec/Requests/Orders/FetchOrderRequest.cs` |
| `Order` | `src/Curlec/Models/Order.cs` |
| `FetchOrderError` | `src/Curlec/Errors/FetchOrderError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchOrderPayments

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchOrderPayments(FetchOrderPaymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `OrdersPaymentsResponse`
- **Error**: `ApiException<FetchOrderPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchOrderPaymentsRequest` | `src/Curlec/Requests/Orders/FetchOrderPaymentsRequest.cs` |
| `OrdersPaymentsResponse` | `src/Curlec/Models/OrdersPaymentsResponse.cs` |
| `FetchOrderPaymentsError` | `src/Curlec/Errors/FetchOrderPaymentsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateOrder

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateOrder(UpdateOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Order`
- **Error**: `ApiException<UpdateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateOrderRequest` | `src/Curlec/Requests/Orders/UpdateOrderRequest.cs` |
| `OrdersRequest1` | `src/Curlec/Models/OrdersRequest1.cs` |
| `Order` | `src/Curlec/Models/Order.cs` |
| `UpdateOrderError` | `src/Curlec/Errors/UpdateOrderError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |


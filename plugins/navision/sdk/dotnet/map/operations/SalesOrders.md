<!-- Generated file — do not edit; regenerated with the SDK. -->

# SalesOrders — operations

Accessor: `client.SalesOrders` · Source: `src/MicrosoftDynamicsNav/Api/SalesOrders.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSalesOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateSalesOrder(CreateSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `SalesOrder`
- **Error**: `ApiException<CreateSalesOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSalesOrderRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/CreateSalesOrderRequest.cs` |
| `SalesOrderCreate` | `src/MicrosoftDynamicsNav/Models/SalesOrderCreate.cs` |
| `SalesOrder` | `src/MicrosoftDynamicsNav/Models/SalesOrder.cs` |
| `CreateSalesOrderError` | `src/MicrosoftDynamicsNav/Errors/CreateSalesOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### DeleteSalesOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteSalesOrder(DeleteSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `SalesOrderId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSalesOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSalesOrderRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/DeleteSalesOrderRequest.cs` |
| `DeleteSalesOrderError` | `src/MicrosoftDynamicsNav/Errors/DeleteSalesOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### GetSalesOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetSalesOrder(GetSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `SalesOrderId`
- **Query params (wire ← C#)**: `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `SalesOrder`
- **Error**: `ApiException<GetSalesOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSalesOrderRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/GetSalesOrderRequest.cs` |
| `SalesOrder` | `src/MicrosoftDynamicsNav/Models/SalesOrder.cs` |
| `GetSalesOrderError` | `src/MicrosoftDynamicsNav/Errors/GetSalesOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListSalesOrderLines

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListSalesOrderLines(ListSalesOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `SalesOrderId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiSalesOrdersApiSalesOrderLinesResponse`
- **Error**: `ApiException<ListSalesOrderLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSalesOrderLinesRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/ListSalesOrderLinesRequest.cs` |
| `CompaniesApiSalesOrdersApiSalesOrderLinesResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiSalesOrdersApiSalesOrderLinesResponse.cs` |
| `ListSalesOrderLinesError` | `src/MicrosoftDynamicsNav/Errors/ListSalesOrderLinesError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListSalesOrders

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListSalesOrders(ListSalesOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `CompaniesApiSalesOrdersResponse`
- **Error**: `ApiException<ListSalesOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSalesOrdersRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/ListSalesOrdersRequest.cs` |
| `CompaniesApiSalesOrdersResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiSalesOrdersResponse.cs` |
| `ListSalesOrdersError` | `src/MicrosoftDynamicsNav/Errors/ListSalesOrdersError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### UpdateSalesOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateSalesOrder(UpdateSalesOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `SalesOrderId`, `IfMatch`, `Body`
- **Returns**: `SalesOrder`
- **Error**: `ApiException<UpdateSalesOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSalesOrderRequest` | `src/MicrosoftDynamicsNav/Requests/SalesOrders/UpdateSalesOrderRequest.cs` |
| `SalesOrderUpdate` | `src/MicrosoftDynamicsNav/Models/SalesOrderUpdate.cs` |
| `SalesOrder` | `src/MicrosoftDynamicsNav/Models/SalesOrder.cs` |
| `UpdateSalesOrderError` | `src/MicrosoftDynamicsNav/Errors/UpdateSalesOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


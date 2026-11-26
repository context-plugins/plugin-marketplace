<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrders — operations

Accessor: `client.PurchaseOrders` · Source: `src/Dynamics365BusinessCentral/Api/PurchaseOrders.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreatePurchaseOrder(CreatePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `PurchaseOrder`
- **Error**: `ApiException<CreatePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePurchaseOrderRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/CreatePurchaseOrderRequest.cs` |
| `PurchaseOrderCreate` | `src/Dynamics365BusinessCentral/Models/PurchaseOrderCreate.cs` |
| `PurchaseOrder` | `src/Dynamics365BusinessCentral/Models/PurchaseOrder.cs` |
| `CreatePurchaseOrderError` | `src/Dynamics365BusinessCentral/Errors/CreatePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### DeletePurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeletePurchaseOrder(DeletePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePurchaseOrderRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/DeletePurchaseOrderRequest.cs` |
| `DeletePurchaseOrderError` | `src/Dynamics365BusinessCentral/Errors/DeletePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### GetPurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetPurchaseOrder(GetPurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`
- **Query params (wire ← C#)**: `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `PurchaseOrder`
- **Error**: `ApiException<GetPurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPurchaseOrderRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/GetPurchaseOrderRequest.cs` |
| `PurchaseOrder` | `src/Dynamics365BusinessCentral/Models/PurchaseOrder.cs` |
| `GetPurchaseOrderError` | `src/Dynamics365BusinessCentral/Errors/GetPurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListPurchaseOrderLines

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListPurchaseOrderLines(ListPurchaseOrderLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse`
- **Error**: `ApiException<ListPurchaseOrderLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPurchaseOrderLinesRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/ListPurchaseOrderLinesRequest.cs` |
| `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse.cs` |
| `ListPurchaseOrderLinesError` | `src/Dynamics365BusinessCentral/Errors/ListPurchaseOrderLinesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListPurchaseOrders

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListPurchaseOrders(ListPurchaseOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`, `$expand` ← `Expand`
- **Returns**: `CompaniesApiPurchaseOrdersResponse`
- **Error**: `ApiException<ListPurchaseOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPurchaseOrdersRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/ListPurchaseOrdersRequest.cs` |
| `CompaniesApiPurchaseOrdersResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiPurchaseOrdersResponse.cs` |
| `ListPurchaseOrdersError` | `src/Dynamics365BusinessCentral/Errors/ListPurchaseOrdersError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UpdatePurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdatePurchaseOrder(UpdatePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`, `IfMatch`, `Body`
- **Returns**: `PurchaseOrder`
- **Error**: `ApiException<UpdatePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePurchaseOrderRequest` | `src/Dynamics365BusinessCentral/Requests/PurchaseOrders/UpdatePurchaseOrderRequest.cs` |
| `PurchaseOrderUpdate` | `src/Dynamics365BusinessCentral/Models/PurchaseOrderUpdate.cs` |
| `PurchaseOrder` | `src/Dynamics365BusinessCentral/Models/PurchaseOrder.cs` |
| `UpdatePurchaseOrderError` | `src/Dynamics365BusinessCentral/Errors/UpdatePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |


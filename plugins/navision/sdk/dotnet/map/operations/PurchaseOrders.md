<!-- Generated file — do not edit; regenerated with the SDK. -->

# PurchaseOrders — operations

Accessor: `client.PurchaseOrders` · Source: `src/MicrosoftDynamicsNav/Api/PurchaseOrders.cs` · 6 operations

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
| `CreatePurchaseOrderRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/CreatePurchaseOrderRequest.cs` |
| `PurchaseOrderCreate` | `src/MicrosoftDynamicsNav/Models/PurchaseOrderCreate.cs` |
| `PurchaseOrder` | `src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs` |
| `CreatePurchaseOrderError` | `src/MicrosoftDynamicsNav/Errors/CreatePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### DeletePurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeletePurchaseOrder(DeletePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePurchaseOrderRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/DeletePurchaseOrderRequest.cs` |
| `DeletePurchaseOrderError` | `src/MicrosoftDynamicsNav/Errors/DeletePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `GetPurchaseOrderRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/GetPurchaseOrderRequest.cs` |
| `PurchaseOrder` | `src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs` |
| `GetPurchaseOrderError` | `src/MicrosoftDynamicsNav/Errors/GetPurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListPurchaseOrderLinesRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/ListPurchaseOrderLinesRequest.cs` |
| `CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse.cs` |
| `ListPurchaseOrderLinesError` | `src/MicrosoftDynamicsNav/Errors/ListPurchaseOrderLinesError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListPurchaseOrdersRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/ListPurchaseOrdersRequest.cs` |
| `CompaniesApiPurchaseOrdersResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiPurchaseOrdersResponse.cs` |
| `ListPurchaseOrdersError` | `src/MicrosoftDynamicsNav/Errors/ListPurchaseOrdersError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### UpdatePurchaseOrder

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdatePurchaseOrder(UpdatePurchaseOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `PurchaseOrderId`, `IfMatch`, `Body`
- **Returns**: `PurchaseOrder`
- **Error**: `ApiException<UpdatePurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePurchaseOrderRequest` | `src/MicrosoftDynamicsNav/Requests/PurchaseOrders/UpdatePurchaseOrderRequest.cs` |
| `PurchaseOrderUpdate` | `src/MicrosoftDynamicsNav/Models/PurchaseOrderUpdate.cs` |
| `PurchaseOrder` | `src/MicrosoftDynamicsNav/Models/PurchaseOrder.cs` |
| `UpdatePurchaseOrderError` | `src/MicrosoftDynamicsNav/Errors/UpdatePurchaseOrderError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


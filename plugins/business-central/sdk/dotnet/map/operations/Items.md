<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.Items` · Source: `src/Dynamics365BusinessCentral/Api/Items.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateItem(CreateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `Item`
- **Error**: `ApiException<CreateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateItemRequest` | `src/Dynamics365BusinessCentral/Requests/Items/CreateItemRequest.cs` |
| `ItemCreate` | `src/Dynamics365BusinessCentral/Models/ItemCreate.cs` |
| `Item` | `src/Dynamics365BusinessCentral/Models/Item.cs` |
| `CreateItemError` | `src/Dynamics365BusinessCentral/Errors/CreateItemError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### DeleteItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteItem(DeleteItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ItemId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteItemRequest` | `src/Dynamics365BusinessCentral/Requests/Items/DeleteItemRequest.cs` |
| `DeleteItemError` | `src/Dynamics365BusinessCentral/Errors/DeleteItemError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### GetItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `GetItem(GetItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ItemId`
- **Query params (wire ← C#)**: `$select` ← `Select`
- **Returns**: `Item`
- **Error**: `ApiException<GetItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetItemRequest` | `src/Dynamics365BusinessCentral/Requests/Items/GetItemRequest.cs` |
| `Item` | `src/Dynamics365BusinessCentral/Models/Item.cs` |
| `GetItemError` | `src/Dynamics365BusinessCentral/Errors/GetItemError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### ListItems

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$select` ← `Select`
- **Returns**: `CompaniesApiItemsResponse`
- **Error**: `ApiException<ListItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListItemsRequest` | `src/Dynamics365BusinessCentral/Requests/Items/ListItemsRequest.cs` |
| `CompaniesApiItemsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiItemsResponse.cs` |
| `ListItemsError` | `src/Dynamics365BusinessCentral/Errors/ListItemsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

### UpdateItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateItem(UpdateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ItemId`, `IfMatch`, `Body`
- **Returns**: `Item`
- **Error**: `ApiException<UpdateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateItemRequest` | `src/Dynamics365BusinessCentral/Requests/Items/UpdateItemRequest.cs` |
| `ItemUpdate` | `src/Dynamics365BusinessCentral/Models/ItemUpdate.cs` |
| `Item` | `src/Dynamics365BusinessCentral/Models/Item.cs` |
| `UpdateItemError` | `src/Dynamics365BusinessCentral/Errors/UpdateItemError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |


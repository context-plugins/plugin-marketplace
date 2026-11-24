<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.Items` · Source: `src/MicrosoftDynamicsNav/Api/Items.cs` · 5 operations

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
| `CreateItemRequest` | `src/MicrosoftDynamicsNav/Requests/Items/CreateItemRequest.cs` |
| `ItemCreate` | `src/MicrosoftDynamicsNav/Models/ItemCreate.cs` |
| `Item` | `src/MicrosoftDynamicsNav/Models/Item.cs` |
| `CreateItemError` | `src/MicrosoftDynamicsNav/Errors/CreateItemError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### DeleteItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `DeleteItem(DeleteItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ItemId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteItemRequest` | `src/MicrosoftDynamicsNav/Requests/Items/DeleteItemRequest.cs` |
| `DeleteItemError` | `src/MicrosoftDynamicsNav/Errors/DeleteItemError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `GetItemRequest` | `src/MicrosoftDynamicsNav/Requests/Items/GetItemRequest.cs` |
| `Item` | `src/MicrosoftDynamicsNav/Models/Item.cs` |
| `GetItemError` | `src/MicrosoftDynamicsNav/Errors/GetItemError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

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
| `ListItemsRequest` | `src/MicrosoftDynamicsNav/Requests/Items/ListItemsRequest.cs` |
| `CompaniesApiItemsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiItemsResponse.cs` |
| `ListItemsError` | `src/MicrosoftDynamicsNav/Errors/ListItemsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### UpdateItem

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `UpdateItem(UpdateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `ItemId`, `IfMatch`, `Body`
- **Returns**: `Item`
- **Error**: `ApiException<UpdateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateItemRequest` | `src/MicrosoftDynamicsNav/Requests/Items/UpdateItemRequest.cs` |
| `ItemUpdate` | `src/MicrosoftDynamicsNav/Models/ItemUpdate.cs` |
| `Item` | `src/MicrosoftDynamicsNav/Models/Item.cs` |
| `UpdateItemError` | `src/MicrosoftDynamicsNav/Errors/UpdateItemError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |


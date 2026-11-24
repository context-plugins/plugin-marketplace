<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.Items` · Source: `src/Curlec/Api/Items.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateItem

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `CreateItem(CreateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Item`
- **Error**: `ApiException<CreateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateItemRequest` | `src/Curlec/Requests/Items/CreateItemRequest.cs` |
| `ItemsRequest` | `src/Curlec/Models/ItemsRequest.cs` |
| `Item` | `src/Curlec/Models/Item.cs` |
| `CreateItemError` | `src/Curlec/Errors/CreateItemError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### DeleteItem

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `DeleteItem(DeleteItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteItemRequest` | `src/Curlec/Requests/Items/DeleteItemRequest.cs` |
| `DeleteItemError` | `src/Curlec/Errors/DeleteItemError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### FetchItem

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchItem(FetchItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Item`
- **Error**: `ApiException<FetchItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchItemRequest` | `src/Curlec/Requests/Items/FetchItemRequest.cs` |
| `Item` | `src/Curlec/Models/Item.cs` |
| `FetchItemError` | `src/Curlec/Errors/FetchItemError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### ListItems

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `count` ← `Count`, `skip` ← `Skip`
- **Returns**: `ItemsResponse`
- **Error**: `ApiException<ListItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListItemsRequest` | `src/Curlec/Requests/Items/ListItemsRequest.cs` |
| `ItemsResponse` | `src/Curlec/Models/ItemsResponse.cs` |
| `ListItemsError` | `src/Curlec/Errors/ListItemsError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

### UpdateItem

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `UpdateItem(UpdateItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Item`
- **Error**: `ApiException<UpdateItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateItemRequest` | `src/Curlec/Requests/Items/UpdateItemRequest.cs` |
| `ItemsRequest1` | `src/Curlec/Models/ItemsRequest1.cs` |
| `Item` | `src/Curlec/Models/Item.cs` |
| `UpdateItemError` | `src/Curlec/Errors/UpdateItemError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |


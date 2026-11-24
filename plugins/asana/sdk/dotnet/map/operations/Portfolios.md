<!-- Generated file — do not edit; regenerated with the SDK. -->

# Portfolios — operations

Accessor: `client.Portfolios` · Source: `src/Asana/Api/Portfolios.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddCustomFieldSettingForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddCustomFieldSettingForPortfolio(AddCustomFieldSettingForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`
- **Returns**: `PortfoliosAddCustomFieldSettingResponse`
- **Error**: `ApiException<AddCustomFieldSettingForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCustomFieldSettingForPortfolioRequest` | `src/Asana/Requests/Portfolios/AddCustomFieldSettingForPortfolioRequest.cs` |
| `PortfoliosAddCustomFieldSettingRequest` | `src/Asana/Models/PortfoliosAddCustomFieldSettingRequest.cs` |
| `PortfoliosAddCustomFieldSettingResponse` | `src/Asana/Models/PortfoliosAddCustomFieldSettingResponse.cs` |
| `AddCustomFieldSettingForPortfolioError` | `src/Asana/Errors/AddCustomFieldSettingForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddItemForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddItemForPortfolio(AddItemForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosAddItemResponse`
- **Error**: `ApiException<AddItemForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddItemForPortfolioRequest` | `src/Asana/Requests/Portfolios/AddItemForPortfolioRequest.cs` |
| `PortfoliosAddItemRequest` | `src/Asana/Models/PortfoliosAddItemRequest.cs` |
| `PortfoliosAddItemResponse` | `src/Asana/Models/PortfoliosAddItemResponse.cs` |
| `AddItemForPortfolioError` | `src/Asana/Errors/AddItemForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddMembersForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddMembersForPortfolio(AddMembersForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosAddMembersResponse`
- **Error**: `ApiException<AddMembersForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddMembersForPortfolioRequest` | `src/Asana/Requests/Portfolios/AddMembersForPortfolioRequest.cs` |
| `PortfoliosAddMembersRequest` | `src/Asana/Models/PortfoliosAddMembersRequest.cs` |
| `PortfoliosAddMembersResponse` | `src/Asana/Models/PortfoliosAddMembersResponse.cs` |
| `AddMembersForPortfolioError` | `src/Asana/Errors/AddMembersForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreatePortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreatePortfolio(CreatePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosResponse1`
- **Error**: `ApiException<CreatePortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePortfolioRequest` | `src/Asana/Requests/Portfolios/CreatePortfolioRequest.cs` |
| `PortfoliosRequest` | `src/Asana/Models/PortfoliosRequest.cs` |
| `PortfoliosResponse1` | `src/Asana/Models/PortfoliosResponse1.cs` |
| `CreatePortfolioError` | `src/Asana/Errors/CreatePortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeletePortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeletePortfolio(DeletePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosResponse4`
- **Error**: `ApiException<DeletePortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePortfolioRequest` | `src/Asana/Requests/Portfolios/DeletePortfolioRequest.cs` |
| `PortfoliosResponse4` | `src/Asana/Models/PortfoliosResponse4.cs` |
| `DeletePortfolioError` | `src/Asana/Errors/DeletePortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetItemsForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetItemsForPortfolio(GetItemsForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PortfoliosItemsResponse`
- **Error**: `ApiException<GetItemsForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetItemsForPortfolioRequest` | `src/Asana/Requests/Portfolios/GetItemsForPortfolioRequest.cs` |
| `PortfoliosItemsResponse` | `src/Asana/Models/PortfoliosItemsResponse.cs` |
| `GetItemsForPortfolioError` | `src/Asana/Errors/GetItemsForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetPortfolio(GetPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosResponse1`
- **Error**: `ApiException<GetPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioRequest` | `src/Asana/Requests/Portfolios/GetPortfolioRequest.cs` |
| `PortfoliosResponse1` | `src/Asana/Models/PortfoliosResponse1.cs` |
| `GetPortfolioError` | `src/Asana/Errors/GetPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetPortfolios

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetPortfolios(GetPortfoliosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `Owner`
- **Query params (wire ← C#)**: `workspace` ← `Workspace`, `owner` ← `Owner`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PortfoliosResponse`
- **Error**: `ApiException<GetPortfoliosError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfoliosRequest` | `src/Asana/Requests/Portfolios/GetPortfoliosRequest.cs` |
| `PortfoliosResponse` | `src/Asana/Models/PortfoliosResponse.cs` |
| `GetPortfoliosError` | `src/Asana/Errors/GetPortfoliosError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveCustomFieldSettingForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveCustomFieldSettingForPortfolio(RemoveCustomFieldSettingForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`
- **Returns**: `PortfoliosRemoveCustomFieldSettingResponse`
- **Error**: `ApiException<RemoveCustomFieldSettingForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveCustomFieldSettingForPortfolioRequest` | `src/Asana/Requests/Portfolios/RemoveCustomFieldSettingForPortfolioRequest.cs` |
| `PortfoliosRemoveCustomFieldSettingRequest` | `src/Asana/Models/PortfoliosRemoveCustomFieldSettingRequest.cs` |
| `PortfoliosRemoveCustomFieldSettingResponse` | `src/Asana/Models/PortfoliosRemoveCustomFieldSettingResponse.cs` |
| `RemoveCustomFieldSettingForPortfolioError` | `src/Asana/Errors/RemoveCustomFieldSettingForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveItemForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveItemForPortfolio(RemoveItemForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosRemoveItemResponse`
- **Error**: `ApiException<RemoveItemForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveItemForPortfolioRequest` | `src/Asana/Requests/Portfolios/RemoveItemForPortfolioRequest.cs` |
| `PortfoliosRemoveItemRequest` | `src/Asana/Models/PortfoliosRemoveItemRequest.cs` |
| `PortfoliosRemoveItemResponse` | `src/Asana/Models/PortfoliosRemoveItemResponse.cs` |
| `RemoveItemForPortfolioError` | `src/Asana/Errors/RemoveItemForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveMembersForPortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveMembersForPortfolio(RemoveMembersForPortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosRemoveMembersResponse`
- **Error**: `ApiException<RemoveMembersForPortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveMembersForPortfolioRequest` | `src/Asana/Requests/Portfolios/RemoveMembersForPortfolioRequest.cs` |
| `PortfoliosRemoveMembersRequest` | `src/Asana/Models/PortfoliosRemoveMembersRequest.cs` |
| `PortfoliosRemoveMembersResponse` | `src/Asana/Models/PortfoliosRemoveMembersResponse.cs` |
| `RemoveMembersForPortfolioError` | `src/Asana/Errors/RemoveMembersForPortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdatePortfolio

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdatePortfolio(UpdatePortfolioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PortfolioGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `PortfoliosResponse1`
- **Error**: `ApiException<UpdatePortfolioError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePortfolioRequest` | `src/Asana/Requests/Portfolios/UpdatePortfolioRequest.cs` |
| `PortfoliosRequest` | `src/Asana/Models/PortfoliosRequest.cs` |
| `PortfoliosResponse1` | `src/Asana/Models/PortfoliosResponse1.cs` |
| `UpdatePortfolioError` | `src/Asana/Errors/UpdatePortfolioError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |


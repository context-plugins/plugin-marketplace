<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataStandards — operations

Accessor: `client.DataStandards` · Source: `src/Soda/Api/DataStandards.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1DataStandardsDataStandardId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `DeleteApiV1DataStandardsDataStandardId(DeleteApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`
- **Returns**: `PublicApiDeleteDataStandardResponse`
- **Error**: `ApiException<DeleteApiV1DataStandardsDataStandardIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1DataStandardsDataStandardIdRequest` | `src/Soda/Requests/DataStandards/DeleteApiV1DataStandardsDataStandardIdRequest.cs` |
| `PublicApiDeleteDataStandardResponse` | `src/Soda/Models/PublicApiDeleteDataStandardResponse.cs` |
| `DeleteApiV1DataStandardsDataStandardIdError` | `src/Soda/Errors/DeleteApiV1DataStandardsDataStandardIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DataStandards

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DataStandards(GetApiV1DataStandardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `search` ← `Search`, `size` ← `Size`, `sort` ← `Sort`, `status` ← `Status`
- **Returns**: `PublicApiListDataStandardsResponse`
- **Error**: `ApiException<GetApiV1DataStandardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DataStandardsRequest` | `src/Soda/Requests/DataStandards/GetApiV1DataStandardsRequest.cs` |
| `DataStandardSortFieldDto` | `src/Soda/Models/Enums/DataStandardSortFieldDto.cs` |
| `DataStandardStatusDto` | `src/Soda/Models/Enums/DataStandardStatusDto.cs` |
| `PublicApiListDataStandardsResponse` | `src/Soda/Models/PublicApiListDataStandardsResponse.cs` |
| `GetApiV1DataStandardsError` | `src/Soda/Errors/GetApiV1DataStandardsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DataStandardsActivity

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DataStandardsActivity(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PublicApiDataStandardsActivityResponse`
- **Error**: `ApiException<GetApiV1DataStandardsActivityError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublicApiDataStandardsActivityResponse` | `src/Soda/Models/PublicApiDataStandardsActivityResponse.cs` |
| `GetApiV1DataStandardsActivityError` | `src/Soda/Errors/GetApiV1DataStandardsActivityError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DataStandardsDataStandardId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DataStandardsDataStandardId(GetApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`
- **Returns**: `PublicApiGetDataStandardResponse`
- **Error**: `ApiException<GetApiV1DataStandardsDataStandardIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DataStandardsDataStandardIdRequest` | `src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdRequest.cs` |
| `PublicApiGetDataStandardResponse` | `src/Soda/Models/PublicApiGetDataStandardResponse.cs` |
| `GetApiV1DataStandardsDataStandardIdError` | `src/Soda/Errors/GetApiV1DataStandardsDataStandardIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DataStandardsDataStandardIdChecks

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DataStandardsDataStandardIdChecks(GetApiV1DataStandardsDataStandardIdChecksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListDataStandardChecksResponse`
- **Error**: `ApiException<GetApiV1DataStandardsDataStandardIdChecksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DataStandardsDataStandardIdChecksRequest` | `src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdChecksRequest.cs` |
| `PublicApiListDataStandardChecksResponse` | `src/Soda/Models/PublicApiListDataStandardChecksResponse.cs` |
| `GetApiV1DataStandardsDataStandardIdChecksError` | `src/Soda/Errors/GetApiV1DataStandardsDataStandardIdChecksError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### GetApiV1DataStandardsDataStandardIdDatasets

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `GetApiV1DataStandardsDataStandardIdDatasets(GetApiV1DataStandardsDataStandardIdDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`
- **Query params (wire ← C#)**: `page` ← `Page`, `size` ← `Size`
- **Returns**: `PublicApiListDataStandardDatasetsResponse`
- **Error**: `ApiException<GetApiV1DataStandardsDataStandardIdDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DataStandardsDataStandardIdDatasetsRequest` | `src/Soda/Requests/DataStandards/GetApiV1DataStandardsDataStandardIdDatasetsRequest.cs` |
| `PublicApiListDataStandardDatasetsResponse` | `src/Soda/Models/PublicApiListDataStandardDatasetsResponse.cs` |
| `GetApiV1DataStandardsDataStandardIdDatasetsError` | `src/Soda/Errors/GetApiV1DataStandardsDataStandardIdDatasetsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandards

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandards(PostApiV1DataStandardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiCreateDataStandardResponse`
- **Error**: `ApiException<PostApiV1DataStandardsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsRequest.cs` |
| `PublicApiDataStandardRequestDto` | `src/Soda/Models/PublicApiDataStandardRequestDto.cs` |
| `PublicApiCreateDataStandardResponse` | `src/Soda/Models/PublicApiCreateDataStandardResponse.cs` |
| `PostApiV1DataStandardsError` | `src/Soda/Errors/PostApiV1DataStandardsError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsActionsExecute

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsActionsExecute(PostApiV1DataStandardsActionsExecuteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiExecuteDataStandardsResponse`
- **Error**: `ApiException<PostApiV1DataStandardsActionsExecuteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsActionsExecuteRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsExecuteRequest.cs` |
| `PublicApiExecuteDataStandardsRequestDto` | `src/Soda/Models/PublicApiExecuteDataStandardsRequestDto.cs` |
| `PublicApiExecuteDataStandardsResponse` | `src/Soda/Models/PublicApiExecuteDataStandardsResponse.cs` |
| `PostApiV1DataStandardsActionsExecuteError` | `src/Soda/Errors/PostApiV1DataStandardsActionsExecuteError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsActionsPreviewScope

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsActionsPreviewScope(PostApiV1DataStandardsActionsPreviewScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiPreviewDataStandardScopeResponse`
- **Error**: `ApiException<PostApiV1DataStandardsActionsPreviewScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsActionsPreviewScopeRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsPreviewScopeRequest.cs` |
| `PublicApiPreviewDataStandardScopeRequestDto` | `src/Soda/Models/PublicApiPreviewDataStandardScopeRequestDto.cs` |
| `PublicApiPreviewDataStandardScopeResponse` | `src/Soda/Models/PublicApiPreviewDataStandardScopeResponse.cs` |
| `PostApiV1DataStandardsActionsPreviewScopeError` | `src/Soda/Errors/PostApiV1DataStandardsActionsPreviewScopeError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsActionsTest

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsActionsTest(PostApiV1DataStandardsActionsTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicApiTestDataStandardResponse`
- **Error**: `ApiException<PostApiV1DataStandardsActionsTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsActionsTestRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsActionsTestRequest.cs` |
| `PublicApiTestDataStandardRequestDto` | `src/Soda/Models/PublicApiTestDataStandardRequestDto.cs` |
| `PublicApiTestDataStandardResponse` | `src/Soda/Models/PublicApiTestDataStandardResponse.cs` |
| `PostApiV1DataStandardsActionsTestError` | `src/Soda/Errors/PostApiV1DataStandardsActionsTestError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsDataStandardId

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsDataStandardId(PostApiV1DataStandardsDataStandardIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`, `Body`
- **Returns**: `PublicApiUpdateDataStandardResponse`
- **Error**: `ApiException<PostApiV1DataStandardsDataStandardIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsDataStandardIdRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdRequest.cs` |
| `PublicApiDataStandardRequestDto` | `src/Soda/Models/PublicApiDataStandardRequestDto.cs` |
| `PublicApiUpdateDataStandardResponse` | `src/Soda/Models/PublicApiUpdateDataStandardResponse.cs` |
| `PostApiV1DataStandardsDataStandardIdError` | `src/Soda/Errors/PostApiV1DataStandardsDataStandardIdError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsDataStandardIdActionsEvaluateScope

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsDataStandardIdActionsEvaluateScope(PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`
- **Returns**: `PublicApiEvaluateDataStandardScopeResponse`
- **Error**: `ApiException<PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest.cs` |
| `PublicApiEvaluateDataStandardScopeResponse` | `src/Soda/Models/PublicApiEvaluateDataStandardScopeResponse.cs` |
| `PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError` | `src/Soda/Errors/PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |

### PostApiV1DataStandardsDataStandardIdActionsStatus

- **Auth**: `options.BasicAuthApiKey` OR `options.CookieToken`
- **Signature**: `PostApiV1DataStandardsDataStandardIdActionsStatus(PostApiV1DataStandardsDataStandardIdActionsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataStandardId`, `Body`
- **Returns**: `PublicApiUpdateDataStandardStatusResponse`
- **Error**: `ApiException<PostApiV1DataStandardsDataStandardIdActionsStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DataStandardsDataStandardIdActionsStatusRequest` | `src/Soda/Requests/DataStandards/PostApiV1DataStandardsDataStandardIdActionsStatusRequest.cs` |
| `PublicApiUpdateDataStandardStatusRequestDto` | `src/Soda/Models/PublicApiUpdateDataStandardStatusRequestDto.cs` |
| `PublicApiUpdateDataStandardStatusResponse` | `src/Soda/Models/PublicApiUpdateDataStandardStatusResponse.cs` |
| `PostApiV1DataStandardsDataStandardIdActionsStatusError` | `src/Soda/Errors/PostApiV1DataStandardsDataStandardIdActionsStatusError.cs` |
| `ErrorResponseModel` | `src/Soda/Models/ErrorResponseModel.cs` |


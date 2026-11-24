<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostImport — operations

Accessor: `client.PostImport` · Source: `src/BundleSocial/Api/PostImport.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostImportCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportCreate(PostImportCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PostHistoryImportResponse`
- **Error**: `ApiException<PostImportCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImport400Error1([NotNullWhen(true)] out ApiV1PostHistoryImport400Error1? value)` [400] · `TryGetApiV1PostHistoryImport401Error1([NotNullWhen(true)] out ApiV1PostHistoryImport401Error1? value)` [401] · `TryGetApiV1PostHistoryImport403Error1([NotNullWhen(true)] out ApiV1PostHistoryImport403Error1? value)` [403] · `TryGetApiV1PostHistoryImport404Error1([NotNullWhen(true)] out ApiV1PostHistoryImport404Error1? value)` [404] · `TryGetApiV1PostHistoryImport409Error1([NotNullWhen(true)] out ApiV1PostHistoryImport409Error1? value)` [409] · `TryGetApiV1PostHistoryImport429Error1([NotNullWhen(true)] out ApiV1PostHistoryImport429Error1? value)` [429] · `TryGetApiV1PostHistoryImport500Error1([NotNullWhen(true)] out ApiV1PostHistoryImport500Error1? value)` [500] · `TryGetApiV1PostHistoryImport502Error1([NotNullWhen(true)] out ApiV1PostHistoryImport502Error1? value)` [502] · `TryGetApiV1PostHistoryImport503Error1([NotNullWhen(true)] out ApiV1PostHistoryImport503Error1? value)` [503] · `TryGetApiV1PostHistoryImport504Error1([NotNullWhen(true)] out ApiV1PostHistoryImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportCreateRequest` | `src/BundleSocial/Requests/PostImport/PostImportCreateRequest.cs` |
| `ApiV1PostHistoryImportRequest` | `src/BundleSocial/Models/ApiV1PostHistoryImportRequest.cs` |
| `ApiV1PostHistoryImportResponse` | `src/BundleSocial/Models/ApiV1PostHistoryImportResponse.cs` |
| `PostImportCreateError` | `src/BundleSocial/Errors/PostImportCreateError.cs` |
| `ApiV1PostHistoryImport400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport400Error1.cs` |
| `ApiV1PostHistoryImport401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport401Error1.cs` |
| `ApiV1PostHistoryImport403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport403Error1.cs` |
| `ApiV1PostHistoryImport404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport404Error1.cs` |
| `ApiV1PostHistoryImport409Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport409Error1.cs` |
| `ApiV1PostHistoryImport429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport429Error1.cs` |
| `ApiV1PostHistoryImport500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport500Error1.cs` |
| `ApiV1PostHistoryImport502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport502Error1.cs` |
| `ApiV1PostHistoryImport503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport503Error1.cs` |
| `ApiV1PostHistoryImport504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport504Error1.cs` |

### PostImportDeleteImportedPosts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportDeleteImportedPosts(PostImportDeleteImportedPostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1PostHistoryImportPostsResponse1`
- **Error**: `ApiException<PostImportDeleteImportedPostsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImportPosts400Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts400Error1? value)` [400] · `TryGetApiV1PostHistoryImportPosts401Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts401Error1? value)` [401] · `TryGetApiV1PostHistoryImportPosts403Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts403Error1? value)` [403] · `TryGetApiV1PostHistoryImportPosts404Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts404Error1? value)` [404] · `TryGetApiV1PostHistoryImportPosts429Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts429Error1? value)` [429] · `TryGetApiV1PostHistoryImportPosts500Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts500Error1? value)` [500] · `TryGetApiV1PostHistoryImportPosts502Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts502Error1? value)` [502] · `TryGetApiV1PostHistoryImportPosts503Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts503Error1? value)` [503] · `TryGetApiV1PostHistoryImportPosts504Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportDeleteImportedPostsRequest` | `src/BundleSocial/Requests/PostImport/PostImportDeleteImportedPostsRequest.cs` |
| `ApiV1PostHistoryImportPostsRequest` | `src/BundleSocial/Models/ApiV1PostHistoryImportPostsRequest.cs` |
| `ApiV1PostHistoryImportPostsResponse1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPostsResponse1.cs` |
| `PostImportDeleteImportedPostsError` | `src/BundleSocial/Errors/PostImportDeleteImportedPostsError.cs` |
| `ApiV1PostHistoryImportPosts400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts400Error1.cs` |
| `ApiV1PostHistoryImportPosts401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts401Error1.cs` |
| `ApiV1PostHistoryImportPosts403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts403Error1.cs` |
| `ApiV1PostHistoryImportPosts404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts404Error1.cs` |
| `ApiV1PostHistoryImportPosts429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts429Error1.cs` |
| `ApiV1PostHistoryImportPosts500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts500Error1.cs` |
| `ApiV1PostHistoryImportPosts502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts502Error1.cs` |
| `ApiV1PostHistoryImportPosts503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts503Error1.cs` |
| `ApiV1PostHistoryImportPosts504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts504Error1.cs` |

### PostImportGetById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportGetById(PostImportGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1PostHistoryImportResponse`
- **Error**: `ApiException<PostImportGetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImport400Error1([NotNullWhen(true)] out ApiV1PostHistoryImport400Error1? value)` [400] · `TryGetApiV1PostHistoryImport401Error1([NotNullWhen(true)] out ApiV1PostHistoryImport401Error1? value)` [401] · `TryGetApiV1PostHistoryImport403Error1([NotNullWhen(true)] out ApiV1PostHistoryImport403Error1? value)` [403] · `TryGetApiV1PostHistoryImport404Error1([NotNullWhen(true)] out ApiV1PostHistoryImport404Error1? value)` [404] · `TryGetApiV1PostHistoryImport429Error1([NotNullWhen(true)] out ApiV1PostHistoryImport429Error1? value)` [429] · `TryGetApiV1PostHistoryImport500Error1([NotNullWhen(true)] out ApiV1PostHistoryImport500Error1? value)` [500] · `TryGetApiV1PostHistoryImport502Error1([NotNullWhen(true)] out ApiV1PostHistoryImport502Error1? value)` [502] · `TryGetApiV1PostHistoryImport503Error1([NotNullWhen(true)] out ApiV1PostHistoryImport503Error1? value)` [503] · `TryGetApiV1PostHistoryImport504Error1([NotNullWhen(true)] out ApiV1PostHistoryImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportGetByIdRequest` | `src/BundleSocial/Requests/PostImport/PostImportGetByIdRequest.cs` |
| `ApiV1PostHistoryImportResponse` | `src/BundleSocial/Models/ApiV1PostHistoryImportResponse.cs` |
| `PostImportGetByIdError` | `src/BundleSocial/Errors/PostImportGetByIdError.cs` |
| `ApiV1PostHistoryImport400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport400Error1.cs` |
| `ApiV1PostHistoryImport401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport401Error1.cs` |
| `ApiV1PostHistoryImport403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport403Error1.cs` |
| `ApiV1PostHistoryImport404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport404Error1.cs` |
| `ApiV1PostHistoryImport429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport429Error1.cs` |
| `ApiV1PostHistoryImport500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport500Error1.cs` |
| `ApiV1PostHistoryImport502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport502Error1.cs` |
| `ApiV1PostHistoryImport503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport503Error1.cs` |
| `ApiV1PostHistoryImport504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport504Error1.cs` |

### PostImportGetImportedPosts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportGetImportedPosts(PostImportGetImportedPostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`, `SocialAccountType`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `socialAccountType` ← `SocialAccountType`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ApiV1PostHistoryImportPostsResponse`
- **Error**: `ApiException<PostImportGetImportedPostsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImportPosts400Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts400Error1? value)` [400] · `TryGetApiV1PostHistoryImportPosts401Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts401Error1? value)` [401] · `TryGetApiV1PostHistoryImportPosts403Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts403Error1? value)` [403] · `TryGetApiV1PostHistoryImportPosts404Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts404Error1? value)` [404] · `TryGetApiV1PostHistoryImportPosts429Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts429Error1? value)` [429] · `TryGetApiV1PostHistoryImportPosts500Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts500Error1? value)` [500] · `TryGetApiV1PostHistoryImportPosts502Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts502Error1? value)` [502] · `TryGetApiV1PostHistoryImportPosts503Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts503Error1? value)` [503] · `TryGetApiV1PostHistoryImportPosts504Error1([NotNullWhen(true)] out ApiV1PostHistoryImportPosts504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportGetImportedPostsRequest` | `src/BundleSocial/Requests/PostImport/PostImportGetImportedPostsRequest.cs` |
| `SocialAccountTypeBundleSocialPostImportApi` | `src/BundleSocial/Models/Enums/SocialAccountTypeBundleSocialPostImportApi.cs` |
| `ApiV1PostHistoryImportPostsResponse` | `src/BundleSocial/Models/ApiV1PostHistoryImportPostsResponse.cs` |
| `PostImportGetImportedPostsError` | `src/BundleSocial/Errors/PostImportGetImportedPostsError.cs` |
| `ApiV1PostHistoryImportPosts400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts400Error1.cs` |
| `ApiV1PostHistoryImportPosts401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts401Error1.cs` |
| `ApiV1PostHistoryImportPosts403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts403Error1.cs` |
| `ApiV1PostHistoryImportPosts404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts404Error1.cs` |
| `ApiV1PostHistoryImportPosts429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts429Error1.cs` |
| `ApiV1PostHistoryImportPosts500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts500Error1.cs` |
| `ApiV1PostHistoryImportPosts502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts502Error1.cs` |
| `ApiV1PostHistoryImportPosts503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts503Error1.cs` |
| `ApiV1PostHistoryImportPosts504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportPosts504Error1.cs` |

### PostImportGetStatus

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportGetStatus(PostImportGetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `socialAccountType` ← `SocialAccountType`
- **Returns**: `ApiV1PostHistoryImportResponse1`
- **Error**: `ApiException<PostImportGetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImport400Error1([NotNullWhen(true)] out ApiV1PostHistoryImport400Error1? value)` [400] · `TryGetApiV1PostHistoryImport401Error1([NotNullWhen(true)] out ApiV1PostHistoryImport401Error1? value)` [401] · `TryGetApiV1PostHistoryImport403Error1([NotNullWhen(true)] out ApiV1PostHistoryImport403Error1? value)` [403] · `TryGetApiV1PostHistoryImport404Error1([NotNullWhen(true)] out ApiV1PostHistoryImport404Error1? value)` [404] · `TryGetApiV1PostHistoryImport429Error1([NotNullWhen(true)] out ApiV1PostHistoryImport429Error1? value)` [429] · `TryGetApiV1PostHistoryImport500Error1([NotNullWhen(true)] out ApiV1PostHistoryImport500Error1? value)` [500] · `TryGetApiV1PostHistoryImport502Error1([NotNullWhen(true)] out ApiV1PostHistoryImport502Error1? value)` [502] · `TryGetApiV1PostHistoryImport503Error1([NotNullWhen(true)] out ApiV1PostHistoryImport503Error1? value)` [503] · `TryGetApiV1PostHistoryImport504Error1([NotNullWhen(true)] out ApiV1PostHistoryImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportGetStatusRequest` | `src/BundleSocial/Requests/PostImport/PostImportGetStatusRequest.cs` |
| `SocialAccountTypeBundleSocialPostImportApi` | `src/BundleSocial/Models/Enums/SocialAccountTypeBundleSocialPostImportApi.cs` |
| `ApiV1PostHistoryImportResponse1` | `src/BundleSocial/Models/ApiV1PostHistoryImportResponse1.cs` |
| `PostImportGetStatusError` | `src/BundleSocial/Errors/PostImportGetStatusError.cs` |
| `ApiV1PostHistoryImport400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport400Error1.cs` |
| `ApiV1PostHistoryImport401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport401Error1.cs` |
| `ApiV1PostHistoryImport403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport403Error1.cs` |
| `ApiV1PostHistoryImport404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport404Error1.cs` |
| `ApiV1PostHistoryImport429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport429Error1.cs` |
| `ApiV1PostHistoryImport500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport500Error1.cs` |
| `ApiV1PostHistoryImport502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport502Error1.cs` |
| `ApiV1PostHistoryImport503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport503Error1.cs` |
| `ApiV1PostHistoryImport504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImport504Error1.cs` |

### PostImportRetryImport

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostImportRetryImport(PostImportRetryImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1PostHistoryImportRetryResponse`
- **Error**: `ApiException<PostImportRetryImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1PostHistoryImportRetry400Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry400Error1? value)` [400] · `TryGetApiV1PostHistoryImportRetry401Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry401Error1? value)` [401] · `TryGetApiV1PostHistoryImportRetry403Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry403Error1? value)` [403] · `TryGetApiV1PostHistoryImportRetry404Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry404Error1? value)` [404] · `TryGetApiV1PostHistoryImportRetry429Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry429Error1? value)` [429] · `TryGetApiV1PostHistoryImportRetry500Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry500Error1? value)` [500] · `TryGetApiV1PostHistoryImportRetry502Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry502Error1? value)` [502] · `TryGetApiV1PostHistoryImportRetry503Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry503Error1? value)` [503] · `TryGetApiV1PostHistoryImportRetry504Error1([NotNullWhen(true)] out ApiV1PostHistoryImportRetry504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostImportRetryImportRequest` | `src/BundleSocial/Requests/PostImport/PostImportRetryImportRequest.cs` |
| `ApiV1PostHistoryImportRetryRequest` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetryRequest.cs` |
| `ApiV1PostHistoryImportRetryResponse` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetryResponse.cs` |
| `PostImportRetryImportError` | `src/BundleSocial/Errors/PostImportRetryImportError.cs` |
| `ApiV1PostHistoryImportRetry400Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry400Error1.cs` |
| `ApiV1PostHistoryImportRetry401Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry401Error1.cs` |
| `ApiV1PostHistoryImportRetry403Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry403Error1.cs` |
| `ApiV1PostHistoryImportRetry404Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry404Error1.cs` |
| `ApiV1PostHistoryImportRetry429Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry429Error1.cs` |
| `ApiV1PostHistoryImportRetry500Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry500Error1.cs` |
| `ApiV1PostHistoryImportRetry502Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry502Error1.cs` |
| `ApiV1PostHistoryImportRetry503Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry503Error1.cs` |
| `ApiV1PostHistoryImportRetry504Error1` | `src/BundleSocial/Models/ApiV1PostHistoryImportRetry504Error1.cs` |


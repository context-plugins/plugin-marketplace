<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentApi — operations

Accessor: `client.CommentApi` · Source: `src/BundleSocial/Api/CommentApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CommentCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentCreate(CommentCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1CommentResponse`
- **Error**: `ApiException<CommentCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value)` [400] · `TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value)` [401] · `TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value)` [403] · `TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value)` [404] · `TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value)` [429] · `TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value)` [500] · `TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value)` [502] · `TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value)` [503] · `TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentCreateRequest` | `src/BundleSocial/Requests/CommentApi/CommentCreateRequest.cs` |
| `ApiV1CommentRequest1` | `src/BundleSocial/Models/ApiV1CommentRequest1.cs` |
| `ApiV1CommentResponse` | `src/BundleSocial/Models/ApiV1CommentResponse.cs` |
| `CommentCreateError` | `src/BundleSocial/Errors/CommentCreateError.cs` |
| `ApiV1Comment400Error1` | `src/BundleSocial/Models/ApiV1Comment400Error1.cs` |
| `ApiV1Comment401Error1` | `src/BundleSocial/Models/ApiV1Comment401Error1.cs` |
| `ApiV1Comment403Error1` | `src/BundleSocial/Models/ApiV1Comment403Error1.cs` |
| `ApiV1Comment404Error1` | `src/BundleSocial/Models/ApiV1Comment404Error1.cs` |
| `ApiV1Comment429Error1` | `src/BundleSocial/Models/ApiV1Comment429Error1.cs` |
| `ApiV1Comment500Error1` | `src/BundleSocial/Models/ApiV1Comment500Error1.cs` |
| `ApiV1Comment502Error1` | `src/BundleSocial/Models/ApiV1Comment502Error1.cs` |
| `ApiV1Comment503Error1` | `src/BundleSocial/Models/ApiV1Comment503Error1.cs` |
| `ApiV1Comment504Error1` | `src/BundleSocial/Models/ApiV1Comment504Error1.cs` |

### CommentDelete

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentDelete(CommentDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CommentResponse`
- **Error**: `ApiException<CommentDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value)` [400] · `TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value)` [401] · `TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value)` [403] · `TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value)` [404] · `TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value)` [429] · `TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value)` [500] · `TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value)` [502] · `TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value)` [503] · `TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentDeleteRequest` | `src/BundleSocial/Requests/CommentApi/CommentDeleteRequest.cs` |
| `ApiV1CommentResponse` | `src/BundleSocial/Models/ApiV1CommentResponse.cs` |
| `CommentDeleteError` | `src/BundleSocial/Errors/CommentDeleteError.cs` |
| `ApiV1Comment400Error1` | `src/BundleSocial/Models/ApiV1Comment400Error1.cs` |
| `ApiV1Comment401Error1` | `src/BundleSocial/Models/ApiV1Comment401Error1.cs` |
| `ApiV1Comment403Error1` | `src/BundleSocial/Models/ApiV1Comment403Error1.cs` |
| `ApiV1Comment404Error1` | `src/BundleSocial/Models/ApiV1Comment404Error1.cs` |
| `ApiV1Comment429Error1` | `src/BundleSocial/Models/ApiV1Comment429Error1.cs` |
| `ApiV1Comment500Error1` | `src/BundleSocial/Models/ApiV1Comment500Error1.cs` |
| `ApiV1Comment502Error1` | `src/BundleSocial/Models/ApiV1Comment502Error1.cs` |
| `ApiV1Comment503Error1` | `src/BundleSocial/Models/ApiV1Comment503Error1.cs` |
| `ApiV1Comment504Error1` | `src/BundleSocial/Models/ApiV1Comment504Error1.cs` |

### CommentGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentGet(CommentGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CommentResponse`
- **Error**: `ApiException<CommentGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value)` [400] · `TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value)` [401] · `TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value)` [403] · `TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value)` [404] · `TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value)` [429] · `TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value)` [500] · `TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value)` [502] · `TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value)` [503] · `TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentGetRequest` | `src/BundleSocial/Requests/CommentApi/CommentGetRequest.cs` |
| `ApiV1CommentResponse` | `src/BundleSocial/Models/ApiV1CommentResponse.cs` |
| `CommentGetError` | `src/BundleSocial/Errors/CommentGetError.cs` |
| `ApiV1Comment400Error1` | `src/BundleSocial/Models/ApiV1Comment400Error1.cs` |
| `ApiV1Comment401Error1` | `src/BundleSocial/Models/ApiV1Comment401Error1.cs` |
| `ApiV1Comment403Error1` | `src/BundleSocial/Models/ApiV1Comment403Error1.cs` |
| `ApiV1Comment404Error1` | `src/BundleSocial/Models/ApiV1Comment404Error1.cs` |
| `ApiV1Comment429Error1` | `src/BundleSocial/Models/ApiV1Comment429Error1.cs` |
| `ApiV1Comment500Error1` | `src/BundleSocial/Models/ApiV1Comment500Error1.cs` |
| `ApiV1Comment502Error1` | `src/BundleSocial/Models/ApiV1Comment502Error1.cs` |
| `ApiV1Comment503Error1` | `src/BundleSocial/Models/ApiV1Comment503Error1.cs` |
| `ApiV1Comment504Error1` | `src/BundleSocial/Models/ApiV1Comment504Error1.cs` |

### CommentGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentGetList(CommentGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `postId` ← `PostId`, `importedPostId` ← `ImportedPostId`, `status` ← `Status`, `orderBy` ← `OrderBy`, `order` ← `Order`, `q` ← `Q`, `platforms` ← `Platforms`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1CommentResponse3`
- **Error**: `ApiException<CommentGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value)` [400] · `TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value)` [401] · `TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value)` [403] · `TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value)` [404] · `TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value)` [429] · `TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value)` [500] · `TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value)` [502] · `TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value)` [503] · `TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentGetListRequest` | `src/BundleSocial/Requests/CommentApi/CommentGetListRequest.cs` |
| `Status4` | `src/BundleSocial/Models/Enums/Status4.cs` |
| `OrderBy` | `src/BundleSocial/Models/Enums/OrderBy.cs` |
| `Order` | `src/BundleSocial/Models/Enums/Order.cs` |
| `Platform6` | `src/BundleSocial/Models/Enums/Platform6.cs` |
| `ApiV1CommentResponse3` | `src/BundleSocial/Models/ApiV1CommentResponse3.cs` |
| `CommentGetListError` | `src/BundleSocial/Errors/CommentGetListError.cs` |
| `ApiV1Comment400Error1` | `src/BundleSocial/Models/ApiV1Comment400Error1.cs` |
| `ApiV1Comment401Error1` | `src/BundleSocial/Models/ApiV1Comment401Error1.cs` |
| `ApiV1Comment403Error1` | `src/BundleSocial/Models/ApiV1Comment403Error1.cs` |
| `ApiV1Comment404Error1` | `src/BundleSocial/Models/ApiV1Comment404Error1.cs` |
| `ApiV1Comment429Error1` | `src/BundleSocial/Models/ApiV1Comment429Error1.cs` |
| `ApiV1Comment500Error1` | `src/BundleSocial/Models/ApiV1Comment500Error1.cs` |
| `ApiV1Comment502Error1` | `src/BundleSocial/Models/ApiV1Comment502Error1.cs` |
| `ApiV1Comment503Error1` | `src/BundleSocial/Models/ApiV1Comment503Error1.cs` |
| `ApiV1Comment504Error1` | `src/BundleSocial/Models/ApiV1Comment504Error1.cs` |

### CommentImportActionFetchedComment

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentImportActionFetchedComment(CommentImportActionFetchedCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CommentId`
- **Returns**: `ApiV1CommentImportCommentsActionResponse`
- **Error**: `ApiException<CommentImportActionFetchedCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentImportCommentsAction400Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction400Error1? value)` [400] · `TryGetApiV1CommentImportCommentsAction401Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction401Error1? value)` [401] · `TryGetApiV1CommentImportCommentsAction403Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction403Error1? value)` [403] · `TryGetApiV1CommentImportCommentsAction404Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction404Error1? value)` [404] · `TryGetApiV1CommentImportCommentsAction429Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction429Error1? value)` [429] · `TryGetApiV1CommentImportCommentsAction500Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction500Error1? value)` [500] · `TryGetApiV1CommentImportCommentsAction502Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction502Error1? value)` [502] · `TryGetApiV1CommentImportCommentsAction503Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction503Error1? value)` [503] · `TryGetApiV1CommentImportCommentsAction504Error1([NotNullWhen(true)] out ApiV1CommentImportCommentsAction504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentImportActionFetchedCommentRequest` | `src/BundleSocial/Requests/CommentApi/CommentImportActionFetchedCommentRequest.cs` |
| `ApiV1CommentImportCommentsActionRequest` | `src/BundleSocial/Models/ApiV1CommentImportCommentsActionRequest.cs` |
| `ApiV1CommentImportCommentsActionResponse` | `src/BundleSocial/Models/ApiV1CommentImportCommentsActionResponse.cs` |
| `CommentImportActionFetchedCommentError` | `src/BundleSocial/Errors/CommentImportActionFetchedCommentError.cs` |
| `ApiV1CommentImportCommentsAction400Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction400Error1.cs` |
| `ApiV1CommentImportCommentsAction401Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction401Error1.cs` |
| `ApiV1CommentImportCommentsAction403Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction403Error1.cs` |
| `ApiV1CommentImportCommentsAction404Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction404Error1.cs` |
| `ApiV1CommentImportCommentsAction429Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction429Error1.cs` |
| `ApiV1CommentImportCommentsAction500Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction500Error1.cs` |
| `ApiV1CommentImportCommentsAction502Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction502Error1.cs` |
| `ApiV1CommentImportCommentsAction503Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction503Error1.cs` |
| `ApiV1CommentImportCommentsAction504Error1` | `src/BundleSocial/Models/ApiV1CommentImportCommentsAction504Error1.cs` |

### CommentImportCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentImportCreate(CommentImportCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1CommentImportResponse`
- **Error**: `ApiException<CommentImportCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentImport400Error1([NotNullWhen(true)] out ApiV1CommentImport400Error1? value)` [400] · `TryGetApiV1CommentImport401Error1([NotNullWhen(true)] out ApiV1CommentImport401Error1? value)` [401] · `TryGetApiV1CommentImport403Error1([NotNullWhen(true)] out ApiV1CommentImport403Error1? value)` [403] · `TryGetApiV1CommentImport404Error1([NotNullWhen(true)] out ApiV1CommentImport404Error1? value)` [404] · `TryGetApiV1CommentImport409Error1([NotNullWhen(true)] out ApiV1CommentImport409Error1? value)` [409] · `TryGetApiV1CommentImport429Error1([NotNullWhen(true)] out ApiV1CommentImport429Error1? value)` [429] · `TryGetApiV1CommentImport500Error1([NotNullWhen(true)] out ApiV1CommentImport500Error1? value)` [500] · `TryGetApiV1CommentImport502Error1([NotNullWhen(true)] out ApiV1CommentImport502Error1? value)` [502] · `TryGetApiV1CommentImport503Error1([NotNullWhen(true)] out ApiV1CommentImport503Error1? value)` [503] · `TryGetApiV1CommentImport504Error1([NotNullWhen(true)] out ApiV1CommentImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentImportCreateRequest` | `src/BundleSocial/Requests/CommentApi/CommentImportCreateRequest.cs` |
| `ApiV1CommentImportRequest` | `src/BundleSocial/Models/ApiV1CommentImportRequest.cs` |
| `ApiV1CommentImportResponse` | `src/BundleSocial/Models/ApiV1CommentImportResponse.cs` |
| `CommentImportCreateError` | `src/BundleSocial/Errors/CommentImportCreateError.cs` |
| `ApiV1CommentImport400Error1` | `src/BundleSocial/Models/ApiV1CommentImport400Error1.cs` |
| `ApiV1CommentImport401Error1` | `src/BundleSocial/Models/ApiV1CommentImport401Error1.cs` |
| `ApiV1CommentImport403Error1` | `src/BundleSocial/Models/ApiV1CommentImport403Error1.cs` |
| `ApiV1CommentImport404Error1` | `src/BundleSocial/Models/ApiV1CommentImport404Error1.cs` |
| `ApiV1CommentImport409Error1` | `src/BundleSocial/Models/ApiV1CommentImport409Error1.cs` |
| `ApiV1CommentImport429Error1` | `src/BundleSocial/Models/ApiV1CommentImport429Error1.cs` |
| `ApiV1CommentImport500Error1` | `src/BundleSocial/Models/ApiV1CommentImport500Error1.cs` |
| `ApiV1CommentImport502Error1` | `src/BundleSocial/Models/ApiV1CommentImport502Error1.cs` |
| `ApiV1CommentImport503Error1` | `src/BundleSocial/Models/ApiV1CommentImport503Error1.cs` |
| `ApiV1CommentImport504Error1` | `src/BundleSocial/Models/ApiV1CommentImport504Error1.cs` |

### CommentImportGetById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentImportGetById(CommentImportGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ImportId`
- **Returns**: `ApiV1CommentImportResponse`
- **Error**: `ApiException<CommentImportGetByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentImport400Error1([NotNullWhen(true)] out ApiV1CommentImport400Error1? value)` [400] · `TryGetApiV1CommentImport401Error1([NotNullWhen(true)] out ApiV1CommentImport401Error1? value)` [401] · `TryGetApiV1CommentImport403Error1([NotNullWhen(true)] out ApiV1CommentImport403Error1? value)` [403] · `TryGetApiV1CommentImport404Error1([NotNullWhen(true)] out ApiV1CommentImport404Error1? value)` [404] · `TryGetApiV1CommentImport429Error1([NotNullWhen(true)] out ApiV1CommentImport429Error1? value)` [429] · `TryGetApiV1CommentImport500Error1([NotNullWhen(true)] out ApiV1CommentImport500Error1? value)` [500] · `TryGetApiV1CommentImport502Error1([NotNullWhen(true)] out ApiV1CommentImport502Error1? value)` [502] · `TryGetApiV1CommentImport503Error1([NotNullWhen(true)] out ApiV1CommentImport503Error1? value)` [503] · `TryGetApiV1CommentImport504Error1([NotNullWhen(true)] out ApiV1CommentImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentImportGetByIdRequest` | `src/BundleSocial/Requests/CommentApi/CommentImportGetByIdRequest.cs` |
| `ApiV1CommentImportResponse` | `src/BundleSocial/Models/ApiV1CommentImportResponse.cs` |
| `CommentImportGetByIdError` | `src/BundleSocial/Errors/CommentImportGetByIdError.cs` |
| `ApiV1CommentImport400Error1` | `src/BundleSocial/Models/ApiV1CommentImport400Error1.cs` |
| `ApiV1CommentImport401Error1` | `src/BundleSocial/Models/ApiV1CommentImport401Error1.cs` |
| `ApiV1CommentImport403Error1` | `src/BundleSocial/Models/ApiV1CommentImport403Error1.cs` |
| `ApiV1CommentImport404Error1` | `src/BundleSocial/Models/ApiV1CommentImport404Error1.cs` |
| `ApiV1CommentImport429Error1` | `src/BundleSocial/Models/ApiV1CommentImport429Error1.cs` |
| `ApiV1CommentImport500Error1` | `src/BundleSocial/Models/ApiV1CommentImport500Error1.cs` |
| `ApiV1CommentImport502Error1` | `src/BundleSocial/Models/ApiV1CommentImport502Error1.cs` |
| `ApiV1CommentImport503Error1` | `src/BundleSocial/Models/ApiV1CommentImport503Error1.cs` |
| `ApiV1CommentImport504Error1` | `src/BundleSocial/Models/ApiV1CommentImport504Error1.cs` |

### CommentImportGetFetchedComments

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentImportGetFetchedComments(CommentImportGetFetchedCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `postId` ← `PostId`, `importedPostId` ← `ImportedPostId`, `platform` ← `Platform`, `socialAccountId` ← `SocialAccountId`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1CommentImportCommentsResponse`
- **Error**: `ApiException<CommentImportGetFetchedCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentImportComments400Error1([NotNullWhen(true)] out ApiV1CommentImportComments400Error1? value)` [400] · `TryGetApiV1CommentImportComments401Error1([NotNullWhen(true)] out ApiV1CommentImportComments401Error1? value)` [401] · `TryGetApiV1CommentImportComments403Error1([NotNullWhen(true)] out ApiV1CommentImportComments403Error1? value)` [403] · `TryGetApiV1CommentImportComments404Error1([NotNullWhen(true)] out ApiV1CommentImportComments404Error1? value)` [404] · `TryGetApiV1CommentImportComments429Error1([NotNullWhen(true)] out ApiV1CommentImportComments429Error1? value)` [429] · `TryGetApiV1CommentImportComments500Error1([NotNullWhen(true)] out ApiV1CommentImportComments500Error1? value)` [500] · `TryGetApiV1CommentImportComments502Error1([NotNullWhen(true)] out ApiV1CommentImportComments502Error1? value)` [502] · `TryGetApiV1CommentImportComments503Error1([NotNullWhen(true)] out ApiV1CommentImportComments503Error1? value)` [503] · `TryGetApiV1CommentImportComments504Error1([NotNullWhen(true)] out ApiV1CommentImportComments504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentImportGetFetchedCommentsRequest` | `src/BundleSocial/Requests/CommentApi/CommentImportGetFetchedCommentsRequest.cs` |
| `PlatformBundleSocialCommentApi` | `src/BundleSocial/Models/Enums/PlatformBundleSocialCommentApi.cs` |
| `ApiV1CommentImportCommentsResponse` | `src/BundleSocial/Models/ApiV1CommentImportCommentsResponse.cs` |
| `CommentImportGetFetchedCommentsError` | `src/BundleSocial/Errors/CommentImportGetFetchedCommentsError.cs` |
| `ApiV1CommentImportComments400Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments400Error1.cs` |
| `ApiV1CommentImportComments401Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments401Error1.cs` |
| `ApiV1CommentImportComments403Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments403Error1.cs` |
| `ApiV1CommentImportComments404Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments404Error1.cs` |
| `ApiV1CommentImportComments429Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments429Error1.cs` |
| `ApiV1CommentImportComments500Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments500Error1.cs` |
| `ApiV1CommentImportComments502Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments502Error1.cs` |
| `ApiV1CommentImportComments503Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments503Error1.cs` |
| `ApiV1CommentImportComments504Error1` | `src/BundleSocial/Models/ApiV1CommentImportComments504Error1.cs` |

### CommentImportGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentImportGetList(CommentImportGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `postId` ← `PostId`, `importedPostId` ← `ImportedPostId`, `status` ← `Status`, `offset` ← `Offset`, `limit` ← `Limit`
- **Returns**: `ApiV1CommentImportResponse1`
- **Error**: `ApiException<CommentImportGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentImport400Error1([NotNullWhen(true)] out ApiV1CommentImport400Error1? value)` [400] · `TryGetApiV1CommentImport401Error1([NotNullWhen(true)] out ApiV1CommentImport401Error1? value)` [401] · `TryGetApiV1CommentImport403Error1([NotNullWhen(true)] out ApiV1CommentImport403Error1? value)` [403] · `TryGetApiV1CommentImport404Error1([NotNullWhen(true)] out ApiV1CommentImport404Error1? value)` [404] · `TryGetApiV1CommentImport429Error1([NotNullWhen(true)] out ApiV1CommentImport429Error1? value)` [429] · `TryGetApiV1CommentImport500Error1([NotNullWhen(true)] out ApiV1CommentImport500Error1? value)` [500] · `TryGetApiV1CommentImport502Error1([NotNullWhen(true)] out ApiV1CommentImport502Error1? value)` [502] · `TryGetApiV1CommentImport503Error1([NotNullWhen(true)] out ApiV1CommentImport503Error1? value)` [503] · `TryGetApiV1CommentImport504Error1([NotNullWhen(true)] out ApiV1CommentImport504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentImportGetListRequest` | `src/BundleSocial/Requests/CommentApi/CommentImportGetListRequest.cs` |
| `StatusBundleSocialCommentApi` | `src/BundleSocial/Models/Enums/StatusBundleSocialCommentApi.cs` |
| `ApiV1CommentImportResponse1` | `src/BundleSocial/Models/ApiV1CommentImportResponse1.cs` |
| `CommentImportGetListError` | `src/BundleSocial/Errors/CommentImportGetListError.cs` |
| `ApiV1CommentImport400Error1` | `src/BundleSocial/Models/ApiV1CommentImport400Error1.cs` |
| `ApiV1CommentImport401Error1` | `src/BundleSocial/Models/ApiV1CommentImport401Error1.cs` |
| `ApiV1CommentImport403Error1` | `src/BundleSocial/Models/ApiV1CommentImport403Error1.cs` |
| `ApiV1CommentImport404Error1` | `src/BundleSocial/Models/ApiV1CommentImport404Error1.cs` |
| `ApiV1CommentImport429Error1` | `src/BundleSocial/Models/ApiV1CommentImport429Error1.cs` |
| `ApiV1CommentImport500Error1` | `src/BundleSocial/Models/ApiV1CommentImport500Error1.cs` |
| `ApiV1CommentImport502Error1` | `src/BundleSocial/Models/ApiV1CommentImport502Error1.cs` |
| `ApiV1CommentImport503Error1` | `src/BundleSocial/Models/ApiV1CommentImport503Error1.cs` |
| `ApiV1CommentImport504Error1` | `src/BundleSocial/Models/ApiV1CommentImport504Error1.cs` |

### CommentRetry

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentRetry(CommentRetryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CommentRetryResponse`
- **Error**: `ApiException<CommentRetryError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1CommentRetry400Error1([NotNullWhen(true)] out ApiV1CommentRetry400Error1? value)` [400] · `TryGetApiV1CommentRetry401Error1([NotNullWhen(true)] out ApiV1CommentRetry401Error1? value)` [401] · `TryGetApiV1CommentRetry403Error1([NotNullWhen(true)] out ApiV1CommentRetry403Error1? value)` [403] · `TryGetApiV1CommentRetry404Error1([NotNullWhen(true)] out ApiV1CommentRetry404Error1? value)` [404] · `TryGetApiV1CommentRetry429Error1([NotNullWhen(true)] out ApiV1CommentRetry429Error1? value)` [429] · `TryGetApiV1CommentRetry500Error1([NotNullWhen(true)] out ApiV1CommentRetry500Error1? value)` [500] · `TryGetApiV1CommentRetry502Error1([NotNullWhen(true)] out ApiV1CommentRetry502Error1? value)` [502] · `TryGetApiV1CommentRetry503Error1([NotNullWhen(true)] out ApiV1CommentRetry503Error1? value)` [503] · `TryGetApiV1CommentRetry504Error1([NotNullWhen(true)] out ApiV1CommentRetry504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentRetryRequest` | `src/BundleSocial/Requests/CommentApi/CommentRetryRequest.cs` |
| `ApiV1CommentRetryResponse` | `src/BundleSocial/Models/ApiV1CommentRetryResponse.cs` |
| `CommentRetryError` | `src/BundleSocial/Errors/CommentRetryError.cs` |
| `ApiV1CommentRetry400Error1` | `src/BundleSocial/Models/ApiV1CommentRetry400Error1.cs` |
| `ApiV1CommentRetry401Error1` | `src/BundleSocial/Models/ApiV1CommentRetry401Error1.cs` |
| `ApiV1CommentRetry403Error1` | `src/BundleSocial/Models/ApiV1CommentRetry403Error1.cs` |
| `ApiV1CommentRetry404Error1` | `src/BundleSocial/Models/ApiV1CommentRetry404Error1.cs` |
| `ApiV1CommentRetry429Error1` | `src/BundleSocial/Models/ApiV1CommentRetry429Error1.cs` |
| `ApiV1CommentRetry500Error1` | `src/BundleSocial/Models/ApiV1CommentRetry500Error1.cs` |
| `ApiV1CommentRetry502Error1` | `src/BundleSocial/Models/ApiV1CommentRetry502Error1.cs` |
| `ApiV1CommentRetry503Error1` | `src/BundleSocial/Models/ApiV1CommentRetry503Error1.cs` |
| `ApiV1CommentRetry504Error1` | `src/BundleSocial/Models/ApiV1CommentRetry504Error1.cs` |

### CommentUpdate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CommentUpdate(CommentUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1CommentResponse`
- **Error**: `ApiException<CommentUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Comment400Error1([NotNullWhen(true)] out ApiV1Comment400Error1? value)` [400] · `TryGetApiV1Comment401Error1([NotNullWhen(true)] out ApiV1Comment401Error1? value)` [401] · `TryGetApiV1Comment403Error1([NotNullWhen(true)] out ApiV1Comment403Error1? value)` [403] · `TryGetApiV1Comment404Error1([NotNullWhen(true)] out ApiV1Comment404Error1? value)` [404] · `TryGetApiV1Comment429Error1([NotNullWhen(true)] out ApiV1Comment429Error1? value)` [429] · `TryGetApiV1Comment500Error1([NotNullWhen(true)] out ApiV1Comment500Error1? value)` [500] · `TryGetApiV1Comment502Error1([NotNullWhen(true)] out ApiV1Comment502Error1? value)` [502] · `TryGetApiV1Comment503Error1([NotNullWhen(true)] out ApiV1Comment503Error1? value)` [503] · `TryGetApiV1Comment504Error1([NotNullWhen(true)] out ApiV1Comment504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CommentUpdateRequest` | `src/BundleSocial/Requests/CommentApi/CommentUpdateRequest.cs` |
| `ApiV1CommentRequest` | `src/BundleSocial/Models/ApiV1CommentRequest.cs` |
| `ApiV1CommentResponse` | `src/BundleSocial/Models/ApiV1CommentResponse.cs` |
| `CommentUpdateError` | `src/BundleSocial/Errors/CommentUpdateError.cs` |
| `ApiV1Comment400Error1` | `src/BundleSocial/Models/ApiV1Comment400Error1.cs` |
| `ApiV1Comment401Error1` | `src/BundleSocial/Models/ApiV1Comment401Error1.cs` |
| `ApiV1Comment403Error1` | `src/BundleSocial/Models/ApiV1Comment403Error1.cs` |
| `ApiV1Comment404Error1` | `src/BundleSocial/Models/ApiV1Comment404Error1.cs` |
| `ApiV1Comment429Error1` | `src/BundleSocial/Models/ApiV1Comment429Error1.cs` |
| `ApiV1Comment500Error1` | `src/BundleSocial/Models/ApiV1Comment500Error1.cs` |
| `ApiV1Comment502Error1` | `src/BundleSocial/Models/ApiV1Comment502Error1.cs` |
| `ApiV1Comment503Error1` | `src/BundleSocial/Models/ApiV1Comment503Error1.cs` |
| `ApiV1Comment504Error1` | `src/BundleSocial/Models/ApiV1Comment504Error1.cs` |


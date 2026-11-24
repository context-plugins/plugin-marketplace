<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.Posts` · Source: `src/FacebookBusinessManager/Api/Posts.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePagePost

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePagePost(CreatePagePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`, `Body`
- **Returns**: `CreateResponse`
- **Error**: `ApiException<CreatePagePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePagePostRequest` | `src/FacebookBusinessManager/Requests/Posts/CreatePagePostRequest.cs` |
| `PostCreate` | `src/FacebookBusinessManager/Models/PostCreate.cs` |
| `CreateResponse` | `src/FacebookBusinessManager/Models/CreateResponse.cs` |
| `CreatePagePostError` | `src/FacebookBusinessManager/Errors/CreatePagePostError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### DeletePost

- **Auth**: `options.BearerAuth`
- **Signature**: `DeletePost(DeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostId`
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `ApiException<DeletePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePostRequest` | `src/FacebookBusinessManager/Requests/Posts/DeletePostRequest.cs` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs` |
| `DeletePostError` | `src/FacebookBusinessManager/Errors/DeletePostError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetPageFeed

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPageFeed(GetPageFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PageId`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `PostList`
- **Error**: `ApiException<GetPageFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPageFeedRequest` | `src/FacebookBusinessManager/Requests/Posts/GetPageFeedRequest.cs` |
| `PostList` | `src/FacebookBusinessManager/Models/PostList.cs` |
| `GetPageFeedError` | `src/FacebookBusinessManager/Errors/GetPageFeedError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### GetPost

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPost(GetPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostId`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `Post`
- **Error**: `ApiException<GetPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPostRequest` | `src/FacebookBusinessManager/Requests/Posts/GetPostRequest.cs` |
| `Post` | `src/FacebookBusinessManager/Models/Post.cs` |
| `GetPostError` | `src/FacebookBusinessManager/Errors/GetPostError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |

### UpdatePost

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePost(UpdatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PostId`, `Body`
- **Returns**: `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi`
- **Error**: `ApiException<UpdatePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePostRequest` | `src/FacebookBusinessManager/Requests/Posts/UpdatePostRequest.cs` |
| `RequestModel` | `src/FacebookBusinessManager/Models/RequestModel.cs` |
| `SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi` | `src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs` |
| `UpdatePostError` | `src/FacebookBusinessManager/Errors/UpdatePostError.cs` |
| `Error` | `src/FacebookBusinessManager/Models/Error.cs` |


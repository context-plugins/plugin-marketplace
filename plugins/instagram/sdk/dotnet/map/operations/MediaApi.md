<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaApi — operations

Accessor: `client.MediaApi` · Source: `src/Instagram/Api/MediaApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMedia

- **Signature**: `DeleteMedia(DeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`
- **Returns**: `ResponseModel`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteMediaRequest` | `src/Instagram/Requests/MediaApi/DeleteMediaRequest.cs` |
| `ResponseModel` | `src/Instagram/Models/ResponseModel.cs` |

### GetMedia

- **Signature**: `GetMedia(GetMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `Media`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMediaRequest` | `src/Instagram/Requests/MediaApi/GetMediaRequest.cs` |
| `Media` | `src/Instagram/Models/Media.cs` |

### GetMediaChildren

- **Signature**: `GetMediaChildren(GetMediaChildrenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetMediaChildrenRequest` | `src/Instagram/Requests/MediaApi/GetMediaChildrenRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

### GetUserMedia

- **Signature**: `GetUserMedia(GetUserMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`, `limit` ← `Limit`, `after` ← `After`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserMediaRequest` | `src/Instagram/Requests/MediaApi/GetUserMediaRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

### GetUserStories

- **Signature**: `GetUserStories(GetUserStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `MediaList`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserStoriesRequest` | `src/Instagram/Requests/MediaApi/GetUserStoriesRequest.cs` |
| `MediaList` | `src/Instagram/Models/MediaList.cs` |

### UpdateMedia

- **Signature**: `UpdateMedia(UpdateMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `MediaId`
- **Returns**: `SuccessResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateMediaRequest` | `src/Instagram/Requests/MediaApi/UpdateMediaRequest.cs` |
| `RequestInstagramGraphMediaApi` | `src/Instagram/Models/RequestInstagramGraphMediaApi.cs` |
| `SuccessResponse` | `src/Instagram/Models/SuccessResponse.cs` |


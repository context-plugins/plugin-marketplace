# GroupsVideos — operations

Accessor: `client.GroupsVideos` · Source: `Api/GroupsVideos.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToGroup
- **HTTP**: `PUT /groups/{group_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a video to the specified group. The authenticated user must be the owner of the group.
- **Signature**: `AddVideoToGroup(double groupId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<AddVideoToGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromGroup
- **HTTP**: `DELETE /groups/{group_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a video from the specified group. The authenticated user must be the owner of the group.
- **Signature**: `DeleteVideoFromGroup(double groupId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoFromGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAvailableVideoGroups
- **HTTP**: `GET /videos/{video_id}/available_groups` (Default (api))
- **Notes**: This method returns every group to which the authenticated user can add or remove the specified video.
- **Signature**: `GetAvailableVideoGroups(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GroupConnection`
- **Error**: `SdkException<GetAvailableVideoGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGroupVideo
- **HTTP**: `GET /groups/{group_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.
- **Signature**: `GetGroupVideo(double groupId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<GetGroupVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGroupVideos
- **HTTP**: `GET /groups/{group_id}/videos` (Default (api))
- **Notes**: This method returns every video from the specified group.
- **Signature**: `GetGroupVideos(double groupId, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort15? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetGroupVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

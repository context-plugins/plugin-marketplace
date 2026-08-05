# ChannelsVideos — operations

Accessor: `client.ChannelsVideos` · Source: `Api/ChannelsVideos.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToChannel
- **HTTP**: `PUT /channels/{channel_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a single video to the specified channel. The authenticated user must be a moderator of the channel.
- **Signature**: `AddVideoToChannel(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideoToChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideosToChannel
- **HTTP**: `PUT /channels/{channel_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified channel. The authenticated user must be a moderator of the channel.
- **Signature**: `AddVideosToChannel(double channelId, ChannelsVideosRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromChannel
- **HTTP**: `DELETE /channels/{channel_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a single video from the specified channel. The authenticated user must be a moderator of the channel.
- **Signature**: `DeleteVideoFromChannel(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoFromChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAvailableVideoChannels
- **HTTP**: `GET /videos/{video_id}/available_channels` (Default (api))
- **Notes**: This method returns every channel to which the authenticated user can add or remove the specified video. The authenticated user must be a moderator of the channel.
- **Signature**: `GetAvailableVideoChannels(double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChannelConnection`
- **Error**: `SdkException<GetAvailableVideoChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelVideo
- **HTTP**: `GET /channels/{channel_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video in the specified channel. You can use it to determine whether the video is in the channel.
- **Signature**: `GetChannelVideo(double channelId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<GetChannelVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelVideos
- **HTTP**: `GET /channels/{channel_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified channel.
- **Signature**: `GetChannelVideos(double channelId, string? containingUri, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, string? sizes, Sort10? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sizes` ← `sizes`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetChannelVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RemoveVideosFromChannel
- **HTTP**: `DELETE /channels/{channel_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified channel. Include the videos by their URI as a JSON block in the body of the request using the video_uri field, like this: `[{ "video_uri": "/videos/1234" }, { "video_uri": "/videos/1235" }]`. The authenticated user must be a moderator of the channel. For more information on batch requests like this one, see Using Common Formats and Parameters .
- **Signature**: `RemoveVideosFromChannel(double channelId, ChannelsVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

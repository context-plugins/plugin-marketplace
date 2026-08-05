# OnDemandVideos — operations

Accessor: `client.OnDemandVideos` · Source: `Api/OnDemandVideos.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideoToVod
- **HTTP**: `PUT /ondemand/pages/{ondemand_id}/videos/{video_id}` (Default (api))
- **Notes**: This method adds a video to the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `AddVideoToVod(double ondemandId, double videoId, OndemandPagesVideosRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OnDemandVideo`
- **Error**: `SdkException<AddVideoToVodError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteVideoFromVod
- **HTTP**: `DELETE /ondemand/pages/{ondemand_id}/videos/{video_id}` (Default (api))
- **Notes**: This method removes a video from the specified On Demand page. The authenticated user must be the owner of the page.
- **Signature**: `DeleteVideoFromVod(double ondemandId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteVideoFromVodError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetVodVideo
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video on the specified On Demand page. Use this method to determine whether the video is on the page.
- **Signature**: `GetVodVideo(double ondemandId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetVodVideos
- **HTTP**: `GET /ondemand/pages/{ondemand_id}/videos` (Default (api))
- **Notes**: This method returns every video on the specified On Demand page.
- **Signature**: `GetVodVideos(double ondemandId, Direction? direction, Filter29? filter, double? page, double? perPage, Sort45? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `OnDemandVideoConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

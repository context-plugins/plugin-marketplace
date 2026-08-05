# LiveEventVideos — operations

Accessor: `client.LiveEventVideos` · Source: `Api/LiveEventVideos.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddVideosToLiveEvent
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified event.
- **Signature**: `AddVideosToLiveEvent(double liveEventId, double userId, UsersLiveEventsVideosRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideosToLiveEventAlt1
- **HTTP**: `POST /live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified event.
- **Signature**: `AddVideosToLiveEventAlt1(double liveEventId, LiveEventsVideosRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddVideosToLiveEventAlt2
- **HTTP**: `POST /me/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method adds multiple videos to the specified event.
- **Signature**: `AddVideosToLiveEventAlt2(double liveEventId, MeLiveEventsVideosRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddVideosToLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventVideo
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video in the specified event.
- **Signature**: `GetLiveEventVideo(double liveEventId, double userId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<GetLiveEventVideoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventVideoAlt1
- **HTTP**: `GET /live_events/{live_event_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video in the specified event.
- **Signature**: `GetLiveEventVideoAlt1(double liveEventId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<GetLiveEventVideoAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventVideoAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}/videos/{video_id}` (Default (api))
- **Notes**: This method returns a single video in the specified event.
- **Signature**: `GetLiveEventVideoAlt2(double liveEventId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Video`
- **Error**: `SdkException<GetLiveEventVideoAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventVideos
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified event.
- **Signature**: `GetLiveEventVideos(double liveEventId, double userId, string? containingUri, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort17? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetLiveEventVideosError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLiveEventVideosAlt1
- **HTTP**: `GET /live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified event.
- **Signature**: `GetLiveEventVideosAlt1(double liveEventId, string? containingUri, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort17? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetLiveEventVideosAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLiveEventVideosAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method returns every video in the specified event.
- **Signature**: `GetLiveEventVideosAlt2(double liveEventId, string? containingUri, Direction? direction, Filter3? filter, bool? filterEmbeddable, double? page, double? perPage, string? query, Sort17? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`containingUri` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `containing_uri` ← `containingUri`, `direction` ← `direction`, `filter` ← `filter`, `filter_embeddable` ← `filterEmbeddable`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`
- **Returns**: `VideoConnection`
- **Error**: `SdkException<GetLiveEventVideosAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### RemoveVideosFromLiveEvent
- **HTTP**: `DELETE /users/{user_id}/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified event.
- **Signature**: `RemoveVideosFromLiveEvent(double liveEventId, double userId, UsersLiveEventsVideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideosFromLiveEventAlt1
- **HTTP**: `DELETE /live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified event.
- **Signature**: `RemoveVideosFromLiveEventAlt1(double liveEventId, LiveEventsVideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveVideosFromLiveEventAlt2
- **HTTP**: `DELETE /me/live_events/{live_event_id}/videos` (Default (api))
- **Notes**: This method removes multiple videos from the specified event.
- **Signature**: `RemoveVideosFromLiveEventAlt2(double liveEventId, MeLiveEventsVideosRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RemoveVideosFromLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

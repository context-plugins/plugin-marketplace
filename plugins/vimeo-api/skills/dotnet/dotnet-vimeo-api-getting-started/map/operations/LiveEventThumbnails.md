# LiveEventThumbnails — operations

Accessor: `client.LiveEventThumbnails` · Source: `Api/LiveEventThumbnails.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateLiveEventThumbnail
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method creates a thumbnail image for the specified event.
- **Signature**: `CreateLiveEventThumbnail(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLiveEventThumbnailAlt1
- **HTTP**: `POST /live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method creates a thumbnail image for the specified event.
- **Signature**: `CreateLiveEventThumbnailAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventThumbnailAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLiveEventThumbnailAlt2
- **HTTP**: `POST /me/live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method creates a thumbnail image for the specified event.
- **Signature**: `CreateLiveEventThumbnailAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventThumbnailAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventThumbnail
- **HTTP**: `DELETE /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method deletes a thumbnail image for the specified event.
- **Signature**: `DeleteLiveEventThumbnail(double liveEventId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventThumbnailAlt1
- **HTTP**: `DELETE /live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method deletes a thumbnail image for the specified event.
- **Signature**: `DeleteLiveEventThumbnailAlt1(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventThumbnailAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventThumbnailAlt2
- **HTTP**: `DELETE /me/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method deletes a thumbnail image for the specified event.
- **Signature**: `DeleteLiveEventThumbnailAlt2(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventThumbnailAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditLiveEventThumbnail
- **HTTP**: `PATCH /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method edits a thumbnail image for the specified event.
- **Signature**: `EditLiveEventThumbnail(double liveEventId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditLiveEventThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditLiveEventThumbnailAlt1
- **HTTP**: `PATCH /live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method edits a thumbnail image for the specified event.
- **Signature**: `EditLiveEventThumbnailAlt1(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditLiveEventThumbnailAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EditLiveEventThumbnailAlt2
- **HTTP**: `PATCH /me/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method edits a thumbnail image for the specified event.
- **Signature**: `EditLiveEventThumbnailAlt2(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<EditLiveEventThumbnailAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnail
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method returns a single thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnail(double liveEventId, double thumbnailId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnailAlt1
- **HTTP**: `GET /live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method returns a single thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnailAlt1(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnailAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}/pictures/{thumbnail_id}` (Default (api))
- **Notes**: This method returns a single thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnailAlt2(double liveEventId, double thumbnailId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnails
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method returns every thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnails(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnailsAlt1
- **HTTP**: `GET /live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method returns every thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnailsAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventThumbnailsAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}/pictures` (Default (api))
- **Notes**: This method returns every thumbnail image of the specified event.
- **Signature**: `GetLiveEventThumbnailsAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventThumbnailsAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

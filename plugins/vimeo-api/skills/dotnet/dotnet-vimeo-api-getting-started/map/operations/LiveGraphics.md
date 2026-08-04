# LiveGraphics — operations

Accessor: `client.LiveGraphics` · Source: `Api/LiveGraphics.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddComposerVideoGraphicItem
- **HTTP**: `POST /live_events/{live_event_id}/composer/graphics/videos` (Default (api))
- **Notes**: This method add a new video graphics item to the specified event.
- **Signature**: `AddComposerVideoGraphicItem(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddComposerVideoGraphicItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteComposerVideoGraphicItem
- **HTTP**: `DELETE /live_events/{live_event_id}/composer/graphics/videos/{video_id}` (Default (api))
- **Notes**: This method deletes a video graphics item belonging to the specified event.
- **Signature**: `DeleteComposerVideoGraphicItem(double liveEventId, double videoId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteComposerVideoGraphicItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetComposerVideoGraphicItems
- **HTTP**: `GET /live_events/{live_event_id}/composer/graphics/videos` (Default (api))
- **Notes**: The method returns every video graphics item belonging to the specified event.
- **Signature**: `GetComposerVideoGraphicItems(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetComposerVideoGraphicItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

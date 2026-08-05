# LiveScenes — operations

Accessor: `client.LiveScenes` · Source: `Api/LiveScenes.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AttachGraphicItemToScene
- **HTTP**: `POST /live_events/{live_event_id}/composer/scenes/{scene_id}/graphics` (Default (api))
- **Notes**: This method attaches a graphic item to the specified scene.
- **Signature**: `AttachGraphicItemToScene(double liveEventId, string sceneId, LiveEventsComposerScenesGraphicsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComposerScenes`
- **Error**: `SdkException<AttachGraphicItemToSceneError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateComposerScene
- **HTTP**: `POST /live_events/{live_event_id}/composer/scenes` (Default (api))
- **Notes**: The method creates a new scene for the specified event.
- **Signature**: `CreateComposerScene(double liveEventId, LiveEventsComposerScenesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComposerScenes`
- **Error**: `SdkException<CreateComposerSceneError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetComposerScenes
- **HTTP**: `GET /live_events/{live_event_id}/composer/scenes` (Default (api))
- **Notes**: The method returns every scene belonging to the specified event.
- **Signature**: `GetComposerScenes(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComposerScenesConnection`
- **Error**: `SdkException<GetComposerScenesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResetComposerScenes
- **HTTP**: `DELETE /live_events/{live_event_id}/composer/scenes` (Default (api))
- **Notes**: The method resets the scenes that belong to the specified event by deleting every existing scene and then recreating the default scene.
- **Signature**: `ResetComposerScenes(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ComposerScenes>`
- **Error**: `SdkException<ResetComposerScenesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateComposerScene
- **HTTP**: `PATCH /live_events/{live_event_id}/composer/scenes/{scene_id}` (Default (api))
- **Notes**: The method updates a scene belonging to the specified event.
- **Signature**: `UpdateComposerScene(double liveEventId, string sceneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComposerScenes`
- **Error**: `SdkException<UpdateComposerSceneError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

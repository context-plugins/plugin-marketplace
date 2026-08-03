# Player — operations

Accessor: `client.Player` · Source: `Api/Player.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddToQueue
- **HTTP**: `POST /me/player/queue` (Default (api))
- **Notes**: Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `AddToQueue(string uri, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `uri` ← `uri`, `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddToQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAUsersAvailableDevices
- **HTTP**: `GET /me/player/devices` (Default (api))
- **Notes**: Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.
- **Signature**: `GetAUsersAvailableDevices(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManyDevices`
- **Error**: `SdkException<GetAUsersAvailableDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInformationAboutTheUsersCurrentPlayback
- **HTTP**: `GET /me/player` (Default (api))
- **Notes**: Get information about the user’s current playback state, including track or episode, progress, and active device.
- **Signature**: `GetInformationAboutTheUsersCurrentPlayback(string? market, string? additionalTypes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `additionalTypes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `additional_types` ← `additionalTypes`
- **Returns**: `CurrentlyPlayingContextObject`
- **Error**: `SdkException<GetInformationAboutTheUsersCurrentPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetQueue
- **HTTP**: `GET /me/player/queue` (Default (api))
- **Notes**: Get the list of objects that make up the user's queue.
- **Signature**: `GetQueue(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `QueueObject`
- **Error**: `SdkException<GetQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRecentlyPlayed
- **HTTP**: `GET /me/player/recently-played` (Default (api))
- **Notes**: Get tracks from the current user's recently played tracks. _ Note : Currently doesn't support podcast episodes._
- **Signature**: `GetRecentlyPlayed(long? after, int? before, int? limit = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `after` — nullable, no default → **must pass explicitly**
  - `before` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `after` ← `after`, `before` ← `before`
- **Returns**: `CursorPagingPlayHistoryObject`
- **Error**: `SdkException<GetRecentlyPlayedError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTheUsersCurrentlyPlayingTrack
- **HTTP**: `GET /me/player/currently-playing` (Default (api))
- **Notes**: Get the object currently being played on the user's Spotify account.
- **Signature**: `GetTheUsersCurrentlyPlayingTrack(string? market, string? additionalTypes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `market` — nullable, no default → **must pass explicitly**
  - `additionalTypes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `market` ← `market`, `additional_types` ← `additionalTypes`
- **Returns**: `CurrentlyPlayingObject`
- **Error**: `SdkException<GetTheUsersCurrentlyPlayingTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PauseAUsersPlayback
- **HTTP**: `PUT /me/player/pause` (Default (api))
- **Notes**: Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `PauseAUsersPlayback(string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<PauseAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SeekToPositionInCurrentlyPlayingTrack
- **HTTP**: `PUT /me/player/seek` (Default (api))
- **Notes**: Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `SeekToPositionInCurrentlyPlayingTrack(int positionMs, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `position_ms` ← `positionMs`, `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SeekToPositionInCurrentlyPlayingTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetRepeatModeOnUsersPlayback
- **HTTP**: `PUT /me/player/repeat` (Default (api))
- **Notes**: Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `SetRepeatModeOnUsersPlayback(string state, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetRepeatModeOnUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetVolumeForUsersPlayback
- **HTTP**: `PUT /me/player/volume` (Default (api))
- **Notes**: Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `SetVolumeForUsersPlayback(int volumePercent, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `volume_percent` ← `volumePercent`, `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetVolumeForUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SkipUsersPlaybackToNextTrack
- **HTTP**: `POST /me/player/next` (Default (api))
- **Notes**: Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `SkipUsersPlaybackToNextTrack(string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SkipUsersPlaybackToNextTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SkipUsersPlaybackToPreviousTrack
- **HTTP**: `POST /me/player/previous` (Default (api))
- **Notes**: Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `SkipUsersPlaybackToPreviousTrack(string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<SkipUsersPlaybackToPreviousTrackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartAUsersPlayback
- **HTTP**: `PUT /me/player/play` (Default (api))
- **Notes**: Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `StartAUsersPlayback(string? deviceId, StartOrResumePlaybackRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ToggleShuffleForUsersPlayback
- **HTTP**: `PUT /me/player/shuffle` (Default (api))
- **Notes**: Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `ToggleShuffleForUsersPlayback(bool state, string? deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `device_id` ← `deviceId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<ToggleShuffleForUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransferAUsersPlayback
- **HTTP**: `PUT /me/player` (Default (api))
- **Notes**: Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
- **Signature**: `TransferAUsersPlayback(MePlayerRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TransferAUsersPlaybackError>` — **Case A (typed)**
- **Error accessors**: `TryGetUnauthorized1(out Unauthorized1)` [401] · `TryGetForbidden1(out Forbidden1)` [403] · `TryGetTooManyRequests1(out TooManyRequests1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

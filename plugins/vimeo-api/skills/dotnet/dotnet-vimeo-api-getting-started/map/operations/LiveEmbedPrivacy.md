# LiveEmbedPrivacy — operations

Accessor: `client.LiveEmbedPrivacy` · Source: `Api/LiveEmbedPrivacy.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLiveEventWhitelist
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.
- **Signature**: `GetLiveEventWhitelist(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventWhitelistError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventWhitelistAlt1
- **HTTP**: `GET /live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.
- **Signature**: `GetLiveEventWhitelistAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventWhitelistAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventWhitelistAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method returns every permitted domain for an event. The embed privacy setting must be `whitelist`.
- **Signature**: `GetLiveEventWhitelistAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventWhitelistAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetLiveEventWhitelist
- **HTTP**: `PUT /users/{user_id}/live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.
- **Signature**: `SetLiveEventWhitelist(double liveEventId, double userId, UsersLiveEventsPrivacyDomainsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetLiveEventWhitelistError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetLiveEventWhitelistAlt1
- **HTTP**: `PUT /live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.
- **Signature**: `SetLiveEventWhitelistAlt1(double liveEventId, LiveEventsPrivacyDomainsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetLiveEventWhitelistAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SetLiveEventWhitelistAlt2
- **HTTP**: `PUT /me/live_events/{live_event_id}/privacy/domains` (Default (api))
- **Notes**: This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.
- **Signature**: `SetLiveEventWhitelistAlt2(double liveEventId, MeLiveEventsPrivacyDomainsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SetLiveEventWhitelistAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

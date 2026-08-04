# LiveEventDestinations — operations

Accessor: `client.LiveEventDestinations` · Source: `Api/LiveEventDestinations.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateLiveEventDestination
- **HTTP**: `POST /me/live_events/{live_event_id}/destinations` (Default (api))
- **Notes**: This method creates a destination for the specified event. The authenticated user must be the owner of the event.
- **Signature**: `CreateLiveEventDestination(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLiveEventDestinationAlt1
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/destinations` (Default (api))
- **Notes**: This method creates a destination for the specified event. The authenticated user must be the owner of the event.
- **Signature**: `CreateLiveEventDestinationAlt1(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventDestinationAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOttDestination
- **HTTP**: `POST /users/{user_id}/live_events/{live_event_id}/ott_destinations` (Default (api))
- **Notes**: This method creates an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.
- **Signature**: `CreateOttDestination(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateOttDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventDestination
- **HTTP**: `DELETE /destination/{destination_id}` (Default (api))
- **Notes**: This method deletes the specified event destination belonging to the authenticated user.
- **Signature**: `DeleteLiveEventDestination(double destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOttDestination
- **HTTP**: `DELETE /users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}` (Default (api))
- **Notes**: This method deletes an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.
- **Signature**: `DeleteOttDestination(double liveEventId, double userId, string destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOttDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAvailableDestinations
- **HTTP**: `GET /users/{user_id}/destinations` (Default (api))
- **Notes**: This method returns every available event destination for the authenticated user to stream to.
- **Signature**: `GetAvailableDestinations(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAvailableDestinationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAvailableDestinationsAlt1
- **HTTP**: `GET /me/destinations` (Default (api))
- **Notes**: This method returns every available event destination for the authenticated user to stream to.
- **Signature**: `GetAvailableDestinationsAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAvailableDestinationsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventDestination
- **HTTP**: `GET /destination/{destination_id}` (Default (api))
- **Notes**: This method returns the specified event destination belonging to the authenticated user.
- **Signature**: `GetLiveEventDestination(double destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventDestinations
- **HTTP**: `GET /me/live_events/{live_event_id}/destinations` (Default (api))
- **Notes**: This method returns every destination of the specified event. The authenticated user must be the owner of the event.
- **Signature**: `GetLiveEventDestinations(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventDestinationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventDestinationsAlt1
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/destinations` (Default (api))
- **Notes**: This method returns every destination of the specified event. The authenticated user must be the owner of the event.
- **Signature**: `GetLiveEventDestinationsAlt1(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventDestinationsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOttDestinations
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}/ott_destinations` (Default (api))
- **Notes**: This method returns every OTT destination of the specified event. The authenticated user must be the owner of the event.
- **Signature**: `GetOttDestinations(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetOttDestinationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLiveEventDestination
- **HTTP**: `PATCH /destination/{destination_id}` (Default (api))
- **Notes**: This method updates the specified event destination belonging to the authenticated user.
- **Signature**: `UpdateLiveEventDestination(double destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateLiveEventDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

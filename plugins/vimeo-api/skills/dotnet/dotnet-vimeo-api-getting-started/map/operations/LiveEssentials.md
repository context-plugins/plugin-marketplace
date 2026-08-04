# LiveEssentials — operations

Accessor: `client.LiveEssentials` · Source: `Api/LiveEssentials.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateLiveEvent
- **HTTP**: `POST /users/{user_id}/live_events` (Default (api))
- **Notes**: This method creates a new event for the authenticated user.
- **Signature**: `CreateLiveEvent(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLiveEventAlt1
- **HTTP**: `POST /live_events` (Default (api))
- **Notes**: This method creates a new event for the authenticated user.
- **Signature**: `CreateLiveEventAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateLiveEventAlt2
- **HTTP**: `POST /me/live_events` (Default (api))
- **Notes**: This method creates a new event for the authenticated user.
- **Signature**: `CreateLiveEventAlt2(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEvent
- **HTTP**: `DELETE /users/{user_id}/live_events/{live_event_id}` (Default (api))
- **Notes**: This method deletes a single event belonging to the authenticated user.
- **Signature**: `DeleteLiveEvent(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventAlt1
- **HTTP**: `DELETE /live_events/{live_event_id}` (Default (api))
- **Notes**: This method deletes a single event belonging to the authenticated user.
- **Signature**: `DeleteLiveEventAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventAlt2
- **HTTP**: `DELETE /me/live_events/{live_event_id}` (Default (api))
- **Notes**: This method deletes a single event belonging to the authenticated user.
- **Signature**: `DeleteLiveEventAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEvents
- **HTTP**: `DELETE /users/{user_id}/live_events` (Default (api))
- **Notes**: This method deletes multiple events belonging to the authenticated user.
- **Signature**: `DeleteLiveEvents(double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventsAlt1
- **HTTP**: `DELETE /live_events` (Default (api))
- **Notes**: This method deletes multiple events belonging to the authenticated user.
- **Signature**: `DeleteLiveEventsAlt1(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventsAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteLiveEventsAlt2
- **HTTP**: `DELETE /me/live_events` (Default (api))
- **Notes**: This method deletes multiple events belonging to the authenticated user.
- **Signature**: `DeleteLiveEventsAlt2(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteLiveEventsAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEvent
- **HTTP**: `GET /users/{user_id}/live_events/{live_event_id}` (Default (api))
- **Notes**: This method returns a single event belonging to the authenticated user.
- **Signature**: `GetLiveEvent(double liveEventId, double userId, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `password` ← `password`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventAlt1
- **HTTP**: `GET /live_events/{live_event_id}` (Default (api))
- **Notes**: This method returns a single event belonging to the authenticated user.
- **Signature**: `GetLiveEventAlt1(double liveEventId, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `password` ← `password`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventAlt2
- **HTTP**: `GET /me/live_events/{live_event_id}` (Default (api))
- **Notes**: This method returns a single event belonging to the authenticated user.
- **Signature**: `GetLiveEventAlt2(double liveEventId, string? password, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `password` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `password` ← `password`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLiveEventOccurrences
- **HTTP**: `GET /users/{user_id}/live_events_occurrences` (Default (api))
- **Notes**: Returns all live event occurrences for the user within the given date range. For recurring events (with rrule), each occurrence within the range is returned as a separate entry. For one-time events (no rrule), the event is included if its start_time falls within the range.
- **Signature**: `GetLiveEventOccurrences(double userId, string startDate, string? endDate, double? page, double? perPage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `endDate` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLiveEvents
- **HTTP**: `GET /users/{user_id}/live_events` (Default (api))
- **Notes**: The method returns every event belonging to the authenticated user.
- **Signature**: `GetLiveEvents(double userId, Direction? direction, Filter8? filter, double? page, double? perPage, string? query, Sort8? sort, Type27? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `type` ← `type`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLiveEventsAlt1
- **HTTP**: `GET /live_events` (Default (api))
- **Notes**: The method returns every event belonging to the authenticated user.
- **Signature**: `GetLiveEventsAlt1(Direction? direction, Filter8? filter, double? page, double? perPage, string? query, Sort8? sort, Type27? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `type` ← `type`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetLiveEventsAlt2
- **HTTP**: `GET /me/live_events` (Default (api))
- **Notes**: The method returns every event belonging to the authenticated user.
- **Signature**: `GetLiveEventsAlt2(Direction? direction, Filter8? filter, double? page, double? perPage, string? query, Sort8? sort, Type27? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`direction` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `page` ← `page`, `per_page` ← `perPage`, `query` ← `query`, `sort` ← `sort`, `type` ← `type`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### UpdateLiveEvent
- **HTTP**: `PATCH /users/{user_id}/live_events/{live_event_id}` (Default (api))
- **Notes**: This method updates an event belonging to the authenticated user.
- **Signature**: `UpdateLiveEvent(double liveEventId, double userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateLiveEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLiveEventAlt1
- **HTTP**: `PATCH /live_events/{live_event_id}` (Default (api))
- **Notes**: This method updates an event belonging to the authenticated user.
- **Signature**: `UpdateLiveEventAlt1(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateLiveEventAlt1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLiveEventAlt2
- **HTTP**: `PATCH /me/live_events/{live_event_id}` (Default (api))
- **Notes**: This method updates an event belonging to the authenticated user.
- **Signature**: `UpdateLiveEventAlt2(double liveEventId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateLiveEventAlt2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

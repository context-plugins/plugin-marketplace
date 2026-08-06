# Charging — operations

Accessor: `client.Charging` · Source: `Api/Charging.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Active
- **HTTP**: `GET /charge-session/active` (Default (api))
- **Notes**: Fetrches the active sessions for user.
- **Signature**: `Active(string emaId, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `emaId` ← `emaId`
- **Returns**: `ActiveResponse200Json`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetChargeSessionRetrieve
- **HTTP**: `GET /charge-session/retrieve` (Default (api))
- **Notes**: This endpoint returns the details of the session if the session is found.
- **Signature**: `GetChargeSessionRetrieve(string sessionId, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sessionId` ← `sessionId`
- **Returns**: `GetChargeSessionRetrieveResponse200Json`
- **Error**: `SdkException<GetChargeSessionRetrieveError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Start
- **HTTP**: `POST /charge-session/start` (Default (api))
- **Notes**: This endpoint start the charging session for the user.
- **Signature**: `Start(Guid requestId, ChargesessionStartBody? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InlineResponse202`
- **Error**: `SdkException<StartError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Stop
- **HTTP**: `POST /charge-session/stop` (Default (api))
- **Notes**: Accepts a request to stop an active session when a valid session id is provided.
- **Signature**: `Stop(string sessionId, Guid requestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `sessionId` ← `sessionId`
- **Returns**: `InlineResponse2021`
- **Error**: `SdkException<StopError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequest(out BadRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetNotFound(out NotFound)` [404] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetServiceunavailable(out Serviceunavailable)` [503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# DestinationApi — operations

Accessor: `client.DestinationApi` · Source: `Api/DestinationApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDestination
- **HTTP**: `POST /destination` (Default (api))
- **Signature**: `CreateDestination(DestinationRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<CreateDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDestination
- **HTTP**: `DELETE /destination/{destination_id}` (Default (api))
- **Signature**: `DeleteDestination(string destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<DeleteDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDestination
- **HTTP**: `GET /destination/{destination_id}` (Default (api))
- **Signature**: `GetDestination(string destinationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Destination`
- **Error**: `SdkException<GetDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDestinations
- **HTTP**: `GET /destination` (Default (api))
- **Signature**: `GetDestinations(string? continuationToken, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `continuationToken` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `continuation_token` ← `continuationToken`, `limit` ← `limit`
- **Returns**: `DestinationSearchResponse`
- **Error**: `SdkException<GetDestinationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDestination
- **HTTP**: `PUT /destination/{destination_id}` (Default (api))
- **Signature**: `UpdateDestination(string destinationId, DestinationRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Error`
- **Error**: `SdkException<UpdateDestinationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

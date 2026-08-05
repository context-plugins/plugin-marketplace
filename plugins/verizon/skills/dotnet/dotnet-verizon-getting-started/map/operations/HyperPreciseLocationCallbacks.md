# HyperPreciseLocationCallbacks — operations

Accessor: `client.HyperPreciseLocationCallbacks` · Source: `Api/HyperPreciseLocationCallbacks.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeregisterCallback6
- **HTTP**: `DELETE /callbacks` (HyperPreciseLocation (thingspace))
- **Notes**: Stops ThingSpace from sending callback messages for the specified account and listener name.
- **Signature**: `DeregisterCallback6(string accountNumber, string service, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountNumber` ← `accountNumber`, `service` ← `service`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeregisterCallback6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListRegisteredCallbacks6
- **HTTP**: `GET /callbacks` (HyperPreciseLocation (thingspace))
- **Notes**: Find registered callback listener for account by account number.
- **Signature**: `ListRegisteredCallbacks6(string accountNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountNumber` ← `accountNumber`
- **Returns**: `IReadOnlyList<CallbackCreated>`
- **Error**: `SdkException<ListRegisteredCallbacks6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterCallback6
- **HTTP**: `POST /callbacks` (HyperPreciseLocation (thingspace))
- **Notes**: Registers a URL at which an account receives asynchronous responses and other messages from a ThingSpace Platform callback service. The messages are REST messages. You are responsible for creating and running a listening process on your server at that URL to receive and parse the messages.
- **Signature**: `RegisterCallback6(string accountNumber, HyperPreciseLocationCallback body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountNumber` ← `accountNumber`
- **Returns**: `CallbackRegistered`
- **Error**: `SdkException<RegisterCallback6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

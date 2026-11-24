<!-- Generated file — do not edit; regenerated with the SDK. -->

# OutboundCalls — operations

Accessor: `client.OutboundCalls` · Source: `src/CallNode/Api/OutboundCalls.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelCall

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `CancelCall(CancelCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CallId`
- **Returns**: `ApiV1OutboundCallsResponse1`
- **Error**: `ApiException<CancelCallError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelCallRequest` | `src/CallNode/Requests/OutboundCalls/CancelCallRequest.cs` |
| `ApiV1OutboundCallsResponse1` | `src/CallNode/Models/ApiV1OutboundCallsResponse1.cs` |
| `CancelCallError` | `src/CallNode/Errors/CancelCallError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### GetCall

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetCall(GetCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CallId`
- **Returns**: `Call`
- **Error**: `ApiException<GetCallError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCallRequest` | `src/CallNode/Requests/OutboundCalls/GetCallRequest.cs` |
| `Call` | `src/CallNode/Models/Call.cs` |
| `GetCallError` | `src/CallNode/Errors/GetCallError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### ListCalls

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `ListCalls(ListCallsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1OutboundCallsResponse`
- **Error**: `ApiException<ListCallsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCallsRequest` | `src/CallNode/Requests/OutboundCalls/ListCallsRequest.cs` |
| `CallStatus` | `src/CallNode/Models/Enums/CallStatus.cs` |
| `ApiV1OutboundCallsResponse` | `src/CallNode/Models/ApiV1OutboundCallsResponse.cs` |
| `ListCallsError` | `src/CallNode/Errors/ListCallsError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### OriginateCall

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `OriginateCall(OriginateCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OriginateResponse`
- **Error**: `ApiException<OriginateCallError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OriginateCallRequest` | `src/CallNode/Requests/OutboundCalls/OriginateCallRequest.cs` |
| `OriginateRequest` | `src/CallNode/Models/OriginateRequest.cs` |
| `OriginateResponse` | `src/CallNode/Models/OriginateResponse.cs` |
| `OriginateCallError` | `src/CallNode/Errors/OriginateCallError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### TransferCall

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `TransferCall(TransferCallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CallId`, `Body`
- **Returns**: `ApiV1CallsTransferResponse`
- **Error**: `ApiException<TransferCallError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409, 422, 502] · `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TransferCallRequest` | `src/CallNode/Requests/OutboundCalls/TransferCallRequest.cs` |
| `ApiV1CallsTransferRequest` | `src/CallNode/Models/ApiV1CallsTransferRequest.cs` |
| `ApiV1CallsTransferResponse` | `src/CallNode/Models/ApiV1CallsTransferResponse.cs` |
| `TransferCallError` | `src/CallNode/Errors/TransferCallError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |


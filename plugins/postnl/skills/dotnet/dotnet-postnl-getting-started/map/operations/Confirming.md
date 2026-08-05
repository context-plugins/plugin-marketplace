# Confirming — operations

Accessor: `client.Confirming` · Source: `Api/Confirming.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConfirmShipment
- **HTTP**: `POST /shipment/v2/confirm` (Postnl (api))
- **Signature**: `ConfirmShipment(ConfirmingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConfirmingResponse`
- **Error**: `SdkException<ConfirmShipmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetConfirmingResponse(out ConfirmingResponse)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# ShippingStatus — operations

Accessor: `client.ShippingStatus` · Source: `Api/ShippingStatus.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetShipmentSignature
- **HTTP**: `GET /shipment/v2/status/signature/{barcode}` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/signature/3SDEVC172649258" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `GetShipmentSignature(string barcode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ShippingstatusResponseSignature`
- **Error**: `SdkException<GetShipmentSignatureError>` — **Case A (typed)**
- **Error accessors**: `TryGetInternalServerError(out InternalServerError)` [400, 500] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGet(out MethodNotAllowedOnlyGet)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStatusByBarcode
- **HTTP**: `GET /shipment/v2/status/barcode/{barcode}` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/barcode/3SDEVC172649258" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `GetStatusByBarcode(string barcode, Language? language, string? maxDays, bool? detail = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `maxDays` — nullable, no default → **must pass explicitly**
  - defaults: `detail` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `detail` ← `detail`, `language` ← `language`, `maxDays` ← `maxDays`
- **Returns**: `ShippingstatusResponse`
- **Error**: `SdkException<GetStatusByBarcodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetInternalServerError(out InternalServerError)` [400, 500] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGet(out MethodNotAllowedOnlyGet)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStatusByReference
- **HTTP**: `GET /shipment/v2/status/reference/{referenceId}` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/reference?detail=true&amp;language=NL&amp;customerCode={{CustomerCode}}&amp;customerNumber={{CustomerNumber}}&amp;reference=REF98173245876329" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `GetStatusByReference(string referenceId, string customerCode, string customerNumber, Language? language, string? maxDays, bool? detail = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `language` — nullable, no default → **must pass explicitly**
  - `maxDays` — nullable, no default → **must pass explicitly**
  - defaults: `detail` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `customerCode` ← `customerCode`, `customerNumber` ← `customerNumber`, `detail` ← `detail`, `language` ← `language`, `maxDays` ← `maxDays`
- **Returns**: `ShippingstatusResponse`
- **Error**: `SdkException<GetStatusByReferenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetInternalServerError(out InternalServerError)` [400, 500] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGet(out MethodNotAllowedOnlyGet)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUpdatedStatusByCustomerNumber
- **HTTP**: `GET /shipment/v2/status/{customernumber}/updatedshipments` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/11223344/updatedshipments?period=2022-12-25T10:00:00&amp;amp;period=2022-12-25T10:12:00" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `GetUpdatedStatusByCustomerNumber(string customernumber, IReadOnlyList<string>? period, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `period` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `period` ← `period`
- **Returns**: `IReadOnlyList<ShippingstatusResponseUpdatedShipment>`
- **Error**: `SdkException<GetUpdatedStatusByCustomerNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetInternalServerError(out InternalServerError)` [400, 500] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGet(out MethodNotAllowedOnlyGet)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

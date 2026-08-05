# Barcode — operations

Accessor: `client.Barcode` · Source: `Api/Barcode.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GenerateBarcode
- **HTTP**: `GET /shipment/v1_1/barcode` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v1_1/barcode?CustomerCode=DEVC&amp;amp;CustomerNumber=11223344&amp;amp;Type=3S&amp;amp;Serie=000000000-999999999&amp;amp" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `GenerateBarcode(string customerCode, string customerNumber, TypeEnum type, string? serie, string? range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `serie` — nullable, no default → **must pass explicitly**
  - `range` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CustomerCode` ← `customerCode`, `CustomerNumber` ← `customerNumber`, `Type` ← `type`, `Serie` ← `serie`, `Range` ← `range`
- **Returns**: `BarcodeResponse`
- **Error**: `SdkException<GenerateBarcodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBarcodeResponseInvalid(out BarcodeResponseInvalid)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# PostalcodeCheck — operations

Accessor: `client.PostalcodeCheck` · Source: `Api/PostalcodeCheck.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckoutPostalcodeCheck
- **HTTP**: `GET /shipment/checkout/v1/postalcodecheck` (Postnl (api))
- **Notes**: Please note that this API is not available on the sandbox environment. Request example: curl -X GET "https://api.postnl.nl/shipment/checkout/v1/postalcodecheck?postalcode=3571ZZ&amp;amp;housenumber=74&amp;amp;housenumberaddition=bis" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `CheckoutPostalcodeCheck(string postalcode, string housenumber, string? housenumberaddition, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `housenumberaddition` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `postalcode` ← `postalcode`, `housenumber` ← `housenumber`, `housenumberaddition` ← `housenumberaddition`
- **Returns**: `IReadOnlyList<PostalcodeCheckAddress>`
- **Error**: `SdkException<CheckoutPostalcodeCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetPostalcodeCheckResponseInvalid(out PostalcodeCheckResponseInvalid)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGet(out MethodNotAllowedOnlyGet)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# TimeframesApi — operations

Accessor: `client.TimeframesApi` · Source: `Api/TimeframesApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RetrieveDeliveryTimeframes
- **HTTP**: `GET /shipment/v2_1/calculate/timeframes` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/calculate/timeframes?AllowSundaySorting=false&amp;StartDate=30-06-2022&amp;EndDate=02-07-2022&amp;CountryCode=NL&amp;PostalCode=2132WT&amp;HouseNumber=42&amp;HouseNrExt=A&amp;City=Hoofddorp&amp;Street=Siriusdreef&amp;Options=Daytime%2CEvening" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `RetrieveDeliveryTimeframes(bool allowSundaySorting, string startDate, string endDate, Countrycode countryCode, string postalCode, int houseNumber, IReadOnlyList<TimeframeOptions> options, string? houseNrExt, string? city, string? street, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `houseNrExt` — nullable, no default → **must pass explicitly**
  - `city` — nullable, no default → **must pass explicitly**
  - `street` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AllowSundaySorting` ← `allowSundaySorting`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `CountryCode` ← `countryCode`, `PostalCode` ← `postalCode`, `HouseNumber` ← `houseNumber`, `Options` ← `options`, `HouseNrExt` ← `houseNrExt`, `City` ← `city`, `Street` ← `street`
- **Returns**: `TimeframeResponse`
- **Error**: `SdkException<RetrieveDeliveryTimeframesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

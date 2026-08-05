# Deliverydate — operations

Accessor: `client.Deliverydate` · Source: `Api/Deliverydate.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CalculateDeliveryDate
- **HTTP**: `GET /shipment/v2_2/calculate/date/delivery` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_2/calculate/date/delivery?ShippingDate=29-05-2022+14%3A00%3A00&amp;amp;ShippingDuration=1&amp;amp;CutOffTime=17%3A00%3A00&amp;amp;PostalCode=2132WT&amp;amp;CountryCode=NL&amp;amp;City=Hoofddorp&amp;amp;Street=Siriusdreef&amp;amp;HouseNumber=42&amp;amp;HouseNrExt=A" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE"
- **Signature**: `CalculateDeliveryDate(string shippingDate, int shippingDuration, string cutOffTime, string postalCode, Countrycode countryCode, IReadOnlyList<DeliverydateOption> options, OriginCountryCode? originCountryCode, string? city, string? street, int? houseNumber, string? houseNrExt, string? cutOffTimeMonday, bool? availableMonday, string? cutOffTimeTuesday, bool? availableTuesday, string? cutOffTimeWednesday, bool? availableWednesday, string? cutOffTimeThursday, bool? availableThursday, string? cutOffTimeFriday, bool? availableFriday, string? cutOffTimeSaturday, bool? availableSaturday, string? cutOffTimeSunday, bool? availableSunday, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 19 params (`originCountryCode` … `availableSunday`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ShippingDate` ← `shippingDate`, `ShippingDuration` ← `shippingDuration`, `CutOffTime` ← `cutOffTime`, `PostalCode` ← `postalCode`, `CountryCode` ← `countryCode`, `Options` ← `options`, `OriginCountryCode` ← `originCountryCode`, `City` ← `city`, `Street` ← `street`, `HouseNumber` ← `houseNumber`, `HouseNrExt` ← `houseNrExt`, `CutOffTimeMonday` ← `cutOffTimeMonday`, `AvailableMonday` ← `availableMonday`, `CutOffTimeTuesday` ← `cutOffTimeTuesday`, `AvailableTuesday` ← `availableTuesday`, `CutOffTimeWednesday` ← `cutOffTimeWednesday`, `AvailableWednesday` ← `availableWednesday`, `CutOffTimeThursday` ← `cutOffTimeThursday`, `AvailableThursday` ← `availableThursday`, `CutOffTimeFriday` ← `cutOffTimeFriday`, `AvailableFriday` ← `availableFriday`, `CutOffTimeSaturday` ← `cutOffTimeSaturday`, `AvailableSaturday` ← `availableSaturday`, `CutOffTimeSunday` ← `cutOffTimeSunday`, `AvailableSunday` ← `availableSunday`
- **Returns**: `DeliverydateDeliveryResponse`
- **Error**: `SdkException<CalculateDeliveryDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CalculateShippingDate
- **HTTP**: `GET /shipment/v2_2/calculate/date/shipping` (Postnl (api))
- **Notes**: Request example: curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_2/calculate/date/shipping?DeliveryDate=30-05-2022&amp;amp;ShippingDuration=1&amp;amp;PostalCode=2132WT&amp;amp;CountryCode=NL&amp;amp;City=Hoofddorp&amp;amp;Street=Siriusdreef&amp;amp;HouseNumber=42&amp;amp;HouseNrExt=A" \ -H "Accept: application/json" \ -H "apikey: APIKEY-HERE" \
- **Signature**: `CalculateShippingDate(string deliveryDate, int shippingDuration, string postalCode, Countrycode countryCode, OriginCountryCode? originCountryCode, string? city, string? street, int? houseNumber, string? houseNrExt, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`originCountryCode` … `houseNrExt`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DeliveryDate` ← `deliveryDate`, `ShippingDuration` ← `shippingDuration`, `PostalCode` ← `postalCode`, `CountryCode` ← `countryCode`, `OriginCountryCode` ← `originCountryCode`, `City` ← `city`, `Street` ← `street`, `HouseNumber` ← `houseNumber`, `HouseNrExt` ← `houseNrExt`
- **Returns**: `DeliverydateShippingResponse`
- **Error**: `SdkException<CalculateShippingDateError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyGetPost(out MethodNotAllowedOnlyGetPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

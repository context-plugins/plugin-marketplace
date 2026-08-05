# ReverseGeocodingApi — operations

Accessor: `client.ReverseGeocodingApi` · Source: `Api/ReverseGeocodingApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetReverseGeocode
- **HTTP**: `GET /geocode/reverse` (Default (api))
- **Notes**: Returns an address and its components (such as city, postcode, street, etc.) based on the provided latitude and longitude coordinates. Use this endpoint to convert coordinates into a human-readable address for various use cases, such as map applications or location-based services.
- **Signature**: `GetReverseGeocode(double lat, double lon, string apiKey, Format? format, int? limit, Type3? type, string? lang, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`format` … `lang`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lat` ← `lat`, `lon` ← `lon`, `apiKey` ← `apiKey`, `format` ← `format`, `limit` ← `limit`, `type` ← `type`, `lang` ← `lang`
- **Returns**: `GeocodeReverseResponse`
- **Error**: `SdkException<GetReverseGeocodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

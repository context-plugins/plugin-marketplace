# GeolocationApi — operations

Accessor: `client.GeolocationApi` · Source: `Api/GeolocationApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Geolocate
- **HTTP**: `POST /geolocation/v1/geolocate` (Default (www))
- **Notes**: Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a response to the client. Communication is done over HTTPS using POST. Both request and response are formatted as JSON, and the content type of both is `application/json`. You must specify a key in your request, included as the value of a`key` parameter. A `key` is your application's API key. This key identifies your application for purposes of quota management. Learn how to get a key .
- **Signature**: `Geolocate(GeolocationV1GeolocateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GeolocationV1GeolocateResponse`
- **Error**: `SdkException<GeolocateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGeolocationV1Geolocate400Error1(out GeolocationV1Geolocate400Error1)` [400] · `TryGetGeolocationV1Geolocate404Error1(out GeolocationV1Geolocate404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# StreetViewApi — operations

Accessor: `client.StreetViewApi` · Source: `Api/StreetViewApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StreetView
- **HTTP**: `GET /maps/api/streetview` (Default (www))
- **Notes**: The Street View Static API lets you embed a static (non-interactive) Street View panorama or thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL parameters sent through a standard HTTP request, and is returned as a static image.
- **Signature**: `StreetView(string size, double? fov, double? heading, string? location, string? pano, double? pitch, double? radius, bool? returnErrorCode, string? signature, Source1? source, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`fov` … `source`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `size` ← `size`, `fov` ← `fov`, `heading` ← `heading`, `location` ← `location`, `pano` ← `pano`, `pitch` ← `pitch`, `radius` ← `radius`, `return_error_code` ← `returnErrorCode`, `signature` ← `signature`, `source` ← `source`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StreetViewMetadata
- **HTTP**: `GET /maps/api/streetview/metadata` (Default (www))
- **Notes**: The Street View Static API metadata requests provide data about Street View panoramas. Using the metadata, you can find out if a Street View image is available at a given location, as well as getting programmatic access to the latitude and longitude, the panorama ID, the date the photo was taken, and the copyright information for the image. Accessing this metadata allows you to customize error behavior in your application.
- **Signature**: `StreetViewMetadata(double? heading, string? location, string? pano, double? pitch, double? radius, bool? returnErrorCode, string? signature, string? size, Source1? source, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`heading` … `source`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `heading` ← `heading`, `location` ← `location`, `pano` ← `pano`, `pitch` ← `pitch`, `radius` ← `radius`, `return_error_code` ← `returnErrorCode`, `signature` ← `signature`, `size` ← `size`, `source` ← `source`
- **Returns**: `StreetViewResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

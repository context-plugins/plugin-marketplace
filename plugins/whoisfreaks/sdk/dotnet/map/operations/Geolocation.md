<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geolocation — operations

Accessor: `client.Geolocation` · Source: `src/WhoisFreaks/Api/Geolocation.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkGeolocation

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `BulkGeolocation(BulkGeolocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<GeolocationResponse>`
- **Error**: `ApiException<BulkGeolocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkGeolocationRequest` | `src/WhoisFreaks/Requests/Geolocation/BulkGeolocationRequest.cs` |
| `V10GeolocationRequest` | `src/WhoisFreaks/Models/V10GeolocationRequest.cs` |
| `GeolocationResponse` | `src/WhoisFreaks/Models/GeolocationResponse.cs` |
| `BulkGeolocationError` | `src/WhoisFreaks/Errors/BulkGeolocationError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |

### GeolocationInvoke

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GeolocationInvoke(GeolocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ip`
- **Query params (wire ← C#)**: `ip` ← `Ip`
- **Returns**: `GeolocationResponse`
- **Error**: `ApiException<GeolocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GeolocationRequest` | `src/WhoisFreaks/Requests/Geolocation/GeolocationRequest.cs` |
| `GeolocationResponse` | `src/WhoisFreaks/Models/GeolocationResponse.cs` |
| `GeolocationError` | `src/WhoisFreaks/Errors/GeolocationError.cs` |
| `ErrorResponseModel` | `src/WhoisFreaks/Models/ErrorResponseModel.cs` |


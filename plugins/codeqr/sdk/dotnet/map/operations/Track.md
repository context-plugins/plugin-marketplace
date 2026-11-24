<!-- Generated file — do not edit; regenerated with the SDK. -->

# Track — operations

Accessor: `client.Track` · Source: `src/CodeQr/Api/Track.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TrackLead

- **Auth**: `options.Token`
- **Signature**: `TrackLead(TrackLeadOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TrackLeadResponse`
- **Error**: `ApiException<TrackLeadError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrackLeadOperationRequest` | `src/CodeQr/Requests/Track/TrackLeadOperationRequest.cs` |
| `TrackLeadRequest` | `src/CodeQr/Models/TrackLeadRequest.cs` |
| `TrackLeadResponse` | `src/CodeQr/Models/TrackLeadResponse.cs` |
| `TrackLeadError` | `src/CodeQr/Errors/TrackLeadError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### TrackSale

- **Auth**: `options.Token`
- **Signature**: `TrackSale(TrackSaleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TrackSaleResponse`
- **Error**: `ApiException<TrackSaleError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrackSaleOperationRequest` | `src/CodeQr/Requests/Track/TrackSaleOperationRequest.cs` |
| `TrackSaleRequest` | `src/CodeQr/Models/TrackSaleRequest.cs` |
| `TrackSaleResponse` | `src/CodeQr/Models/TrackSaleResponse.cs` |
| `TrackSaleError` | `src/CodeQr/Errors/TrackSaleError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |


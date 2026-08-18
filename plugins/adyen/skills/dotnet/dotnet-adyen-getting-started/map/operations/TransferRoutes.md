<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferRoutes — operations

Accessor: `client.TransferRoutes` · Source: `Api/TransferRoutes.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostTransferRoutesCalculate
- **Server group**: `Default13`
- **Signature**: `PostTransferRoutesCalculate(TransferRouteRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TransferRouteResponse`
- **Error**: `SdkException<PostTransferRoutesCalculateError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferRouteRequest` | `Models/TransferRouteRequest.cs` |
| `TransferRouteResponse` | `Models/TransferRouteResponse.cs` |
| `PostTransferRoutesCalculateError` | `Errors/PostTransferRoutesCalculateError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


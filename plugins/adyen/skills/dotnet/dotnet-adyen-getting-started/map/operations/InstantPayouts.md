<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstantPayouts — operations

Accessor: `client.InstantPayouts` · Source: `Api/InstantPayouts.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostPayout
- **Server group**: `Default3`
- **Signature**: `PostPayout(PayoutRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PayoutResponse`
- **Error**: `SdkException<PostPayoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PayoutRequest` | `Models/PayoutRequest.cs` |
| `PayoutResponse` | `Models/PayoutResponse.cs` |
| `PostPayoutError` | `Errors/PostPayoutError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |


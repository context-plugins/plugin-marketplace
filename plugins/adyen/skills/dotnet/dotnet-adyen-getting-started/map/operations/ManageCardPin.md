<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageCardPin — operations

Accessor: `client.ManageCardPin` · Source: `Api/ManageCardPin.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPublicKey
- **Server group**: `Default13`
- **Signature**: `GetPublicKey(string? purpose, string? format, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `purpose` — nullable, no default → **must pass explicitly**
  - `format` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `purpose` ← `purpose`, `format` ← `format`
- **Returns**: `PublicKeyResponse`
- **Error**: `SdkException<GetPublicKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PublicKeyResponse` | `Models/PublicKeyResponse.cs` |
| `GetPublicKeyError` | `Errors/GetPublicKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPinsChange
- **Server group**: `Default13`
- **Signature**: `PostPinsChange(PinChangeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `PinChangeResponse`
- **Error**: `SdkException<PostPinsChangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PinChangeRequest` | `Models/PinChangeRequest.cs` |
| `PinChangeResponse` | `Models/PinChangeResponse.cs` |
| `PostPinsChangeError` | `Errors/PostPinsChangeError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostPinsReveal
- **Server group**: `Default13`
- **Signature**: `PostPinsReveal(RevealPinRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RevealPinResponse`
- **Error**: `SdkException<PostPinsRevealError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RevealPinRequest` | `Models/RevealPinRequest.cs` |
| `RevealPinResponse` | `Models/RevealPinResponse.cs` |
| `PostPinsRevealError` | `Errors/PostPinsRevealError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


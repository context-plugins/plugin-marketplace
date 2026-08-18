<!-- Generated file — do not edit; regenerated with the SDK. -->

# Capital — operations

Accessor: `client.Capital` · Source: `Api/Capital.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGrants
- **Server group**: `Default14`
- **Signature**: `GetGrants(string? counterpartyAccountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `counterpartyAccountHolderId` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `counterpartyAccountHolderId` ← `counterpartyAccountHolderId`
- **Returns**: `CapitalGrants`
- **Error**: `SdkException<GetGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CapitalGrants` | `Models/CapitalGrants.cs` |
| `GetGrantsError` | `Errors/GetGrantsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetGrantsId
- **Server group**: `Default14`
- **Signature**: `GetGrantsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CapitalGrant`
- **Error**: `SdkException<GetGrantsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CapitalGrant` | `Models/CapitalGrant.cs` |
| `GetGrantsIdError` | `Errors/GetGrantsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostGrants
- **Server group**: `Default14`
- **Signature**: `PostGrants(string? idempotencyKey, CapitalGrantInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CapitalGrant`
- **Error**: `SdkException<PostGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CapitalGrantInfo` | `Models/CapitalGrantInfo.cs` |
| `CapitalGrant` | `Models/CapitalGrant.cs` |
| `PostGrantsError` | `Errors/PostGrantsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


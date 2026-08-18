<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platform — operations

Accessor: `client.Platform` · Source: `Api/Platform.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalancePlatformsId
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalancePlatform`
- **Error**: `SdkException<GetBalancePlatformsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalancePlatform` | `Models/BalancePlatform.cs` |
| `GetBalancePlatformsIdError` | `Errors/GetBalancePlatformsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalancePlatformsIdAccountHolders
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsIdAccountHolders(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedAccountHoldersResponse`
- **Error**: `SdkException<GetBalancePlatformsIdAccountHoldersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaginatedAccountHoldersResponse` | `Models/PaginatedAccountHoldersResponse.cs` |
| `GetBalancePlatformsIdAccountHoldersError` | `Errors/GetBalancePlatformsIdAccountHoldersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetBalancePlatformsIdTransactionRules
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsIdTransactionRules(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransactionRulesResponse`
- **Error**: `SdkException<GetBalancePlatformsIdTransactionRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransactionRulesResponse` | `Models/TransactionRulesResponse.cs` |
| `GetBalancePlatformsIdTransactionRulesError` | `Errors/GetBalancePlatformsIdTransactionRulesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


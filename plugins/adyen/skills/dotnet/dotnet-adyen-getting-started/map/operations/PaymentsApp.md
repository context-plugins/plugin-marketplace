<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApp — operations

Accessor: `client.PaymentsApp` · Source: `Api/PaymentsApp.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdPaymentsApps
- **Server group**: `Default26`
- **Signature**: `GetMerchantsMerchantIdPaymentsApps(string merchantId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `10`, `offset` = `0L`
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentsAppResponse` | `Models/PaymentsAppResponse.cs` |
| `GetMerchantsMerchantIdPaymentsAppsError` | `Errors/GetMerchantsMerchantIdPaymentsAppsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetMerchantsMerchantIdStoresStoreIdPaymentsApps
- **Server group**: `Default26`
- **Signature**: `GetMerchantsMerchantIdStoresStoreIdPaymentsApps(string merchantId, string storeId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = `10`, `offset` = `0L`
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentsAppResponse` | `Models/PaymentsAppResponse.cs` |
| `GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError` | `Errors/GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken
- **Server group**: `Default26`
- **Signature**: `PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken(string merchantId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BoardingTokenRequest` | `Models/BoardingTokenRequest.cs` |
| `BoardingTokenResponse` | `Models/BoardingTokenResponse.cs` |
| `PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError` | `Errors/PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke
- **Server group**: `Default26`
- **Signature**: `PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(string merchantId, string installationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError` | `Errors/PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken
- **Server group**: `Default26`
- **Signature**: `PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(string merchantId, string storeId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BoardingTokenRequest` | `Models/BoardingTokenRequest.cs` |
| `BoardingTokenResponse` | `Models/BoardingTokenResponse.cs` |
| `PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError` | `Errors/PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |


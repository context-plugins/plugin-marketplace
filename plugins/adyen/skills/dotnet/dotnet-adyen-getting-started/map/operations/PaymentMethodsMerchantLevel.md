<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentMethodsMerchantLevel — operations

Accessor: `client.PaymentMethodsMerchantLevel` · Source: `Api/PaymentMethodsMerchantLevel.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdPaymentMethodSettings
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettings(string merchantId, string? storeId, string? businessLineId, int? pageSize, int? pageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`storeId` … `pageNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `storeId` ← `storeId`, `businessLineId` ← `businessLineId`, `pageSize` ← `pageSize`, `pageNumber` ← `pageNumber`
- **Returns**: `PaymentMethodResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentMethodResponse` | `Models/PaymentMethodResponse.cs` |
| `GetMerchantsMerchantIdPaymentMethodSettingsError` | `Errors/GetMerchantsMerchantIdPaymentMethodSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(string merchantId, string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ManagementPaymentMethod` | `Models/ManagementPaymentMethod.cs` |
| `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError` | `Errors/GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(string merchantId, string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApplePayResponseInfo`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApplePayResponseInfo` | `Models/ApplePayResponseInfo.cs` |
| `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError` | `Errors/GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(string merchantId, string paymentMethodId, UpdatePaymentMethodInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePaymentMethodInfo` | `Models/UpdatePaymentMethodInfo.cs` |
| `ManagementPaymentMethod` | `Models/ManagementPaymentMethod.cs` |
| `PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError` | `Errors/PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdPaymentMethodSettings
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdPaymentMethodSettings(string merchantId, PaymentMethodSetupInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentMethodSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaymentMethodSetupInfo` | `Models/PaymentMethodSetupInfo.cs` |
| `ManagementPaymentMethod` | `Models/ManagementPaymentMethod.cs` |
| `PostMerchantsMerchantIdPaymentMethodSettingsError` | `Errors/PostMerchantsMerchantIdPaymentMethodSettingsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(string merchantId, string paymentMethodId, ApplePayInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApplePayInfo` | `Models/ApplePayInfo.cs` |
| `PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError` | `Errors/PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


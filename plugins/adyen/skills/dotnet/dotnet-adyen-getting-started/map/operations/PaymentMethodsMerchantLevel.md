# PaymentMethodsMerchantLevel — operations

Accessor: `client.PaymentMethodsMerchantLevel` · Source: `Api/PaymentMethodsMerchantLevel.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdPaymentMethodSettings
- **HTTP**: `GET /merchants/{merchantId}/paymentMethodSettings` (Default9 (management-test))
- **Notes**: Returns details for all payment methods of the merchant account identified in the path. To make this request, your API credential must have the following role : * Management API—Payment methods read
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettings(string merchantId, string? storeId, string? businessLineId, int? pageSize, int? pageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`storeId` … `pageNumber`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `storeId` ← `storeId`, `businessLineId` ← `businessLineId`, `pageSize` ← `pageSize`, `pageNumber` ← `pageNumber`
- **Returns**: `PaymentMethodResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId
- **HTTP**: `GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}` (Default9 (management-test))
- **Notes**: Returns details for the merchant account and the payment method identified in the path. To make this request, your API credential must have the following role : * Management API—Payment methods read
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(string merchantId, string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains
- **HTTP**: `GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains` (Default9 (management-test))
- **Notes**: Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see Apple Pay documentation . To make this request, your API credential must have the following role : * Management API—Payment methods read
- **Signature**: `GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(string merchantId, string paymentMethodId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApplePayResponseInfo`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId
- **HTTP**: `PATCH /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}` (Default9 (management-test))
- **Notes**: Updates payment method details for the merchant account and the payment method identified in the path. Depending the payment method `type` , you may need to send an additional object required for the payment method. To make this request, your API credential must have the following role : * Management API—Payment methods read and write
- **Signature**: `PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(string merchantId, string paymentMethodId, UpdatePaymentMethodInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdPaymentMethodSettings
- **HTTP**: `POST /merchants/{merchantId}/paymentMethodSettings` (Default9 (management-test))
- **Notes**: Sends a request to add a new payment method to the merchant account identified in the path. Depending the payment method `type` , you may need to send an additional object required for the payment method. To make this request, your API credential must have the following role : * Management API—Payment methods read and write
- **Signature**: `PostMerchantsMerchantIdPaymentMethodSettings(string merchantId, PaymentMethodSetupInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ManagementPaymentMethod`
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentMethodSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains
- **HTTP**: `POST /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains` (Default9 (management-test))
- **Notes**: Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see Apple Pay documentation . To make this request, your API credential must have the following role : * Management API—Payment methods read and write
- **Signature**: `PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(string merchantId, string paymentMethodId, ApplePayInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

# PaymentsApp — operations

Accessor: `client.PaymentsApp` · Source: `Api/PaymentsApp.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdPaymentsApps
- **HTTP**: `GET /merchants/{merchantId}/paymentsApps` (Default26 (management-test))
- **Notes**: Returns the list of Payments App instances for the merchant account identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `GetMerchantsMerchantIdPaymentsApps(string merchantId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `offset` = 0L, `requestOptions` = null
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdStoresStoreIdPaymentsApps
- **HTTP**: `GET /merchants/{merchantId}/stores/{storeId}/paymentsApps` (Default26 (management-test))
- **Notes**: Returns the list of Payments App instances for the store identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `GetMerchantsMerchantIdStoresStoreIdPaymentsApps(string merchantId, string storeId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `offset` = 0L, `requestOptions` = null
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken
- **HTTP**: `POST /merchants/{merchantId}/generatePaymentsAppBoardingToken` (Default26 (management-test))
- **Notes**: Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken(string merchantId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke
- **HTTP**: `POST /merchants/{merchantId}/paymentsApps/{installationId}/revoke` (Default26 (management-test))
- **Notes**: Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(string merchantId, string installationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken
- **HTTP**: `POST /merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken` (Default26 (management-test))
- **Notes**: Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(string merchantId, string storeId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

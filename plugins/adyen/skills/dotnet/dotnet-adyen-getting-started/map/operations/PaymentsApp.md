# PaymentsApp — operations

Accessor: `client.PaymentsApp` · Source: `Api/PaymentsApp.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdPaymentsApps
- **HTTP**: `GET /merchants/{merchantId}/paymentsApps` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of Payments App instances for the merchant account identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `GetMerchantsMerchantIdPaymentsApps(string merchantId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `offset` = 0L, `requestOptions` = null
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsPaymentsApps400Error1(out MerchantsPaymentsApps400Error1)` [400] · `TryGetMerchantsPaymentsApps401Error1(out MerchantsPaymentsApps401Error1)` [401] · `TryGetMerchantsPaymentsApps403Error1(out MerchantsPaymentsApps403Error1)` [403] · `TryGetMerchantsPaymentsApps422Error1(out MerchantsPaymentsApps422Error1)` [422] · `TryGetMerchantsPaymentsApps500Error1(out MerchantsPaymentsApps500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdStoresStoreIdPaymentsApps
- **HTTP**: `GET /merchants/{merchantId}/stores/{storeId}/paymentsApps` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of Payments App instances for the store identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `GetMerchantsMerchantIdStoresStoreIdPaymentsApps(string merchantId, string storeId, string? statuses, int? limit = 10, long? offset = 0L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `statuses` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 10, `offset` = 0L, `requestOptions` = null
- **Query params (wire ← C#)**: `statuses` ← `statuses`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `PaymentsAppResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsStoresPaymentsApps400Error1(out MerchantsStoresPaymentsApps400Error1)` [400] · `TryGetMerchantsStoresPaymentsApps401Error1(out MerchantsStoresPaymentsApps401Error1)` [401] · `TryGetMerchantsStoresPaymentsApps403Error1(out MerchantsStoresPaymentsApps403Error1)` [403] · `TryGetMerchantsStoresPaymentsApps422Error1(out MerchantsStoresPaymentsApps422Error1)` [422] · `TryGetMerchantsStoresPaymentsApps500Error1(out MerchantsStoresPaymentsApps500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken
- **HTTP**: `POST /merchants/{merchantId}/generatePaymentsAppBoardingToken` (Default (balanceplatform-api-test))
- **Notes**: Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdGeneratePaymentsAppBoardingToken(string merchantId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsGeneratePaymentsAppBoardingToken400Error1(out MerchantsGeneratePaymentsAppBoardingToken400Error1)` [400] · `TryGetMerchantsGeneratePaymentsAppBoardingToken401Error1(out MerchantsGeneratePaymentsAppBoardingToken401Error1)` [401] · `TryGetMerchantsGeneratePaymentsAppBoardingToken403Error1(out MerchantsGeneratePaymentsAppBoardingToken403Error1)` [403] · `TryGetMerchantsGeneratePaymentsAppBoardingToken422Error1(out MerchantsGeneratePaymentsAppBoardingToken422Error1)` [422] · `TryGetMerchantsGeneratePaymentsAppBoardingToken500Error1(out MerchantsGeneratePaymentsAppBoardingToken500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke
- **HTTP**: `POST /merchants/{merchantId}/paymentsApps/{installationId}/revoke` (Default (balanceplatform-api-test))
- **Notes**: Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(string merchantId, string installationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsPaymentsAppsRevoke400Error1(out MerchantsPaymentsAppsRevoke400Error1)` [400] · `TryGetMerchantsPaymentsAppsRevoke401Error1(out MerchantsPaymentsAppsRevoke401Error1)` [401] · `TryGetMerchantsPaymentsAppsRevoke500Error1(out MerchantsPaymentsAppsRevoke500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken
- **HTTP**: `POST /merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken` (Default (balanceplatform-api-test))
- **Notes**: Creates a boarding token used to authenticate the installation of a Payments App instance on an Android device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path. To make this request, your API credential must have the following role : * Adyen Payments App role
- **Signature**: `PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(string merchantId, string storeId, BoardingTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BoardingTokenResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMerchantsStoresGeneratePaymentsAppBoardingToken400Error1(out MerchantsStoresGeneratePaymentsAppBoardingToken400Error1)` [400] · `TryGetMerchantsStoresGeneratePaymentsAppBoardingToken401Error1(out MerchantsStoresGeneratePaymentsAppBoardingToken401Error1)` [401] · `TryGetMerchantsStoresGeneratePaymentsAppBoardingToken403Error1(out MerchantsStoresGeneratePaymentsAppBoardingToken403Error1)` [403] · `TryGetMerchantsStoresGeneratePaymentsAppBoardingToken422Error1(out MerchantsStoresGeneratePaymentsAppBoardingToken422Error1)` [422] · `TryGetMerchantsStoresGeneratePaymentsAppBoardingToken500Error1(out MerchantsStoresGeneratePaymentsAppBoardingToken500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

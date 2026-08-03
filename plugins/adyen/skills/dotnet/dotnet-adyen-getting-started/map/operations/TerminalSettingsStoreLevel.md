# TerminalSettingsStoreLevel — operations

Accessor: `client.TerminalSettingsStoreLevel` · Source: `Api/TerminalSettingsStoreLevel.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdStoresReferenceTerminalLogos
- **HTTP**: `GET /merchants/{merchantId}/stores/{reference}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Returns the logo that is configured for a specific payment terminal model at the store identified in the path. The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdStoresReferenceTerminalLogos(string merchantId, string reference, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresReferenceTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdStoresReferenceTerminalSettings
- **HTTP**: `GET /merchants/{merchantId}/stores/{reference}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdStoresReferenceTerminalSettings(string merchantId, string reference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresReferenceTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStoresStoreIdTerminalLogos
- **HTTP**: `GET /stores/{storeId}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Returns the logo that is configured for a specific payment terminal model at the store identified in the path. The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetStoresStoreIdTerminalLogos(string storeId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetStoresStoreIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStoresStoreIdTerminalSettings
- **HTTP**: `GET /stores/{storeId}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetStoresStoreIdTerminalSettings(string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetStoresStoreIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdStoresReferenceTerminalLogos
- **HTTP**: `PATCH /merchants/{merchantId}/stores/{reference}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time. This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. To change the logo, specify the image file as a Base64-encoded string. To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdStoresReferenceTerminalLogos(string merchantId, string reference, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresReferenceTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdStoresReferenceTerminalSettings
- **HTTP**: `PATCH /merchants/{merchantId}/stores/{reference}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal. To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object. To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter. Objects that are not included in the request are not updated. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdStoresReferenceTerminalSettings(string merchantId, string reference, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchStoresStoreIdTerminalLogos
- **HTTP**: `PATCH /stores/{storeId}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time. This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. To change the logo, specify the image file as a Base64-encoded string. To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchStoresStoreIdTerminalLogos(string storeId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchStoresStoreIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchStoresStoreIdTerminalSettings
- **HTTP**: `PATCH /stores/{storeId}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal. To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object. To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter. Objects that are not included in the request are not updated. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchStoresStoreIdTerminalSettings(string storeId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchStoresStoreIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

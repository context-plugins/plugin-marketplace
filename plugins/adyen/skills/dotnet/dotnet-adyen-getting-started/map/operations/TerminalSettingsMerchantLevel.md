# TerminalSettingsMerchantLevel — operations

Accessor: `client.TerminalSettingsMerchantLevel` · Source: `Api/TerminalSettingsMerchantLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdTerminalLogos
- **HTTP**: `GET /merchants/{merchantId}/terminalLogos` (Default9 (management-test))
- **Notes**: Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path. The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal). To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalLogos(string merchantId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdTerminalSettings
- **HTTP**: `GET /merchants/{merchantId}/terminalSettings` (Default9 (management-test))
- **Notes**: Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal). To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalSettings(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdTerminalLogos
- **HTTP**: `PATCH /merchants/{merchantId}/terminalLogos` (Default9 (management-test))
- **Notes**: Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time. This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal). To change the logo, specify the image file as a Base64-encoded string. To restore the logo inherited from the company account, specify an empty logo value. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdTerminalLogos(string merchantId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdTerminalSettings
- **HTTP**: `PATCH /merchants/{merchantId}/terminalSettings` (Default9 (management-test))
- **Notes**: Updates payment terminal settings for the merchant account identified in the path. These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal). To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object. To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter. Objects that are not included in the request are not updated. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdTerminalSettings(string merchantId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

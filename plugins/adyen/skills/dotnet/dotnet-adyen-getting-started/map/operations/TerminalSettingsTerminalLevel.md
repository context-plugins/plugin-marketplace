# TerminalSettingsTerminalLevel — operations

Accessor: `client.TerminalSettingsTerminalLevel` · Source: `Api/TerminalSettingsTerminalLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTerminalsTerminalIdTerminalLogos
- **HTTP**: `GET /terminals/{terminalId}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Returns the logo that is configured for the payment terminal identified in the path. The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetTerminalsTerminalIdTerminalLogos(string terminalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Logo`
- **Error**: `SdkException<GetTerminalsTerminalIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTerminalsTerminalIdTerminalSettings
- **HTTP**: `GET /terminals/{terminalId}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Returns the settings that are configured for the payment terminal identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetTerminalsTerminalIdTerminalSettings(string terminalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetTerminalsTerminalIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchTerminalsTerminalIdTerminalLogos
- **HTTP**: `PATCH /terminals/{terminalId}/terminalLogos` (Default (balanceplatform-api-test))
- **Notes**: Updates the logo for the payment terminal identified in the path. To change the logo, specify the image file as a Base64-encoded string. To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchTerminalsTerminalIdTerminalLogos(string terminalId, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Logo`
- **Error**: `SdkException<PatchTerminalsTerminalIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchTerminalsTerminalIdTerminalSettings
- **HTTP**: `PATCH /terminals/{terminalId}/terminalSettings` (Default (balanceplatform-api-test))
- **Notes**: Updates the settings that are configured for the payment terminal identified in the path. To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object. To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter. Objects that are not included in the request are not updated. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchTerminalsTerminalIdTerminalSettings(string terminalId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchTerminalsTerminalIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

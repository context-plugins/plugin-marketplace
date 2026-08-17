# TerminalSettingsCompanyLevel — operations

Accessor: `client.TerminalSettingsCompanyLevel` · Source: `Api/TerminalSettingsCompanyLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdTerminalLogos
- **HTTP**: `GET /companies/{companyId}/terminalLogos` (Default9 (management-test))
- **Notes**: Returns the logo that is configured for a specific payment terminal model at the company identified in the path. The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalLogos(string companyId, string model, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalSettings
- **HTTP**: `GET /companies/{companyId}/terminalSettings` (Default9 (management-test))
- **Notes**: Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal). To make this request, your API credential must have one of the following roles : * Management API—Terminal settings read * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalSettings(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdTerminalLogos
- **HTTP**: `PATCH /companies/{companyId}/terminalLogos` (Default9 (management-test))
- **Notes**: Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time. This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). * To change the logo, specify the image file as a Base64-encoded string. * To restore the logo inherited from the Adyen PSP level, specify an empty logo value. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchCompaniesCompanyIdTerminalLogos(string companyId, string model, Logo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `model` ← `model`
- **Returns**: `Logo`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalLogosError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdTerminalSettings
- **HTTP**: `PATCH /companies/{companyId}/terminalSettings` (Default9 (management-test))
- **Notes**: Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal). To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object. To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter. Objects that are not included in the request are not updated. To make this request, your API credential must have the following role : * Management API—Terminal settings read and write For sensitive terminal settings , your API credential must have the following role: * Management API—Terminal settings Advanced read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchCompaniesCompanyIdTerminalSettings(string companyId, TerminalSettings? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalSettings`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

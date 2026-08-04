# Compliance — operations

Accessor: `client.Compliance` · Source: `Api/Compliance.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetUsersUserTokenIdvChecks
- **HTTP**: `GET /users/{user-token}/idv-checks` (Api (api))
- **Notes**: Fetch a list of IDV checks for a user that supports filtering , sorting , and pagination through existing mechanisms. Identity verification (IDV) is performed automatically during onboarding to verify the user's identity against external data sources. See also KYC Enums .
- **Signature**: `GetUsersUserTokenIdvChecks(string userToken, string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `IdvCheckListResult`
- **Error**: `SdkException<GetUsersUserTokenIdvChecksError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetUsersUserTokenIdvChecksIdvcToken
- **HTTP**: `GET /users/{user-token}/idv-checks/{idvc-token}` (Api (api))
- **Notes**: Fetch a single IDV check result by its `idvc-` token. Returns the verification type, result, disposition, and provider details.
- **Signature**: `GetUsersUserTokenIdvChecksIdvcToken(string userToken, string idvcToken = "idvc-7e7567e0-c2db-485d-896d-45901a10baa9", string? acceptLanguage = "en-US", string? acceptTimezone = "UTC", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `idvcToken` = "idvc-7e7567e0-c2db-485d-896d-45901a10baa9", `acceptLanguage` = "en-US", `acceptTimezone` = "UTC", `requestOptions` = null
- **Returns**: `IdvCheckResult`
- **Error**: `SdkException<GetUsersUserTokenIdvChecksIdvcTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorResult(out ApiErrorResult)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

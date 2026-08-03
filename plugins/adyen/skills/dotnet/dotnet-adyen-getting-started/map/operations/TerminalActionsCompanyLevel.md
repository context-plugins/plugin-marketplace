# TerminalActionsCompanyLevel — operations

Accessor: `client.TerminalActionsCompanyLevel` · Source: `Api/TerminalActionsCompanyLevel.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdTerminalActions
- **HTTP**: `GET /companies/{companyId}/terminalActions` (Default (balanceplatform-api-test))
- **Notes**: Returns the terminal actions that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen. To make this request, your API credential must have one of the following roles : * Management API—Terminal actions read * Management API—Terminal actions read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalActions(string companyId, int? pageNumber, int? pageSize, string? status, string? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `status` ← `status`, `type` ← `type`
- **Returns**: `ListExternalTerminalActionsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalActionsActionId
- **HTTP**: `GET /companies/{companyId}/terminalActions/{actionId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the terminal action identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Terminal actions read * Management API—Terminal actions read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalActionsActionId(string companyId, string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExternalTerminalAction`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalActionsActionIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

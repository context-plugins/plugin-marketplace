<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalActionsCompanyLevel — operations

Accessor: `client.TerminalActionsCompanyLevel` · Source: `Api/TerminalActionsCompanyLevel.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdTerminalActions
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalActions(string companyId, int? pageNumber, int? pageSize, string? status, string? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `status` ← `status`, `type` ← `type`
- **Returns**: `ListExternalTerminalActionsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalActionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListExternalTerminalActionsResponse` | `Models/ListExternalTerminalActionsResponse.cs` |
| `GetCompaniesCompanyIdTerminalActionsError` | `Errors/GetCompaniesCompanyIdTerminalActionsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalActionsActionId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalActionsActionId(string companyId, string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ExternalTerminalAction`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalActionsActionIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ExternalTerminalAction` | `Models/ExternalTerminalAction.cs` |
| `GetCompaniesCompanyIdTerminalActionsActionIdError` | `Errors/GetCompaniesCompanyIdTerminalActionsActionIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |


# Accounts — operations

Accessor: `client.Accounts` · Source: `Api/Accounts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountInformation
- **HTTP**: `GET /m2m/v1/accounts/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns information about a specified account.
- **Signature**: `GetAccountInformation(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Account`
- **Error**: `SdkException<GetAccountInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAccountLeads
- **HTTP**: `GET /m2m/v1/leads/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: When HTTP status is 202, a URL will be returned in the Location header of the form /leads/{aname}?next={token}. This URL can be used to request the next set of leads.
- **Signature**: `ListAccountLeads(string aname, long? next, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `next` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `next` ← `next`
- **Returns**: `AccountLeadsResult`
- **Error**: `SdkException<ListAccountLeadsError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAccountStatesAndServices
- **HTTP**: `GET /m2m/v1/accounts/{aname}/statesandservices` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns a list and details of all custom services and states defined for a specified account.
- **Signature**: `ListAccountStatesAndServices(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountStatesAndServices`
- **Error**: `SdkException<ListAccountStatesAndServicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

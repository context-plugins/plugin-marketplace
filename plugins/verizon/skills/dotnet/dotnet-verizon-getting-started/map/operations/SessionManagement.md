# SessionManagement — operations

Accessor: `client.SessionManagement` · Source: `Api/SessionManagement.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### EndConnectivityManagementSession
- **HTTP**: `POST /m2m/v1/session/logout` (HyperPreciseCredentials (thingspace))
- **Notes**: Ends a Connectivity Management session.
- **Signature**: `EndConnectivityManagementSession(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LogOutRequest`
- **Error**: `SdkException<EndConnectivityManagementSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResetConnectivityManagementPassword
- **HTTP**: `PUT /m2m/v1/session/password/actions/reset` (HyperPreciseCredentials (thingspace))
- **Notes**: The new password is effective immediately. Passwords do not expire, but Verizon recommends changing your password every 90 days.
- **Signature**: `ResetConnectivityManagementPassword(SessionResetPasswordRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SessionResetPasswordResult`
- **Error**: `SdkException<ResetConnectivityManagementPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartConnectivityManagementSession
- **HTTP**: `POST /m2m/v1/session/login` (HyperPreciseCredentials (thingspace))
- **Notes**: Initiates a Connectivity Management session and returns a VZ-M2M session token that is required in subsequent API requests.
- **Signature**: `StartConnectivityManagementSession(LogInRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `LogInResult`
- **Error**: `SdkException<StartConnectivityManagementSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

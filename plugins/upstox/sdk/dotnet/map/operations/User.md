<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.User` · Source: `src/Upstox/Api/User.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetKillSwitch

- **Auth**: `options.Oauth2`
- **Signature**: `GetKillSwitch(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `KillSwitchResponse`
- **Error**: `ApiException<GetKillSwitchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `KillSwitchResponse` | `src/Upstox/Models/KillSwitchResponse.cs` |
| `GetKillSwitchError` | `src/Upstox/Errors/GetKillSwitchError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetProfile

- **Auth**: `options.Oauth2`
- **Signature**: `GetProfile(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetProfileResponse`
- **Error**: `ApiException<GetProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProfileResponse` | `src/Upstox/Models/GetProfileResponse.cs` |
| `GetProfileError` | `src/Upstox/Errors/GetProfileError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetUserFundMargin

- **Auth**: `options.Oauth2`
- **Signature**: `GetUserFundMargin(GetUserFundMarginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `segment` ← `Segment`
- **Returns**: `GetUserFundMarginResponse`
- **Error**: `ApiException<GetUserFundMarginError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserFundMarginRequest` | `src/Upstox/Requests/User/GetUserFundMarginRequest.cs` |
| `Segment1` | `src/Upstox/Models/Enums/Segment1.cs` |
| `GetUserFundMarginResponse` | `src/Upstox/Models/GetUserFundMarginResponse.cs` |
| `GetUserFundMarginError` | `src/Upstox/Errors/GetUserFundMarginError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetUserFundMarginV3

- **Auth**: `options.Oauth2`
- **Signature**: `GetUserFundMarginV3(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetUserFundMarginV3Response`
- **Error**: `ApiException<GetUserFundMarginV3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserFundMarginV3Response` | `src/Upstox/Models/GetUserFundMarginV3Response.cs` |
| `GetUserFundMarginV3Error` | `src/Upstox/Errors/GetUserFundMarginV3Error.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetUserIps

- **Auth**: `options.Oauth2`
- **Signature**: `GetUserIps(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UserIpResponse`
- **Error**: `ApiException<GetUserIpsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UserIpResponse` | `src/Upstox/Models/UserIpResponse.cs` |
| `GetUserIpsError` | `src/Upstox/Errors/GetUserIpsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### UpdateKillSwitch

- **Auth**: `options.Oauth2`
- **Signature**: `UpdateKillSwitch(UpdateKillSwitchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `KillSwitchResponse`
- **Error**: `ApiException<UpdateKillSwitchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateKillSwitchRequest` | `src/Upstox/Requests/User/UpdateKillSwitchRequest.cs` |
| `KillSwitchSegmentUpdateRequest` | `src/Upstox/Models/KillSwitchSegmentUpdateRequest.cs` |
| `KillSwitchResponse` | `src/Upstox/Models/KillSwitchResponse.cs` |
| `UpdateKillSwitchError` | `src/Upstox/Errors/UpdateKillSwitchError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### UpdateUserIp

- **Auth**: `options.Oauth2`
- **Signature**: `UpdateUserIp(UpdateUserIpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `UserIpResponse`
- **Error**: `ApiException<UpdateUserIpError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserIpOperationRequest` | `src/Upstox/Requests/User/UpdateUserIpOperationRequest.cs` |
| `UpdateUserIpRequest` | `src/Upstox/Models/UpdateUserIpRequest.cs` |
| `UserIpResponse` | `src/Upstox/Models/UserIpResponse.cs` |
| `UpdateUserIpError` | `src/Upstox/Errors/UpdateUserIpError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |


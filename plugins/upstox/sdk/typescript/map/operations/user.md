<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `src/resources/user.ts` · 7 operations · Request and error types: namespace `User`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getKillSwitch

- **Signature**: `getKillSwitch(options?: RequestOptions): ApiPromise<KillSwitchResponse, User.GetKillSwitchError>`
- **Wire**: `GET /v2/user/kill-switch`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KillSwitchResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.GetKillSwitchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `KillSwitchResponse` | `killSwitchResponseSchema` | `src/models/kill-switch-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getProfile

- **Signature**: `getProfile(options?: RequestOptions): ApiPromise<GetProfileResponse, User.GetProfileError>`
- **Wire**: `GET /v2/user/profile`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProfileResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.GetProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProfileResponse` | `getProfileResponseSchema` | `src/models/get-profile-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getUserFundMargin

- **Signature**: `getUserFundMargin(request?: User.GetUserFundMarginRequest, options?: RequestOptions): ApiPromise<GetUserFundMarginResponse, User.GetUserFundMarginError>`
- **Wire**: `GET /v2/user/get-funds-and-margin`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetUserFundMarginResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.GetUserFundMarginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `User.GetUserFundMarginRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `segment` | `query` | `Segment1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Segment1` | `segment1Schema` | `src/models/segment1.ts` |
| `GetUserFundMarginResponse` | `getUserFundMarginResponseSchema` | `src/models/get-user-fund-margin-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getUserFundMarginV3

- **Signature**: `getUserFundMarginV3(options?: RequestOptions): ApiPromise<GetUserFundMarginV3Response, User.GetUserFundMarginV3Error>`
- **Wire**: `GET /v3/user/get-funds-and-margin`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetUserFundMarginV3Response`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.GetUserFundMarginV3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetUserFundMarginV3Response` | `getUserFundMarginV3ResponseSchema` | `src/models/get-user-fund-margin-v3-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getUserIps

- **Signature**: `getUserIps(options?: RequestOptions): ApiPromise<UserIpResponse, User.GetUserIpsError>`
- **Wire**: `GET /v2/user/ip`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserIpResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.GetUserIpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UserIpResponse` | `userIpResponseSchema` | `src/models/user-ip-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### updateKillSwitch

- **Signature**: `updateKillSwitch(request: User.UpdateKillSwitchRequest, options?: RequestOptions): ApiPromise<KillSwitchResponse, User.UpdateKillSwitchError>`
- **Wire**: `POST /v2/user/kill-switch`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `KillSwitchResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.UpdateKillSwitchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `User.UpdateKillSwitchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `KillSwitchSegmentUpdateRequest[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KillSwitchSegmentUpdateRequest` | `killSwitchSegmentUpdateRequestSchema` | `src/models/kill-switch-segment-update-request.ts` |
| `KillSwitchResponse` | `killSwitchResponseSchema` | `src/models/kill-switch-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### updateUserIp

- **Signature**: `updateUserIp(request: User.UpdateUserIpRequestParams, options?: RequestOptions): ApiPromise<UserIpResponse, User.UpdateUserIpError>`
- **Wire**: `PUT /v2/user/ip`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserIpResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `User.UpdateUserIpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `User.UpdateUserIpRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateUserIpRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateUserIpRequest` | `updateUserIpRequestSchema` | `src/models/update-user-ip-request.ts` |
| `UserIpResponse` | `userIpResponseSchema` | `src/models/user-ip-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |


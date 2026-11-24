<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `upstox/apis/user.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user.get_kill_switch

- **Route**: `GET /v2/user/kill-switch`
- **Auth**: `oauth2`
- **Signature**: `def get_kill_switch(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `KillSwitchResponse`
- **Returns (raw)**: `ApiResult[KillSwitchResponse, GetKillSwitchErrorBody]`
- **Error**: `GetKillSwitchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `KillSwitchResponse` | `upstox/models/kill_switch_response.py` |
| `GetKillSwitchErrorBody` | `upstox/errors/get_kill_switch_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.get_profile

- **Route**: `GET /v2/user/profile`
- **Auth**: `oauth2`
- **Signature**: `def get_profile(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetProfileResponse`
- **Returns (raw)**: `ApiResult[GetProfileResponse, GetProfileErrorBody]`
- **Error**: `GetProfileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetProfileResponse` | `upstox/models/get_profile_response.py` |
| `GetProfileErrorBody` | `upstox/errors/get_profile_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.get_user_fund_margin

- **Route**: `GET /v2/user/get-funds-and-margin`
- **Auth**: `oauth2`
- **Signature**: `def get_user_fund_margin(*, segment: Segment1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `segment` — query
- **Returns (parsed)**: `GetUserFundMarginResponse`
- **Returns (raw)**: `ApiResult[GetUserFundMarginResponse, GetUserFundMarginErrorBody]`
- **Error**: `GetUserFundMarginErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Segment1OrStr` | `upstox/models/enums/segment1.py` |
| `GetUserFundMarginResponse` | `upstox/models/get_user_fund_margin_response.py` |
| `GetUserFundMarginErrorBody` | `upstox/errors/get_user_fund_margin_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.get_user_fund_margin_v3

- **Route**: `GET /v3/user/get-funds-and-margin`
- **Auth**: `oauth2`
- **Signature**: `def get_user_fund_margin_v3(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GetUserFundMarginV3Response`
- **Returns (raw)**: `ApiResult[GetUserFundMarginV3Response, GetUserFundMarginV3ErrorBody]`
- **Error**: `GetUserFundMarginV3ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetUserFundMarginV3Response` | `upstox/models/get_user_fund_margin_v3_response.py` |
| `GetUserFundMarginV3ErrorBody` | `upstox/errors/get_user_fund_margin_v3_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.get_user_ips

- **Route**: `GET /v2/user/ip`
- **Auth**: `oauth2`
- **Signature**: `def get_user_ips(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UserIpResponse`
- **Returns (raw)**: `ApiResult[UserIpResponse, GetUserIpsErrorBody]`
- **Error**: `GetUserIpsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserIpResponse` | `upstox/models/user_ip_response.py` |
| `GetUserIpsErrorBody` | `upstox/errors/get_user_ips_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.update_kill_switch

- **Route**: `POST /v2/user/kill-switch`
- **Auth**: `oauth2`
- **Signature**: `def update_kill_switch(body: list[KillSwitchSegmentUpdateRequest | KillSwitchSegmentUpdateRequestDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `KillSwitchResponse`
- **Returns (raw)**: `ApiResult[KillSwitchResponse, UpdateKillSwitchErrorBody]`
- **Error**: `UpdateKillSwitchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `KillSwitchSegmentUpdateRequest` | `upstox/models/kill_switch_segment_update_request.py` |
| `KillSwitchSegmentUpdateRequestDict` | `upstox/models/kill_switch_segment_update_request.py` |
| `KillSwitchResponse` | `upstox/models/kill_switch_response.py` |
| `UpdateKillSwitchErrorBody` | `upstox/errors/update_kill_switch_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.user.update_user_ip

- **Route**: `PUT /v2/user/ip`
- **Auth**: `oauth2`
- **Signature**: `def update_user_ip(body: UpdateUserIpRequest | UpdateUserIpRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `UserIpResponse`
- **Returns (raw)**: `ApiResult[UserIpResponse, UpdateUserIpErrorBody]`
- **Error**: `UpdateUserIpErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateUserIpRequest` | `upstox/models/update_user_ip_request.py` |
| `UpdateUserIpRequestDict` | `upstox/models/update_user_ip_request.py` |
| `UserIpResponse` | `upstox/models/user_ip_response.py` |
| `UpdateUserIpErrorBody` | `upstox/errors/update_user_ip_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |


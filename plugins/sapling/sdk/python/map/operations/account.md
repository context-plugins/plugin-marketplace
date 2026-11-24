<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `sapling/apis/account.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.sapling_account_status

- **Route**: `GET /api/v1/account/status`
- **Auth**: `bearer_auth` OR `api_key_query`
- **Signature**: `def sapling_account_status(*, return_usage: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `return_usage` — query
- **Returns (parsed)**: `ApiV1AccountStatusResponse`
- **Returns (raw)**: `ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusErrorBody]`
- **Error**: `SaplingAccountStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AccountStatusResponse` | `sapling/models/api_v1_account_status_response.py` |
| `SaplingAccountStatusErrorBody` | `sapling/errors/sapling_account_status_error.py` |
| `Error` | `sapling/models/error.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.account.sapling_account_status_post

- **Route**: `POST /api/v1/account/status`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_account_status_post(*, body: ApiV1AccountStatusRequest | ApiV1AccountStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AccountStatusResponse`
- **Returns (raw)**: `ApiResult[ApiV1AccountStatusResponse, SaplingAccountStatusPostErrorBody]`
- **Error**: `SaplingAccountStatusPostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RateLimited1` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AccountStatusRequest` | `sapling/models/api_v1_account_status_request.py` |
| `ApiV1AccountStatusRequestDict` | `sapling/models/api_v1_account_status_request.py` |
| `ApiV1AccountStatusResponse` | `sapling/models/api_v1_account_status_response.py` |
| `SaplingAccountStatusPostErrorBody` | `sapling/errors/sapling_account_status_post_error.py` |
| `Error` | `sapling/models/error.py` |
| `RateLimited1` | `sapling/models/rate_limited1.py` |

### client.account.sapling_api_endpoint_usage

- **Route**: `POST /api/v1/reporting/api_endpoint_usage`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_api_endpoint_usage(body: ApiV1ReportingApiEndpointUsageRequest | ApiV1ReportingApiEndpointUsageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportingApiEndpointUsageResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportingApiEndpointUsageResponse, SaplingApiEndpointUsageErrorBody]`
- **Error**: `SaplingApiEndpointUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportingApiEndpointUsageRequest` | `sapling/models/api_v1_reporting_api_endpoint_usage_request.py` |
| `ApiV1ReportingApiEndpointUsageRequestDict` | `sapling/models/api_v1_reporting_api_endpoint_usage_request.py` |
| `ApiV1ReportingApiEndpointUsageResponse` | `sapling/models/api_v1_reporting_api_endpoint_usage_response.py` |
| `SaplingApiEndpointUsageErrorBody` | `sapling/errors/sapling_api_endpoint_usage_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |

### client.account.sapling_api_quota_usage

- **Route**: `POST /api/v1/reporting/api_quota_usage`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_api_quota_usage(body: ApiV1ReportingApiQuotaUsageRequest | ApiV1ReportingApiQuotaUsageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportingApiQuotaUsageResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportingApiQuotaUsageResponse, SaplingApiQuotaUsageErrorBody]`
- **Error**: `SaplingApiQuotaUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportingApiQuotaUsageRequest` | `sapling/models/api_v1_reporting_api_quota_usage_request.py` |
| `ApiV1ReportingApiQuotaUsageRequestDict` | `sapling/models/api_v1_reporting_api_quota_usage_request.py` |
| `ApiV1ReportingApiQuotaUsageResponse` | `sapling/models/api_v1_reporting_api_quota_usage_response.py` |
| `SaplingApiQuotaUsageErrorBody` | `sapling/errors/sapling_api_quota_usage_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.account.sapling_api_usage

- **Route**: `POST /api/v1/reporting/api_usage`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_api_usage(*, body: ApiV1ReportingApiUsageRequest | ApiV1ReportingApiUsageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportingApiUsageResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportingApiUsageResponse, SaplingApiUsageErrorBody]`
- **Error**: `SaplingApiUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportingApiUsageRequest` | `sapling/models/api_v1_reporting_api_usage_request.py` |
| `ApiV1ReportingApiUsageRequestDict` | `sapling/models/api_v1_reporting_api_usage_request.py` |
| `ApiV1ReportingApiUsageResponse` | `sapling/models/api_v1_reporting_api_usage_response.py` |
| `SaplingApiUsageErrorBody` | `sapling/errors/sapling_api_usage_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |

### client.account.sapling_api_user_activity

- **Route**: `POST /api/v1/reporting/api_user_activity`
- **Auth**: `bearer_auth`
- **Signature**: `def sapling_api_user_activity(body: ApiV1ReportingApiUserActivityRequest | ApiV1ReportingApiUserActivityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportingApiUserActivityResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportingApiUserActivityResponse, SaplingApiUserActivityErrorBody]`
- **Error**: `SaplingApiUserActivityErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `PaymentRequired1` [402] · `PayloadTooLarge1` [413] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportingApiUserActivityRequest` | `sapling/models/api_v1_reporting_api_user_activity_request.py` |
| `ApiV1ReportingApiUserActivityRequestDict` | `sapling/models/api_v1_reporting_api_user_activity_request.py` |
| `ApiV1ReportingApiUserActivityResponse` | `sapling/models/api_v1_reporting_api_user_activity_response.py` |
| `SaplingApiUserActivityErrorBody` | `sapling/errors/sapling_api_user_activity_error.py` |
| `Error` | `sapling/models/error.py` |
| `PaymentRequired1` | `sapling/models/payment_required1.py` |
| `PayloadTooLarge1` | `sapling/models/payload_too_large1.py` |


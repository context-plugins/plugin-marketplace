<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 6 operations · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sapling`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### saplingAccountStatus

- **Signature**: `saplingAccountStatus(request?: Account.SaplingAccountStatusRequest, options?: RequestOptions): ApiPromise<ApiV1AccountStatusResponse, Account.SaplingAccountStatusError>`
- **Wire**: `GET /api/v1/account/status`
- **Auth**: any of `bearerAuth`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AccountStatusResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingAccountStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingAccountStatusRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `returnUsage` | `query` | `return_usage` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AccountStatusResponse` | `apiV1AccountStatusResponseSchema` | `src/models/api-v1-account-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingAccountStatusPost

- **Signature**: `saplingAccountStatusPost(request?: Account.SaplingAccountStatusPostRequest, options?: RequestOptions): ApiPromise<ApiV1AccountStatusResponse, Account.SaplingAccountStatusPostError>`
- **Wire**: `POST /api/v1/account/status`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AccountStatusResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingAccountStatusPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"rateLimited1"` [429] `RateLimited1` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingAccountStatusPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AccountStatusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AccountStatusRequest` | `apiV1AccountStatusRequestSchema` | `src/models/api-v1-account-status-request.ts` |
| `ApiV1AccountStatusResponse` | `apiV1AccountStatusResponseSchema` | `src/models/api-v1-account-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `RateLimited1` | `rateLimited1Schema` | `src/models/rate-limited1.ts` |

### saplingApiEndpointUsage

- **Signature**: `saplingApiEndpointUsage(request: Account.SaplingApiEndpointUsageRequest, options?: RequestOptions): ApiPromise<ApiV1ReportingApiEndpointUsageResponse, Account.SaplingApiEndpointUsageError>`
- **Wire**: `POST /api/v1/reporting/api_endpoint_usage`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportingApiEndpointUsageResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingApiEndpointUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingApiEndpointUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReportingApiEndpointUsageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportingApiEndpointUsageRequest` | `apiV1ReportingApiEndpointUsageRequestSchema` | `src/models/api-v1-reporting-api-endpoint-usage-request.ts` |
| `ApiV1ReportingApiEndpointUsageResponse` | `apiV1ReportingApiEndpointUsageResponseSchema` | `src/models/api-v1-reporting-api-endpoint-usage-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |

### saplingApiQuotaUsage

- **Signature**: `saplingApiQuotaUsage(request: Account.SaplingApiQuotaUsageRequest, options?: RequestOptions): ApiPromise<ApiV1ReportingApiQuotaUsageResponse, Account.SaplingApiQuotaUsageError>`
- **Wire**: `POST /api/v1/reporting/api_quota_usage`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportingApiQuotaUsageResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingApiQuotaUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingApiQuotaUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReportingApiQuotaUsageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportingApiQuotaUsageRequest` | `apiV1ReportingApiQuotaUsageRequestSchema` | `src/models/api-v1-reporting-api-quota-usage-request.ts` |
| `ApiV1ReportingApiQuotaUsageResponse` | `apiV1ReportingApiQuotaUsageResponseSchema` | `src/models/api-v1-reporting-api-quota-usage-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingApiUsage

- **Signature**: `saplingApiUsage(request?: Account.SaplingApiUsageRequest, options?: RequestOptions): ApiPromise<ApiV1ReportingApiUsageResponse, Account.SaplingApiUsageError>`
- **Wire**: `POST /api/v1/reporting/api_usage`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportingApiUsageResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingApiUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingApiUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReportingApiUsageRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportingApiUsageRequest` | `apiV1ReportingApiUsageRequestSchema` | `src/models/api-v1-reporting-api-usage-request.ts` |
| `ApiV1ReportingApiUsageResponse` | `apiV1ReportingApiUsageResponseSchema` | `src/models/api-v1-reporting-api-usage-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |

### saplingApiUserActivity

- **Signature**: `saplingApiUserActivity(request: Account.SaplingApiUserActivityRequest, options?: RequestOptions): ApiPromise<ApiV1ReportingApiUserActivityResponse, Account.SaplingApiUserActivityError>`
- **Wire**: `POST /api/v1/reporting/api_user_activity`
- **Auth**: `bearerAuth` or anonymous — sent when it is configured, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportingApiUserActivityResponse`
- **Error**: `SaplingError` with `kind: "api"`, an instance of `Account.SaplingApiUserActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"paymentRequired1"` [402] `PaymentRequired1` · `"error3"` [403] `Error` · `"payloadTooLarge1"` [413] `PayloadTooLarge1` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.SaplingApiUserActivityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReportingApiUserActivityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportingApiUserActivityRequest` | `apiV1ReportingApiUserActivityRequestSchema` | `src/models/api-v1-reporting-api-user-activity-request.ts` |
| `ApiV1ReportingApiUserActivityResponse` | `apiV1ReportingApiUserActivityResponseSchema` | `src/models/api-v1-reporting-api-user-activity-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `PaymentRequired1` | `paymentRequired1Schema` | `src/models/payment-required1.ts` |
| `PayloadTooLarge1` | `payloadTooLarge1Schema` | `src/models/payload-too-large1.ts` |


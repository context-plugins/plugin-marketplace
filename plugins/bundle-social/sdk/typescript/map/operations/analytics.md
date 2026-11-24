<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 7 operations · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### analyticsForcePostAnalytics

- **Signature**: `analyticsForcePostAnalytics(request?: Analytics.AnalyticsForcePostAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsPostForceResponse, Analytics.AnalyticsForcePostAnalyticsError>`
- **Wire**: `POST /api/v1/analytics/post/force`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AnalyticsPostForceResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsForcePostAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsPostForce400Error1"` [400] `ApiV1AnalyticsPostForce400Error1` · `"apiV1AnalyticsPostForce401Error1"` [401] `ApiV1AnalyticsPostForce401Error1` · `"apiV1AnalyticsPostForce403Error1"` [403] `ApiV1AnalyticsPostForce403Error1` · `"apiV1AnalyticsPostForce404Error1"` [404] `ApiV1AnalyticsPostForce404Error1` · `"apiV1AnalyticsPostForce429Error1"` [429] `ApiV1AnalyticsPostForce429Error1` · `"apiV1AnalyticsPostForce500Error1"` [500] `ApiV1AnalyticsPostForce500Error1` · `"apiV1AnalyticsPostForce502Error1"` [502] `ApiV1AnalyticsPostForce502Error1` · `"apiV1AnalyticsPostForce503Error1"` [503] `ApiV1AnalyticsPostForce503Error1` · `"apiV1AnalyticsPostForce504Error1"` [504] `ApiV1AnalyticsPostForce504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsForcePostAnalyticsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AnalyticsPostForceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AnalyticsPostForceRequest` | `apiV1AnalyticsPostForceRequestSchema` | `src/models/api-v1-analytics-post-force-request.ts` |
| `ApiV1AnalyticsPostForceResponse` | `apiV1AnalyticsPostForceResponseSchema` | `src/models/api-v1-analytics-post-force-response.ts` |
| `ApiV1AnalyticsPostForce400Error1` | `apiV1AnalyticsPostForce400Error1Schema` | `src/models/api-v1-analytics-post-force400-error1.ts` |
| `ApiV1AnalyticsPostForce401Error1` | `apiV1AnalyticsPostForce401Error1Schema` | `src/models/api-v1-analytics-post-force401-error1.ts` |
| `ApiV1AnalyticsPostForce403Error1` | `apiV1AnalyticsPostForce403Error1Schema` | `src/models/api-v1-analytics-post-force403-error1.ts` |
| `ApiV1AnalyticsPostForce404Error1` | `apiV1AnalyticsPostForce404Error1Schema` | `src/models/api-v1-analytics-post-force404-error1.ts` |
| `ApiV1AnalyticsPostForce429Error1` | `apiV1AnalyticsPostForce429Error1Schema` | `src/models/api-v1-analytics-post-force429-error1.ts` |
| `ApiV1AnalyticsPostForce500Error1` | `apiV1AnalyticsPostForce500Error1Schema` | `src/models/api-v1-analytics-post-force500-error1.ts` |
| `ApiV1AnalyticsPostForce502Error1` | `apiV1AnalyticsPostForce502Error1Schema` | `src/models/api-v1-analytics-post-force502-error1.ts` |
| `ApiV1AnalyticsPostForce503Error1` | `apiV1AnalyticsPostForce503Error1Schema` | `src/models/api-v1-analytics-post-force503-error1.ts` |
| `ApiV1AnalyticsPostForce504Error1` | `apiV1AnalyticsPostForce504Error1Schema` | `src/models/api-v1-analytics-post-force504-error1.ts` |

### analyticsForceSocialAccountAnalytics

- **Signature**: `analyticsForceSocialAccountAnalytics(request?: Analytics.AnalyticsForceSocialAccountAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsSocialAccountForceResponse, Analytics.AnalyticsForceSocialAccountAnalyticsError>`
- **Wire**: `POST /api/v1/analytics/social-account/force`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1AnalyticsSocialAccountForceResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsForceSocialAccountAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsSocialAccountForce400Error1"` [400] `ApiV1AnalyticsSocialAccountForce400Error1` · `"apiV1AnalyticsSocialAccountForce401Error1"` [401] `ApiV1AnalyticsSocialAccountForce401Error1` · `"apiV1AnalyticsSocialAccountForce403Error1"` [403] `ApiV1AnalyticsSocialAccountForce403Error1` · `"apiV1AnalyticsSocialAccountForce404Error1"` [404] `ApiV1AnalyticsSocialAccountForce404Error1` · `"apiV1AnalyticsSocialAccountForce429Error1"` [429] `ApiV1AnalyticsSocialAccountForce429Error1` · `"apiV1AnalyticsSocialAccountForce500Error1"` [500] `ApiV1AnalyticsSocialAccountForce500Error1` · `"apiV1AnalyticsSocialAccountForce502Error1"` [502] `ApiV1AnalyticsSocialAccountForce502Error1` · `"apiV1AnalyticsSocialAccountForce503Error1"` [503] `ApiV1AnalyticsSocialAccountForce503Error1` · `"apiV1AnalyticsSocialAccountForce504Error1"` [504] `ApiV1AnalyticsSocialAccountForce504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsForceSocialAccountAnalyticsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1AnalyticsSocialAccountForceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1AnalyticsSocialAccountForceRequest` | `apiV1AnalyticsSocialAccountForceRequestSchema` | `src/models/api-v1-analytics-social-account-force-request.ts` |
| `ApiV1AnalyticsSocialAccountForceResponse` | `apiV1AnalyticsSocialAccountForceResponseSchema` | `src/models/api-v1-analytics-social-account-force-response.ts` |
| `ApiV1AnalyticsSocialAccountForce400Error1` | `apiV1AnalyticsSocialAccountForce400Error1Schema` | `src/models/api-v1-analytics-social-account-force400-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce401Error1` | `apiV1AnalyticsSocialAccountForce401Error1Schema` | `src/models/api-v1-analytics-social-account-force401-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce403Error1` | `apiV1AnalyticsSocialAccountForce403Error1Schema` | `src/models/api-v1-analytics-social-account-force403-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce404Error1` | `apiV1AnalyticsSocialAccountForce404Error1Schema` | `src/models/api-v1-analytics-social-account-force404-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce429Error1` | `apiV1AnalyticsSocialAccountForce429Error1Schema` | `src/models/api-v1-analytics-social-account-force429-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce500Error1` | `apiV1AnalyticsSocialAccountForce500Error1Schema` | `src/models/api-v1-analytics-social-account-force500-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce502Error1` | `apiV1AnalyticsSocialAccountForce502Error1Schema` | `src/models/api-v1-analytics-social-account-force502-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce503Error1` | `apiV1AnalyticsSocialAccountForce503Error1Schema` | `src/models/api-v1-analytics-social-account-force503-error1.ts` |
| `ApiV1AnalyticsSocialAccountForce504Error1` | `apiV1AnalyticsSocialAccountForce504Error1Schema` | `src/models/api-v1-analytics-social-account-force504-error1.ts` |

### analyticsGetBulkPostAnalytics

- **Signature**: `analyticsGetBulkPostAnalytics(request: Analytics.AnalyticsGetBulkPostAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsPostBulkResponse, Analytics.AnalyticsGetBulkPostAnalyticsError>`
- **Wire**: `GET /api/v1/analytics/post/bulk`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsPostBulkResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsGetBulkPostAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsPostBulk400Error1"` [400] `ApiV1AnalyticsPostBulk400Error1` · `"apiV1AnalyticsPostBulk401Error1"` [401] `ApiV1AnalyticsPostBulk401Error1` · `"apiV1AnalyticsPostBulk403Error1"` [403] `ApiV1AnalyticsPostBulk403Error1` · `"apiV1AnalyticsPostBulk404Error1"` [404] `ApiV1AnalyticsPostBulk404Error1` · `"apiV1AnalyticsPostBulk429Error1"` [429] `ApiV1AnalyticsPostBulk429Error1` · `"apiV1AnalyticsPostBulk500Error1"` [500] `ApiV1AnalyticsPostBulk500Error1` · `"apiV1AnalyticsPostBulk502Error1"` [502] `ApiV1AnalyticsPostBulk502Error1` · `"apiV1AnalyticsPostBulk503Error1"` [503] `ApiV1AnalyticsPostBulk503Error1` · `"apiV1AnalyticsPostBulk504Error1"` [504] `ApiV1AnalyticsPostBulk504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsGetBulkPostAnalyticsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `postIds` | `query` | `string[]` | yes | — |
| `platformType` | `query` | `PlatformType` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformType` | `platformTypeSchema` | `src/models/platform-type.ts` |
| `ApiV1AnalyticsPostBulkResponse` | `apiV1AnalyticsPostBulkResponseSchema` | `src/models/api-v1-analytics-post-bulk-response.ts` |
| `ApiV1AnalyticsPostBulk400Error1` | `apiV1AnalyticsPostBulk400Error1Schema` | `src/models/api-v1-analytics-post-bulk400-error1.ts` |
| `ApiV1AnalyticsPostBulk401Error1` | `apiV1AnalyticsPostBulk401Error1Schema` | `src/models/api-v1-analytics-post-bulk401-error1.ts` |
| `ApiV1AnalyticsPostBulk403Error1` | `apiV1AnalyticsPostBulk403Error1Schema` | `src/models/api-v1-analytics-post-bulk403-error1.ts` |
| `ApiV1AnalyticsPostBulk404Error1` | `apiV1AnalyticsPostBulk404Error1Schema` | `src/models/api-v1-analytics-post-bulk404-error1.ts` |
| `ApiV1AnalyticsPostBulk429Error1` | `apiV1AnalyticsPostBulk429Error1Schema` | `src/models/api-v1-analytics-post-bulk429-error1.ts` |
| `ApiV1AnalyticsPostBulk500Error1` | `apiV1AnalyticsPostBulk500Error1Schema` | `src/models/api-v1-analytics-post-bulk500-error1.ts` |
| `ApiV1AnalyticsPostBulk502Error1` | `apiV1AnalyticsPostBulk502Error1Schema` | `src/models/api-v1-analytics-post-bulk502-error1.ts` |
| `ApiV1AnalyticsPostBulk503Error1` | `apiV1AnalyticsPostBulk503Error1Schema` | `src/models/api-v1-analytics-post-bulk503-error1.ts` |
| `ApiV1AnalyticsPostBulk504Error1` | `apiV1AnalyticsPostBulk504Error1Schema` | `src/models/api-v1-analytics-post-bulk504-error1.ts` |

### analyticsGetPostAnalytics

- **Signature**: `analyticsGetPostAnalytics(request?: Analytics.AnalyticsGetPostAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsPostResponse, Analytics.AnalyticsGetPostAnalyticsError>`
- **Wire**: `GET /api/v1/analytics/post`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsPostResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsGetPostAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsPost400Error1"` [400] `ApiV1AnalyticsPost400Error1` · `"apiV1AnalyticsPost401Error1"` [401] `ApiV1AnalyticsPost401Error1` · `"apiV1AnalyticsPost403Error1"` [403] `ApiV1AnalyticsPost403Error1` · `"apiV1AnalyticsPost404Error1"` [404] `ApiV1AnalyticsPost404Error1` · `"apiV1AnalyticsPost429Error1"` [429] `ApiV1AnalyticsPost429Error1` · `"apiV1AnalyticsPost500Error1"` [500] `ApiV1AnalyticsPost500Error1` · `"apiV1AnalyticsPost502Error1"` [502] `ApiV1AnalyticsPost502Error1` · `"apiV1AnalyticsPost503Error1"` [503] `ApiV1AnalyticsPost503Error1` · `"apiV1AnalyticsPost504Error1"` [504] `ApiV1AnalyticsPost504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsGetPostAnalyticsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `postId` | `query` | `string` | no |
| `platformType` | `query` | `PlatformType` | no |
| `importedPostId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformType` | `platformTypeSchema` | `src/models/platform-type.ts` |
| `ApiV1AnalyticsPostResponse` | `apiV1AnalyticsPostResponseSchema` | `src/models/api-v1-analytics-post-response.ts` |
| `ApiV1AnalyticsPost400Error1` | `apiV1AnalyticsPost400Error1Schema` | `src/models/api-v1-analytics-post400-error1.ts` |
| `ApiV1AnalyticsPost401Error1` | `apiV1AnalyticsPost401Error1Schema` | `src/models/api-v1-analytics-post401-error1.ts` |
| `ApiV1AnalyticsPost403Error1` | `apiV1AnalyticsPost403Error1Schema` | `src/models/api-v1-analytics-post403-error1.ts` |
| `ApiV1AnalyticsPost404Error1` | `apiV1AnalyticsPost404Error1Schema` | `src/models/api-v1-analytics-post404-error1.ts` |
| `ApiV1AnalyticsPost429Error1` | `apiV1AnalyticsPost429Error1Schema` | `src/models/api-v1-analytics-post429-error1.ts` |
| `ApiV1AnalyticsPost500Error1` | `apiV1AnalyticsPost500Error1Schema` | `src/models/api-v1-analytics-post500-error1.ts` |
| `ApiV1AnalyticsPost502Error1` | `apiV1AnalyticsPost502Error1Schema` | `src/models/api-v1-analytics-post502-error1.ts` |
| `ApiV1AnalyticsPost503Error1` | `apiV1AnalyticsPost503Error1Schema` | `src/models/api-v1-analytics-post503-error1.ts` |
| `ApiV1AnalyticsPost504Error1` | `apiV1AnalyticsPost504Error1Schema` | `src/models/api-v1-analytics-post504-error1.ts` |

### analyticsGetPostAnalyticsRaw

- **Signature**: `analyticsGetPostAnalyticsRaw(request?: Analytics.AnalyticsGetPostAnalyticsRawRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsPostRawResponse, Analytics.AnalyticsGetPostAnalyticsRawError>`
- **Wire**: `GET /api/v1/analytics/post/raw`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsPostRawResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsGetPostAnalyticsRawError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsPostRaw400Error1"` [400] `ApiV1AnalyticsPostRaw400Error1` · `"apiV1AnalyticsPostRaw401Error1"` [401] `ApiV1AnalyticsPostRaw401Error1` · `"apiV1AnalyticsPostRaw403Error1"` [403] `ApiV1AnalyticsPostRaw403Error1` · `"apiV1AnalyticsPostRaw404Error1"` [404] `ApiV1AnalyticsPostRaw404Error1` · `"apiV1AnalyticsPostRaw429Error1"` [429] `ApiV1AnalyticsPostRaw429Error1` · `"apiV1AnalyticsPostRaw500Error1"` [500] `ApiV1AnalyticsPostRaw500Error1` · `"apiV1AnalyticsPostRaw502Error1"` [502] `ApiV1AnalyticsPostRaw502Error1` · `"apiV1AnalyticsPostRaw503Error1"` [503] `ApiV1AnalyticsPostRaw503Error1` · `"apiV1AnalyticsPostRaw504Error1"` [504] `ApiV1AnalyticsPostRaw504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsGetPostAnalyticsRawRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `postId` | `query` | `string` | no |
| `platformType` | `query` | `PlatformType` | no |
| `importedPostId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformType` | `platformTypeSchema` | `src/models/platform-type.ts` |
| `ApiV1AnalyticsPostRawResponse` | `apiV1AnalyticsPostRawResponseSchema` | `src/models/api-v1-analytics-post-raw-response.ts` |
| `ApiV1AnalyticsPostRaw400Error1` | `apiV1AnalyticsPostRaw400Error1Schema` | `src/models/api-v1-analytics-post-raw400-error1.ts` |
| `ApiV1AnalyticsPostRaw401Error1` | `apiV1AnalyticsPostRaw401Error1Schema` | `src/models/api-v1-analytics-post-raw401-error1.ts` |
| `ApiV1AnalyticsPostRaw403Error1` | `apiV1AnalyticsPostRaw403Error1Schema` | `src/models/api-v1-analytics-post-raw403-error1.ts` |
| `ApiV1AnalyticsPostRaw404Error1` | `apiV1AnalyticsPostRaw404Error1Schema` | `src/models/api-v1-analytics-post-raw404-error1.ts` |
| `ApiV1AnalyticsPostRaw429Error1` | `apiV1AnalyticsPostRaw429Error1Schema` | `src/models/api-v1-analytics-post-raw429-error1.ts` |
| `ApiV1AnalyticsPostRaw500Error1` | `apiV1AnalyticsPostRaw500Error1Schema` | `src/models/api-v1-analytics-post-raw500-error1.ts` |
| `ApiV1AnalyticsPostRaw502Error1` | `apiV1AnalyticsPostRaw502Error1Schema` | `src/models/api-v1-analytics-post-raw502-error1.ts` |
| `ApiV1AnalyticsPostRaw503Error1` | `apiV1AnalyticsPostRaw503Error1Schema` | `src/models/api-v1-analytics-post-raw503-error1.ts` |
| `ApiV1AnalyticsPostRaw504Error1` | `apiV1AnalyticsPostRaw504Error1Schema` | `src/models/api-v1-analytics-post-raw504-error1.ts` |

### analyticsGetSocialAccountAnalytics

- **Signature**: `analyticsGetSocialAccountAnalytics(request: Analytics.AnalyticsGetSocialAccountAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsSocialAccountResponse, Analytics.AnalyticsGetSocialAccountAnalyticsError>`
- **Wire**: `GET /api/v1/analytics/social-account`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsSocialAccountResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsGetSocialAccountAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsSocialAccount400Error1"` [400] `ApiV1AnalyticsSocialAccount400Error1` · `"apiV1AnalyticsSocialAccount401Error1"` [401] `ApiV1AnalyticsSocialAccount401Error1` · `"apiV1AnalyticsSocialAccount403Error1"` [403] `ApiV1AnalyticsSocialAccount403Error1` · `"apiV1AnalyticsSocialAccount404Error1"` [404] `ApiV1AnalyticsSocialAccount404Error1` · `"apiV1AnalyticsSocialAccount429Error1"` [429] `ApiV1AnalyticsSocialAccount429Error1` · `"apiV1AnalyticsSocialAccount500Error1"` [500] `ApiV1AnalyticsSocialAccount500Error1` · `"apiV1AnalyticsSocialAccount502Error1"` [502] `ApiV1AnalyticsSocialAccount502Error1` · `"apiV1AnalyticsSocialAccount503Error1"` [503] `ApiV1AnalyticsSocialAccount503Error1` · `"apiV1AnalyticsSocialAccount504Error1"` [504] `ApiV1AnalyticsSocialAccount504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsGetSocialAccountAnalyticsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `platformType` | `query` | `PlatformType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformType` | `platformTypeSchema` | `src/models/platform-type.ts` |
| `ApiV1AnalyticsSocialAccountResponse` | `apiV1AnalyticsSocialAccountResponseSchema` | `src/models/api-v1-analytics-social-account-response.ts` |
| `ApiV1AnalyticsSocialAccount400Error1` | `apiV1AnalyticsSocialAccount400Error1Schema` | `src/models/api-v1-analytics-social-account400-error1.ts` |
| `ApiV1AnalyticsSocialAccount401Error1` | `apiV1AnalyticsSocialAccount401Error1Schema` | `src/models/api-v1-analytics-social-account401-error1.ts` |
| `ApiV1AnalyticsSocialAccount403Error1` | `apiV1AnalyticsSocialAccount403Error1Schema` | `src/models/api-v1-analytics-social-account403-error1.ts` |
| `ApiV1AnalyticsSocialAccount404Error1` | `apiV1AnalyticsSocialAccount404Error1Schema` | `src/models/api-v1-analytics-social-account404-error1.ts` |
| `ApiV1AnalyticsSocialAccount429Error1` | `apiV1AnalyticsSocialAccount429Error1Schema` | `src/models/api-v1-analytics-social-account429-error1.ts` |
| `ApiV1AnalyticsSocialAccount500Error1` | `apiV1AnalyticsSocialAccount500Error1Schema` | `src/models/api-v1-analytics-social-account500-error1.ts` |
| `ApiV1AnalyticsSocialAccount502Error1` | `apiV1AnalyticsSocialAccount502Error1Schema` | `src/models/api-v1-analytics-social-account502-error1.ts` |
| `ApiV1AnalyticsSocialAccount503Error1` | `apiV1AnalyticsSocialAccount503Error1Schema` | `src/models/api-v1-analytics-social-account503-error1.ts` |
| `ApiV1AnalyticsSocialAccount504Error1` | `apiV1AnalyticsSocialAccount504Error1Schema` | `src/models/api-v1-analytics-social-account504-error1.ts` |

### analyticsGetSocialAccountAnalyticsRaw

- **Signature**: `analyticsGetSocialAccountAnalyticsRaw(request: Analytics.AnalyticsGetSocialAccountAnalyticsRawRequest, options?: RequestOptions): ApiPromise<ApiV1AnalyticsSocialAccountRawResponse, Analytics.AnalyticsGetSocialAccountAnalyticsRawError>`
- **Wire**: `GET /api/v1/analytics/social-account/raw`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1AnalyticsSocialAccountRawResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `Analytics.AnalyticsGetSocialAccountAnalyticsRawError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1AnalyticsSocialAccountRaw400Error1"` [400] `ApiV1AnalyticsSocialAccountRaw400Error1` · `"apiV1AnalyticsSocialAccountRaw401Error1"` [401] `ApiV1AnalyticsSocialAccountRaw401Error1` · `"apiV1AnalyticsSocialAccountRaw403Error1"` [403] `ApiV1AnalyticsSocialAccountRaw403Error1` · `"apiV1AnalyticsSocialAccountRaw404Error1"` [404] `ApiV1AnalyticsSocialAccountRaw404Error1` · `"apiV1AnalyticsSocialAccountRaw429Error1"` [429] `ApiV1AnalyticsSocialAccountRaw429Error1` · `"apiV1AnalyticsSocialAccountRaw500Error1"` [500] `ApiV1AnalyticsSocialAccountRaw500Error1` · `"apiV1AnalyticsSocialAccountRaw502Error1"` [502] `ApiV1AnalyticsSocialAccountRaw502Error1` · `"apiV1AnalyticsSocialAccountRaw503Error1"` [503] `ApiV1AnalyticsSocialAccountRaw503Error1` · `"apiV1AnalyticsSocialAccountRaw504Error1"` [504] `ApiV1AnalyticsSocialAccountRaw504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.AnalyticsGetSocialAccountAnalyticsRawRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes |
| `platformType` | `query` | `PlatformType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformType` | `platformTypeSchema` | `src/models/platform-type.ts` |
| `ApiV1AnalyticsSocialAccountRawResponse` | `apiV1AnalyticsSocialAccountRawResponseSchema` | `src/models/api-v1-analytics-social-account-raw-response.ts` |
| `ApiV1AnalyticsSocialAccountRaw400Error1` | `apiV1AnalyticsSocialAccountRaw400Error1Schema` | `src/models/api-v1-analytics-social-account-raw400-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw401Error1` | `apiV1AnalyticsSocialAccountRaw401Error1Schema` | `src/models/api-v1-analytics-social-account-raw401-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw403Error1` | `apiV1AnalyticsSocialAccountRaw403Error1Schema` | `src/models/api-v1-analytics-social-account-raw403-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw404Error1` | `apiV1AnalyticsSocialAccountRaw404Error1Schema` | `src/models/api-v1-analytics-social-account-raw404-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw429Error1` | `apiV1AnalyticsSocialAccountRaw429Error1Schema` | `src/models/api-v1-analytics-social-account-raw429-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw500Error1` | `apiV1AnalyticsSocialAccountRaw500Error1Schema` | `src/models/api-v1-analytics-social-account-raw500-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw502Error1` | `apiV1AnalyticsSocialAccountRaw502Error1Schema` | `src/models/api-v1-analytics-social-account-raw502-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw503Error1` | `apiV1AnalyticsSocialAccountRaw503Error1Schema` | `src/models/api-v1-analytics-social-account-raw503-error1.ts` |
| `ApiV1AnalyticsSocialAccountRaw504Error1` | `apiV1AnalyticsSocialAccountRaw504Error1Schema` | `src/models/api-v1-analytics-social-account-raw504-error1.ts` |


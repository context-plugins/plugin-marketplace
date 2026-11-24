<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationApi — operations

Accessor: `client.organizationApi` · Source: `src/resources/organization-api.ts` · 7 operations · Request and error types: namespace `OrganizationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### organizationGetCommentsUsage

- **Signature**: `organizationGetCommentsUsage(options?: RequestOptions): ApiPromise<ApiV1OrganizationUsageCommentsResponse, OrganizationApi.OrganizationGetCommentsUsageError>`
- **Wire**: `GET /api/v1/organization/usage/comments`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsageCommentsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetCommentsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsageComments400Error1"` [400] `ApiV1OrganizationUsageComments400Error1` · `"apiV1OrganizationUsageComments401Error1"` [401] `ApiV1OrganizationUsageComments401Error1` · `"apiV1OrganizationUsageComments403Error1"` [403] `ApiV1OrganizationUsageComments403Error1` · `"apiV1OrganizationUsageComments404Error1"` [404] `ApiV1OrganizationUsageComments404Error1` · `"apiV1OrganizationUsageComments429Error1"` [429] `ApiV1OrganizationUsageComments429Error1` · `"apiV1OrganizationUsageComments500Error1"` [500] `ApiV1OrganizationUsageComments500Error1` · `"apiV1OrganizationUsageComments502Error1"` [502] `ApiV1OrganizationUsageComments502Error1` · `"apiV1OrganizationUsageComments503Error1"` [503] `ApiV1OrganizationUsageComments503Error1` · `"apiV1OrganizationUsageComments504Error1"` [504] `ApiV1OrganizationUsageComments504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OrganizationUsageCommentsResponse` | `apiV1OrganizationUsageCommentsResponseSchema` | `src/models/api-v1-organization-usage-comments-response.ts` |
| `ApiV1OrganizationUsageComments400Error1` | `apiV1OrganizationUsageComments400Error1Schema` | `src/models/api-v1-organization-usage-comments400-error1.ts` |
| `ApiV1OrganizationUsageComments401Error1` | `apiV1OrganizationUsageComments401Error1Schema` | `src/models/api-v1-organization-usage-comments401-error1.ts` |
| `ApiV1OrganizationUsageComments403Error1` | `apiV1OrganizationUsageComments403Error1Schema` | `src/models/api-v1-organization-usage-comments403-error1.ts` |
| `ApiV1OrganizationUsageComments404Error1` | `apiV1OrganizationUsageComments404Error1Schema` | `src/models/api-v1-organization-usage-comments404-error1.ts` |
| `ApiV1OrganizationUsageComments429Error1` | `apiV1OrganizationUsageComments429Error1Schema` | `src/models/api-v1-organization-usage-comments429-error1.ts` |
| `ApiV1OrganizationUsageComments500Error1` | `apiV1OrganizationUsageComments500Error1Schema` | `src/models/api-v1-organization-usage-comments500-error1.ts` |
| `ApiV1OrganizationUsageComments502Error1` | `apiV1OrganizationUsageComments502Error1Schema` | `src/models/api-v1-organization-usage-comments502-error1.ts` |
| `ApiV1OrganizationUsageComments503Error1` | `apiV1OrganizationUsageComments503Error1Schema` | `src/models/api-v1-organization-usage-comments503-error1.ts` |
| `ApiV1OrganizationUsageComments504Error1` | `apiV1OrganizationUsageComments504Error1Schema` | `src/models/api-v1-organization-usage-comments504-error1.ts` |

### organizationGetDailyLimitsUsage

- **Signature**: `organizationGetDailyLimitsUsage(request: OrganizationApi.OrganizationGetDailyLimitsUsageRequest, options?: RequestOptions): ApiPromise<ApiV1OrganizationUsageDailyLimitsResponse, OrganizationApi.OrganizationGetDailyLimitsUsageError>`
- **Wire**: `GET /api/v1/organization/usage/daily-limits`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsageDailyLimitsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetDailyLimitsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsageDailyLimits400Error1"` [400] `ApiV1OrganizationUsageDailyLimits400Error1` · `"apiV1OrganizationUsageDailyLimits401Error1"` [401] `ApiV1OrganizationUsageDailyLimits401Error1` · `"apiV1OrganizationUsageDailyLimits403Error1"` [403] `ApiV1OrganizationUsageDailyLimits403Error1` · `"apiV1OrganizationUsageDailyLimits404Error1"` [404] `ApiV1OrganizationUsageDailyLimits404Error1` · `"apiV1OrganizationUsageDailyLimits429Error1"` [429] `ApiV1OrganizationUsageDailyLimits429Error1` · `"apiV1OrganizationUsageDailyLimits500Error1"` [500] `ApiV1OrganizationUsageDailyLimits500Error1` · `"apiV1OrganizationUsageDailyLimits502Error1"` [502] `ApiV1OrganizationUsageDailyLimits502Error1` · `"apiV1OrganizationUsageDailyLimits503Error1"` [503] `ApiV1OrganizationUsageDailyLimits503Error1` · `"apiV1OrganizationUsageDailyLimits504Error1"` [504] `ApiV1OrganizationUsageDailyLimits504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationApi.OrganizationGetDailyLimitsUsageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `socialAccountId` | `query` | `string` | yes |
| `date` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OrganizationUsageDailyLimitsResponse` | `apiV1OrganizationUsageDailyLimitsResponseSchema` | `src/models/api-v1-organization-usage-daily-limits-response.ts` |
| `ApiV1OrganizationUsageDailyLimits400Error1` | `apiV1OrganizationUsageDailyLimits400Error1Schema` | `src/models/api-v1-organization-usage-daily-limits400-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits401Error1` | `apiV1OrganizationUsageDailyLimits401Error1Schema` | `src/models/api-v1-organization-usage-daily-limits401-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits403Error1` | `apiV1OrganizationUsageDailyLimits403Error1Schema` | `src/models/api-v1-organization-usage-daily-limits403-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits404Error1` | `apiV1OrganizationUsageDailyLimits404Error1Schema` | `src/models/api-v1-organization-usage-daily-limits404-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits429Error1` | `apiV1OrganizationUsageDailyLimits429Error1Schema` | `src/models/api-v1-organization-usage-daily-limits429-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits500Error1` | `apiV1OrganizationUsageDailyLimits500Error1Schema` | `src/models/api-v1-organization-usage-daily-limits500-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits502Error1` | `apiV1OrganizationUsageDailyLimits502Error1Schema` | `src/models/api-v1-organization-usage-daily-limits502-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits503Error1` | `apiV1OrganizationUsageDailyLimits503Error1Schema` | `src/models/api-v1-organization-usage-daily-limits503-error1.ts` |
| `ApiV1OrganizationUsageDailyLimits504Error1` | `apiV1OrganizationUsageDailyLimits504Error1Schema` | `src/models/api-v1-organization-usage-daily-limits504-error1.ts` |

### organizationGetImportsUsage

- **Signature**: `organizationGetImportsUsage(request?: OrganizationApi.OrganizationGetImportsUsageRequest, options?: RequestOptions): ApiPromise<ApiV1OrganizationUsageImportsResponse, OrganizationApi.OrganizationGetImportsUsageError>`
- **Wire**: `GET /api/v1/organization/usage/imports`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsageImportsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetImportsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsageImports400Error1"` [400] `ApiV1OrganizationUsageImports400Error1` · `"apiV1OrganizationUsageImports401Error1"` [401] `ApiV1OrganizationUsageImports401Error1` · `"apiV1OrganizationUsageImports403Error1"` [403] `ApiV1OrganizationUsageImports403Error1` · `"apiV1OrganizationUsageImports404Error1"` [404] `ApiV1OrganizationUsageImports404Error1` · `"apiV1OrganizationUsageImports429Error1"` [429] `ApiV1OrganizationUsageImports429Error1` · `"apiV1OrganizationUsageImports500Error1"` [500] `ApiV1OrganizationUsageImports500Error1` · `"apiV1OrganizationUsageImports502Error1"` [502] `ApiV1OrganizationUsageImports502Error1` · `"apiV1OrganizationUsageImports503Error1"` [503] `ApiV1OrganizationUsageImports503Error1` · `"apiV1OrganizationUsageImports504Error1"` [504] `ApiV1OrganizationUsageImports504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationApi.OrganizationGetImportsUsageRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `20` |
| `teamId` | `query` | `string` | no | — |
| `socialAccountType` | `query` | `SocialAccountTypeBundleSocialOrganizationApi` | no | — |
| `socialAccountId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SocialAccountTypeBundleSocialOrganizationApi` | `socialAccountTypeBundleSocialOrganizationApiSchema` | `src/models/social-account-type-bundle-social-organization-api.ts` |
| `ApiV1OrganizationUsageImportsResponse` | `apiV1OrganizationUsageImportsResponseSchema` | `src/models/api-v1-organization-usage-imports-response.ts` |
| `ApiV1OrganizationUsageImports400Error1` | `apiV1OrganizationUsageImports400Error1Schema` | `src/models/api-v1-organization-usage-imports400-error1.ts` |
| `ApiV1OrganizationUsageImports401Error1` | `apiV1OrganizationUsageImports401Error1Schema` | `src/models/api-v1-organization-usage-imports401-error1.ts` |
| `ApiV1OrganizationUsageImports403Error1` | `apiV1OrganizationUsageImports403Error1Schema` | `src/models/api-v1-organization-usage-imports403-error1.ts` |
| `ApiV1OrganizationUsageImports404Error1` | `apiV1OrganizationUsageImports404Error1Schema` | `src/models/api-v1-organization-usage-imports404-error1.ts` |
| `ApiV1OrganizationUsageImports429Error1` | `apiV1OrganizationUsageImports429Error1Schema` | `src/models/api-v1-organization-usage-imports429-error1.ts` |
| `ApiV1OrganizationUsageImports500Error1` | `apiV1OrganizationUsageImports500Error1Schema` | `src/models/api-v1-organization-usage-imports500-error1.ts` |
| `ApiV1OrganizationUsageImports502Error1` | `apiV1OrganizationUsageImports502Error1Schema` | `src/models/api-v1-organization-usage-imports502-error1.ts` |
| `ApiV1OrganizationUsageImports503Error1` | `apiV1OrganizationUsageImports503Error1Schema` | `src/models/api-v1-organization-usage-imports503-error1.ts` |
| `ApiV1OrganizationUsageImports504Error1` | `apiV1OrganizationUsageImports504Error1Schema` | `src/models/api-v1-organization-usage-imports504-error1.ts` |

### organizationGetMessagesUsage

- **Signature**: `organizationGetMessagesUsage(request?: OrganizationApi.OrganizationGetMessagesUsageRequest, options?: RequestOptions): ApiPromise<ApiV1OrganizationUsageMessagesResponse, OrganizationApi.OrganizationGetMessagesUsageError>`
- **Wire**: `GET /api/v1/organization/usage/messages`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsageMessagesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetMessagesUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsageMessages400Error1"` [400] `ApiV1OrganizationUsageMessages400Error1` · `"apiV1OrganizationUsageMessages401Error1"` [401] `ApiV1OrganizationUsageMessages401Error1` · `"apiV1OrganizationUsageMessages403Error1"` [403] `ApiV1OrganizationUsageMessages403Error1` · `"apiV1OrganizationUsageMessages404Error1"` [404] `ApiV1OrganizationUsageMessages404Error1` · `"apiV1OrganizationUsageMessages429Error1"` [429] `ApiV1OrganizationUsageMessages429Error1` · `"apiV1OrganizationUsageMessages500Error1"` [500] `ApiV1OrganizationUsageMessages500Error1` · `"apiV1OrganizationUsageMessages502Error1"` [502] `ApiV1OrganizationUsageMessages502Error1` · `"apiV1OrganizationUsageMessages503Error1"` [503] `ApiV1OrganizationUsageMessages503Error1` · `"apiV1OrganizationUsageMessages504Error1"` [504] `ApiV1OrganizationUsageMessages504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationApi.OrganizationGetMessagesUsageRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |
| `teamId` | `query` | `string` | no | — |
| `socialAccountType` | `query` | `SocialAccountType1BundleSocialOrganizationApi` | no | — |
| `socialAccountId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SocialAccountType1BundleSocialOrganizationApi` | `socialAccountType1BundleSocialOrganizationApiSchema` | `src/models/social-account-type1-bundle-social-organization-api.ts` |
| `ApiV1OrganizationUsageMessagesResponse` | `apiV1OrganizationUsageMessagesResponseSchema` | `src/models/api-v1-organization-usage-messages-response.ts` |
| `ApiV1OrganizationUsageMessages400Error1` | `apiV1OrganizationUsageMessages400Error1Schema` | `src/models/api-v1-organization-usage-messages400-error1.ts` |
| `ApiV1OrganizationUsageMessages401Error1` | `apiV1OrganizationUsageMessages401Error1Schema` | `src/models/api-v1-organization-usage-messages401-error1.ts` |
| `ApiV1OrganizationUsageMessages403Error1` | `apiV1OrganizationUsageMessages403Error1Schema` | `src/models/api-v1-organization-usage-messages403-error1.ts` |
| `ApiV1OrganizationUsageMessages404Error1` | `apiV1OrganizationUsageMessages404Error1Schema` | `src/models/api-v1-organization-usage-messages404-error1.ts` |
| `ApiV1OrganizationUsageMessages429Error1` | `apiV1OrganizationUsageMessages429Error1Schema` | `src/models/api-v1-organization-usage-messages429-error1.ts` |
| `ApiV1OrganizationUsageMessages500Error1` | `apiV1OrganizationUsageMessages500Error1Schema` | `src/models/api-v1-organization-usage-messages500-error1.ts` |
| `ApiV1OrganizationUsageMessages502Error1` | `apiV1OrganizationUsageMessages502Error1Schema` | `src/models/api-v1-organization-usage-messages502-error1.ts` |
| `ApiV1OrganizationUsageMessages503Error1` | `apiV1OrganizationUsageMessages503Error1Schema` | `src/models/api-v1-organization-usage-messages503-error1.ts` |
| `ApiV1OrganizationUsageMessages504Error1` | `apiV1OrganizationUsageMessages504Error1Schema` | `src/models/api-v1-organization-usage-messages504-error1.ts` |

### organizationGetOrganization

- **Signature**: `organizationGetOrganization(options?: RequestOptions): ApiPromise<ApiV1OrganizationResponse, OrganizationApi.OrganizationGetOrganizationError>`
- **Wire**: `GET /api/v1/organization/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Organization400Error1"` [400] `ApiV1Organization400Error1` · `"apiV1Organization401Error1"` [401] `ApiV1Organization401Error1` · `"apiV1Organization403Error1"` [403] `ApiV1Organization403Error1` · `"apiV1Organization404Error1"` [404] `ApiV1Organization404Error1` · `"apiV1Organization429Error1"` [429] `ApiV1Organization429Error1` · `"apiV1Organization500Error1"` [500] `ApiV1Organization500Error1` · `"apiV1Organization502Error1"` [502] `ApiV1Organization502Error1` · `"apiV1Organization503Error1"` [503] `ApiV1Organization503Error1` · `"apiV1Organization504Error1"` [504] `ApiV1Organization504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OrganizationResponse` | `apiV1OrganizationResponseSchema` | `src/models/api-v1-organization-response.ts` |
| `ApiV1Organization400Error1` | `apiV1Organization400Error1Schema` | `src/models/api-v1-organization400-error1.ts` |
| `ApiV1Organization401Error1` | `apiV1Organization401Error1Schema` | `src/models/api-v1-organization401-error1.ts` |
| `ApiV1Organization403Error1` | `apiV1Organization403Error1Schema` | `src/models/api-v1-organization403-error1.ts` |
| `ApiV1Organization404Error1` | `apiV1Organization404Error1Schema` | `src/models/api-v1-organization404-error1.ts` |
| `ApiV1Organization429Error1` | `apiV1Organization429Error1Schema` | `src/models/api-v1-organization429-error1.ts` |
| `ApiV1Organization500Error1` | `apiV1Organization500Error1Schema` | `src/models/api-v1-organization500-error1.ts` |
| `ApiV1Organization502Error1` | `apiV1Organization502Error1Schema` | `src/models/api-v1-organization502-error1.ts` |
| `ApiV1Organization503Error1` | `apiV1Organization503Error1Schema` | `src/models/api-v1-organization503-error1.ts` |
| `ApiV1Organization504Error1` | `apiV1Organization504Error1Schema` | `src/models/api-v1-organization504-error1.ts` |

### organizationGetPostsUsage

- **Signature**: `organizationGetPostsUsage(options?: RequestOptions): ApiPromise<ApiV1OrganizationUsagePostsResponse, OrganizationApi.OrganizationGetPostsUsageError>`
- **Wire**: `GET /api/v1/organization/usage/posts`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsagePostsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetPostsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsagePosts400Error1"` [400] `ApiV1OrganizationUsagePosts400Error1` · `"apiV1OrganizationUsagePosts401Error1"` [401] `ApiV1OrganizationUsagePosts401Error1` · `"apiV1OrganizationUsagePosts403Error1"` [403] `ApiV1OrganizationUsagePosts403Error1` · `"apiV1OrganizationUsagePosts404Error1"` [404] `ApiV1OrganizationUsagePosts404Error1` · `"apiV1OrganizationUsagePosts429Error1"` [429] `ApiV1OrganizationUsagePosts429Error1` · `"apiV1OrganizationUsagePosts500Error1"` [500] `ApiV1OrganizationUsagePosts500Error1` · `"apiV1OrganizationUsagePosts502Error1"` [502] `ApiV1OrganizationUsagePosts502Error1` · `"apiV1OrganizationUsagePosts503Error1"` [503] `ApiV1OrganizationUsagePosts503Error1` · `"apiV1OrganizationUsagePosts504Error1"` [504] `ApiV1OrganizationUsagePosts504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OrganizationUsagePostsResponse` | `apiV1OrganizationUsagePostsResponseSchema` | `src/models/api-v1-organization-usage-posts-response.ts` |
| `ApiV1OrganizationUsagePosts400Error1` | `apiV1OrganizationUsagePosts400Error1Schema` | `src/models/api-v1-organization-usage-posts400-error1.ts` |
| `ApiV1OrganizationUsagePosts401Error1` | `apiV1OrganizationUsagePosts401Error1Schema` | `src/models/api-v1-organization-usage-posts401-error1.ts` |
| `ApiV1OrganizationUsagePosts403Error1` | `apiV1OrganizationUsagePosts403Error1Schema` | `src/models/api-v1-organization-usage-posts403-error1.ts` |
| `ApiV1OrganizationUsagePosts404Error1` | `apiV1OrganizationUsagePosts404Error1Schema` | `src/models/api-v1-organization-usage-posts404-error1.ts` |
| `ApiV1OrganizationUsagePosts429Error1` | `apiV1OrganizationUsagePosts429Error1Schema` | `src/models/api-v1-organization-usage-posts429-error1.ts` |
| `ApiV1OrganizationUsagePosts500Error1` | `apiV1OrganizationUsagePosts500Error1Schema` | `src/models/api-v1-organization-usage-posts500-error1.ts` |
| `ApiV1OrganizationUsagePosts502Error1` | `apiV1OrganizationUsagePosts502Error1Schema` | `src/models/api-v1-organization-usage-posts502-error1.ts` |
| `ApiV1OrganizationUsagePosts503Error1` | `apiV1OrganizationUsagePosts503Error1Schema` | `src/models/api-v1-organization-usage-posts503-error1.ts` |
| `ApiV1OrganizationUsagePosts504Error1` | `apiV1OrganizationUsagePosts504Error1Schema` | `src/models/api-v1-organization-usage-posts504-error1.ts` |

### organizationGetUploadsUsage

- **Signature**: `organizationGetUploadsUsage(options?: RequestOptions): ApiPromise<ApiV1OrganizationUsageUploadsResponse, OrganizationApi.OrganizationGetUploadsUsageError>`
- **Wire**: `GET /api/v1/organization/usage/uploads`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1OrganizationUsageUploadsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `OrganizationApi.OrganizationGetUploadsUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1OrganizationUsageUploads400Error1"` [400] `ApiV1OrganizationUsageUploads400Error1` · `"apiV1OrganizationUsageUploads401Error1"` [401] `ApiV1OrganizationUsageUploads401Error1` · `"apiV1OrganizationUsageUploads403Error1"` [403] `ApiV1OrganizationUsageUploads403Error1` · `"apiV1OrganizationUsageUploads404Error1"` [404] `ApiV1OrganizationUsageUploads404Error1` · `"apiV1OrganizationUsageUploads429Error1"` [429] `ApiV1OrganizationUsageUploads429Error1` · `"apiV1OrganizationUsageUploads500Error1"` [500] `ApiV1OrganizationUsageUploads500Error1` · `"apiV1OrganizationUsageUploads502Error1"` [502] `ApiV1OrganizationUsageUploads502Error1` · `"apiV1OrganizationUsageUploads503Error1"` [503] `ApiV1OrganizationUsageUploads503Error1` · `"apiV1OrganizationUsageUploads504Error1"` [504] `ApiV1OrganizationUsageUploads504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1OrganizationUsageUploadsResponse` | `apiV1OrganizationUsageUploadsResponseSchema` | `src/models/api-v1-organization-usage-uploads-response.ts` |
| `ApiV1OrganizationUsageUploads400Error1` | `apiV1OrganizationUsageUploads400Error1Schema` | `src/models/api-v1-organization-usage-uploads400-error1.ts` |
| `ApiV1OrganizationUsageUploads401Error1` | `apiV1OrganizationUsageUploads401Error1Schema` | `src/models/api-v1-organization-usage-uploads401-error1.ts` |
| `ApiV1OrganizationUsageUploads403Error1` | `apiV1OrganizationUsageUploads403Error1Schema` | `src/models/api-v1-organization-usage-uploads403-error1.ts` |
| `ApiV1OrganizationUsageUploads404Error1` | `apiV1OrganizationUsageUploads404Error1Schema` | `src/models/api-v1-organization-usage-uploads404-error1.ts` |
| `ApiV1OrganizationUsageUploads429Error1` | `apiV1OrganizationUsageUploads429Error1Schema` | `src/models/api-v1-organization-usage-uploads429-error1.ts` |
| `ApiV1OrganizationUsageUploads500Error1` | `apiV1OrganizationUsageUploads500Error1Schema` | `src/models/api-v1-organization-usage-uploads500-error1.ts` |
| `ApiV1OrganizationUsageUploads502Error1` | `apiV1OrganizationUsageUploads502Error1Schema` | `src/models/api-v1-organization-usage-uploads502-error1.ts` |
| `ApiV1OrganizationUsageUploads503Error1` | `apiV1OrganizationUsageUploads503Error1Schema` | `src/models/api-v1-organization-usage-uploads503-error1.ts` |
| `ApiV1OrganizationUsageUploads504Error1` | `apiV1OrganizationUsageUploads504Error1Schema` | `src/models/api-v1-organization-usage-uploads504-error1.ts` |


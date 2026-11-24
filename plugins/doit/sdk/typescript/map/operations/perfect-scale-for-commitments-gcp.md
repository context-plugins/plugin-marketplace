<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsGcp — operations

Accessor: `client.perfectScaleForCommitmentsGcp` · Source: `src/resources/perfect-scale-for-commitments-gcp.ts` · 8 operations · Request and error types: namespace `PerfectScaleForCommitmentsGcp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGcpBillingAccount

- **Signature**: `getGcpBillingAccount(request: PerfectScaleForCommitmentsGcp.GetGcpBillingAccountRequest, options?: RequestOptions): ApiPromise<GcpBillingAccountDetail, PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GcpBillingAccountDetail`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.GetGcpBillingAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.GetGcpBillingAccountRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GcpBillingAccountDetail` | `gcpBillingAccountDetailSchema` | `src/models/gcp-billing-account-detail.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getGcpRecommendation

- **Signature**: `getGcpRecommendation(request: PerfectScaleForCommitmentsGcp.GetGcpRecommendationRequest, options?: RequestOptions): ApiPromise<GcpRecommendationWithEligibleSpend, PerfectScaleForCommitmentsGcp.GetGcpRecommendationError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations/{gcp_service}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GcpRecommendationWithEligibleSpend`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.GetGcpRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.GetGcpRecommendationRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes | — |
| `gcpService` | `path` | `gcp_service` | `GcpService` | yes | — |
| `region` | `query` | — | `string` | no | — |
| `granularity` | `query` | — | `Granularity` | no | `Granularity.Day` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GcpService` | `gcpServiceSchema` | `src/models/gcp-service.ts` |
| `Granularity` | `granularitySchema` | `src/models/granularity.ts` |
| `GcpRecommendationWithEligibleSpend` | `gcpRecommendationWithEligibleSpendSchema` | `src/models/gcp-recommendation-with-eligible-spend.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpBillingAccounts

- **Signature**: `listGcpBillingAccounts(request?: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpBillingAccountsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1GcpBillingAccountsResponse` | `ps4CommitmentsV1GcpBillingAccountsResponseSchema` | `src/models/ps4-commitments-v1-gcp-billing-accounts-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpBillingAccountsSettings

- **Signature**: `listGcpBillingAccountsSettings(request?: PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpSettingsResponse, PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError>`
- **Wire**: `GET /ps4commitments/v1/gcp/settings`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpSettingsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpBillingAccountsSettingsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1GcpSettingsResponse` | `ps4CommitmentsV1GcpSettingsResponseSchema` | `src/models/ps4-commitments-v1-gcp-settings-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpPlannedPurchases

- **Signature**: `listGcpPlannedPurchases(request: PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse, PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/planned-purchases`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpPlannedPurchasesRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes | — |
| `gcpService` | `query` | `gcp_service` | `GcpService` | no | — |
| `region` | `query` | — | `string` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GcpService` | `gcpServiceSchema` | `src/models/gcp-service.ts` |
| `Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse` | `ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseSchema` | `src/models/ps4-commitments-v1-gcp-billing-accounts-planned-purchases-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpRecommendations

- **Signature**: `listGcpRecommendations(request: PerfectScaleForCommitmentsGcp.ListGcpRecommendationsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse, PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/recommendations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpRecommendationsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes |
| `gcpService` | `query` | `gcp_service` | `GcpService` | no |
| `region` | `query` | — | `string` | no |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GcpService` | `gcpServiceSchema` | `src/models/gcp-service.ts` |
| `Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse` | `ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseSchema` | `src/models/ps4-commitments-v1-gcp-billing-accounts-recommendations-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpResourceCuds

- **Signature**: `listGcpResourceCuds(request: PerfectScaleForCommitmentsGcp.ListGcpResourceCudsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/resource-based`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpResourceCudsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpResourceCudsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes | — |
| `status` | `query` | — | `Status2DoiTPerfectScaleForCommitmentsGcpApi` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2DoiTPerfectScaleForCommitmentsGcpApi` | `status2DoiTPerfectScaleForCommitmentsGcpApiSchema` | `src/models/status2-doi-tperfect-scale-for-commitments-gcp-api.ts` |
| `Ps4CommitmentsV1GcpBillingAccountsResourceBasedResponse` | `ps4CommitmentsV1GcpBillingAccountsResourceBasedResponseSchema` | `src/models/ps4-commitments-v1-gcp-billing-accounts-resource-based-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listGcpSpendCuds

- **Signature**: `listGcpSpendCuds(request: PerfectScaleForCommitmentsGcp.ListGcpSpendCudsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse, PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError>`
- **Wire**: `GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}/spend-based`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsGcp.ListGcpSpendCudsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsGcp.ListGcpSpendCudsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `billingAccountId` | `path` | — | `string` | yes | — |
| `status` | `query` | — | `Status2DoiTPerfectScaleForCommitmentsGcpApi` | no | — |
| `gcpService` | `query` | `gcp_service` | `GcpService` | no | — |
| `region` | `query` | — | `string` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status2DoiTPerfectScaleForCommitmentsGcpApi` | `status2DoiTPerfectScaleForCommitmentsGcpApiSchema` | `src/models/status2-doi-tperfect-scale-for-commitments-gcp-api.ts` |
| `GcpService` | `gcpServiceSchema` | `src/models/gcp-service.ts` |
| `Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse` | `ps4CommitmentsV1GcpBillingAccountsSpendBasedResponseSchema` | `src/models/ps4-commitments-v1-gcp-billing-accounts-spend-based-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


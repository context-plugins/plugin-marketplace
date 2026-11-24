<!-- Generated file — do not edit; regenerated with the SDK. -->

# PerfectScaleForCommitmentsAws — operations

Accessor: `client.perfectScaleForCommitmentsAws` · Source: `src/resources/perfect-scale-for-commitments-aws.ts` · 10 operations · Request and error types: namespace `PerfectScaleForCommitmentsAws`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAwsMemberAccount

- **Signature**: `getAwsMemberAccount(request: PerfectScaleForCommitmentsAws.GetAwsMemberAccountRequest, options?: RequestOptions): ApiPromise<AwsMemberAccountDetail, PerfectScaleForCommitmentsAws.GetAwsMemberAccountError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts/{memberAccountId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AwsMemberAccountDetail`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.GetAwsMemberAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.GetAwsMemberAccountRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes |
| `memberAccountId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AwsMemberAccountDetail` | `awsMemberAccountDetailSchema` | `src/models/aws-member-account-detail.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getAwsOrganization

- **Signature**: `getAwsOrganization(request: PerfectScaleForCommitmentsAws.GetAwsOrganizationRequest, options?: RequestOptions): ApiPromise<AwsOrganizationDetail, PerfectScaleForCommitmentsAws.GetAwsOrganizationError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AwsOrganizationDetail`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.GetAwsOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.GetAwsOrganizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AwsOrganizationDetail` | `awsOrganizationDetailSchema` | `src/models/aws-organization-detail.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getAwsRecommendation

- **Signature**: `getAwsRecommendation(request: PerfectScaleForCommitmentsAws.GetAwsRecommendationRequest, options?: RequestOptions): ApiPromise<AwsRecommendationWithEligibleSpend, PerfectScaleForCommitmentsAws.GetAwsRecommendationError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations/{serviceId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AwsRecommendationWithEligibleSpend`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.GetAwsRecommendationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.GetAwsRecommendationRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes | — |
| `serviceId` | `path` | — | `ServiceId` | yes | — |
| `granularity` | `query` | — | `Granularity` | no | `Granularity.Day` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceId` | `serviceIdSchema` | `src/models/service-id.ts` |
| `Granularity` | `granularitySchema` | `src/models/granularity.ts` |
| `AwsRecommendationWithEligibleSpend` | `awsRecommendationWithEligibleSpendSchema` | `src/models/aws-recommendation-with-eligible-spend.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsMemberAccounts

- **Signature**: `listAwsMemberAccounts(request: PerfectScaleForCommitmentsAws.ListAwsMemberAccountsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse, PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/member-accounts`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsMemberAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsMemberAccountsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1AwsOrganizationsMemberAccountsResponse` | `ps4CommitmentsV1AwsOrganizationsMemberAccountsResponseSchema` | `src/models/ps4-commitments-v1-aws-organizations-member-accounts-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsOrganizations

- **Signature**: `listAwsOrganizations(request?: PerfectScaleForCommitmentsAws.ListAwsOrganizationsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsOrganizationsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsOrganizationsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1AwsOrganizationsResponse` | `ps4CommitmentsV1AwsOrganizationsResponseSchema` | `src/models/ps4-commitments-v1-aws-organizations-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsOrganizationsSettings

- **Signature**: `listAwsOrganizationsSettings(request?: PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsSettingsResponse, PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError>`
- **Wire**: `GET /ps4commitments/v1/aws/settings`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsSettingsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [500] `ProblemDetails` · `"problemDetails5"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsOrganizationsSettingsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ps4CommitmentsV1AwsSettingsResponse` | `ps4CommitmentsV1AwsSettingsResponseSchema` | `src/models/ps4-commitments-v1-aws-settings-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsPlannedPurchases

- **Signature**: `listAwsPlannedPurchases(request: PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse, PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/planned-purchases`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsPlannedPurchasesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes | — |
| `service` | `query` | — | `Service2` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Service2` | `service2Schema` | `src/models/service2.ts` |
| `Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse` | `ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseSchema` | `src/models/ps4-commitments-v1-aws-organizations-planned-purchases-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsRecommendations

- **Signature**: `listAwsRecommendations(request: PerfectScaleForCommitmentsAws.ListAwsRecommendationsRequest, options?: RequestOptions): ApiPromise<AwsRecommendations, PerfectScaleForCommitmentsAws.ListAwsRecommendationsError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/recommendations`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AwsRecommendations`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsRecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsRecommendationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AwsRecommendations` | `awsRecommendationsSchema` | `src/models/aws-recommendations.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsReservedInstances

- **Signature**: `listAwsReservedInstances(request: PerfectScaleForCommitmentsAws.ListAwsReservedInstancesRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse, PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/reserved-instances`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsReservedInstancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsReservedInstancesRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes | — |
| `status` | `query` | — | `Status3` | no | — |
| `instanceType` | `query` | — | `string` | no | — |
| `instanceFamily` | `query` | — | `string` | no | — |
| `region` | `query` | — | `string` | no | — |
| `offeringClass` | `query` | — | `OfferingClass1` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status3` | `status3Schema` | `src/models/status3.ts` |
| `OfferingClass1` | `offeringClass1Schema` | `src/models/offering-class1.ts` |
| `Ps4CommitmentsV1AwsOrganizationsReservedInstancesResponse` | `ps4CommitmentsV1AwsOrganizationsReservedInstancesResponseSchema` | `src/models/ps4-commitments-v1-aws-organizations-reserved-instances-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### listAwsSavingsPlans

- **Signature**: `listAwsSavingsPlans(request: PerfectScaleForCommitmentsAws.ListAwsSavingsPlansRequest, options?: RequestOptions): ApiPromise<Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse, PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError>`
- **Wire**: `GET /ps4commitments/v1/aws/organizations/{managementAccountId}/savings-plans`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `PerfectScaleForCommitmentsAws.ListAwsSavingsPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"problemDetails4"` [404] `ProblemDetails` · `"problemDetails5"` [500] `ProblemDetails` · `"problemDetails6"` [503] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PerfectScaleForCommitmentsAws.ListAwsSavingsPlansRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `managementAccountId` | `path` | — | `string` | yes | — |
| `type` | `query` | — | `TypeDoiTPerfectScaleForCommitmentsAwsApi` | no | — |
| `status` | `query` | — | `Status2` | no | — |
| `pageToken` | `query` | — | `string` | no | — |
| `maxResults` | `query` | — | `number` | no | `50` |
| `xTenantId` | `header` | `X-Tenant-Id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeDoiTPerfectScaleForCommitmentsAwsApi` | `typeDoiTPerfectScaleForCommitmentsAwsApiSchema` | `src/models/type-doi-tperfect-scale-for-commitments-aws-api.ts` |
| `Status2` | `status2Schema` | `src/models/status2.ts` |
| `Ps4CommitmentsV1AwsOrganizationsSavingsPlansResponse` | `ps4CommitmentsV1AwsOrganizationsSavingsPlansResponseSchema` | `src/models/ps4-commitments-v1-aws-organizations-savings-plans-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


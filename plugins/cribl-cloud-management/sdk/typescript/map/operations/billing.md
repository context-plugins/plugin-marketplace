<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.billing` · Source: `src/resources/billing.ts` · 4 operations · Request types: namespace `Billing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cribl-cloud-public-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1BillingGetContractsUtilization

- **Signature**: `v1BillingGetContractsUtilization(request: Billing.V1BillingGetContractsUtilizationRequest, options?: RequestOptions): ApiPromise<ContractsUtilizationResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/billing/credits/contracts-utilization`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContractsUtilizationResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Billing.V1BillingGetContractsUtilizationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `startingOn` | `query` | `Date` (date-time) | yes |
| `endingBefore` | `query` | `Date` (date-time) | yes |
| `window` | `query` | `BillingWindow` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingWindow` | `billingWindowSchema` | `src/models/billing-window.ts` |
| `ContractsUtilizationResponseDto` | `contractsUtilizationResponseDtoSchema` | `src/models/contracts-utilization-response-dto.ts` |

### v1BillingGetCreditsGrants

- **Signature**: `v1BillingGetCreditsGrants(request: Billing.V1BillingGetCreditsGrantsRequest, options?: RequestOptions): ApiPromise<CreditGrantsResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/billing/credits/grants`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditGrantsResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Billing.V1BillingGetCreditsGrantsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditGrantsResponseDto` | `creditGrantsResponseDtoSchema` | `src/models/credit-grants-response-dto.ts` |

### v1BillingGetCreditsStats

- **Signature**: `v1BillingGetCreditsStats(request: Billing.V1BillingGetCreditsStatsRequest, options?: RequestOptions): ApiPromise<CreditsStatsResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/billing/credits/stats`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditsStatsResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Billing.V1BillingGetCreditsStatsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditsStatsResponseDto` | `creditsStatsResponseDtoSchema` | `src/models/credits-stats-response-dto.ts` |

### v1BillingGetCreditsTimeseries

- **Signature**: `v1BillingGetCreditsTimeseries(request: Billing.V1BillingGetCreditsTimeseriesRequest, options?: RequestOptions): ApiPromise<CreditsTimeseriesResponseDto, ApiError>`
- **Wire**: `GET /v1/organizations/{organizationId}/billing/credits/timeseries`
- **Auth**: any of `clientOauth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditsTimeseriesResponseDto`
- **Error**: `CriblCloudPublicApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Billing.V1BillingGetCreditsTimeseriesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `startingOn` | `query` | `Date` (date-time) | yes |
| `endingBefore` | `query` | `Date` (date-time) | yes |
| `window` | `query` | `BillingWindow` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingWindow` | `billingWindowSchema` | `src/models/billing-window.ts` |
| `CreditsTimeseriesResponseDto` | `creditsTimeseriesResponseDtoSchema` | `src/models/credits-timeseries-response-dto.ts` |


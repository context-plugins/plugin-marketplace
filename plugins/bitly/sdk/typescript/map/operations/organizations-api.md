<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationsApi — operations

Accessor: `client.organizationsApi` · Source: `src/resources/organizations-api.ts` · 5 operations · Request and error types: namespace `OrganizationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrganization

- **Signature**: `getOrganization(request: OrganizationsApi.GetOrganizationRequest, options?: RequestOptions): ApiPromise<Organization, OrganizationsApi.GetOrganizationError>`
- **Wire**: `GET /organizations/{organization_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Organization`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `OrganizationsApi.GetOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetOrganizationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationGuid` | `path` | `organization_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Organization` | `organizationSchema` | `src/models/organization.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrganizationShortenCounts

- **Signature**: `getOrganizationShortenCounts(request: OrganizationsApi.GetOrganizationShortenCountsRequest, options?: RequestOptions): ApiPromise<Metrics, OrganizationsApi.GetOrganizationShortenCountsError>`
- **Wire**: `GET /organizations/{organization_guid}/shorten_counts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Metrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `OrganizationsApi.GetOrganizationShortenCountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetOrganizationShortenCountsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `organizationGuid` | `path` | `organization_guid` | `string` | yes | — |
| `unit` | `query` | — | `TimeUnit` | no | `TimeUnit.Day` |
| `units` | `query` | — | `number` | no | `-1` |
| `unitReference` | `query` | `unit_reference` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeUnit` | `timeUnitSchema` | `src/models/time-unit.ts` |
| `Metrics` | `metricsSchema` | `src/models/metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrganizationShortenCountsByGroup

- **Signature**: `getOrganizationShortenCountsByGroup(request: OrganizationsApi.GetOrganizationShortenCountsByGroupRequest, options?: RequestOptions): ApiPromise<Metrics, OrganizationsApi.GetOrganizationShortenCountsByGroupError>`
- **Wire**: `GET /organizations/{organization_guid}/shorten_counts_by_group`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Metrics`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `OrganizationsApi.GetOrganizationShortenCountsByGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetOrganizationShortenCountsByGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationGuid` | `path` | `organization_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Metrics` | `metricsSchema` | `src/models/metrics.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getOrganizations

- **Signature**: `getOrganizations(request?: OrganizationsApi.GetOrganizationsRequest, options?: RequestOptions): ApiPromise<Organizations, OrganizationsApi.GetOrganizationsError>`
- **Wire**: `GET /organizations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Organizations`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `OrganizationsApi.GetOrganizationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetOrganizationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeAll` | `query` | `include_all` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Organizations` | `organizationsSchema` | `src/models/organizations.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPlanLimits

- **Signature**: `getPlanLimits(request: OrganizationsApi.GetPlanLimitsRequest, options?: RequestOptions): ApiPromise<PlanLimits, OrganizationsApi.GetPlanLimitsError>`
- **Wire**: `GET /organizations/{organization_guid}/plan_limits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlanLimits`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `OrganizationsApi.GetPlanLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [500] `Error` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetPlanLimitsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationGuid` | `path` | `organization_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanLimits` | `planLimitsSchema` | `src/models/plan-limits.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


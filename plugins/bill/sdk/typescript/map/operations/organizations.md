<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 6 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBillingStatementDetail

- **Signature**: `getBillingStatementDetail(request: Organizations.GetBillingStatementDetailRequest, options?: RequestOptions): ApiPromise<BillingStatementDetailResponseDto, Organizations.GetBillingStatementDetailError>`
- **Wire**: `GET /v3/organizations/{organizationId}/billing-statements/{billingStatementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingStatementDetailResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.GetBillingStatementDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetBillingStatementDetailRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `billingStatementId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingStatementDetailResponseDto` | `billingStatementDetailResponseDtoSchema` | `src/models/billing-statement-detail-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getOrganization

- **Signature**: `getOrganization(request: Organizations.GetOrganizationRequest, options?: RequestOptions): ApiPromise<OrganizationResponseDto, Organizations.GetOrganizationError>`
- **Wire**: `GET /v3/organizations/{organizationId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrganizationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.GetOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetOrganizationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationResponseDto` | `organizationResponseDtoSchema` | `src/models/organization-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPricePlan

- **Signature**: `getPricePlan(request: Organizations.GetPricePlanRequest, options?: RequestOptions): ApiPromise<PricePlanResponseDto, Organizations.GetPricePlanError>`
- **Wire**: `GET /v3/organizations/{organizationId}/price-plan`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PricePlanResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.GetPricePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.GetPricePlanRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PricePlanResponseDto` | `pricePlanResponseDtoSchema` | `src/models/price-plan-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listBillingStatements

- **Signature**: `listBillingStatements(request: Organizations.ListBillingStatementsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoBillingStatementResponseDto, Organizations.ListBillingStatementsError>`
- **Wire**: `GET /v3/organizations/{organizationId}/billing-statements`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoBillingStatementResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.ListBillingStatementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ListBillingStatementsRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `invoiceDateFrom` | `query` | `string` | no |
| `invoiceDateTo` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoBillingStatementResponseDto` | `listResponseDtoBillingStatementResponseDtoSchema` | `src/models/list-response-dto-billing-statement-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listIndustries

- **Signature**: `listIndustries(request?: Organizations.ListIndustriesRequest, options?: RequestOptions): ApiPromise<ListIndustriesResponseDto, Organizations.ListIndustriesError>`
- **Wire**: `GET /v3/organizations/industries`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIndustriesResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.ListIndustriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ListIndustriesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIndustriesResponseDto` | `listIndustriesResponseDtoSchema` | `src/models/list-industries-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateOrganization

- **Signature**: `updateOrganization(request: Organizations.UpdateOrganizationRequest, options?: RequestOptions): ApiPromise<OrganizationResponseDto, Organizations.UpdateOrganizationError>`
- **Wire**: `PATCH /v3/organizations/{organizationId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrganizationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Organizations.UpdateOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.UpdateOrganizationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `OrganizationUpdateRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrganizationUpdateRequestDto` | `organizationUpdateRequestDtoSchema` | `src/models/organization-update-request-dto.ts` |
| `OrganizationResponseDto` | `organizationResponseDtoSchema` | `src/models/organization-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |


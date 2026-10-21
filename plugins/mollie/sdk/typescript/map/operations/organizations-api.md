<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationsApi — operations

Accessor: `client.organizationsApi` · Source: `src/resources/organizations-api.ts` · 3 operations · Request and error types: namespace `OrganizationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCurrentOrganization

- **Signature**: `getCurrentOrganization(request: OrganizationsApi.GetCurrentOrganizationRequest, options?: RequestOptions): ApiPromise<undefined, OrganizationsApi.GetCurrentOrganizationError>`
- **Wire**: `GET /v2/organizations/me`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OrganizationsApi.GetCurrentOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetCurrentOrganizationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getOrganization

- **Signature**: `getOrganization(request: OrganizationsApi.GetOrganizationRequest, options?: RequestOptions): ApiPromise<undefined, OrganizationsApi.GetOrganizationError>`
- **Wire**: `GET /v2/organizations/{organizationId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OrganizationsApi.GetOrganizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetOrganizationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getPartnerStatus

- **Signature**: `getPartnerStatus(request: OrganizationsApi.GetPartnerStatusRequest, options?: RequestOptions): ApiPromise<undefined, OrganizationsApi.GetPartnerStatusError>`
- **Wire**: `GET /v2/organizations/me/partner`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `OrganizationsApi.GetPartnerStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrganizationsApi.GetPartnerStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orgs — operations

Accessor: `client.orgs` · Source: `src/resources/orgs.ts` · 7 operations · Request and error types: namespace `Orgs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `grist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteOrg

- **Signature**: `deleteOrg(request: Orgs.DeleteOrgRequest, options?: RequestOptions): ApiPromise<OrgsResponse, Orgs.DeleteOrgError>`
- **Wire**: `DELETE /orgs/{orgId}/{name}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsResponse`
- **Error**: `GristApiError` with `kind: "api"`, an instance of `Orgs.DeleteOrgError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"gristError"` [403] `GristError` · `"gristError2"` [404] `GristError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.DeleteOrgRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `OrgsResponse` | `orgsResponseSchema` | `src/models/unions/orgs-response.ts` |
| `GristError` | `gristErrorSchema` | `src/models/grist-error.ts` |

### describeOrg

- **Signature**: `describeOrg(request: Orgs.DescribeOrgRequest, options?: RequestOptions): ApiPromise<Org, ApiError>`
- **Wire**: `GET /orgs/{orgId}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Org`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orgs.DescribeOrgRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `Org` | `orgSchema` | `src/models/org.ts` |

### getOrgUsage

- **Signature**: `getOrgUsage(request: Orgs.GetOrgUsageRequest, options?: RequestOptions): ApiPromise<OrgsUsageResponse, ApiError>`
- **Wire**: `GET /orgs/{orgId}/usage`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgsUsageResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orgs.GetOrgUsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `OrgsUsageResponse` | `orgsUsageResponseSchema` | `src/models/orgs-usage-response.ts` |

### listOrgAccess

- **Signature**: `listOrgAccess(request: Orgs.ListOrgAccessRequest, options?: RequestOptions): ApiPromise<OrgAccessRead, ApiError>`
- **Wire**: `GET /orgs/{orgId}/access`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgAccessRead`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orgs.ListOrgAccessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `OrgAccessRead` | `orgAccessReadSchema` | `src/models/org-access-read.ts` |

### listOrgs

- **Signature**: `listOrgs(options?: RequestOptions): ApiPromise<Org[], ApiError>`
- **Wire**: `GET /orgs`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Org[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Org` | `orgSchema` | `src/models/org.ts` |

### modifyOrg

- **Signature**: `modifyOrg(request: Orgs.ModifyOrgRequest, options?: RequestOptions): ApiPromise<OrgsResponse, ApiError>`
- **Wire**: `PATCH /orgs/{orgId}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orgs.ModifyOrgRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |
| `body` | `body` | `OrgParameters` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `OrgParameters` | `orgParametersSchema` | `src/models/org-parameters.ts` |
| `OrgsResponse` | `orgsResponseSchema` | `src/models/unions/orgs-response.ts` |

### modifyOrgAccess

- **Signature**: `modifyOrgAccess(request: Orgs.ModifyOrgAccessRequest, options?: RequestOptions): ApiPromise<OrgsAccessResponse, ApiError>`
- **Wire**: `PATCH /orgs/{orgId}/access`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsAccessResponse`
- **Error**: `GristApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orgs.ModifyOrgAccessRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `orgId` | `path` | `OrgId` | yes |
| `body` | `body` | `OrgsAccessRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgId` | `orgIdSchema` | `src/models/unions/org-id.ts` |
| `OrgsAccessRequest` | `orgsAccessRequestSchema` | `src/models/orgs-access-request.ts` |
| `OrgsAccessResponse` | `orgsAccessResponseSchema` | `src/models/unions/orgs-access-response.ts` |


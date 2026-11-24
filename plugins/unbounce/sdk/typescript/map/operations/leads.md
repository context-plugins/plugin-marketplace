<!-- Generated file — do not edit; regenerated with the SDK. -->

# Leads — operations

Accessor: `client.leads` · Source: `src/resources/leads.ts` · 5 operations · Request types: namespace `Leads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `unbounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLead

- **Signature**: `getLead(request: Leads.GetLeadRequest, options?: RequestOptions): ApiPromise<Lead, ApiError>`
- **Wire**: `GET /leads/{lead_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Lead`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Leads.GetLeadRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `leadId` | `path` | `lead_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Lead` | `leadSchema` | `src/models/lead.ts` |

### getLeadDeletionRequest

- **Signature**: `getLeadDeletionRequest(request: Leads.GetLeadDeletionRequestRequest, options?: RequestOptions): ApiPromise<LeadDeletionRequest, ApiError>`
- **Wire**: `GET /pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LeadDeletionRequest`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Leads.GetLeadDeletionRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `leadDeletionRequestId` | `path` | `lead_deletion_request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LeadDeletionRequest` | `leadDeletionRequestSchema` | `src/models/lead-deletion-request.ts` |

### getLeadForPage

- **Signature**: `getLeadForPage(request: Leads.GetLeadForPageRequest, options?: RequestOptions): ApiPromise<Lead, ApiError>`
- **Wire**: `GET /pages/{page_id}/leads/{lead_id}`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Lead`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Leads.GetLeadForPageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `leadId` | `path` | `lead_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Lead` | `leadSchema` | `src/models/lead.ts` |

### listLeadDeletionRequests

- **Signature**: `listLeadDeletionRequests(request: Leads.ListLeadDeletionRequestsRequest, options?: RequestOptions): ApiPromise<PagesLeadDeletionRequestResponse, ApiError>`
- **Wire**: `GET /pages/{page_id}/lead_deletion_request`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagesLeadDeletionRequestResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Leads.ListLeadDeletionRequestsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagesLeadDeletionRequestResponse` | `pagesLeadDeletionRequestResponseSchema` | `src/models/pages-lead-deletion-request-response.ts` |

### listLeadsForPage

- **Signature**: `listLeadsForPage(request: Leads.ListLeadsForPageRequest, options?: RequestOptions): ApiPromise<PagesLeadsResponse, ApiError>`
- **Wire**: `GET /pages/{page_id}/leads`
- **Auth**: any of `apiKeyAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PagesLeadsResponse`
- **Error**: `UnbounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Leads.ListLeadsForPageRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PagesLeadsResponse` | `pagesLeadsResponseSchema` | `src/models/pages-leads-response.ts` |


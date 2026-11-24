<!-- Generated file — do not edit; regenerated with the SDK. -->

# GovernanceApi — operations

Accessor: `client.governanceApi` · Source: `src/resources/governance-api.ts` · 12 operations · Request and error types: namespace `GovernanceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1GovernanceFrameworks

- **Signature**: `getApiV1GovernanceFrameworks(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/governance/frameworks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getApiV1GovernanceFrameworksMapping

- **Signature**: `getApiV1GovernanceFrameworksMapping(request?: GovernanceApi.GetApiV1GovernanceFrameworksMappingRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/governance/frameworks/mapping`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GovernanceApi.GetApiV1GovernanceFrameworksMappingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `taskId` | `query` | `string` | no |
| `framework` | `query` | `string` | no |

### getApiV1GovernanceIctRegister

- **Signature**: `getApiV1GovernanceIctRegister(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/governance/ict-register`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getApiV1GovernanceIctRegisterExport

- **Signature**: `getApiV1GovernanceIctRegisterExport(request?: GovernanceApi.GetApiV1GovernanceIctRegisterExportRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceIctRegisterExportError>`
- **Wire**: `GET /api/v1/governance/ict-register/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.GetApiV1GovernanceIctRegisterExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.GetApiV1GovernanceIctRegisterExportRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `format` | `query` | `Format` | no |
| `template` | `query` | `Template` | no |
| `asOf` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Template` | `templateSchema` | `src/models/template.ts` |

### getApiV1GovernanceIncidents

- **Signature**: `getApiV1GovernanceIncidents(request?: GovernanceApi.GetApiV1GovernanceIncidentsRequest, options?: RequestOptions): ApiPromise<ApiV1GovernanceIncidentsResponse, ApiError>`
- **Wire**: `GET /api/v1/governance/incidents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1GovernanceIncidentsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GovernanceApi.GetApiV1GovernanceIncidentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `StatusDeliverdDevGovernanceApi` | no |
| `aiSystemId` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDeliverdDevGovernanceApi` | `statusDeliverdDevGovernanceApiSchema` | `src/models/status-deliverd-dev-governance-api.ts` |
| `ApiV1GovernanceIncidentsResponse` | `apiV1GovernanceIncidentsResponseSchema` | `src/models/api-v1-governance-incidents-response.ts` |

### getApiV1GovernanceIncidentsById

- **Signature**: `getApiV1GovernanceIncidentsById(request: GovernanceApi.GetApiV1GovernanceIncidentsByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceIncidentsByIdError>`
- **Wire**: `GET /api/v1/governance/incidents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.GetApiV1GovernanceIncidentsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.GetApiV1GovernanceIncidentsByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getApiV1GovernancePolicies

- **Signature**: `getApiV1GovernancePolicies(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/governance/policies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### getApiV1GovernanceSummary

- **Signature**: `getApiV1GovernanceSummary(request?: GovernanceApi.GetApiV1GovernanceSummaryRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceSummaryError>`
- **Wire**: `GET /api/v1/governance/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.GetApiV1GovernanceSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.GetApiV1GovernanceSummaryRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `aiSystemId` | `query` | `string` | no |
| `risk` | `query` | `Risk` | no |
| `owner` | `query` | `string` | no |
| `provider` | `query` | `string` | no |
| `dataClassification` | `query` | `string` | no |
| `jurisdiction` | `query` | `string` | no |
| `framework` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Risk` | `riskSchema` | `src/models/risk.ts` |

### postApiV1GovernanceAuthorityEvaluate

- **Signature**: `postApiV1GovernanceAuthorityEvaluate(request?: GovernanceApi.PostApiV1GovernanceAuthorityEvaluateRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError>`
- **Wire**: `POST /api/v1/governance/authority/evaluate`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.PostApiV1GovernanceAuthorityEvaluateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1GovernanceAuthorityEvaluateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GovernanceAuthorityEvaluateRequest` | `apiV1GovernanceAuthorityEvaluateRequestSchema` | `src/models/api-v1-governance-authority-evaluate-request.ts` |

### postApiV1GovernanceFrameworks

- **Signature**: `postApiV1GovernanceFrameworks(request?: GovernanceApi.PostApiV1GovernanceFrameworksRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceFrameworksError>`
- **Wire**: `POST /api/v1/governance/frameworks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.PostApiV1GovernanceFrameworksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.PostApiV1GovernanceFrameworksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1GovernanceFrameworksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GovernanceFrameworksRequest` | `apiV1GovernanceFrameworksRequestSchema` | `src/models/api-v1-governance-frameworks-request.ts` |

### postApiV1GovernanceIncidents

- **Signature**: `postApiV1GovernanceIncidents(request?: GovernanceApi.PostApiV1GovernanceIncidentsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceIncidentsError>`
- **Wire**: `POST /api/v1/governance/incidents`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.PostApiV1GovernanceIncidentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.PostApiV1GovernanceIncidentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1GovernanceIncidentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GovernanceIncidentsRequest` | `apiV1GovernanceIncidentsRequestSchema` | `src/models/api-v1-governance-incidents-request.ts` |

### postApiV1GovernanceIncidentsByIdReports

- **Signature**: `postApiV1GovernanceIncidentsByIdReports(request: GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError>`
- **Wire**: `POST /api/v1/governance/incidents/{id}/reports`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1GovernanceIncidentsReportsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GovernanceIncidentsReportsRequest` | `apiV1GovernanceIncidentsReportsRequestSchema` | `src/models/api-v1-governance-incidents-reports-request.ts` |


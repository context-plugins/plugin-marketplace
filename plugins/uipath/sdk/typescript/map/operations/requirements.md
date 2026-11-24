<!-- Generated file — do not edit; regenerated with the SDK. -->

# Requirements — operations

Accessor: `client.requirements` · Source: `src/resources/requirements.ts` · 2 operations · Request and error types: namespace `Requirements`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRequirement

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRequirement(request: Requirements.CreateRequirementRequestParams, options?: RequestOptions): ApiPromise<Requirement, Requirements.CreateRequirementError>`
- **Wire**: `POST /api/v2/projects/{projectId}/requirements`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Requirement`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Requirements.CreateRequirementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [400] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Requirements.CreateRequirementRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `body` | `body` | `CreateRequirementRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequirementRequest` | `createRequirementRequestSchema` | `src/models/create-requirement-request.ts` |
| `Requirement` | `requirementSchema` | `src/models/requirement.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### listRequirements

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRequirements(request: Requirements.ListRequirementsRequest, options?: RequestOptions): ApiPromise<RequirementListResponse, Requirements.ListRequirementsError>`
- **Wire**: `GET /api/v2/projects/{projectId}/requirements`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequirementListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Requirements.ListRequirementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Requirements.ListRequirementsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequirementListResponse` | `requirementListResponseSchema` | `src/models/requirement-list-response.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |


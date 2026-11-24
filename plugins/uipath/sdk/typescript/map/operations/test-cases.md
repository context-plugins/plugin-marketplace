<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestCases — operations

Accessor: `client.testCases` · Source: `src/resources/test-cases.ts` · 3 operations · Request and error types: namespace `TestCases`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTestCase

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTestCase(request: TestCases.CreateTestCaseRequestParams, options?: RequestOptions): ApiPromise<TestCase, TestCases.CreateTestCaseError>`
- **Wire**: `POST /api/v2/projects/{projectId}/testcases`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestCase`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestCases.CreateTestCaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [400] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestCases.CreateTestCaseRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `body` | `body` | `CreateTestCaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTestCaseRequest` | `createTestCaseRequestSchema` | `src/models/create-test-case-request.ts` |
| `TestCase` | `testCaseSchema` | `src/models/test-case.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### getTestCase

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTestCase(request: TestCases.GetTestCaseRequest, options?: RequestOptions): ApiPromise<TestCase, TestCases.GetTestCaseError>`
- **Wire**: `GET /api/v2/projects/{projectId}/testcases/{testCaseId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TestCase`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestCases.GetTestCaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestCases.GetTestCaseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `testCaseId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestCase` | `testCaseSchema` | `src/models/test-case.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### listTestCases

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestCases(request: TestCases.ListTestCasesRequest, options?: RequestOptions): ApiPromise<TestCaseListResponse, TestCases.ListTestCasesError>`
- **Wire**: `GET /api/v2/projects/{projectId}/testcases`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TestCaseListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestCases.ListTestCasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestCases.ListTestCasesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestCaseListResponse` | `testCaseListResponseSchema` | `src/models/test-case-list-response.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |


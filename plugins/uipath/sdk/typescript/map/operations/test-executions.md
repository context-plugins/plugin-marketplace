<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestExecutions — operations

Accessor: `client.testExecutions` · Source: `src/resources/test-executions.ts` · 1 operation · Request and error types: namespace `TestExecutions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listTestExecutions

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestExecutions(request: TestExecutions.ListTestExecutionsRequest, options?: RequestOptions): ApiPromise<TestExecutionListResponse, TestExecutions.ListTestExecutionsError>`
- **Wire**: `GET /api/v2/projects/{projectId}/testexecutions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TestExecutionListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestExecutions.ListTestExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestExecutions.ListTestExecutionsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestExecutionListResponse` | `testExecutionListResponseSchema` | `src/models/test-execution-list-response.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |


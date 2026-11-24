<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestSets — operations

Accessor: `client.testSets` · Source: `src/resources/test-sets.ts` · 2 operations · Request and error types: namespace `TestSets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTestSet

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTestSet(request: TestSets.CreateTestSetRequestParams, options?: RequestOptions): ApiPromise<TestSet, TestSets.CreateTestSetError>`
- **Wire**: `POST /api/v2/projects/{projectId}/testsets`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestSet`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestSets.CreateTestSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [400] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestSets.CreateTestSetRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |
| `body` | `body` | `CreateTestSetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTestSetRequest` | `createTestSetRequestSchema` | `src/models/create-test-set-request.ts` |
| `TestSet` | `testSetSchema` | `src/models/test-set.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### listTestSets

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTestSets(request: TestSets.ListTestSetsRequest, options?: RequestOptions): ApiPromise<TestSetListResponse, TestSets.ListTestSetsError>`
- **Wire**: `GET /api/v2/projects/{projectId}/testsets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TestSetListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `TestSets.ListTestSetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestSets.ListTestSetsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestSetListResponse` | `testSetListResponseSchema` | `src/models/test-set-list-response.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestMetadataApi — operations

Accessor: `client.testMetadataApi` · Source: `src/resources/test-metadata-api.ts` · 1 operation · Request and error types: namespace `TestMetadataApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBuildTests

- **Signature**: `listBuildTests(request: TestMetadataApi.ListBuildTestsRequest, options?: RequestOptions): ApiPromise<ProjectProjectBuildNumTestsResponse, TestMetadataApi.ListBuildTestsError>`
- **Wire**: `GET /project/{vcs-type}/{username}/{project}/{build_num}/tests`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectProjectBuildNumTestsResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `TestMetadataApi.ListBuildTestsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TestMetadataApi.ListBuildTestsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vcsType` | `path` | `vcs-type` | `VcsType` | yes |
| `username` | `path` | — | `string` | yes |
| `project` | `path` | — | `string` | yes |
| `buildNum` | `path` | `build_num` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VcsType` | `vcsTypeSchema` | `src/models/vcs-type.ts` |
| `ProjectProjectBuildNumTestsResponse` | `projectProjectBuildNumTestsResponseSchema` | `src/models/project-project-build-num-tests-response.ts` |


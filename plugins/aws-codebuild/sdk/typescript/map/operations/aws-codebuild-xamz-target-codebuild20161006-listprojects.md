<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listprojects — operations

Accessor: `client.awsCodebuildXAmzTargetCodebuild20161006Listprojects` · Source: `src/resources/aws-codebuild-xamz-target-codebuild20161006-listprojects.ts` · 1 operation · Request and error types: namespace `AwsCodebuildXAmzTargetCodebuild20161006Listprojects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listProjects

- **Signature**: `listProjects(request: AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError>`
- **Wire**: `POST /#ListProjects`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjectsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listprojects-api.ts` |


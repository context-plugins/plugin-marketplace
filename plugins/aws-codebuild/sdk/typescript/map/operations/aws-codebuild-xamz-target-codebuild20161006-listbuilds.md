<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listbuilds — operations

Accessor: `client.awsCodebuildXAmzTargetCodebuild20161006Listbuilds` · Source: `src/resources/aws-codebuild-xamz-target-codebuild20161006-listbuilds.ts` · 1 operation · Request and error types: namespace `AwsCodebuildXAmzTargetCodebuild20161006Listbuilds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBuilds

- **Signature**: `listBuilds(request: AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError>`
- **Wire**: `POST /#ListBuilds`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuildsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listbuilds-api.ts` |


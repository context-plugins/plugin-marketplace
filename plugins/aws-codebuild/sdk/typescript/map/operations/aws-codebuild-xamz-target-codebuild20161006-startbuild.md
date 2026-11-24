<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Startbuild — operations

Accessor: `client.awsCodebuildXAmzTargetCodebuild20161006Startbuild` · Source: `src/resources/aws-codebuild-xamz-target-codebuild20161006-startbuild.ts` · 1 operation · Request and error types: namespace `AwsCodebuildXAmzTargetCodebuild20161006Startbuild`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### startBuild

- **Signature**: `startBuild(request: AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError>`
- **Wire**: `POST /#StartBuild`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuildRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-startbuild-api.ts` |


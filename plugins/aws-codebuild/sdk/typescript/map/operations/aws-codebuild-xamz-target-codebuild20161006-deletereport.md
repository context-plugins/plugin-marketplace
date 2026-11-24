<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Deletereport — operations

Accessor: `client.awsCodebuildXAmzTargetCodebuild20161006Deletereport` · Source: `src/resources/aws-codebuild-xamz-target-codebuild20161006-deletereport.ts` · 1 operation · Request and error types: namespace `AwsCodebuildXAmzTargetCodebuild20161006Deletereport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-code-build`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteReport

- **Signature**: `deleteReport(request: AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportRequest, options?: RequestOptions): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError>`
- **Wire**: `POST /#DeleteReport`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsCodeBuildError` with `kind: "api"`, an instance of `AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReportRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi` | `xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiSchema` | `src/models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-deletereport-api.ts` |


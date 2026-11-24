<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta — operations

Accessor: `client.awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta` · Source: `src/resources/aws-step-functions-xamz-target-awsstepfunctions-publishsta.ts` · 1 operation · Request and error types: namespace `AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### publishStateMachineVersion

- **Signature**: `publishStateMachineVersion(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError>`
- **Wire**: `POST /#PublishStateMachineVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-publishsta-api.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat — operations

Accessor: `client.awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat` · Source: `src/resources/aws-step-functions-xamz-target-awsstepfunctions-createstat.ts` · 1 operation · Request and error types: namespace `AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStateMachineAlias

- **Signature**: `createStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError>`
- **Wire**: `POST /#CreateStateMachineAlias`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-createstat-api.ts` |


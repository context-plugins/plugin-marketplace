<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest — operations

Accessor: `client.awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest` · Source: `src/resources/aws-step-functions-xamz-target-awsstepfunctions-describest.ts` · 1 operation · Request and error types: namespace `AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### describeStateMachineAlias

- **Signature**: `describeStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError>`
- **Wire**: `POST /#DescribeStateMachineAlias`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-describest-api.ts` |


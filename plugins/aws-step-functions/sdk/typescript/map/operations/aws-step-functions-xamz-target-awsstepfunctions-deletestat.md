<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat — operations

Accessor: `client.awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat` · Source: `src/resources/aws-step-functions-xamz-target-awsstepfunctions-deletestat.ts` · 2 operations · Request and error types: namespace `AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteStateMachineAlias

- **Signature**: `deleteStateMachineAlias(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError>`
- **Wire**: `POST /#DeleteStateMachineAlias`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.ts` |

### deleteStateMachineVersion

- **Signature**: `deleteStateMachineVersion(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError>`
- **Wire**: `POST /#DeleteStateMachineVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi` | `xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema` | `src/models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.ts` |


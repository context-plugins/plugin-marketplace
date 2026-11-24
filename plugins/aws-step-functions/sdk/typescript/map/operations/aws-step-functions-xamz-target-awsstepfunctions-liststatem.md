<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem — operations

Accessor: `client.awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem` · Source: `src/resources/aws-step-functions-xamz-target-awsstepfunctions-liststatem.ts` · 2 operations · Request and error types: namespace `AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listStateMachineAliases

- **Signature**: `listStateMachineAliases(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError>`
- **Wire**: `POST /#ListStateMachineAliases`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | `xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema` | `src/models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.ts` |

### listStateMachineVersions

- **Signature**: `listStateMachineVersions(request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError>`
- **Wire**: `POST /#ListStateMachineVersions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 4 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### publishStateMachineVersion2

- **Signature**: `publishStateMachineVersion2(request: Operations.PublishStateMachineVersion2Request, options?: RequestOptions): ApiPromise<undefined, Operations.PublishStateMachineVersion2Error>`
- **Wire**: `POST /#PublishStateMachineVersion`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `Operations.PublishStateMachineVersion2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PublishStateMachineVersion2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi` | `xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiSchema` | `src/models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-publishsta-api.ts` |

### redriveExecution

- **Signature**: `redriveExecution(request: Operations.RedriveExecutionRequest, options?: RequestOptions): ApiPromise<undefined, Operations.RedriveExecutionError>`
- **Wire**: `POST /#RedriveExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `Operations.RedriveExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RedriveExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStepFunctionsOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStepFunctionsOperationsApi` | `xAmzTarget1AwsStepFunctionsOperationsApiSchema` | `src/models/xamz-target1-aws-step-functions-operations-api.ts` |

### testState

- **Signature**: `testState(request: Operations.TestStateRequest, options?: RequestOptions): ApiPromise<undefined, Operations.TestStateError>`
- **Wire**: `POST /#TestState`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `Operations.TestStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.TestStateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsStepFunctionsOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsStepFunctionsOperationsApi` | `xAmzTarget2AwsStepFunctionsOperationsApiSchema` | `src/models/xamz-target2-aws-step-functions-operations-api.ts` |

### validateStateMachineDefinition

- **Signature**: `validateStateMachineDefinition(request: Operations.ValidateStateMachineDefinitionRequest, options?: RequestOptions): ApiPromise<undefined, Operations.ValidateStateMachineDefinitionError>`
- **Wire**: `POST /#ValidateStateMachineDefinition`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `Operations.ValidateStateMachineDefinitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ValidateStateMachineDefinitionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsStepFunctionsOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsStepFunctionsOperationsApi` | `xAmzTarget3AwsStepFunctionsOperationsApiSchema` | `src/models/xamz-target3-aws-step-functions-operations-api.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# StateMachines — operations

Accessor: `client.stateMachines` · Source: `src/resources/state-machines.ts` · 6 operations · Request and error types: namespace `StateMachines`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStateMachine2

- **Signature**: `createStateMachine2(request: StateMachines.CreateStateMachine2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.CreateStateMachine2Error>`
- **Wire**: `POST /#CreateStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.CreateStateMachine2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.CreateStateMachine2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAwsStepFunctionsStateMachinesApi` | `xAmzTargetAwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target-aws-step-functions-state-machines-api.ts` |

### deleteStateMachine2

- **Signature**: `deleteStateMachine2(request: StateMachines.DeleteStateMachine2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.DeleteStateMachine2Error>`
- **Wire**: `POST /#DeleteStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.DeleteStateMachine2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.DeleteStateMachine2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AwsStepFunctionsStateMachinesApi` | `xAmzTarget1AwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target1-aws-step-functions-state-machines-api.ts` |

### describeStateMachine2

- **Signature**: `describeStateMachine2(request: StateMachines.DescribeStateMachine2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.DescribeStateMachine2Error>`
- **Wire**: `POST /#DescribeStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.DescribeStateMachine2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.DescribeStateMachine2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AwsStepFunctionsStateMachinesApi` | `xAmzTarget2AwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target2-aws-step-functions-state-machines-api.ts` |

### describeStateMachineForExecution2

- **Signature**: `describeStateMachineForExecution2(request: StateMachines.DescribeStateMachineForExecution2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.DescribeStateMachineForExecution2Error>`
- **Wire**: `POST /#DescribeStateMachineForExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.DescribeStateMachineForExecution2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.DescribeStateMachineForExecution2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AwsStepFunctionsStateMachinesApi` | `xAmzTarget3AwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target3-aws-step-functions-state-machines-api.ts` |

### listStateMachines2

- **Signature**: `listStateMachines2(request: StateMachines.ListStateMachines2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.ListStateMachines2Error>`
- **Wire**: `POST /#ListStateMachines`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.ListStateMachines2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.ListStateMachines2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AwsStepFunctionsStateMachinesApi` | `xAmzTarget4AwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target4-aws-step-functions-state-machines-api.ts` |

### updateStateMachine2

- **Signature**: `updateStateMachine2(request: StateMachines.UpdateStateMachine2Request, options?: RequestOptions): ApiPromise<undefined, StateMachines.UpdateStateMachine2Error>`
- **Wire**: `POST /#UpdateStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `StateMachines.UpdateStateMachine2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StateMachines.UpdateStateMachine2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AwsStepFunctionsStateMachinesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AwsStepFunctionsStateMachinesApi` | `xAmzTarget5AwsStepFunctionsStateMachinesApiSchema` | `src/models/xamz-target5-aws-step-functions-state-machines-api.ts` |


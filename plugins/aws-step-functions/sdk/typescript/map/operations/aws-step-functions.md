<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctions — operations

Accessor: `client.awsStepFunctions` · Source: `src/resources/aws-step-functions.ts` · 26 operations · Request and error types: namespace `AwsStepFunctions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-step-functions`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createActivity

- **Signature**: `createActivity(request: AwsStepFunctions.CreateActivityRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.CreateActivityError>`
- **Wire**: `POST /#CreateActivity`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.CreateActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.CreateActivityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### createStateMachine

- **Signature**: `createStateMachine(request: AwsStepFunctions.CreateStateMachineRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.CreateStateMachineError>`
- **Wire**: `POST /#CreateStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.CreateStateMachineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.CreateStateMachineRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### deleteActivity

- **Signature**: `deleteActivity(request: AwsStepFunctions.DeleteActivityRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DeleteActivityError>`
- **Wire**: `POST /#DeleteActivity`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DeleteActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DeleteActivityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### deleteStateMachine

- **Signature**: `deleteStateMachine(request: AwsStepFunctions.DeleteStateMachineRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DeleteStateMachineError>`
- **Wire**: `POST /#DeleteStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DeleteStateMachineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DeleteStateMachineRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### describeActivity

- **Signature**: `describeActivity(request: AwsStepFunctions.DescribeActivityRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DescribeActivityError>`
- **Wire**: `POST /#DescribeActivity`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DescribeActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DescribeActivityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### describeExecution

- **Signature**: `describeExecution(request: AwsStepFunctions.DescribeExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DescribeExecutionError>`
- **Wire**: `POST /#DescribeExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DescribeExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DescribeExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### describeMapRun

- **Signature**: `describeMapRun(request: AwsStepFunctions.DescribeMapRunRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DescribeMapRunError>`
- **Wire**: `POST /#DescribeMapRun`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DescribeMapRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DescribeMapRunRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### describeStateMachine

- **Signature**: `describeStateMachine(request: AwsStepFunctions.DescribeStateMachineRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DescribeStateMachineError>`
- **Wire**: `POST /#DescribeStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DescribeStateMachineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DescribeStateMachineRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### describeStateMachineForExecution

- **Signature**: `describeStateMachineForExecution(request: AwsStepFunctions.DescribeStateMachineForExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.DescribeStateMachineForExecutionError>`
- **Wire**: `POST /#DescribeStateMachineForExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.DescribeStateMachineForExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.DescribeStateMachineForExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### getActivityTask

- **Signature**: `getActivityTask(request: AwsStepFunctions.GetActivityTaskRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.GetActivityTaskError>`
- **Wire**: `POST /#GetActivityTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.GetActivityTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.GetActivityTaskRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### getExecutionHistory

- **Signature**: `getExecutionHistory(request: AwsStepFunctions.GetExecutionHistoryRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.GetExecutionHistoryError>`
- **Wire**: `POST /#GetExecutionHistory`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.GetExecutionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.GetExecutionHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### listActivities

- **Signature**: `listActivities(request: AwsStepFunctions.ListActivitiesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.ListActivitiesError>`
- **Wire**: `POST /#ListActivities`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.ListActivitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.ListActivitiesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### listExecutions

- **Signature**: `listExecutions(request: AwsStepFunctions.ListExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.ListExecutionsError>`
- **Wire**: `POST /#ListExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.ListExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.ListExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### listMapRuns

- **Signature**: `listMapRuns(request: AwsStepFunctions.ListMapRunsRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.ListMapRunsError>`
- **Wire**: `POST /#ListMapRuns`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.ListMapRunsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.ListMapRunsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### listStateMachines

- **Signature**: `listStateMachines(request: AwsStepFunctions.ListStateMachinesRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.ListStateMachinesError>`
- **Wire**: `POST /#ListStateMachines`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.ListStateMachinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.ListStateMachinesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### listTagsForResource

- **Signature**: `listTagsForResource(request: AwsStepFunctions.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.ListTagsForResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

### sendTaskFailure

- **Signature**: `sendTaskFailure(request: AwsStepFunctions.SendTaskFailureRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.SendTaskFailureError>`
- **Wire**: `POST /#SendTaskFailure`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.SendTaskFailureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.SendTaskFailureRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### sendTaskHeartbeat

- **Signature**: `sendTaskHeartbeat(request: AwsStepFunctions.SendTaskHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.SendTaskHeartbeatError>`
- **Wire**: `POST /#SendTaskHeartbeat`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.SendTaskHeartbeatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.SendTaskHeartbeatRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### sendTaskSuccess

- **Signature**: `sendTaskSuccess(request: AwsStepFunctions.SendTaskSuccessRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.SendTaskSuccessError>`
- **Wire**: `POST /#SendTaskSuccess`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.SendTaskSuccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.SendTaskSuccessRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### startExecution

- **Signature**: `startExecution(request: AwsStepFunctions.StartExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.StartExecutionError>`
- **Wire**: `POST /#StartExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.StartExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.StartExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### startSyncExecution

- **Signature**: `startSyncExecution(request: AwsStepFunctions.StartSyncExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.StartSyncExecutionError>`
- **Wire**: `POST /#StartSyncExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.StartSyncExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.StartSyncExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### stopExecution

- **Signature**: `stopExecution(request: AwsStepFunctions.StopExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.StopExecutionError>`
- **Wire**: `POST /#StopExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.StopExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.StopExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### tagResource

- **Signature**: `tagResource(request: AwsStepFunctions.TagResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.TagResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### untagResource

- **Signature**: `untagResource(request: AwsStepFunctions.UntagResourceRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.UntagResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### updateMapRun

- **Signature**: `updateMapRun(request: AwsStepFunctions.UpdateMapRunRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.UpdateMapRunError>`
- **Wire**: `POST /#UpdateMapRun`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.UpdateMapRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.UpdateMapRunRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### updateStateMachine

- **Signature**: `updateStateMachine(request: AwsStepFunctions.UpdateStateMachineRequest, options?: RequestOptions): ApiPromise<undefined, AwsStepFunctions.UpdateStateMachineError>`
- **Wire**: `POST /#UpdateStateMachine`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AwsStepFunctionsError` with `kind: "api"`, an instance of `AwsStepFunctions.UpdateStateMachineError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error409"` [409] no body · `"error400"` [400] no body · `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AwsStepFunctions.UpdateStateMachineRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |


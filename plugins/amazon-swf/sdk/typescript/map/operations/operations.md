<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 22 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-swf`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### countClosedWorkflowExecutions2

- **Signature**: `countClosedWorkflowExecutions2(request: Operations.CountClosedWorkflowExecutions2Request, options?: RequestOptions): ApiPromise<undefined, Operations.CountClosedWorkflowExecutions2Error>`
- **Wire**: `POST /#CountClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.CountClosedWorkflowExecutions2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CountClosedWorkflowExecutions2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### countOpenWorkflowExecutions2

- **Signature**: `countOpenWorkflowExecutions2(request: Operations.CountOpenWorkflowExecutions2Request, options?: RequestOptions): ApiPromise<undefined, Operations.CountOpenWorkflowExecutions2Error>`
- **Wire**: `POST /#CountOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.CountOpenWorkflowExecutions2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CountOpenWorkflowExecutions2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### countPendingActivityTasks2

- **Signature**: `countPendingActivityTasks2(request: Operations.CountPendingActivityTasks2Request, options?: RequestOptions): ApiPromise<undefined, Operations.CountPendingActivityTasks2Error>`
- **Wire**: `POST /#CountPendingActivityTasks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.CountPendingActivityTasks2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CountPendingActivityTasks2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### countPendingDecisionTasks2

- **Signature**: `countPendingDecisionTasks2(request: Operations.CountPendingDecisionTasks2Request, options?: RequestOptions): ApiPromise<undefined, Operations.CountPendingDecisionTasks2Error>`
- **Wire**: `POST /#CountPendingDecisionTasks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.CountPendingDecisionTasks2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.CountPendingDecisionTasks2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### deleteActivityType

- **Signature**: `deleteActivityType(request: Operations.DeleteActivityTypeRequest, options?: RequestOptions): ApiPromise<undefined, Operations.DeleteActivityTypeError>`
- **Wire**: `POST /#DeleteActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.DeleteActivityTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeleteActivityTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi` | `xAmzTarget20AmazonSimpleWorkflowServiceOperationsApiSchema` | `src/models/xamz-target20-amazon-simple-workflow-service-operations-api.ts` |

### deleteWorkflowType

- **Signature**: `deleteWorkflowType(request: Operations.DeleteWorkflowTypeRequest, options?: RequestOptions): ApiPromise<undefined, Operations.DeleteWorkflowTypeError>`
- **Wire**: `POST /#DeleteWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.DeleteWorkflowTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeleteWorkflowTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi` | `xAmzTarget21AmazonSimpleWorkflowServiceOperationsApiSchema` | `src/models/xamz-target21-amazon-simple-workflow-service-operations-api.ts` |

### deprecateActivityType2

- **Signature**: `deprecateActivityType2(request: Operations.DeprecateActivityType2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DeprecateActivityType2Error>`
- **Wire**: `POST /#DeprecateActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.DeprecateActivityType2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeprecateActivityType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### deprecateDomain2

- **Signature**: `deprecateDomain2(request: Operations.DeprecateDomain2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DeprecateDomain2Error>`
- **Wire**: `POST /#DeprecateDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.DeprecateDomain2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeprecateDomain2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### deprecateWorkflowType2

- **Signature**: `deprecateWorkflowType2(request: Operations.DeprecateWorkflowType2Request, options?: RequestOptions): ApiPromise<undefined, Operations.DeprecateWorkflowType2Error>`
- **Wire**: `POST /#DeprecateWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.DeprecateWorkflowType2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.DeprecateWorkflowType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### pollForActivityTask2

- **Signature**: `pollForActivityTask2(request: Operations.PollForActivityTask2Request, options?: RequestOptions): ApiPromise<undefined, Operations.PollForActivityTask2Error>`
- **Wire**: `POST /#PollForActivityTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.PollForActivityTask2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PollForActivityTask2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### pollForDecisionTask2

- **Signature**: `pollForDecisionTask2(request: Operations.PollForDecisionTask2Request, options?: RequestOptions): ApiPromise<undefined, Operations.PollForDecisionTask2Error>`
- **Wire**: `POST /#PollForDecisionTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.PollForDecisionTask2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.PollForDecisionTask2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### recordActivityTaskHeartbeat2

- **Signature**: `recordActivityTaskHeartbeat2(request: Operations.RecordActivityTaskHeartbeat2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RecordActivityTaskHeartbeat2Error>`
- **Wire**: `POST /#RecordActivityTaskHeartbeat`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RecordActivityTaskHeartbeat2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RecordActivityTaskHeartbeat2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### requestCancelWorkflowExecution2

- **Signature**: `requestCancelWorkflowExecution2(request: Operations.RequestCancelWorkflowExecution2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RequestCancelWorkflowExecution2Error>`
- **Wire**: `POST /#RequestCancelWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RequestCancelWorkflowExecution2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RequestCancelWorkflowExecution2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### respondActivityTaskCanceled2

- **Signature**: `respondActivityTaskCanceled2(request: Operations.RespondActivityTaskCanceled2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RespondActivityTaskCanceled2Error>`
- **Wire**: `POST /#RespondActivityTaskCanceled`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RespondActivityTaskCanceled2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RespondActivityTaskCanceled2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### respondActivityTaskCompleted2

- **Signature**: `respondActivityTaskCompleted2(request: Operations.RespondActivityTaskCompleted2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RespondActivityTaskCompleted2Error>`
- **Wire**: `POST /#RespondActivityTaskCompleted`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RespondActivityTaskCompleted2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RespondActivityTaskCompleted2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### respondActivityTaskFailed2

- **Signature**: `respondActivityTaskFailed2(request: Operations.RespondActivityTaskFailed2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RespondActivityTaskFailed2Error>`
- **Wire**: `POST /#RespondActivityTaskFailed`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RespondActivityTaskFailed2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RespondActivityTaskFailed2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### respondDecisionTaskCompleted2

- **Signature**: `respondDecisionTaskCompleted2(request: Operations.RespondDecisionTaskCompleted2Request, options?: RequestOptions): ApiPromise<undefined, Operations.RespondDecisionTaskCompleted2Error>`
- **Wire**: `POST /#RespondDecisionTaskCompleted`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.RespondDecisionTaskCompleted2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.RespondDecisionTaskCompleted2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### signalWorkflowExecution2

- **Signature**: `signalWorkflowExecution2(request: Operations.SignalWorkflowExecution2Request, options?: RequestOptions): ApiPromise<undefined, Operations.SignalWorkflowExecution2Error>`
- **Wire**: `POST /#SignalWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.SignalWorkflowExecution2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.SignalWorkflowExecution2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### terminateWorkflowExecution2

- **Signature**: `terminateWorkflowExecution2(request: Operations.TerminateWorkflowExecution2Request, options?: RequestOptions): ApiPromise<undefined, Operations.TerminateWorkflowExecution2Error>`
- **Wire**: `POST /#TerminateWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.TerminateWorkflowExecution2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.TerminateWorkflowExecution2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### undeprecateActivityType2

- **Signature**: `undeprecateActivityType2(request: Operations.UndeprecateActivityType2Request, options?: RequestOptions): ApiPromise<undefined, Operations.UndeprecateActivityType2Error>`
- **Wire**: `POST /#UndeprecateActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.UndeprecateActivityType2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UndeprecateActivityType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### undeprecateDomain2

- **Signature**: `undeprecateDomain2(request: Operations.UndeprecateDomain2Request, options?: RequestOptions): ApiPromise<undefined, Operations.UndeprecateDomain2Error>`
- **Wire**: `POST /#UndeprecateDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.UndeprecateDomain2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UndeprecateDomain2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### undeprecateWorkflowType2

- **Signature**: `undeprecateWorkflowType2(request: Operations.UndeprecateWorkflowType2Request, options?: RequestOptions): ApiPromise<undefined, Operations.UndeprecateWorkflowType2Error>`
- **Wire**: `POST /#UndeprecateWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `Operations.UndeprecateWorkflowType2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UndeprecateWorkflowType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |


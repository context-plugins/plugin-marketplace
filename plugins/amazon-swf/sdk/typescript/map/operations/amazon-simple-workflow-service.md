<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonSimpleWorkflowService — operations

Accessor: `client.amazonSimpleWorkflowService` · Source: `src/resources/amazon-simple-workflow-service.ts` · 37 operations · Request and error types: namespace `AmazonSimpleWorkflowService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-swf`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### countClosedWorkflowExecutions

- **Signature**: `countClosedWorkflowExecutions(request: AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError>`
- **Wire**: `POST /#CountClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### countOpenWorkflowExecutions

- **Signature**: `countOpenWorkflowExecutions(request: AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError>`
- **Wire**: `POST /#CountOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### countPendingActivityTasks

- **Signature**: `countPendingActivityTasks(request: AmazonSimpleWorkflowService.CountPendingActivityTasksRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.CountPendingActivityTasksError>`
- **Wire**: `POST /#CountPendingActivityTasks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.CountPendingActivityTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.CountPendingActivityTasksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### countPendingDecisionTasks

- **Signature**: `countPendingDecisionTasks(request: AmazonSimpleWorkflowService.CountPendingDecisionTasksRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.CountPendingDecisionTasksError>`
- **Wire**: `POST /#CountPendingDecisionTasks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.CountPendingDecisionTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.CountPendingDecisionTasksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### deprecateActivityType

- **Signature**: `deprecateActivityType(request: AmazonSimpleWorkflowService.DeprecateActivityTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateActivityTypeError>`
- **Wire**: `POST /#DeprecateActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DeprecateActivityTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DeprecateActivityTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |

### deprecateDomain

- **Signature**: `deprecateDomain(request: AmazonSimpleWorkflowService.DeprecateDomainRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateDomainError>`
- **Wire**: `POST /#DeprecateDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DeprecateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DeprecateDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### deprecateWorkflowType

- **Signature**: `deprecateWorkflowType(request: AmazonSimpleWorkflowService.DeprecateWorkflowTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateWorkflowTypeError>`
- **Wire**: `POST /#DeprecateWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DeprecateWorkflowTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DeprecateWorkflowTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### describeActivityType

- **Signature**: `describeActivityType(request: AmazonSimpleWorkflowService.DescribeActivityTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeActivityTypeError>`
- **Wire**: `POST /#DescribeActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DescribeActivityTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DescribeActivityTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget20` | `xAmzTarget20Schema` | `src/models/xamz-target20.ts` |

### describeDomain

- **Signature**: `describeDomain(request: AmazonSimpleWorkflowService.DescribeDomainRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeDomainError>`
- **Wire**: `POST /#DescribeDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DescribeDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DescribeDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget26` | `xAmzTarget26Schema` | `src/models/xamz-target26.ts` |

### describeWorkflowExecution

- **Signature**: `describeWorkflowExecution(request: AmazonSimpleWorkflowService.DescribeWorkflowExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeWorkflowExecutionError>`
- **Wire**: `POST /#DescribeWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DescribeWorkflowExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DescribeWorkflowExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget29` | `xAmzTarget29Schema` | `src/models/xamz-target29.ts` |

### describeWorkflowType

- **Signature**: `describeWorkflowType(request: AmazonSimpleWorkflowService.DescribeWorkflowTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeWorkflowTypeError>`
- **Wire**: `POST /#DescribeWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.DescribeWorkflowTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.DescribeWorkflowTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget23` | `xAmzTarget23Schema` | `src/models/xamz-target23.ts` |

### getWorkflowExecutionHistory

- **Signature**: `getWorkflowExecutionHistory(request: AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError>`
- **Wire**: `POST /#GetWorkflowExecutionHistory`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget31` | `xAmzTarget31Schema` | `src/models/xamz-target31.ts` |

### listActivityTypes

- **Signature**: `listActivityTypes(request: AmazonSimpleWorkflowService.ListActivityTypesRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListActivityTypesError>`
- **Wire**: `POST /#ListActivityTypes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListActivityTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListActivityTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget21` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget21` | `xAmzTarget21Schema` | `src/models/xamz-target21.ts` |

### listClosedWorkflowExecutions

- **Signature**: `listClosedWorkflowExecutions(request: AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError>`
- **Wire**: `POST /#ListClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget32` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget32` | `xAmzTarget32Schema` | `src/models/xamz-target32.ts` |

### listDomains

- **Signature**: `listDomains(request: AmazonSimpleWorkflowService.ListDomainsRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListDomainsError>`
- **Wire**: `POST /#ListDomains`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListDomainsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget27` | `xAmzTarget27Schema` | `src/models/xamz-target27.ts` |

### listOpenWorkflowExecutions

- **Signature**: `listOpenWorkflowExecutions(request: AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError>`
- **Wire**: `POST /#ListOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget33` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget33` | `xAmzTarget33Schema` | `src/models/xamz-target33.ts` |

### listTagsForResource

- **Signature**: `listTagsForResource(request: AmazonSimpleWorkflowService.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListTagsForResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget34` | `xAmzTarget34Schema` | `src/models/xamz-target34.ts` |

### listWorkflowTypes

- **Signature**: `listWorkflowTypes(request: AmazonSimpleWorkflowService.ListWorkflowTypesRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.ListWorkflowTypesError>`
- **Wire**: `POST /#ListWorkflowTypes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.ListWorkflowTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.ListWorkflowTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget24` | `xAmzTarget24Schema` | `src/models/xamz-target24.ts` |

### pollForActivityTask

- **Signature**: `pollForActivityTask(request: AmazonSimpleWorkflowService.PollForActivityTaskRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.PollForActivityTaskError>`
- **Wire**: `POST /#PollForActivityTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.PollForActivityTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.PollForActivityTaskRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### pollForDecisionTask

- **Signature**: `pollForDecisionTask(request: AmazonSimpleWorkflowService.PollForDecisionTaskRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.PollForDecisionTaskError>`
- **Wire**: `POST /#PollForDecisionTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.PollForDecisionTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.PollForDecisionTaskRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### recordActivityTaskHeartbeat

- **Signature**: `recordActivityTaskHeartbeat(request: AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError>`
- **Wire**: `POST /#RecordActivityTaskHeartbeat`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### registerActivityType

- **Signature**: `registerActivityType(request: AmazonSimpleWorkflowService.RegisterActivityTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterActivityTypeError>`
- **Wire**: `POST /#RegisterActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RegisterActivityTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RegisterActivityTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget22` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget22` | `xAmzTarget22Schema` | `src/models/xamz-target22.ts` |

### registerDomain

- **Signature**: `registerDomain(request: AmazonSimpleWorkflowService.RegisterDomainRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterDomainError>`
- **Wire**: `POST /#RegisterDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RegisterDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RegisterDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget28` | `xAmzTarget28Schema` | `src/models/xamz-target28.ts` |

### registerWorkflowType

- **Signature**: `registerWorkflowType(request: AmazonSimpleWorkflowService.RegisterWorkflowTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterWorkflowTypeError>`
- **Wire**: `POST /#RegisterWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RegisterWorkflowTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RegisterWorkflowTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget25` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget25` | `xAmzTarget25Schema` | `src/models/xamz-target25.ts` |

### requestCancelWorkflowExecution

- **Signature**: `requestCancelWorkflowExecution(request: AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError>`
- **Wire**: `POST /#RequestCancelWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget10` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget10` | `xAmzTarget10Schema` | `src/models/xamz-target10.ts` |

### respondActivityTaskCanceled

- **Signature**: `respondActivityTaskCanceled(request: AmazonSimpleWorkflowService.RespondActivityTaskCanceledRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskCanceledError>`
- **Wire**: `POST /#RespondActivityTaskCanceled`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RespondActivityTaskCanceledError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RespondActivityTaskCanceledRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget11` | `xAmzTarget11Schema` | `src/models/xamz-target11.ts` |

### respondActivityTaskCompleted

- **Signature**: `respondActivityTaskCompleted(request: AmazonSimpleWorkflowService.RespondActivityTaskCompletedRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskCompletedError>`
- **Wire**: `POST /#RespondActivityTaskCompleted`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RespondActivityTaskCompletedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RespondActivityTaskCompletedRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget12` | `xAmzTarget12Schema` | `src/models/xamz-target12.ts` |

### respondActivityTaskFailed

- **Signature**: `respondActivityTaskFailed(request: AmazonSimpleWorkflowService.RespondActivityTaskFailedRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskFailedError>`
- **Wire**: `POST /#RespondActivityTaskFailed`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RespondActivityTaskFailedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RespondActivityTaskFailedRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget13` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget13` | `xAmzTarget13Schema` | `src/models/xamz-target13.ts` |

### respondDecisionTaskCompleted

- **Signature**: `respondDecisionTaskCompleted(request: AmazonSimpleWorkflowService.RespondDecisionTaskCompletedRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError>`
- **Wire**: `POST /#RespondDecisionTaskCompleted`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.RespondDecisionTaskCompletedRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget14` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget14` | `xAmzTarget14Schema` | `src/models/xamz-target14.ts` |

### signalWorkflowExecution

- **Signature**: `signalWorkflowExecution(request: AmazonSimpleWorkflowService.SignalWorkflowExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.SignalWorkflowExecutionError>`
- **Wire**: `POST /#SignalWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.SignalWorkflowExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.SignalWorkflowExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget15` | `xAmzTarget15Schema` | `src/models/xamz-target15.ts` |

### startWorkflowExecution

- **Signature**: `startWorkflowExecution(request: AmazonSimpleWorkflowService.StartWorkflowExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.StartWorkflowExecutionError>`
- **Wire**: `POST /#StartWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.StartWorkflowExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.StartWorkflowExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget30` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget30` | `xAmzTarget30Schema` | `src/models/xamz-target30.ts` |

### tagResource

- **Signature**: `tagResource(request: AmazonSimpleWorkflowService.TagResourceRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.TagResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget35` | `xAmzTarget35Schema` | `src/models/xamz-target35.ts` |

### terminateWorkflowExecution

- **Signature**: `terminateWorkflowExecution(request: AmazonSimpleWorkflowService.TerminateWorkflowExecutionRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.TerminateWorkflowExecutionError>`
- **Wire**: `POST /#TerminateWorkflowExecution`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.TerminateWorkflowExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.TerminateWorkflowExecutionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget16` | `xAmzTarget16Schema` | `src/models/xamz-target16.ts` |

### undeprecateActivityType

- **Signature**: `undeprecateActivityType(request: AmazonSimpleWorkflowService.UndeprecateActivityTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateActivityTypeError>`
- **Wire**: `POST /#UndeprecateActivityType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.UndeprecateActivityTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.UndeprecateActivityTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget17` | `xAmzTarget17Schema` | `src/models/xamz-target17.ts` |

### undeprecateDomain

- **Signature**: `undeprecateDomain(request: AmazonSimpleWorkflowService.UndeprecateDomainRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateDomainError>`
- **Wire**: `POST /#UndeprecateDomain`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.UndeprecateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.UndeprecateDomainRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget18` | `xAmzTarget18Schema` | `src/models/xamz-target18.ts` |

### undeprecateWorkflowType

- **Signature**: `undeprecateWorkflowType(request: AmazonSimpleWorkflowService.UndeprecateWorkflowTypeRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError>`
- **Wire**: `POST /#UndeprecateWorkflowType`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.UndeprecateWorkflowTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget19` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget19` | `xAmzTarget19Schema` | `src/models/xamz-target19.ts` |

### untagResource

- **Signature**: `untagResource(request: AmazonSimpleWorkflowService.UntagResourceRequest, options?: RequestOptions): ApiPromise<undefined, AmazonSimpleWorkflowService.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSwfError` with `kind: "api"`, an instance of `AmazonSimpleWorkflowService.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AmazonSimpleWorkflowService.UntagResourceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget36` | `xAmzTarget36Schema` | `src/models/xamz-target36.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Queues — operations

Accessor: `client.queues` · Source: `src/resources/queues.ts` · 10 operations · Request and error types: namespace `Queues`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-sqs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createQueue

- **Signature**: `createQueue(request: Queues.CreateQueueRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.CreateQueueError>`
- **Wire**: `POST /#CreateQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.CreateQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.CreateQueueRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonSimpleQueueServiceQueuesApi` | `xAmzTargetAmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target-amazon-simple-queue-service-queues-api.ts` |

### deleteQueue

- **Signature**: `deleteQueue(request: Queues.DeleteQueueRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.DeleteQueueError>`
- **Wire**: `POST /#DeleteQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.DeleteQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.DeleteQueueRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget1AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target1-amazon-simple-queue-service-queues-api.ts` |

### getQueueAttributes

- **Signature**: `getQueueAttributes(request: Queues.GetQueueAttributesRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.GetQueueAttributesError>`
- **Wire**: `POST /#GetQueueAttributes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.GetQueueAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.GetQueueAttributesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget6AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target6-amazon-simple-queue-service-queues-api.ts` |

### getQueueUrl

- **Signature**: `getQueueUrl(request: Queues.GetQueueUrlRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.GetQueueUrlError>`
- **Wire**: `POST /#GetQueueUrl`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.GetQueueUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.GetQueueUrlRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget8AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target8-amazon-simple-queue-service-queues-api.ts` |

### listDeadLetterSourceQueues

- **Signature**: `listDeadLetterSourceQueues(request: Queues.ListDeadLetterSourceQueuesRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.ListDeadLetterSourceQueuesError>`
- **Wire**: `POST /#ListDeadLetterSourceQueues`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.ListDeadLetterSourceQueuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.ListDeadLetterSourceQueuesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget9AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target9-amazon-simple-queue-service-queues-api.ts` |

### listQueues

- **Signature**: `listQueues(request: Queues.ListQueuesRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.ListQueuesError>`
- **Wire**: `POST /#ListQueues`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.ListQueuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.ListQueuesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget2AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target2-amazon-simple-queue-service-queues-api.ts` |

### purgeQueue

- **Signature**: `purgeQueue(request: Queues.PurgeQueueRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.PurgeQueueError>`
- **Wire**: `POST /#PurgeQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.PurgeQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.PurgeQueueRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget5AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target5-amazon-simple-queue-service-queues-api.ts` |

### setQueueAttributes

- **Signature**: `setQueueAttributes(request: Queues.SetQueueAttributesRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.SetQueueAttributesError>`
- **Wire**: `POST /#SetQueueAttributes`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.SetQueueAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.SetQueueAttributesRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget7AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target7-amazon-simple-queue-service-queues-api.ts` |

### tagQueue

- **Signature**: `tagQueue(request: Queues.TagQueueRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.TagQueueError>`
- **Wire**: `POST /#TagQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.TagQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.TagQueueRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget3AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target3-amazon-simple-queue-service-queues-api.ts` |

### untagQueue

- **Signature**: `untagQueue(request: Queues.UntagQueueRequestParams, options?: RequestOptions): ApiPromise<undefined, Queues.UntagQueueError>`
- **Wire**: `POST /#UntagQueue`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Queues.UntagQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Queues.UntagQueueRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4AmazonSimpleQueueServiceQueuesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4AmazonSimpleQueueServiceQueuesApi` | `xAmzTarget4AmazonSimpleQueueServiceQueuesApiSchema` | `src/models/xamz-target4-amazon-simple-queue-service-queues-api.ts` |


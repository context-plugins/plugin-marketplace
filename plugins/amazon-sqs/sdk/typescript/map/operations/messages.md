<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 10 operations · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-sqs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelMessageMoveTask

- **Signature**: `cancelMessageMoveTask(request: Messages.CancelMessageMoveTaskRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.CancelMessageMoveTaskError>`
- **Wire**: `POST /#CancelMessageMoveTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.CancelMessageMoveTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.CancelMessageMoveTaskRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2` | `xAmzTarget2Schema` | `src/models/xamz-target2.ts` |

### changeMessageVisibility

- **Signature**: `changeMessageVisibility(request: Messages.ChangeMessageVisibilityRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.ChangeMessageVisibilityError>`
- **Wire**: `POST /#ChangeMessageVisibility`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.ChangeMessageVisibilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.ChangeMessageVisibilityRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget5` | `xAmzTarget5Schema` | `src/models/xamz-target5.ts` |

### changeMessageVisibilityBatch

- **Signature**: `changeMessageVisibilityBatch(request: Messages.ChangeMessageVisibilityBatchRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.ChangeMessageVisibilityBatchError>`
- **Wire**: `POST /#ChangeMessageVisibilityBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.ChangeMessageVisibilityBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.ChangeMessageVisibilityBatchRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget6` | `xAmzTarget6Schema` | `src/models/xamz-target6.ts` |

### deleteMessage

- **Signature**: `deleteMessage(request: Messages.DeleteMessageRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.DeleteMessageError>`
- **Wire**: `POST /#DeleteMessage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.DeleteMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.DeleteMessageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget` | `xAmzTargetSchema` | `src/models/xamz-target.ts` |

### deleteMessageBatch

- **Signature**: `deleteMessageBatch(request: Messages.DeleteMessageBatchRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.DeleteMessageBatchError>`
- **Wire**: `POST /#DeleteMessageBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.DeleteMessageBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.DeleteMessageBatchRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget8` | `xAmzTarget8Schema` | `src/models/xamz-target8.ts` |

### listMessageMoveTasks

- **Signature**: `listMessageMoveTasks(request: Messages.ListMessageMoveTasksRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.ListMessageMoveTasksError>`
- **Wire**: `POST /#ListMessageMoveTasks`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.ListMessageMoveTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.ListMessageMoveTasksRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget3` | `xAmzTarget3Schema` | `src/models/xamz-target3.ts` |

### receiveMessage

- **Signature**: `receiveMessage(request: Messages.ReceiveMessageRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.ReceiveMessageError>`
- **Wire**: `POST /#ReceiveMessage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.ReceiveMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.ReceiveMessageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget7` | `xAmzTarget7Schema` | `src/models/xamz-target7.ts` |

### sendMessage

- **Signature**: `sendMessage(request: Messages.SendMessageRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.SendMessageError>`
- **Wire**: `POST /#SendMessage`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.SendMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.SendMessageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1` | `xAmzTarget1Schema` | `src/models/xamz-target1.ts` |

### sendMessageBatch

- **Signature**: `sendMessageBatch(request: Messages.SendMessageBatchRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.SendMessageBatchError>`
- **Wire**: `POST /#SendMessageBatch`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.SendMessageBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.SendMessageBatchRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget9` | `xAmzTarget9Schema` | `src/models/xamz-target9.ts` |

### startMessageMoveTask

- **Signature**: `startMessageMoveTask(request: Messages.StartMessageMoveTaskRequestParams, options?: RequestOptions): ApiPromise<undefined, Messages.StartMessageMoveTaskError>`
- **Wire**: `POST /#StartMessageMoveTask`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Messages.StartMessageMoveTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.StartMessageMoveTaskRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget4` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget4` | `xAmzTarget4Schema` | `src/models/xamz-target4.ts` |


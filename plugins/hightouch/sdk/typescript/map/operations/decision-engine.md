<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionEngine — operations

Accessor: `client.decisionEngine` · Source: `src/resources/decision-engine.ts` · 9 operations · Request and error types: namespace `DecisionEngine`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cloneMessage

- **Signature**: `cloneMessage(request: DecisionEngine.CloneMessageRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesCloneResponse, DecisionEngine.CloneMessageError>`
- **Wire**: `POST /decision-engine/flow/{flowId}/messages/{messageId}/clone`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionEngineFlowMessagesCloneResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.CloneMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"decisionEngineErrorResponse"` [404] `DecisionEngineErrorResponse` · `"validateErrorJson"` [422] `ValidateErrorJson` · `"decisionEngineFlowMessagesCloneResponse1"` [500] `DecisionEngineFlowMessagesCloneResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.CloneMessageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `DecisionEngineMessageClone` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineMessageClone` | `decisionEngineMessageCloneSchema` | `src/models/decision-engine-message-clone.ts` |
| `DecisionEngineFlowMessagesCloneResponse` | `decisionEngineFlowMessagesCloneResponseSchema` | `src/models/unions/decision-engine-flow-messages-clone-response.ts` |
| `DecisionEngineErrorResponse` | `decisionEngineErrorResponseSchema` | `src/models/decision-engine-error-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `DecisionEngineFlowMessagesCloneResponse1` | `decisionEngineFlowMessagesCloneResponse1Schema` | `src/models/unions/decision-engine-flow-messages-clone-response1.ts` |

### createMessage

- **Signature**: `createMessage(request: DecisionEngine.CreateMessageRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.CreateMessageError>`
- **Wire**: `POST /decision-engine/flow/{flowId}/messages`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.CreateMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.CreateMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `body` | `body` | `DecisionEngineMessageCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineMessageCreate` | `decisionEngineMessageCreateSchema` | `src/models/decision-engine-message-create.ts` |
| `DecisionEngineFlowMessagesResponse11` | `decisionEngineFlowMessagesResponse11Schema` | `src/models/unions/decision-engine-flow-messages-response11.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### deleteMessage

- **Signature**: `deleteMessage(request: DecisionEngine.DeleteMessageRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesResponse13, DecisionEngine.DeleteMessageError>`
- **Wire**: `DELETE /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionEngineFlowMessagesResponse13`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.DeleteMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"decisionEngineErrorResponse"` [404] `DecisionEngineErrorResponse` · `"decisionEngineFlowMessagesResponse14"` [500] `DecisionEngineFlowMessagesResponse14` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.DeleteMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineFlowMessagesResponse13` | `decisionEngineFlowMessagesResponse13Schema` | `src/models/unions/decision-engine-flow-messages-response13.ts` |
| `DecisionEngineErrorResponse` | `decisionEngineErrorResponseSchema` | `src/models/decision-engine-error-response.ts` |
| `DecisionEngineFlowMessagesResponse14` | `decisionEngineFlowMessagesResponse14Schema` | `src/models/unions/decision-engine-flow-messages-response14.ts` |

### getFlow

- **Signature**: `getFlow(request: DecisionEngine.GetFlowRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowResponse, DecisionEngine.GetFlowError>`
- **Wire**: `GET /decision-engine/flow/{flowId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionEngineFlowResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.GetFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.GetFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineFlowResponse` | `decisionEngineFlowResponseSchema` | `src/models/unions/decision-engine-flow-response.ts` |

### getMessage

- **Signature**: `getMessage(request: DecisionEngine.GetMessageRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.GetMessageError>`
- **Wire**: `GET /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.GetMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.GetMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineFlowMessagesResponse11` | `decisionEngineFlowMessagesResponse11Schema` | `src/models/unions/decision-engine-flow-messages-response11.ts` |

### listFlows

- **Signature**: `listFlows(request?: DecisionEngine.ListFlowsRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowsResponse1, DecisionEngine.ListFlowsError>`
- **Wire**: `GET /decision-engine/flows`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionEngineFlowsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.ListFlowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.ListFlowsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |
| `orderBy` | `query` | `OrderBy` | no | `OrderBy.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderBy` | `orderBySchema` | `src/models/order-by.ts` |
| `DecisionEngineFlowsResponse1` | `decisionEngineFlowsResponse1Schema` | `src/models/unions/decision-engine-flows-response1.ts` |

### listMessages

- **Signature**: `listMessages(request: DecisionEngine.ListMessagesRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesResponse1, DecisionEngine.ListMessagesError>`
- **Wire**: `GET /decision-engine/flow/{flowId}/messages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionEngineFlowMessagesResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.ListMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.ListMessagesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `100` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineFlowMessagesResponse1` | `decisionEngineFlowMessagesResponse1Schema` | `src/models/unions/decision-engine-flow-messages-response1.ts` |

### runFlow

- **Signature**: `runFlow(request: DecisionEngine.RunFlowRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowRunResponse, DecisionEngine.RunFlowError>`
- **Wire**: `POST /decision-engine/flow/{flowId}/run`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionEngineFlowRunResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.RunFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.RunFlowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineFlowRunResponse` | `decisionEngineFlowRunResponseSchema` | `src/models/unions/decision-engine-flow-run-response.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### updateMessage

- **Signature**: `updateMessage(request: DecisionEngine.UpdateMessageRequest, options?: RequestOptions): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.UpdateMessageError>`
- **Wire**: `PATCH /decision-engine/flow/{flowId}/messages/{messageId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionEngineFlowMessagesResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `DecisionEngine.UpdateMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionEngine.UpdateMessageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `flowId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `DecisionEngineMessageUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionEngineMessageUpdate` | `decisionEngineMessageUpdateSchema` | `src/models/decision-engine-message-update.ts` |
| `DecisionEngineFlowMessagesResponse11` | `decisionEngineFlowMessagesResponse11Schema` | `src/models/unions/decision-engine-flow-messages-response11.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |


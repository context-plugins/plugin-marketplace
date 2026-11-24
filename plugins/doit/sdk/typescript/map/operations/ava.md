<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ava — operations

Accessor: `client.ava` · Source: `src/resources/ava.ts` · 4 operations · Request and error types: namespace `Ava`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### askAvaStreaming

- **Signature**: `askAvaStreaming(request: Ava.AskAvaStreamingRequest, options?: RequestOptions): ApiPromise<EventStream<string>, Ava.AskAvaStreamingError>`
- **Wire**: `POST /ava/v1/ask`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<string>` — `text/event-stream`, resolved at the response headers and read one `string` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` is its plain text, whatever the event is named. The stream ends when the server closes it
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Ava.AskAvaStreamingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ava.AskAvaStreamingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AvaAskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AvaAskRequest` | `avaAskRequestSchema` | `src/models/ava-ask-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### askAvaSync

- **Signature**: `askAvaSync(request: Ava.AskAvaSyncRequest, options?: RequestOptions): ApiPromise<AvaAskSyncResponse, Ava.AskAvaSyncError>`
- **Wire**: `POST /ava/v1/askSync`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AvaAskSyncResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Ava.AskAvaSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ava.AskAvaSyncRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AvaAskSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AvaAskSyncRequest` | `avaAskSyncRequestSchema` | `src/models/ava-ask-sync-request.ts` |
| `AvaAskSyncResponse` | `avaAskSyncResponseSchema` | `src/models/ava-ask-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### avaFeedback

- **Signature**: `avaFeedback(request: Ava.AvaFeedbackRequestParams, options?: RequestOptions): ApiPromise<undefined, Ava.AvaFeedbackError>`
- **Wire**: `POST /ava/v1/feedback`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Ava.AvaFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ava.AvaFeedbackRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AvaFeedbackRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AvaFeedbackRequest` | `avaFeedbackRequestSchema` | `src/models/ava-feedback-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteAvaConversation

- **Signature**: `deleteAvaConversation(request: Ava.DeleteAvaConversationRequest, options?: RequestOptions): ApiPromise<undefined, Ava.DeleteAvaConversationError>`
- **Wire**: `DELETE /ava/v1/deleteConversation`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Ava.DeleteAvaConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ava.DeleteAvaConversationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |


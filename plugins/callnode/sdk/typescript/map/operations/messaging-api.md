<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingApi — operations

Accessor: `client.messagingApi` · Source: `src/resources/messaging-api.ts` · 2 operations · Request and error types: namespace `MessagingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMessage

- **Signature**: `getMessage(request: MessagingApi.GetMessageRequest, options?: RequestOptions): ApiPromise<Message, MessagingApi.GetMessageError>`
- **Wire**: `GET /api/v1/messages/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Message`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `MessagingApi.GetMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessagingApi.GetMessageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Message` | `messageSchema` | `src/models/message.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendMessage

- **Signature**: `sendMessage(request: MessagingApi.SendMessageRequestParams, options?: RequestOptions): ApiPromise<SendMessageResponse, MessagingApi.SendMessageError>`
- **Wire**: `POST /api/v1/messages`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SendMessageResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `MessagingApi.SendMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessagingApi.SendMessageRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotencyKey` | `header` | `X-Idempotency-Key` | `string` | no |
| `body` | `body` | — | `SendMessageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendMessageRequest` | `sendMessageRequestSchema` | `src/models/send-message-request.ts` |
| `SendMessageResponse` | `sendMessageResponseSchema` | `src/models/send-message-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


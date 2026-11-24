<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.chat` · Source: `src/resources/chat.ts` · 2 operations · Request and error types: namespace `Chat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instacart`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChatMessages

- **Signature**: `getChatMessages(request: Chat.GetChatMessagesRequest, options?: RequestOptions): ApiPromise<ChatMessagesResponse, Chat.GetChatMessagesError>`
- **Wire**: `GET /v2/post_checkout/chat/{order_id}/messages`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatMessagesResponse`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Chat.GetChatMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chat.GetChatMessagesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatMessagesResponse` | `chatMessagesResponseSchema` | `src/models/chat-messages-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sendChatMessage

- **Signature**: `sendChatMessage(request: Chat.SendChatMessageRequest, options?: RequestOptions): ApiPromise<ChatMessage, Chat.SendChatMessageError>`
- **Wire**: `POST /v2/post_checkout/chat/{order_id}/messages`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatMessage`
- **Error**: `InstacartError` with `kind: "api"`, an instance of `Chat.SendChatMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Chat.SendChatMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `body` | `body` | — | `SendMessageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SendMessageRequest` | `sendMessageRequestSchema` | `src/models/send-message-request.ts` |
| `ChatMessage` | `chatMessageSchema` | `src/models/chat-message.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 3 operations · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMessage

- **Signature**: `createMessage(request?: Messages.CreateMessageRequest, options?: RequestOptions): ApiPromise<ApiV2MessageRequestsResponse, Messages.CreateMessageError>`
- **Wire**: `POST /api/v2/message_requests`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2MessageRequestsResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Messages.CreateMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.CreateMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2MessageRequestsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2MessageRequestsRequest` | `apiV2MessageRequestsRequestSchema` | `src/models/api-v2-message-requests-request.ts` |
| `ApiV2MessageRequestsResponse` | `apiV2MessageRequestsResponseSchema` | `src/models/api-v2-message-requests-response.ts` |

### getMessageRequest

- **Signature**: `getMessageRequest(request: Messages.GetMessageRequestRequest, options?: RequestOptions): ApiPromise<ApiV2MessageRequestsResponse, Messages.GetMessageRequestError>`
- **Wire**: `GET /api/v2/message_requests/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2MessageRequestsResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Messages.GetMessageRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.GetMessageRequestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2MessageRequestsResponse` | `apiV2MessageRequestsResponseSchema` | `src/models/api-v2-message-requests-response.ts` |

### getSentMessage

- **Signature**: `getSentMessage(request: Messages.GetSentMessageRequest, options?: RequestOptions): ApiPromise<ApiV2SentMessagesResponse, Messages.GetSentMessageError>`
- **Wire**: `GET /api/v2/sent_messages/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2SentMessagesResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Messages.GetSentMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2SentMessages400Error1"` [400] `ApiV2SentMessages400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.GetSentMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2SentMessagesResponse` | `apiV2SentMessagesResponseSchema` | `src/models/api-v2-sent-messages-response.ts` |
| `ApiV2SentMessages400Error1` | `apiV2SentMessages400Error1Schema` | `src/models/api-v2-sent-messages400-error1.ts` |


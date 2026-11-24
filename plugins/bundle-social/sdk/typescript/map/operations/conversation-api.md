<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationApi — operations

Accessor: `client.conversationApi` · Source: `src/resources/conversation-api.ts` · 10 operations · Request and error types: namespace `ConversationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### conversationArchive

- **Signature**: `conversationArchive(request: ConversationApi.ConversationArchiveRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsArchiveResponse, ConversationApi.ConversationArchiveError>`
- **Wire**: `POST /api/v1/conversations/{id}/archive`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsArchiveResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsArchive400Error1"` [400] `ApiV1ConversationsArchive400Error1` · `"apiV1ConversationsArchive401Error1"` [401] `ApiV1ConversationsArchive401Error1` · `"apiV1ConversationsArchive403Error1"` [403] `ApiV1ConversationsArchive403Error1` · `"apiV1ConversationsArchive404Error1"` [404] `ApiV1ConversationsArchive404Error1` · `"apiV1ConversationsArchive429Error1"` [429] `ApiV1ConversationsArchive429Error1` · `"apiV1ConversationsArchive500Error1"` [500] `ApiV1ConversationsArchive500Error1` · `"apiV1ConversationsArchive502Error1"` [502] `ApiV1ConversationsArchive502Error1` · `"apiV1ConversationsArchive503Error1"` [503] `ApiV1ConversationsArchive503Error1` · `"apiV1ConversationsArchive504Error1"` [504] `ApiV1ConversationsArchive504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationArchiveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsArchiveResponse` | `apiV1ConversationsArchiveResponseSchema` | `src/models/api-v1-conversations-archive-response.ts` |
| `ApiV1ConversationsArchive400Error1` | `apiV1ConversationsArchive400Error1Schema` | `src/models/api-v1-conversations-archive400-error1.ts` |
| `ApiV1ConversationsArchive401Error1` | `apiV1ConversationsArchive401Error1Schema` | `src/models/api-v1-conversations-archive401-error1.ts` |
| `ApiV1ConversationsArchive403Error1` | `apiV1ConversationsArchive403Error1Schema` | `src/models/api-v1-conversations-archive403-error1.ts` |
| `ApiV1ConversationsArchive404Error1` | `apiV1ConversationsArchive404Error1Schema` | `src/models/api-v1-conversations-archive404-error1.ts` |
| `ApiV1ConversationsArchive429Error1` | `apiV1ConversationsArchive429Error1Schema` | `src/models/api-v1-conversations-archive429-error1.ts` |
| `ApiV1ConversationsArchive500Error1` | `apiV1ConversationsArchive500Error1Schema` | `src/models/api-v1-conversations-archive500-error1.ts` |
| `ApiV1ConversationsArchive502Error1` | `apiV1ConversationsArchive502Error1Schema` | `src/models/api-v1-conversations-archive502-error1.ts` |
| `ApiV1ConversationsArchive503Error1` | `apiV1ConversationsArchive503Error1Schema` | `src/models/api-v1-conversations-archive503-error1.ts` |
| `ApiV1ConversationsArchive504Error1` | `apiV1ConversationsArchive504Error1Schema` | `src/models/api-v1-conversations-archive504-error1.ts` |

### conversationGet

- **Signature**: `conversationGet(request: ConversationApi.ConversationGetRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsResponse1, ConversationApi.ConversationGetError>`
- **Wire**: `GET /api/v1/conversations/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ConversationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Conversations400Error1"` [400] `ApiV1Conversations400Error1` · `"apiV1Conversations401Error1"` [401] `ApiV1Conversations401Error1` · `"apiV1Conversations403Error1"` [403] `ApiV1Conversations403Error1` · `"apiV1Conversations404Error1"` [404] `ApiV1Conversations404Error1` · `"apiV1Conversations429Error1"` [429] `ApiV1Conversations429Error1` · `"apiV1Conversations500Error1"` [500] `ApiV1Conversations500Error1` · `"apiV1Conversations502Error1"` [502] `ApiV1Conversations502Error1` · `"apiV1Conversations503Error1"` [503] `ApiV1Conversations503Error1` · `"apiV1Conversations504Error1"` [504] `ApiV1Conversations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsResponse1` | `apiV1ConversationsResponse1Schema` | `src/models/api-v1-conversations-response1.ts` |
| `ApiV1Conversations400Error1` | `apiV1Conversations400Error1Schema` | `src/models/api-v1-conversations400-error1.ts` |
| `ApiV1Conversations401Error1` | `apiV1Conversations401Error1Schema` | `src/models/api-v1-conversations401-error1.ts` |
| `ApiV1Conversations403Error1` | `apiV1Conversations403Error1Schema` | `src/models/api-v1-conversations403-error1.ts` |
| `ApiV1Conversations404Error1` | `apiV1Conversations404Error1Schema` | `src/models/api-v1-conversations404-error1.ts` |
| `ApiV1Conversations429Error1` | `apiV1Conversations429Error1Schema` | `src/models/api-v1-conversations429-error1.ts` |
| `ApiV1Conversations500Error1` | `apiV1Conversations500Error1Schema` | `src/models/api-v1-conversations500-error1.ts` |
| `ApiV1Conversations502Error1` | `apiV1Conversations502Error1Schema` | `src/models/api-v1-conversations502-error1.ts` |
| `ApiV1Conversations503Error1` | `apiV1Conversations503Error1Schema` | `src/models/api-v1-conversations503-error1.ts` |
| `ApiV1Conversations504Error1` | `apiV1Conversations504Error1Schema` | `src/models/api-v1-conversations504-error1.ts` |

### conversationGetList

- **Signature**: `conversationGetList(request: ConversationApi.ConversationGetListRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsResponse, ConversationApi.ConversationGetListError>`
- **Wire**: `GET /api/v1/conversations/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ConversationsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Conversations400Error1"` [400] `ApiV1Conversations400Error1` · `"apiV1Conversations401Error1"` [401] `ApiV1Conversations401Error1` · `"apiV1Conversations403Error1"` [403] `ApiV1Conversations403Error1` · `"apiV1Conversations404Error1"` [404] `ApiV1Conversations404Error1` · `"apiV1Conversations429Error1"` [429] `ApiV1Conversations429Error1` · `"apiV1Conversations500Error1"` [500] `ApiV1Conversations500Error1` · `"apiV1Conversations502Error1"` [502] `ApiV1Conversations502Error1` · `"apiV1Conversations503Error1"` [503] `ApiV1Conversations503Error1` · `"apiV1Conversations504Error1"` [504] `ApiV1Conversations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationGetListRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `string` | yes | — |
| `platform` | `query` | `PlatformBundleSocialConversationApi` | no | — |
| `socialAccountId` | `query` | `string` | no | — |
| `status` | `query` | `StatusBundleSocialConversationApi` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformBundleSocialConversationApi` | `platformBundleSocialConversationApiSchema` | `src/models/platform-bundle-social-conversation-api.ts` |
| `StatusBundleSocialConversationApi` | `statusBundleSocialConversationApiSchema` | `src/models/status-bundle-social-conversation-api.ts` |
| `ApiV1ConversationsResponse` | `apiV1ConversationsResponseSchema` | `src/models/api-v1-conversations-response.ts` |
| `ApiV1Conversations400Error1` | `apiV1Conversations400Error1Schema` | `src/models/api-v1-conversations400-error1.ts` |
| `ApiV1Conversations401Error1` | `apiV1Conversations401Error1Schema` | `src/models/api-v1-conversations401-error1.ts` |
| `ApiV1Conversations403Error1` | `apiV1Conversations403Error1Schema` | `src/models/api-v1-conversations403-error1.ts` |
| `ApiV1Conversations404Error1` | `apiV1Conversations404Error1Schema` | `src/models/api-v1-conversations404-error1.ts` |
| `ApiV1Conversations429Error1` | `apiV1Conversations429Error1Schema` | `src/models/api-v1-conversations429-error1.ts` |
| `ApiV1Conversations500Error1` | `apiV1Conversations500Error1Schema` | `src/models/api-v1-conversations500-error1.ts` |
| `ApiV1Conversations502Error1` | `apiV1Conversations502Error1Schema` | `src/models/api-v1-conversations502-error1.ts` |
| `ApiV1Conversations503Error1` | `apiV1Conversations503Error1Schema` | `src/models/api-v1-conversations503-error1.ts` |
| `ApiV1Conversations504Error1` | `apiV1Conversations504Error1Schema` | `src/models/api-v1-conversations504-error1.ts` |

### conversationGetMessages

- **Signature**: `conversationGetMessages(request: ConversationApi.ConversationGetMessagesRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsMessagesResponse, ConversationApi.ConversationGetMessagesError>`
- **Wire**: `GET /api/v1/conversations/{id}/messages`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ConversationsMessagesResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationGetMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsMessages400Error1"` [400] `ApiV1ConversationsMessages400Error1` · `"apiV1ConversationsMessages401Error1"` [401] `ApiV1ConversationsMessages401Error1` · `"apiV1ConversationsMessages403Error1"` [403] `ApiV1ConversationsMessages403Error1` · `"apiV1ConversationsMessages404Error1"` [404] `ApiV1ConversationsMessages404Error1` · `"apiV1ConversationsMessages429Error1"` [429] `ApiV1ConversationsMessages429Error1` · `"apiV1ConversationsMessages500Error1"` [500] `ApiV1ConversationsMessages500Error1` · `"apiV1ConversationsMessages502Error1"` [502] `ApiV1ConversationsMessages502Error1` · `"apiV1ConversationsMessages503Error1"` [503] `ApiV1ConversationsMessages503Error1` · `"apiV1ConversationsMessages504Error1"` [504] `ApiV1ConversationsMessages504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationGetMessagesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsMessagesResponse` | `apiV1ConversationsMessagesResponseSchema` | `src/models/api-v1-conversations-messages-response.ts` |
| `ApiV1ConversationsMessages400Error1` | `apiV1ConversationsMessages400Error1Schema` | `src/models/api-v1-conversations-messages400-error1.ts` |
| `ApiV1ConversationsMessages401Error1` | `apiV1ConversationsMessages401Error1Schema` | `src/models/api-v1-conversations-messages401-error1.ts` |
| `ApiV1ConversationsMessages403Error1` | `apiV1ConversationsMessages403Error1Schema` | `src/models/api-v1-conversations-messages403-error1.ts` |
| `ApiV1ConversationsMessages404Error1` | `apiV1ConversationsMessages404Error1Schema` | `src/models/api-v1-conversations-messages404-error1.ts` |
| `ApiV1ConversationsMessages429Error1` | `apiV1ConversationsMessages429Error1Schema` | `src/models/api-v1-conversations-messages429-error1.ts` |
| `ApiV1ConversationsMessages500Error1` | `apiV1ConversationsMessages500Error1Schema` | `src/models/api-v1-conversations-messages500-error1.ts` |
| `ApiV1ConversationsMessages502Error1` | `apiV1ConversationsMessages502Error1Schema` | `src/models/api-v1-conversations-messages502-error1.ts` |
| `ApiV1ConversationsMessages503Error1` | `apiV1ConversationsMessages503Error1Schema` | `src/models/api-v1-conversations-messages503-error1.ts` |
| `ApiV1ConversationsMessages504Error1` | `apiV1ConversationsMessages504Error1Schema` | `src/models/api-v1-conversations-messages504-error1.ts` |

### conversationMarkRead

- **Signature**: `conversationMarkRead(request: ConversationApi.ConversationMarkReadRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsReadResponse, ConversationApi.ConversationMarkReadError>`
- **Wire**: `POST /api/v1/conversations/{id}/read`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsReadResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationMarkReadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsRead400Error1"` [400] `ApiV1ConversationsRead400Error1` · `"apiV1ConversationsRead401Error1"` [401] `ApiV1ConversationsRead401Error1` · `"apiV1ConversationsRead403Error1"` [403] `ApiV1ConversationsRead403Error1` · `"apiV1ConversationsRead404Error1"` [404] `ApiV1ConversationsRead404Error1` · `"apiV1ConversationsRead429Error1"` [429] `ApiV1ConversationsRead429Error1` · `"apiV1ConversationsRead500Error1"` [500] `ApiV1ConversationsRead500Error1` · `"apiV1ConversationsRead502Error1"` [502] `ApiV1ConversationsRead502Error1` · `"apiV1ConversationsRead503Error1"` [503] `ApiV1ConversationsRead503Error1` · `"apiV1ConversationsRead504Error1"` [504] `ApiV1ConversationsRead504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationMarkReadRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ConversationsReadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsReadRequest` | `apiV1ConversationsReadRequestSchema` | `src/models/api-v1-conversations-read-request.ts` |
| `ApiV1ConversationsReadResponse` | `apiV1ConversationsReadResponseSchema` | `src/models/api-v1-conversations-read-response.ts` |
| `ApiV1ConversationsRead400Error1` | `apiV1ConversationsRead400Error1Schema` | `src/models/api-v1-conversations-read400-error1.ts` |
| `ApiV1ConversationsRead401Error1` | `apiV1ConversationsRead401Error1Schema` | `src/models/api-v1-conversations-read401-error1.ts` |
| `ApiV1ConversationsRead403Error1` | `apiV1ConversationsRead403Error1Schema` | `src/models/api-v1-conversations-read403-error1.ts` |
| `ApiV1ConversationsRead404Error1` | `apiV1ConversationsRead404Error1Schema` | `src/models/api-v1-conversations-read404-error1.ts` |
| `ApiV1ConversationsRead429Error1` | `apiV1ConversationsRead429Error1Schema` | `src/models/api-v1-conversations-read429-error1.ts` |
| `ApiV1ConversationsRead500Error1` | `apiV1ConversationsRead500Error1Schema` | `src/models/api-v1-conversations-read500-error1.ts` |
| `ApiV1ConversationsRead502Error1` | `apiV1ConversationsRead502Error1Schema` | `src/models/api-v1-conversations-read502-error1.ts` |
| `ApiV1ConversationsRead503Error1` | `apiV1ConversationsRead503Error1Schema` | `src/models/api-v1-conversations-read503-error1.ts` |
| `ApiV1ConversationsRead504Error1` | `apiV1ConversationsRead504Error1Schema` | `src/models/api-v1-conversations-read504-error1.ts` |

### conversationOpen

- **Signature**: `conversationOpen(request: ConversationApi.ConversationOpenRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsOpenResponse, ConversationApi.ConversationOpenError>`
- **Wire**: `POST /api/v1/conversations/{id}/open`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsOpenResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationOpenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsOpen400Error1"` [400] `ApiV1ConversationsOpen400Error1` · `"apiV1ConversationsOpen401Error1"` [401] `ApiV1ConversationsOpen401Error1` · `"apiV1ConversationsOpen403Error1"` [403] `ApiV1ConversationsOpen403Error1` · `"apiV1ConversationsOpen404Error1"` [404] `ApiV1ConversationsOpen404Error1` · `"apiV1ConversationsOpen429Error1"` [429] `ApiV1ConversationsOpen429Error1` · `"apiV1ConversationsOpen500Error1"` [500] `ApiV1ConversationsOpen500Error1` · `"apiV1ConversationsOpen502Error1"` [502] `ApiV1ConversationsOpen502Error1` · `"apiV1ConversationsOpen503Error1"` [503] `ApiV1ConversationsOpen503Error1` · `"apiV1ConversationsOpen504Error1"` [504] `ApiV1ConversationsOpen504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationOpenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsOpenResponse` | `apiV1ConversationsOpenResponseSchema` | `src/models/api-v1-conversations-open-response.ts` |
| `ApiV1ConversationsOpen400Error1` | `apiV1ConversationsOpen400Error1Schema` | `src/models/api-v1-conversations-open400-error1.ts` |
| `ApiV1ConversationsOpen401Error1` | `apiV1ConversationsOpen401Error1Schema` | `src/models/api-v1-conversations-open401-error1.ts` |
| `ApiV1ConversationsOpen403Error1` | `apiV1ConversationsOpen403Error1Schema` | `src/models/api-v1-conversations-open403-error1.ts` |
| `ApiV1ConversationsOpen404Error1` | `apiV1ConversationsOpen404Error1Schema` | `src/models/api-v1-conversations-open404-error1.ts` |
| `ApiV1ConversationsOpen429Error1` | `apiV1ConversationsOpen429Error1Schema` | `src/models/api-v1-conversations-open429-error1.ts` |
| `ApiV1ConversationsOpen500Error1` | `apiV1ConversationsOpen500Error1Schema` | `src/models/api-v1-conversations-open500-error1.ts` |
| `ApiV1ConversationsOpen502Error1` | `apiV1ConversationsOpen502Error1Schema` | `src/models/api-v1-conversations-open502-error1.ts` |
| `ApiV1ConversationsOpen503Error1` | `apiV1ConversationsOpen503Error1Schema` | `src/models/api-v1-conversations-open503-error1.ts` |
| `ApiV1ConversationsOpen504Error1` | `apiV1ConversationsOpen504Error1Schema` | `src/models/api-v1-conversations-open504-error1.ts` |

### conversationPrivateReply

- **Signature**: `conversationPrivateReply(request?: ConversationApi.ConversationPrivateReplyRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsPrivateReplyResponse, ConversationApi.ConversationPrivateReplyError>`
- **Wire**: `POST /api/v1/conversations/private-reply`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsPrivateReplyResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationPrivateReplyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsPrivateReply400Error1"` [400] `ApiV1ConversationsPrivateReply400Error1` · `"apiV1ConversationsPrivateReply401Error1"` [401] `ApiV1ConversationsPrivateReply401Error1` · `"apiV1ConversationsPrivateReply403Error1"` [403] `ApiV1ConversationsPrivateReply403Error1` · `"apiV1ConversationsPrivateReply404Error1"` [404] `ApiV1ConversationsPrivateReply404Error1` · `"apiV1ConversationsPrivateReply429Error1"` [429] `ApiV1ConversationsPrivateReply429Error1` · `"apiV1ConversationsPrivateReply500Error1"` [500] `ApiV1ConversationsPrivateReply500Error1` · `"apiV1ConversationsPrivateReply502Error1"` [502] `ApiV1ConversationsPrivateReply502Error1` · `"apiV1ConversationsPrivateReply503Error1"` [503] `ApiV1ConversationsPrivateReply503Error1` · `"apiV1ConversationsPrivateReply504Error1"` [504] `ApiV1ConversationsPrivateReply504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationPrivateReplyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ConversationsPrivateReplyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsPrivateReplyRequest` | `apiV1ConversationsPrivateReplyRequestSchema` | `src/models/api-v1-conversations-private-reply-request.ts` |
| `ApiV1ConversationsPrivateReplyResponse` | `apiV1ConversationsPrivateReplyResponseSchema` | `src/models/api-v1-conversations-private-reply-response.ts` |
| `ApiV1ConversationsPrivateReply400Error1` | `apiV1ConversationsPrivateReply400Error1Schema` | `src/models/api-v1-conversations-private-reply400-error1.ts` |
| `ApiV1ConversationsPrivateReply401Error1` | `apiV1ConversationsPrivateReply401Error1Schema` | `src/models/api-v1-conversations-private-reply401-error1.ts` |
| `ApiV1ConversationsPrivateReply403Error1` | `apiV1ConversationsPrivateReply403Error1Schema` | `src/models/api-v1-conversations-private-reply403-error1.ts` |
| `ApiV1ConversationsPrivateReply404Error1` | `apiV1ConversationsPrivateReply404Error1Schema` | `src/models/api-v1-conversations-private-reply404-error1.ts` |
| `ApiV1ConversationsPrivateReply429Error1` | `apiV1ConversationsPrivateReply429Error1Schema` | `src/models/api-v1-conversations-private-reply429-error1.ts` |
| `ApiV1ConversationsPrivateReply500Error1` | `apiV1ConversationsPrivateReply500Error1Schema` | `src/models/api-v1-conversations-private-reply500-error1.ts` |
| `ApiV1ConversationsPrivateReply502Error1` | `apiV1ConversationsPrivateReply502Error1Schema` | `src/models/api-v1-conversations-private-reply502-error1.ts` |
| `ApiV1ConversationsPrivateReply503Error1` | `apiV1ConversationsPrivateReply503Error1Schema` | `src/models/api-v1-conversations-private-reply503-error1.ts` |
| `ApiV1ConversationsPrivateReply504Error1` | `apiV1ConversationsPrivateReply504Error1Schema` | `src/models/api-v1-conversations-private-reply504-error1.ts` |

### conversationReactMessage

- **Signature**: `conversationReactMessage(request: ConversationApi.ConversationReactMessageRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsMessagesReactionResponse, ConversationApi.ConversationReactMessageError>`
- **Wire**: `POST /api/v1/conversations/{id}/messages/{messageId}/reaction`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsMessagesReactionResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationReactMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsMessagesReaction400Error1"` [400] `ApiV1ConversationsMessagesReaction400Error1` · `"apiV1ConversationsMessagesReaction401Error1"` [401] `ApiV1ConversationsMessagesReaction401Error1` · `"apiV1ConversationsMessagesReaction403Error1"` [403] `ApiV1ConversationsMessagesReaction403Error1` · `"apiV1ConversationsMessagesReaction404Error1"` [404] `ApiV1ConversationsMessagesReaction404Error1` · `"apiV1ConversationsMessagesReaction429Error1"` [429] `ApiV1ConversationsMessagesReaction429Error1` · `"apiV1ConversationsMessagesReaction500Error1"` [500] `ApiV1ConversationsMessagesReaction500Error1` · `"apiV1ConversationsMessagesReaction502Error1"` [502] `ApiV1ConversationsMessagesReaction502Error1` · `"apiV1ConversationsMessagesReaction503Error1"` [503] `ApiV1ConversationsMessagesReaction503Error1` · `"apiV1ConversationsMessagesReaction504Error1"` [504] `ApiV1ConversationsMessagesReaction504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationReactMessageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ConversationsMessagesReactionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsMessagesReactionRequest` | `apiV1ConversationsMessagesReactionRequestSchema` | `src/models/api-v1-conversations-messages-reaction-request.ts` |
| `ApiV1ConversationsMessagesReactionResponse` | `apiV1ConversationsMessagesReactionResponseSchema` | `src/models/api-v1-conversations-messages-reaction-response.ts` |
| `ApiV1ConversationsMessagesReaction400Error1` | `apiV1ConversationsMessagesReaction400Error1Schema` | `src/models/api-v1-conversations-messages-reaction400-error1.ts` |
| `ApiV1ConversationsMessagesReaction401Error1` | `apiV1ConversationsMessagesReaction401Error1Schema` | `src/models/api-v1-conversations-messages-reaction401-error1.ts` |
| `ApiV1ConversationsMessagesReaction403Error1` | `apiV1ConversationsMessagesReaction403Error1Schema` | `src/models/api-v1-conversations-messages-reaction403-error1.ts` |
| `ApiV1ConversationsMessagesReaction404Error1` | `apiV1ConversationsMessagesReaction404Error1Schema` | `src/models/api-v1-conversations-messages-reaction404-error1.ts` |
| `ApiV1ConversationsMessagesReaction429Error1` | `apiV1ConversationsMessagesReaction429Error1Schema` | `src/models/api-v1-conversations-messages-reaction429-error1.ts` |
| `ApiV1ConversationsMessagesReaction500Error1` | `apiV1ConversationsMessagesReaction500Error1Schema` | `src/models/api-v1-conversations-messages-reaction500-error1.ts` |
| `ApiV1ConversationsMessagesReaction502Error1` | `apiV1ConversationsMessagesReaction502Error1Schema` | `src/models/api-v1-conversations-messages-reaction502-error1.ts` |
| `ApiV1ConversationsMessagesReaction503Error1` | `apiV1ConversationsMessagesReaction503Error1Schema` | `src/models/api-v1-conversations-messages-reaction503-error1.ts` |
| `ApiV1ConversationsMessagesReaction504Error1` | `apiV1ConversationsMessagesReaction504Error1Schema` | `src/models/api-v1-conversations-messages-reaction504-error1.ts` |

### conversationSendMessage

- **Signature**: `conversationSendMessage(request: ConversationApi.ConversationSendMessageRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsMessagesResponse1, ConversationApi.ConversationSendMessageError>`
- **Wire**: `POST /api/v1/conversations/{id}/messages`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsMessagesResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationSendMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ConversationsMessages400Error1"` [400] `ApiV1ConversationsMessages400Error1` · `"apiV1ConversationsMessages401Error1"` [401] `ApiV1ConversationsMessages401Error1` · `"apiV1ConversationsMessages403Error1"` [403] `ApiV1ConversationsMessages403Error1` · `"apiV1ConversationsMessages404Error1"` [404] `ApiV1ConversationsMessages404Error1` · `"apiV1ConversationsMessages429Error1"` [429] `ApiV1ConversationsMessages429Error1` · `"apiV1ConversationsMessages500Error1"` [500] `ApiV1ConversationsMessages500Error1` · `"apiV1ConversationsMessages502Error1"` [502] `ApiV1ConversationsMessages502Error1` · `"apiV1ConversationsMessages503Error1"` [503] `ApiV1ConversationsMessages503Error1` · `"apiV1ConversationsMessages504Error1"` [504] `ApiV1ConversationsMessages504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationSendMessageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ConversationsMessagesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsMessagesRequest` | `apiV1ConversationsMessagesRequestSchema` | `src/models/api-v1-conversations-messages-request.ts` |
| `ApiV1ConversationsMessagesResponse1` | `apiV1ConversationsMessagesResponse1Schema` | `src/models/api-v1-conversations-messages-response1.ts` |
| `ApiV1ConversationsMessages400Error1` | `apiV1ConversationsMessages400Error1Schema` | `src/models/api-v1-conversations-messages400-error1.ts` |
| `ApiV1ConversationsMessages401Error1` | `apiV1ConversationsMessages401Error1Schema` | `src/models/api-v1-conversations-messages401-error1.ts` |
| `ApiV1ConversationsMessages403Error1` | `apiV1ConversationsMessages403Error1Schema` | `src/models/api-v1-conversations-messages403-error1.ts` |
| `ApiV1ConversationsMessages404Error1` | `apiV1ConversationsMessages404Error1Schema` | `src/models/api-v1-conversations-messages404-error1.ts` |
| `ApiV1ConversationsMessages429Error1` | `apiV1ConversationsMessages429Error1Schema` | `src/models/api-v1-conversations-messages429-error1.ts` |
| `ApiV1ConversationsMessages500Error1` | `apiV1ConversationsMessages500Error1Schema` | `src/models/api-v1-conversations-messages500-error1.ts` |
| `ApiV1ConversationsMessages502Error1` | `apiV1ConversationsMessages502Error1Schema` | `src/models/api-v1-conversations-messages502-error1.ts` |
| `ApiV1ConversationsMessages503Error1` | `apiV1ConversationsMessages503Error1Schema` | `src/models/api-v1-conversations-messages503-error1.ts` |
| `ApiV1ConversationsMessages504Error1` | `apiV1ConversationsMessages504Error1Schema` | `src/models/api-v1-conversations-messages504-error1.ts` |

### conversationUpdate

- **Signature**: `conversationUpdate(request: ConversationApi.ConversationUpdateRequest, options?: RequestOptions): ApiPromise<ApiV1ConversationsResponse1, ConversationApi.ConversationUpdateError>`
- **Wire**: `PATCH /api/v1/conversations/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ConversationsResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `ConversationApi.ConversationUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Conversations400Error1"` [400] `ApiV1Conversations400Error1` · `"apiV1Conversations401Error1"` [401] `ApiV1Conversations401Error1` · `"apiV1Conversations403Error1"` [403] `ApiV1Conversations403Error1` · `"apiV1Conversations404Error1"` [404] `ApiV1Conversations404Error1` · `"apiV1Conversations429Error1"` [429] `ApiV1Conversations429Error1` · `"apiV1Conversations500Error1"` [500] `ApiV1Conversations500Error1` · `"apiV1Conversations502Error1"` [502] `ApiV1Conversations502Error1` · `"apiV1Conversations503Error1"` [503] `ApiV1Conversations503Error1` · `"apiV1Conversations504Error1"` [504] `ApiV1Conversations504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationApi.ConversationUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ConversationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ConversationsRequest` | `apiV1ConversationsRequestSchema` | `src/models/api-v1-conversations-request.ts` |
| `ApiV1ConversationsResponse1` | `apiV1ConversationsResponse1Schema` | `src/models/api-v1-conversations-response1.ts` |
| `ApiV1Conversations400Error1` | `apiV1Conversations400Error1Schema` | `src/models/api-v1-conversations400-error1.ts` |
| `ApiV1Conversations401Error1` | `apiV1Conversations401Error1Schema` | `src/models/api-v1-conversations401-error1.ts` |
| `ApiV1Conversations403Error1` | `apiV1Conversations403Error1Schema` | `src/models/api-v1-conversations403-error1.ts` |
| `ApiV1Conversations404Error1` | `apiV1Conversations404Error1Schema` | `src/models/api-v1-conversations404-error1.ts` |
| `ApiV1Conversations429Error1` | `apiV1Conversations429Error1Schema` | `src/models/api-v1-conversations429-error1.ts` |
| `ApiV1Conversations500Error1` | `apiV1Conversations500Error1Schema` | `src/models/api-v1-conversations500-error1.ts` |
| `ApiV1Conversations502Error1` | `apiV1Conversations502Error1Schema` | `src/models/api-v1-conversations502-error1.ts` |
| `ApiV1Conversations503Error1` | `apiV1Conversations503Error1Schema` | `src/models/api-v1-conversations503-error1.ts` |
| `ApiV1Conversations504Error1` | `apiV1Conversations504Error1Schema` | `src/models/api-v1-conversations504-error1.ts` |


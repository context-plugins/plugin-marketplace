<!-- Generated file — do not edit; regenerated with the SDK. -->

# Conversations — operations

Accessor: `client.conversations` · Source: `src/resources/conversations.ts` · 18 operations · Request and error types: namespace `Conversations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### addMessage

- **Signature**: `addMessage(request: Conversations.AddMessageRequestParams, options?: RequestOptions): ApiPromise<AddMessageResponse, Conversations.AddMessageError>`
- **Wire**: `POST /conversations/{conversationId}/messages`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddMessageResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.AddMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"errorResponse2"` [404] `ErrorResponse` · `"error413"` [413] no body · `"error422"` [422] no body · `"errorResponse3"` [424] `ErrorResponse` · `"error429"` [429] no body · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.AddMessageRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `AddMessageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddMessageRequest` | `addMessageRequestSchema` | `src/models/add-message-request.ts` |
| `AddMessageResponse` | `addMessageResponseSchema` | `src/models/add-message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addMessageStream

- **Signature**: `addMessageStream(request: Conversations.AddMessageStreamRequest, options?: RequestOptions): ApiPromise<EventStream<ConversationMessageStreamSseEvent>, Conversations.AddMessageStreamError>`
- **Wire**: `POST /conversations/{conversationId}/messages/stream`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ConversationMessageStreamSseEvent>` — `text/event-stream`, resolved at the response headers and read one `ConversationMessageStreamSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ConversationMessageStreamSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.AddMessageStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.AddMessageStreamRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `ConversationMessageStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationMessageStreamRequest` | `conversationMessageStreamRequestSchema` | `src/models/conversation-message-stream-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ConversationMessageStreamSseEvent` | `conversationMessageStreamSseEventSchema` | `src/models/conversation-message-stream-sse-event.ts` |

### archiveConversation

- **Signature**: `archiveConversation(request: Conversations.ArchiveConversationRequest, options?: RequestOptions): ApiPromise<ConversationsArchiveResponse, Conversations.ArchiveConversationError>`
- **Wire**: `PATCH /conversations/{conversationId}/archive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsArchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.ArchiveConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.ArchiveConversationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsArchiveResponse` | `conversationsArchiveResponseSchema` | `src/models/conversations-archive-response.ts` |

### cancelConversationStream

- **Signature**: `cancelConversationStream(request: Conversations.CancelConversationStreamRequest, options?: RequestOptions): ApiPromise<ConversationsCancelResponse, Conversations.CancelConversationStreamError>`
- **Wire**: `POST /conversations/{conversationId}/cancel`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsCancelResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.CancelConversationStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.CancelConversationStreamRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `ConversationsCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsCancelRequest` | `conversationsCancelRequestSchema` | `src/models/conversations-cancel-request.ts` |
| `ConversationsCancelResponse` | `conversationsCancelResponseSchema` | `src/models/conversations-cancel-response.ts` |

### createConversation

- **Signature**: `createConversation(request: Conversations.CreateConversationRequestParams, options?: RequestOptions): ApiPromise<CreateConversationResponse, Conversations.CreateConversationError>`
- **Wire**: `POST /conversations/create`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateConversationResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.CreateConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"errorResponse2"` [424] `ErrorResponse` · `"error429"` [429] no body · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.CreateConversationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateConversationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateConversationRequest` | `createConversationRequestSchema` | `src/models/create-conversation-request.ts` |
| `CreateConversationResponse` | `createConversationResponseSchema` | `src/models/create-conversation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteConversationById

- **Signature**: `deleteConversationById(request: Conversations.DeleteConversationByIdRequest, options?: RequestOptions): ApiPromise<ConversationsResponse2, Conversations.DeleteConversationByIdError>`
- **Wire**: `DELETE /conversations/{conversationId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsResponse2`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.DeleteConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.DeleteConversationByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsResponse2` | `conversationsResponse2Schema` | `src/models/conversations-response2.ts` |

### forkConversation

- **Signature**: `forkConversation(request: Conversations.ForkConversationRequest, options?: RequestOptions): ApiPromise<ForkConversationResponse, Conversations.ForkConversationError>`
- **Wire**: `POST /conversations/{conversationId}/message/{messageId}/fork`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ForkConversationResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.ForkConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.ForkConversationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForkConversationResponse` | `forkConversationResponseSchema` | `src/models/fork-conversation-response.ts` |

### getAllConversations

- **Signature**: `getAllConversations(request: Conversations.GetAllConversationsRequest, options?: RequestOptions): ApiPromise<ConversationsResponse, Conversations.GetAllConversationsError>`
- **Wire**: `GET /conversations`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.GetAllConversationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.GetAllConversationsRequest` (11):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `source` | `query` | `Source1` | no | `Source1.Owned` |
| `page` | `query` | `number` | no | — |
| `limit` | `query` | `number` | no | — |
| `sortBy` | `query` | `SortBy4` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |
| `conversationId` | `query` | `string` | no | — |
| `search` | `query` | `string` | no | — |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |
| `shared` | `query` | `string` | no | — |
| `projectId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Source1` | `source1Schema` | `src/models/source1.ts` |
| `SortBy4` | `sortBy4Schema` | `src/models/sort-by4.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ConversationsResponse` | `conversationsResponseSchema` | `src/models/conversations-response.ts` |

### getArchivedConversations

- **Signature**: `getArchivedConversations(request: Conversations.GetArchivedConversationsRequest, options?: RequestOptions): ApiPromise<ConversationsShowArchivesResponse, Conversations.GetArchivedConversationsError>`
- **Wire**: `GET /conversations/show/archives`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsShowArchivesResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.GetArchivedConversationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.GetArchivedConversationsRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `SortBy4` | no | `SortBy4.LastActivityAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `shared` | `query` | `boolean` | no | — |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |
| `conversationId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy4` | `sortBy4Schema` | `src/models/sort-by4.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ConversationsShowArchivesResponse` | `conversationsShowArchivesResponseSchema` | `src/models/conversations-show-archives-response.ts` |

### getConversationById

- **Signature**: `getConversationById(request: Conversations.GetConversationByIdRequest, options?: RequestOptions): ApiPromise<ConversationsResponse1, Conversations.GetConversationByIdError>`
- **Wire**: `GET /conversations/{conversationId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsResponse1`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.GetConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.GetConversationByIdRequest` (10):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `SortBy10` | no | `SortBy10.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |
| `shared` | `query` | `boolean` | no | — |
| `messageType` | `query` | `MessageType4` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy10` | `sortBy10Schema` | `src/models/sort-by10.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `MessageType4` | `messageType4Schema` | `src/models/message-type4.ts` |
| `ConversationsResponse1` | `conversationsResponse1Schema` | `src/models/conversations-response1.ts` |

### pinConversation

- **Signature**: `pinConversation(request: Conversations.PinConversationRequest, options?: RequestOptions): ApiPromise<ConversationPinResponse, Conversations.PinConversationError>`
- **Wire**: `PATCH /conversations/{conversationId}/pin`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationPinResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.PinConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.PinConversationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationPinResponse` | `conversationPinResponseSchema` | `src/models/conversation-pin-response.ts` |

### regenerateAnswer

- **Signature**: `regenerateAnswer(request: Conversations.RegenerateAnswerRequest, options?: RequestOptions): ApiPromise<EventStream<SseEvent>, Conversations.RegenerateAnswerError>`
- **Wire**: `POST /conversations/{conversationId}/message/{messageId}/regenerate`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<SseEvent>` — `text/event-stream`, resolved at the response headers and read one `SseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `SseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.RegenerateAnswerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.RegenerateAnswerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `RegenerateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegenerateRequest` | `regenerateRequestSchema` | `src/models/regenerate-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `SseEvent` | `sseEventSchema` | `src/models/sse-event.ts` |

### searchArchivedConversations

- **Signature**: `searchArchivedConversations(request: Conversations.SearchArchivedConversationsRequest, options?: RequestOptions): ApiPromise<ConversationsShowArchivesSearchResponse, Conversations.SearchArchivedConversationsError>`
- **Wire**: `GET /conversations/show/archives/search`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsShowArchivesSearchResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.SearchArchivedConversationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.SearchArchivedConversationsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `search` | `query` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsShowArchivesSearchResponse` | `conversationsShowArchivesSearchResponseSchema` | `src/models/conversations-show-archives-search-response.ts` |

### streamChat

- **Signature**: `streamChat(request: Conversations.StreamChatRequest, options?: RequestOptions): ApiPromise<EventStream<ConversationStreamSseEvent>, Conversations.StreamChatError>`
- **Wire**: `POST /conversations/stream`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<ConversationStreamSseEvent>` — `text/event-stream`, resolved at the response headers and read one `ConversationStreamSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `ConversationStreamSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.StreamChatError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.StreamChatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConversationStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationStreamRequest` | `conversationStreamRequestSchema` | `src/models/conversation-stream-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `ConversationStreamSseEvent` | `conversationStreamSseEventSchema` | `src/models/conversation-stream-sse-event.ts` |

### unarchiveConversation

- **Signature**: `unarchiveConversation(request: Conversations.UnarchiveConversationRequest, options?: RequestOptions): ApiPromise<ConversationsUnarchiveResponse, Conversations.UnarchiveConversationError>`
- **Wire**: `PATCH /conversations/{conversationId}/unarchive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsUnarchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.UnarchiveConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.UnarchiveConversationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsUnarchiveResponse` | `conversationsUnarchiveResponseSchema` | `src/models/conversations-unarchive-response.ts` |

### unpinConversation

- **Signature**: `unpinConversation(request: Conversations.UnpinConversationRequest, options?: RequestOptions): ApiPromise<ConversationPinResponse, Conversations.UnpinConversationError>`
- **Wire**: `PATCH /conversations/{conversationId}/unpin`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationPinResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.UnpinConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.UnpinConversationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationPinResponse` | `conversationPinResponseSchema` | `src/models/conversation-pin-response.ts` |

### updateConversationTitle

- **Signature**: `updateConversationTitle(request: Conversations.UpdateConversationTitleRequest, options?: RequestOptions): ApiPromise<ConversationsTitleResponse, Conversations.UpdateConversationTitleError>`
- **Wire**: `PATCH /conversations/{conversationId}/title`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsTitleResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.UpdateConversationTitleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.UpdateConversationTitleRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `ConversationsTitleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsTitleRequest` | `conversationsTitleRequestSchema` | `src/models/conversations-title-request.ts` |
| `ConversationsTitleResponse` | `conversationsTitleResponseSchema` | `src/models/conversations-title-response.ts` |

### updateMessageFeedback

- **Signature**: `updateMessageFeedback(request: Conversations.UpdateMessageFeedbackRequest, options?: RequestOptions): ApiPromise<MessageFeedbackUpdateResponse, Conversations.UpdateMessageFeedbackError>`
- **Wire**: `POST /conversations/{conversationId}/message/{messageId}/feedback`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageFeedbackUpdateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Conversations.UpdateMessageFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Conversations.UpdateMessageFeedbackRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `MessageFeedbackSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageFeedbackSubmitRequest` | `messageFeedbackSubmitRequestSchema` | `src/models/message-feedback-submit-request.ts` |
| `MessageFeedbackUpdateResponse` | `messageFeedbackUpdateResponseSchema` | `src/models/message-feedback-update-response.ts` |


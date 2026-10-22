<!-- Generated file — do not edit; regenerated with the SDK. -->

# Agents — operations

Accessor: `client.agents` · Source: `src/resources/agents.ts` · 23 operations · Request and error types: namespace `Agents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### addAgentConversationMessage

- **Signature**: `addAgentConversationMessage(request: Agents.AddAgentConversationMessageRequest, options?: RequestOptions): ApiPromise<AddMessageResponse, Agents.AddAgentConversationMessageError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/messages`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddMessageResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.AddAgentConversationMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"errorResponse2"` [404] `ErrorResponse` · `"error413"` [413] no body · `"error422"` [422] no body · `"errorResponse3"` [424] `ErrorResponse` · `"error429"` [429] no body · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.AddAgentConversationMessageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `AgentAddMessageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentAddMessageRequest` | `agentAddMessageRequestSchema` | `src/models/agent-add-message-request.ts` |
| `AddMessageResponse` | `addMessageResponseSchema` | `src/models/add-message-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### archiveAgentConversation

- **Signature**: `archiveAgentConversation(request: Agents.ArchiveAgentConversationRequest, options?: RequestOptions): ApiPromise<AgentConversationArchiveResponse, Agents.ArchiveAgentConversationError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/archive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentConversationArchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ArchiveAgentConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ArchiveAgentConversationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentConversationArchiveResponse` | `agentConversationArchiveResponseSchema` | `src/models/agent-conversation-archive-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### cancelAgentConversationStream

- **Signature**: `cancelAgentConversationStream(request: Agents.CancelAgentConversationStreamRequest, options?: RequestOptions): ApiPromise<AgentsConversationsCancelResponse, Agents.CancelAgentConversationStreamError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/cancel`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentsConversationsCancelResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.CancelAgentConversationStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CancelAgentConversationStreamRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `AgentsConversationsCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentsConversationsCancelRequest` | `agentsConversationsCancelRequestSchema` | `src/models/agents-conversations-cancel-request.ts` |
| `AgentsConversationsCancelResponse` | `agentsConversationsCancelResponseSchema` | `src/models/agents-conversations-cancel-response.ts` |

### createAgent

- **Signature**: `createAgent(request: Agents.CreateAgentRequest, options?: RequestOptions): ApiPromise<AgentCreateResponse, Agents.CreateAgentError>`
- **Wire**: `POST /agents/create`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentCreateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.CreateAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CreateAgentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AgentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentCreateRequest` | `agentCreateRequestSchema` | `src/models/agent-create-request.ts` |
| `AgentCreateResponse` | `agentCreateResponseSchema` | `src/models/agent-create-response.ts` |

### createAgentConversation

- **Signature**: `createAgentConversation(request: Agents.CreateAgentConversationRequest, options?: RequestOptions): ApiPromise<CreateAgentConversationResponse, Agents.CreateAgentConversationError>`
- **Wire**: `POST /agents/{agentKey}/conversations`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateAgentConversationResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.CreateAgentConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"errorResponse2"` [424] `ErrorResponse` · `"error429"` [429] no body · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.CreateAgentConversationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `body` | `body` | `AgentCreateConversationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentCreateConversationRequest` | `agentCreateConversationRequestSchema` | `src/models/agent-create-conversation-request.ts` |
| `CreateAgentConversationResponse` | `createAgentConversationResponseSchema` | `src/models/create-agent-conversation-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAgent

- **Signature**: `deleteAgent(request: Agents.DeleteAgentRequest, options?: RequestOptions): ApiPromise<AgentDeleteResponse, Agents.DeleteAgentError>`
- **Wire**: `DELETE /agents/{agentKey}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentDeleteResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.DeleteAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.DeleteAgentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentDeleteResponse` | `agentDeleteResponseSchema` | `src/models/agent-delete-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAgentConversationById

- **Signature**: `deleteAgentConversationById(request: Agents.DeleteAgentConversationByIdRequest, options?: RequestOptions): ApiPromise<AgentConversationDeleteResponse, Agents.DeleteAgentConversationByIdError>`
- **Wire**: `DELETE /agents/{agentKey}/conversations/{conversationId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentConversationDeleteResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.DeleteAgentConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.DeleteAgentConversationByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentConversationDeleteResponse` | `agentConversationDeleteResponseSchema` | `src/models/agent-conversation-delete-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteAgentConversationChatAttachment

- **Signature**: `deleteAgentConversationChatAttachment(request: Agents.DeleteAgentConversationChatAttachmentRequest, options?: RequestOptions): ApiPromise<undefined, Agents.DeleteAgentConversationChatAttachmentError>`
- **Wire**: `DELETE /agents/{agentKey}/conversations/attachments/{recordId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.DeleteAgentConversationChatAttachmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"agentsConversationsAttachments400Error1"` [400] `AgentsConversationsAttachments400Error1` · `"error401"` [401] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.DeleteAgentConversationChatAttachmentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `recordId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentsConversationsAttachments400Error1` | `agentsConversationsAttachments400Error1Schema` | `src/models/agents-conversations-attachments400-error1.ts` |

### forkAgentConversation

- **Signature**: `forkAgentConversation(request: Agents.ForkAgentConversationRequest, options?: RequestOptions): ApiPromise<ForkConversationResponse, Agents.ForkAgentConversationError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/message/{messageId}/fork`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ForkConversationResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ForkAgentConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ForkAgentConversationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForkConversationResponse` | `forkConversationResponseSchema` | `src/models/fork-conversation-response.ts` |

### getAgent

- **Signature**: `getAgent(request: Agents.GetAgentRequest, options?: RequestOptions): ApiPromise<GetAgentResponse, Agents.GetAgentError>`
- **Wire**: `GET /agents/{agentKey}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAgentResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.GetAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.GetAgentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAgentResponse` | `getAgentResponseSchema` | `src/models/get-agent-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getAgentConversationById

- **Signature**: `getAgentConversationById(request: Agents.GetAgentConversationByIdRequest, options?: RequestOptions): ApiPromise<AgentConversationDetailResponse, Agents.GetAgentConversationByIdError>`
- **Wire**: `GET /agents/{agentKey}/conversations/{conversationId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentConversationDetailResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.GetAgentConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.GetAgentConversationByIdRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes | — |
| `conversationId` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `SortBy10` | no | `SortBy10.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |
| `messageType` | `query` | `MessageType4` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy10` | `sortBy10Schema` | `src/models/sort-by10.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `MessageType4` | `messageType4Schema` | `src/models/message-type4.ts` |
| `AgentConversationDetailResponse` | `agentConversationDetailResponseSchema` | `src/models/agent-conversation-detail-response.ts` |

### listAgentArchivedConversationsGrouped

- **Signature**: `listAgentArchivedConversationsGrouped(request: Agents.ListAgentArchivedConversationsGroupedRequest, options?: RequestOptions): ApiPromise<AgentArchivedGroupsResponse, Agents.ListAgentArchivedConversationsGroupedError>`
- **Wire**: `GET /agents/conversations/show/archives`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentArchivedGroupsResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ListAgentArchivedConversationsGroupedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ListAgentArchivedConversationsGroupedRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `agentPage` | `query` | `number` | no | `1` |
| `agentLimit` | `query` | `number` | no | `5` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentArchivedGroupsResponse` | `agentArchivedGroupsResponseSchema` | `src/models/agent-archived-groups-response.ts` |

### listAgentConversationArchives

- **Signature**: `listAgentConversationArchives(request: Agents.ListAgentConversationArchivesRequest, options?: RequestOptions): ApiPromise<AgentArchivedConversationListResponse, Agents.ListAgentConversationArchivesError>`
- **Wire**: `GET /agents/{agentKey}/conversations/show/archives`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentArchivedConversationListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ListAgentConversationArchivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ListAgentConversationArchivesRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `SortBy4` | no | — |
| `sortOrder` | `query` | `SortOrder` | no | — |
| `search` | `query` | `string` | no | — |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy4` | `sortBy4Schema` | `src/models/sort-by4.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `AgentArchivedConversationListResponse` | `agentArchivedConversationListResponseSchema` | `src/models/agent-archived-conversation-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAgentConversations

- **Signature**: `listAgentConversations(request: Agents.ListAgentConversationsRequest, options?: RequestOptions): ApiPromise<AgentConversationListResponse, Agents.ListAgentConversationsError>`
- **Wire**: `GET /agents/{agentKey}/conversations`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentConversationListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ListAgentConversationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ListAgentConversationsRequest` (11):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `string` | no | — |
| `sortOrder` | `query` | `string` | no | — |
| `search` | `query` | `string` | no | — |
| `startDate` | `query` | `string` | no | — |
| `endDate` | `query` | `string` | no | — |
| `status` | `query` | `string` | no | — |
| `isArchived` | `query` | `IsArchived` | no | — |
| `projectId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsArchived` | `isArchivedSchema` | `src/models/is-archived.ts` |
| `AgentConversationListResponse` | `agentConversationListResponseSchema` | `src/models/agent-conversation-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listAgents

- **Signature**: `listAgents(request: Agents.ListAgentsRequest, options?: RequestOptions): ApiPromise<AgentListResponse, Agents.ListAgentsError>`
- **Wire**: `GET /agents`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AgentListResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.ListAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.ListAgentsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `limit` | `query` | — | `number` | no | `20` |
| `search` | `query` | — | `string` | no | — |
| `sortBy` | `query` | `sort_by` | `string` | no | `"updatedAtTimestamp"` |
| `sortOrder` | `query` | `sort_order` | `SortOrder15` | no | `SortOrder15.Desc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder15` | `sortOrder15Schema` | `src/models/sort-order15.ts` |
| `AgentListResponse` | `agentListResponseSchema` | `src/models/agent-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### regenerateAgentConversationMessage

- **Signature**: `regenerateAgentConversationMessage(request: Agents.RegenerateAgentConversationMessageRequest, options?: RequestOptions): ApiPromise<EventStream<AgentRegenerateSseEvent>, Agents.RegenerateAgentConversationMessageError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/message/{messageId}/regenerate`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<AgentRegenerateSseEvent>` — `text/event-stream`, resolved at the response headers and read one `AgentRegenerateSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `AgentRegenerateSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.RegenerateAgentConversationMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.RegenerateAgentConversationMessageRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `AgentRegenerateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentRegenerateRequest` | `agentRegenerateRequestSchema` | `src/models/agent-regenerate-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `AgentRegenerateSseEvent` | `agentRegenerateSseEventSchema` | `src/models/agent-regenerate-sse-event.ts` |

### streamAgentConversation

- **Signature**: `streamAgentConversation(request: Agents.StreamAgentConversationRequest, options?: RequestOptions): ApiPromise<EventStream<AgentStreamSseEvent>, Agents.StreamAgentConversationError>`
- **Wire**: `POST /agents/{agentKey}/conversations/stream`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<AgentStreamSseEvent>` — `text/event-stream`, resolved at the response headers and read one `AgentStreamSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `AgentStreamSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.StreamAgentConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.StreamAgentConversationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `body` | `body` | `AgentStreamCreateConversationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentStreamCreateConversationRequest` | `agentStreamCreateConversationRequestSchema` | `src/models/agent-stream-create-conversation-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `AgentStreamSseEvent` | `agentStreamSseEventSchema` | `src/models/agent-stream-sse-event.ts` |

### streamAgentConversationMessage

- **Signature**: `streamAgentConversationMessage(request: Agents.StreamAgentConversationMessageRequest, options?: RequestOptions): ApiPromise<EventStream<AgentMessageStreamSseEvent>, Agents.StreamAgentConversationMessageError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/messages/stream`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventStream<AgentMessageStreamSseEvent>` — `text/event-stream`, resolved at the response headers and read one `AgentMessageStreamSseEvent` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `AgentMessageStreamSseEvent`, whatever the event is named. The stream ends when the server closes it
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.StreamAgentConversationMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.StreamAgentConversationMessageRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `AgentAddMessageStreamRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentAddMessageStreamRequest` | `agentAddMessageStreamRequestSchema` | `src/models/agent-add-message-stream-request.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `AgentMessageStreamSseEvent` | `agentMessageStreamSseEventSchema` | `src/models/agent-message-stream-sse-event.ts` |

### unarchiveAgentConversation

- **Signature**: `unarchiveAgentConversation(request: Agents.UnarchiveAgentConversationRequest, options?: RequestOptions): ApiPromise<AgentConversationUnarchiveResponse, Agents.UnarchiveAgentConversationError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/unarchive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentConversationUnarchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.UnarchiveAgentConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.UnarchiveAgentConversationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentConversationUnarchiveResponse` | `agentConversationUnarchiveResponseSchema` | `src/models/agent-conversation-unarchive-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAgent

- **Signature**: `updateAgent(request: Agents.UpdateAgentRequest, options?: RequestOptions): ApiPromise<AgentUpdateResponse, Agents.UpdateAgentError>`
- **Wire**: `PUT /agents/{agentKey}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentUpdateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.UpdateAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.UpdateAgentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `body` | `body` | `AgentUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentUpdateRequest` | `agentUpdateRequestSchema` | `src/models/agent-update-request.ts` |
| `AgentUpdateResponse` | `agentUpdateResponseSchema` | `src/models/agent-update-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateAgentConversationMessageFeedback

- **Signature**: `updateAgentConversationMessageFeedback(request: Agents.UpdateAgentConversationMessageFeedbackRequest, options?: RequestOptions): ApiPromise<MessageFeedbackUpdateResponse, Agents.UpdateAgentConversationMessageFeedbackError>`
- **Wire**: `POST /agents/{agentKey}/conversations/{conversationId}/message/{messageId}/feedback`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageFeedbackUpdateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.UpdateAgentConversationMessageFeedbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.UpdateAgentConversationMessageFeedbackRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `messageId` | `path` | `string` | yes |
| `body` | `body` | `MessageFeedbackSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageFeedbackSubmitRequest` | `messageFeedbackSubmitRequestSchema` | `src/models/message-feedback-submit-request.ts` |
| `MessageFeedbackUpdateResponse` | `messageFeedbackUpdateResponseSchema` | `src/models/message-feedback-update-response.ts` |

### updateAgentConversationTitle

- **Signature**: `updateAgentConversationTitle(request: Agents.UpdateAgentConversationTitleRequest, options?: RequestOptions): ApiPromise<AgentConversationTitleUpdateResponse, Agents.UpdateAgentConversationTitleError>`
- **Wire**: `PATCH /agents/{agentKey}/conversations/{conversationId}/title`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AgentConversationTitleUpdateResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.UpdateAgentConversationTitleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.UpdateAgentConversationTitleRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `conversationId` | `path` | `string` | yes |
| `body` | `body` | `ConversationTitleUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationTitleUpdateRequest` | `conversationTitleUpdateRequestSchema` | `src/models/conversation-title-update-request.ts` |
| `AgentConversationTitleUpdateResponse` | `agentConversationTitleUpdateResponseSchema` | `src/models/agent-conversation-title-update-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### uploadAgentConversationChatAttachments

- **Signature**: `uploadAgentConversationChatAttachments(request: Agents.UploadAgentConversationChatAttachmentsRequest, options?: RequestOptions): ApiPromise<ChatAttachmentUploadResponse, Agents.UploadAgentConversationChatAttachmentsError>`
- **Wire**: `POST /agents/{agentKey}/conversations/attachments/upload`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `files` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatAttachmentUploadResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Agents.UploadAgentConversationChatAttachmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Agents.UploadAgentConversationChatAttachmentsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `agentKey` | `path` | `string` | yes |
| `files` | `form` | `FileInput` | yes |
| `conversationId` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChatAttachmentUploadResponse` | `chatAttachmentUploadResponseSchema` | `src/models/chat-attachment-upload-response.ts` |


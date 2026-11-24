<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportRequests — operations

Accessor: `client.supportRequests` · Source: `src/resources/support-requests.ts` · 9 operations · Request and error types: namespace `SupportRequests`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTicketTags

- **Signature**: `addTicketTags(request: SupportRequests.AddTicketTagsRequest, options?: RequestOptions): ApiPromise<TagsResponse, SupportRequests.AddTicketTagsError>`
- **Wire**: `POST /support/v1/tickets/{ticketId}/tags`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.AddTicketTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.AddTicketTagsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |
| `body` | `body` | `TagsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsRequest` | `tagsRequestSchema` | `src/models/tags-request.ts` |
| `TagsResponse` | `tagsResponseSchema` | `src/models/tags-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createTicket

- **Signature**: `createTicket(request: SupportRequests.CreateTicketRequest, options?: RequestOptions): ApiPromise<TicketResponseExtApi, SupportRequests.CreateTicketError>`
- **Wire**: `POST /support/v1/tickets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TicketResponseExtApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.CreateTicketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.CreateTicketRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TicketCreateFormExtApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TicketCreateFormExtApi` | `ticketCreateFormExtApiSchema` | `src/models/ticket-create-form-ext-api.ts` |
| `TicketResponseExtApi` | `ticketResponseExtApiSchema` | `src/models/ticket-response-ext-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createTicketComment

- **Signature**: `createTicketComment(request: SupportRequests.CreateTicketCommentRequest, options?: RequestOptions): ApiPromise<CommentExtApi, SupportRequests.CreateTicketCommentError>`
- **Wire**: `POST /support/v1/tickets/{ticketId}/comments`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CommentExtApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.CreateTicketCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.CreateTicketCommentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |
| `body` | `body` | `CreateCommentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCommentRequest` | `createCommentRequestSchema` | `src/models/create-comment-request.ts` |
| `CommentExtApi` | `commentExtApiSchema` | `src/models/comment-ext-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getTicket

- **Signature**: `getTicket(request: SupportRequests.GetTicketRequest, options?: RequestOptions): ApiPromise<TicketDetailExtApi, SupportRequests.GetTicketError>`
- **Wire**: `GET /support/v1/tickets/{ticketId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TicketDetailExtApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.GetTicketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [502] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.GetTicketRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TicketDetailExtApi` | `ticketDetailExtApiSchema` | `src/models/ticket-detail-ext-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listTicketComments

- **Signature**: `listTicketComments(request: SupportRequests.ListTicketCommentsRequest, options?: RequestOptions): ApiPromise<CommentsResponseExtApi, SupportRequests.ListTicketCommentsError>`
- **Wire**: `GET /support/v1/tickets/{ticketId}/comments`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommentsResponseExtApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.ListTicketCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [502] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.ListTicketCommentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommentsResponseExtApi` | `commentsResponseExtApiSchema` | `src/models/comments-response-ext-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listTicketTags

- **Signature**: `listTicketTags(request: SupportRequests.ListTicketTagsRequest, options?: RequestOptions): ApiPromise<TagsGetResponse, SupportRequests.ListTicketTagsError>`
- **Wire**: `GET /support/v1/tickets/{ticketId}/tags`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsGetResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.ListTicketTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.ListTicketTagsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsGetResponse` | `tagsGetResponseSchema` | `src/models/tags-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listTickets

- **Signature**: `listTickets(request?: SupportRequests.ListTicketsRequest, options?: RequestOptions): ApiPromise<TicketsList, SupportRequests.ListTicketsError>`
- **Wire**: `GET /support/v1/tickets`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TicketsList`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.ListTicketsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [502] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.ListTicketsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `100` |
| `pageToken` | `query` | `string` | no | — |
| `filter` | `query` | `string` | no | — |
| `minCreationTime` | `query` | `string` | no | — |
| `maxCreationTime` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TicketsList` | `ticketsListSchema` | `src/models/tickets-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeTicketTags

- **Signature**: `removeTicketTags(request: SupportRequests.RemoveTicketTagsRequest, options?: RequestOptions): ApiPromise<TagsResponse, SupportRequests.RemoveTicketTagsError>`
- **Wire**: `DELETE /support/v1/tickets/{ticketId}/tags`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.RemoveTicketTagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.RemoveTicketTagsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |
| `body` | `body` | `TagsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsRequest` | `tagsRequestSchema` | `src/models/tags-request.ts` |
| `TagsResponse` | `tagsResponseSchema` | `src/models/tags-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateTicket

- **Signature**: `updateTicket(request: SupportRequests.UpdateTicketRequest, options?: RequestOptions): ApiPromise<SupportV1TicketsResponse, SupportRequests.UpdateTicketError>`
- **Wire**: `PATCH /support/v1/tickets/{ticketId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SupportV1TicketsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `SupportRequests.UpdateTicketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupportRequests.UpdateTicketRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticketId` | `path` | `number` | yes |
| `body` | `body` | `SupportV1TicketsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportV1TicketsRequest` | `supportV1TicketsRequestSchema` | `src/models/support-v1-tickets-request.ts` |
| `SupportV1TicketsResponse` | `supportV1TicketsResponseSchema` | `src/models/support-v1-tickets-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


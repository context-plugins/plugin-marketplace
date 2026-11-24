<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportRequests — operations

Accessor: `client.support_requests` · Source: `doi_t/apis/support_requests.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.support_requests.add_ticket_tags

- **Route**: `POST /support/v1/tickets/{ticketId}/tags`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def add_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`, `body`
- **Params**: `ticket_id` — path `ticketId` · `body` — JSON body
- **Returns (parsed)**: `TagsResponse`
- **Returns (raw)**: `ApiResult[TagsResponse, AddTicketTagsErrorBody]`
- **Error**: `AddTicketTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsRequest` | `doi_t/models/tags_request.py` |
| `TagsRequestDict` | `doi_t/models/tags_request.py` |
| `TagsResponse` | `doi_t/models/tags_response.py` |
| `AddTicketTagsErrorBody` | `doi_t/errors/add_ticket_tags_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.create_ticket

- **Route**: `POST /support/v1/tickets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_ticket(body: TicketCreateFormExtApi | TicketCreateFormExtApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TicketResponseExtApi`
- **Returns (raw)**: `ApiResult[TicketResponseExtApi, CreateTicketErrorBody]`
- **Error**: `CreateTicketErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TicketCreateFormExtApi` | `doi_t/models/ticket_create_form_ext_api.py` |
| `TicketCreateFormExtApiDict` | `doi_t/models/ticket_create_form_ext_api.py` |
| `TicketResponseExtApi` | `doi_t/models/ticket_response_ext_api.py` |
| `CreateTicketErrorBody` | `doi_t/errors/create_ticket_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.create_ticket_comment

- **Route**: `POST /support/v1/tickets/{ticketId}/comments`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_ticket_comment(ticket_id: int, body: CreateCommentRequest | CreateCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`, `body`
- **Params**: `ticket_id` — path `ticketId` · `body` — JSON body
- **Returns (parsed)**: `CommentExtApi`
- **Returns (raw)**: `ApiResult[CommentExtApi, CreateTicketCommentErrorBody]`
- **Error**: `CreateTicketCommentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCommentRequest` | `doi_t/models/create_comment_request.py` |
| `CreateCommentRequestDict` | `doi_t/models/create_comment_request.py` |
| `CommentExtApi` | `doi_t/models/comment_ext_api.py` |
| `CreateTicketCommentErrorBody` | `doi_t/errors/create_ticket_comment_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.get_ticket

- **Route**: `GET /support/v1/tickets/{ticketId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_ticket(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`
- **Params**: `ticket_id` — path `ticketId`
- **Returns (parsed)**: `TicketDetailExtApi`
- **Returns (raw)**: `ApiResult[TicketDetailExtApi, GetTicketErrorBody]`
- **Error**: `GetTicketErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TicketDetailExtApi` | `doi_t/models/ticket_detail_ext_api.py` |
| `GetTicketErrorBody` | `doi_t/errors/get_ticket_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.list_ticket_comments

- **Route**: `GET /support/v1/tickets/{ticketId}/comments`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_ticket_comments(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`
- **Params**: `ticket_id` — path `ticketId`
- **Returns (parsed)**: `CommentsResponseExtApi`
- **Returns (raw)**: `ApiResult[CommentsResponseExtApi, ListTicketCommentsErrorBody]`
- **Error**: `ListTicketCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommentsResponseExtApi` | `doi_t/models/comments_response_ext_api.py` |
| `ListTicketCommentsErrorBody` | `doi_t/errors/list_ticket_comments_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.list_ticket_tags

- **Route**: `GET /support/v1/tickets/{ticketId}/tags`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_ticket_tags(ticket_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`
- **Params**: `ticket_id` — path `ticketId`
- **Returns (parsed)**: `TagsGetResponse`
- **Returns (raw)**: `ApiResult[TagsGetResponse, ListTicketTagsErrorBody]`
- **Error**: `ListTicketTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsGetResponse` | `doi_t/models/tags_get_response.py` |
| `ListTicketTagsErrorBody` | `doi_t/errors/list_ticket_tags_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.list_tickets

- **Route**: `GET /support/v1/tickets`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_tickets(*, max_results: int | None = 100, page_token: str | None = None, filter_: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime`
- **Returns (parsed)**: `TicketsList`
- **Returns (raw)**: `ApiResult[TicketsList, ListTicketsErrorBody]`
- **Error**: `ListTicketsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TicketsList` | `doi_t/models/tickets_list.py` |
| `ListTicketsErrorBody` | `doi_t/errors/list_tickets_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.remove_ticket_tags

- **Route**: `DELETE /support/v1/tickets/{ticketId}/tags`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def remove_ticket_tags(ticket_id: int, body: TagsRequest | TagsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`, `body`
- **Params**: `ticket_id` — path `ticketId` · `body` — JSON body
- **Returns (parsed)**: `TagsResponse`
- **Returns (raw)**: `ApiResult[TagsResponse, RemoveTicketTagsErrorBody]`
- **Error**: `RemoveTicketTagsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsRequest` | `doi_t/models/tags_request.py` |
| `TagsRequestDict` | `doi_t/models/tags_request.py` |
| `TagsResponse` | `doi_t/models/tags_response.py` |
| `RemoveTicketTagsErrorBody` | `doi_t/errors/remove_ticket_tags_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.support_requests.update_ticket

- **Route**: `PATCH /support/v1/tickets/{ticketId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_ticket(ticket_id: int, body: SupportV1TicketsRequest | SupportV1TicketsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket_id`, `body`
- **Params**: `ticket_id` — path `ticketId` · `body` — JSON body
- **Returns (parsed)**: `SupportV1TicketsResponse`
- **Returns (raw)**: `ApiResult[SupportV1TicketsResponse, UpdateTicketErrorBody]`
- **Error**: `UpdateTicketErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SupportV1TicketsRequest` | `doi_t/models/support_v1_tickets_request.py` |
| `SupportV1TicketsRequestDict` | `doi_t/models/support_v1_tickets_request.py` |
| `SupportV1TicketsResponse` | `doi_t/models/support_v1_tickets_response.py` |
| `UpdateTicketErrorBody` | `doi_t/errors/update_ticket_error.py` |
| `Error` | `doi_t/models/error.py` |


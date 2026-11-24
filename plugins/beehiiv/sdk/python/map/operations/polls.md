<!-- Generated file — do not edit; regenerated with the SDK. -->

# Polls — operations

Accessor: `client.polls` · Source: `beehiiv/apis/polls.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.polls.index15

- **Route**: `GET /publications/{publicationId}/polls`
- **Server**: `default`
- **Signature**: `def index15(publication_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, order_by: PollOrderByOrStr | None = PollOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[PollsExpandItemsOrStr] | None = None, post_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `cursor` — query · `page` — query · `order_by` — query · `direction` — query · `expand` — query `expand[]` · `post_id` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PollsListResponse`
- **Returns (raw)**: `ApiResult[PollsListResponse, Index15ErrorBody]`
- **Error**: `Index15ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PollOrderByOrStr` | `beehiiv/models/enums/poll_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PollsExpandItemsOrStr` | `beehiiv/models/enums/polls_expand_items.py` |
| `PollsListResponse` | `beehiiv/models/polls_list_response.py` |
| `Index15ErrorBody` | `beehiiv/errors/index15_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.polls.list_responses

- **Route**: `GET /publications/{publicationId}/polls/{pollId}/responses`
- **Server**: `default`
- **Signature**: `def list_responses(publication_id: str, poll_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, order_by: PollResponsesOrderByOrStr | None = PollResponsesOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, expand: list[PollResponsesExpandItemsOrStr] | None = None, post_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `poll_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `poll_id` — path `pollId` · `limit` — query · `cursor` — query · `page` — query · `order_by` — query · `direction` — query · `expand` — query `expand[]` · `post_id` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PollResponsesListResponse`
- **Returns (raw)**: `ApiResult[PollResponsesListResponse, ListResponsesErrorBody]`
- **Error**: `ListResponsesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PollResponsesOrderByOrStr` | `beehiiv/models/enums/poll_responses_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PollResponsesExpandItemsOrStr` | `beehiiv/models/enums/poll_responses_expand_items.py` |
| `PollResponsesListResponse` | `beehiiv/models/poll_responses_list_response.py` |
| `ListResponsesErrorBody` | `beehiiv/errors/list_responses_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.polls.show11

- **Route**: `GET /publications/{publicationId}/polls/{pollId}`
- **Server**: `default`
- **Signature**: `def show11(publication_id: str, poll_id: str, authorization: str, *, expand: list[PollsExpandItemsOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `poll_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `poll_id` — path `pollId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `PollShowResponse`
- **Returns (raw)**: `ApiResult[PollShowResponse, Show11ErrorBody]`
- **Error**: `Show11ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PollsExpandItemsOrStr` | `beehiiv/models/enums/polls_expand_items.py` |
| `PollShowResponse` | `beehiiv/models/poll_show_response.py` |
| `Show11ErrorBody` | `beehiiv/errors/show11_error.py` |
| `Error` | `beehiiv/models/error.py` |


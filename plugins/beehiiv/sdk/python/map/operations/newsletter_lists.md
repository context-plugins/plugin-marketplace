<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsletterLists — operations

Accessor: `client.newsletter_lists` · Source: `beehiiv/apis/newsletter_lists.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.newsletter_lists.create7

- **Route**: `POST /publications/{publicationId}/newsletter_lists`
- **Server**: `default`
- **Signature**: `def create7(publication_id: str, authorization: str, *, body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `NewsletterListResponse`
- **Returns (raw)**: `ApiResult[NewsletterListResponse, Create7ErrorBody]`
- **Error**: `Create7ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsNewsletterListsRequest` | `beehiiv/models/publications_newsletter_lists_request.py` |
| `PublicationsNewsletterListsRequestDict` | `beehiiv/models/publications_newsletter_lists_request.py` |
| `NewsletterListResponse` | `beehiiv/models/newsletter_list_response.py` |
| `Create7ErrorBody` | `beehiiv/errors/create7_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_lists.delete2

- **Route**: `DELETE /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Server**: `default`
- **Signature**: `def delete2(publication_id: str, newsletter_list_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, Delete2ErrorBody]`
- **Error**: `Delete2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Delete2ErrorBody` | `beehiiv/errors/delete2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_lists.index14

- **Route**: `GET /publications/{publicationId}/newsletter_lists`
- **Server**: `default`
- **Signature**: `def index14(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `page` — query · `direction` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `NewsletterListIndexResponse`
- **Returns (raw)**: `ApiResult[NewsletterListIndexResponse, Index14ErrorBody]`
- **Error**: `Index14ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `NewsletterListIndexResponse` | `beehiiv/models/newsletter_list_index_response.py` |
| `Index14ErrorBody` | `beehiiv/errors/index14_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_lists.show10

- **Route**: `GET /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Server**: `default`
- **Signature**: `def show10(publication_id: str, newsletter_list_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `NewsletterListResponse`
- **Returns (raw)**: `ApiResult[NewsletterListResponse, Show10ErrorBody]`
- **Error**: `Show10ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NewsletterListResponse` | `beehiiv/models/newsletter_list_response.py` |
| `Show10ErrorBody` | `beehiiv/errors/show10_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.newsletter_lists.update2

- **Route**: `PATCH /publications/{publicationId}/newsletter_lists/{newsletterListId}`
- **Server**: `default`
- **Signature**: `def update2(publication_id: str, newsletter_list_id: str, authorization: str, *, body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `newsletter_list_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `newsletter_list_id` — path `newsletterListId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `NewsletterListResponse`
- **Returns (raw)**: `ApiResult[NewsletterListResponse, Update2ErrorBody]`
- **Error**: `Update2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsNewsletterListsRequest1` | `beehiiv/models/publications_newsletter_lists_request1.py` |
| `PublicationsNewsletterListsRequest1Dict` | `beehiiv/models/publications_newsletter_lists_request1.py` |
| `NewsletterListResponse` | `beehiiv/models/newsletter_list_response.py` |
| `Update2ErrorBody` | `beehiiv/errors/update2_error.py` |
| `Error` | `beehiiv/models/error.py` |


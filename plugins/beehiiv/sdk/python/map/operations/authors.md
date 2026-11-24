<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authors — operations

Accessor: `client.authors` · Source: `beehiiv/apis/authors.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authors.index4

- **Route**: `GET /publications/{publicationId}/authors`
- **Server**: `default`
- **Signature**: `def index4(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `page` — query · `name` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AuthorsListResponse`
- **Returns (raw)**: `ApiResult[AuthorsListResponse, Index4ErrorBody]`
- **Error**: `Index4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorsListResponse` | `beehiiv/models/authors_list_response.py` |
| `Index4ErrorBody` | `beehiiv/errors/index4_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.authors.show

- **Route**: `GET /publications/{publicationId}/authors/{authorId}`
- **Server**: `default`
- **Signature**: `def show(publication_id: str, author_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `author_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `author_id` — path `authorId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `AuthorsGetResponse`
- **Returns (raw)**: `ApiResult[AuthorsGetResponse, ShowErrorBody]`
- **Error**: `ShowErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuthorsGetResponse` | `beehiiv/models/authors_get_response.py` |
| `ShowErrorBody` | `beehiiv/errors/show_error.py` |
| `Error` | `beehiiv/models/error.py` |


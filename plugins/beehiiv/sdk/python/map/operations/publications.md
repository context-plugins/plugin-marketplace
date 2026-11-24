<!-- Generated file — do not edit; regenerated with the SDK. -->

# Publications — operations

Accessor: `client.publications` · Source: `beehiiv/apis/publications.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.publications.index18

- **Route**: `GET /publications`
- **Server**: `default`
- **Signature**: `def index18(authorization: str, *, expand: list[PublicationsRequestExpandItemOrStr] | None = None, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `expand` — query · `limit` — query · `page` — query · `direction` — query · `order_by` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PublicationsListResponse`
- **Returns (raw)**: `ApiResult[PublicationsListResponse, Index18ErrorBody]`
- **Error**: `Index18ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsRequestExpandItemOrStr` | `beehiiv/models/enums/publications_request_expand_item.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PublicationsListRequestOrderByOrStr` | `beehiiv/models/enums/publications_list_request_order_by.py` |
| `PublicationsListResponse` | `beehiiv/models/publications_list_response.py` |
| `Index18ErrorBody` | `beehiiv/errors/index18_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.publications.show13

- **Route**: `GET /publications/{publicationId}`
- **Server**: `default`
- **Signature**: `def show13(publication_id: str, authorization: str, *, expand: list[PublicationsGetRequestExpandItemOrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PublicationsGetResponse`
- **Returns (raw)**: `ApiResult[PublicationsGetResponse, Show13ErrorBody]`
- **Error**: `Show13ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsGetRequestExpandItemOrStr` | `beehiiv/models/enums/publications_get_request_expand_item.py` |
| `PublicationsGetResponse` | `beehiiv/models/publications_get_response.py` |
| `Show13ErrorBody` | `beehiiv/errors/show13_error.py` |
| `Error` | `beehiiv/models/error.py` |


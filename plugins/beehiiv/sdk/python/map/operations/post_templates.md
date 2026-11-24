<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTemplates — operations

Accessor: `client.post_templates` · Source: `beehiiv/apis/post_templates.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.post_templates.index16

- **Route**: `GET /publications/{publicationId}/post_templates`
- **Server**: `default`
- **Signature**: `def index16(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, order: RequestDirectionOrStr | None = RequestDirection.ASC, order_by: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `page` — query · `order` — query · `order_by` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PostTemplatesGetResponse`
- **Returns (raw)**: `ApiResult[PostTemplatesGetResponse, Index16ErrorBody]`
- **Error**: `Index16ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PostTemplatesGetResponse` | `beehiiv/models/post_templates_get_response.py` |
| `Index16ErrorBody` | `beehiiv/errors/index16_error.py` |
| `Error` | `beehiiv/models/error.py` |


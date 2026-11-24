<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComplimentaryAccessApi — operations

Accessor: `client.complimentary_access_api` · Source: `beehiiv/apis/complimentary_access_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.complimentary_access_api.index8

- **Route**: `GET /publications/{publicationId}/complimentary_access`
- **Server**: `default`
- **Signature**: `def index8(publication_id: str, authorization: str, *, expand: str | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query `expand[]` · `limit` — query · `cursor` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `IndexComplimentaryAccessResponse`
- **Returns (raw)**: `ApiResult[IndexComplimentaryAccessResponse, Index8ErrorBody]`
- **Error**: `Index8ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IndexComplimentaryAccessResponse` | `beehiiv/models/index_complimentary_access_response.py` |
| `Index8ErrorBody` | `beehiiv/errors/index8_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.complimentary_access_api.show5

- **Route**: `GET /publications/{publicationId}/complimentary_access/{complimentaryAccessId}`
- **Server**: `default`
- **Signature**: `def show5(publication_id: str, complimentary_access_id: str, authorization: str, *, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `complimentary_access_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `complimentary_access_id` — path `complimentaryAccessId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ComplimentaryAccessResponse`
- **Returns (raw)**: `ApiResult[ComplimentaryAccessResponse, Show5ErrorBody]`
- **Error**: `Show5ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ComplimentaryAccessResponse` | `beehiiv/models/complimentary_access_response.py` |
| `Show5ErrorBody` | `beehiiv/errors/show5_error.py` |
| `Error` | `beehiiv/models/error.py` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tiers — operations

Accessor: `client.tiers` · Source: `beehiiv/apis/tiers.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tiers.create12

- **Route**: `POST /publications/{publicationId}/tiers`
- **Server**: `default`
- **Signature**: `def create12(publication_id: str, authorization: str, *, body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `TierResponse`
- **Returns (raw)**: `ApiResult[TierResponse, Create12ErrorBody]`
- **Error**: `Create12ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsTiersRequest` | `beehiiv/models/publications_tiers_request.py` |
| `PublicationsTiersRequestDict` | `beehiiv/models/publications_tiers_request.py` |
| `TierResponse` | `beehiiv/models/tier_response.py` |
| `Create12ErrorBody` | `beehiiv/errors/create12_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.tiers.index21

- **Route**: `GET /publications/{publicationId}/tiers`
- **Server**: `default`
- **Signature**: `def index21(publication_id: str, authorization: str, *, expand: str | None = None, limit: int | None = None, page: int | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query `expand[]` · `limit` — query · `page` — query · `direction` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `IndexTiersResponse`
- **Returns (raw)**: `ApiResult[IndexTiersResponse, Index21ErrorBody]`
- **Error**: `Index21ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `IndexTiersResponse` | `beehiiv/models/index_tiers_response.py` |
| `Index21ErrorBody` | `beehiiv/errors/index21_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.tiers.patch4

- **Route**: `PATCH /publications/{publicationId}/tiers/{tierId}`
- **Server**: `default`
- **Signature**: `def patch4(publication_id: str, tier_id: str, authorization: str, *, body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `tier_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `tier_id` — path `tierId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `TierResponse`
- **Returns (raw)**: `ApiResult[TierResponse, Patch4ErrorBody]`
- **Error**: `Patch4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsTiersRequest1` | `beehiiv/models/publications_tiers_request1.py` |
| `PublicationsTiersRequest1Dict` | `beehiiv/models/publications_tiers_request1.py` |
| `TierResponse` | `beehiiv/models/tier_response.py` |
| `Patch4ErrorBody` | `beehiiv/errors/patch4_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.tiers.put4

- **Route**: `PUT /publications/{publicationId}/tiers/{tierId}`
- **Server**: `default`
- **Signature**: `def put4(publication_id: str, tier_id: str, authorization: str, *, body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `tier_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `tier_id` — path `tierId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `TierResponse`
- **Returns (raw)**: `ApiResult[TierResponse, Put4ErrorBody]`
- **Error**: `Put4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsTiersRequest1` | `beehiiv/models/publications_tiers_request1.py` |
| `PublicationsTiersRequest1Dict` | `beehiiv/models/publications_tiers_request1.py` |
| `TierResponse` | `beehiiv/models/tier_response.py` |
| `Put4ErrorBody` | `beehiiv/errors/put4_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.tiers.show16

- **Route**: `GET /publications/{publicationId}/tiers/{tierId}`
- **Server**: `default`
- **Signature**: `def show16(publication_id: str, tier_id: str, authorization: str, *, expand: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `tier_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `tier_id` — path `tierId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `TierResponse`
- **Returns (raw)**: `ApiResult[TierResponse, Show16ErrorBody]`
- **Error**: `Show16ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TierResponse` | `beehiiv/models/tier_response.py` |
| `Show16ErrorBody` | `beehiiv/errors/show16_error.py` |
| `Error` | `beehiiv/models/error.py` |


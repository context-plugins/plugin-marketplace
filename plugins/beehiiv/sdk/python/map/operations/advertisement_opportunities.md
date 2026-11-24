<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdvertisementOpportunities — operations

Accessor: `client.advertisement_opportunities` · Source: `beehiiv/apis/advertisement_opportunities.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.advertisement_opportunities.index3

- **Route**: `GET /publications/{publicationId}/advertisement_opportunities`
- **Server**: `default`
- **Signature**: `def index3(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdvertisementOpportunitiesGetResponse`
- **Returns (raw)**: `ApiResult[AdvertisementOpportunitiesGetResponse, Index3ErrorBody]`
- **Error**: `Index3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdvertisementOpportunitiesGetResponse` | `beehiiv/models/advertisement_opportunities_get_response.py` |
| `Index3ErrorBody` | `beehiiv/errors/index3_error.py` |
| `Error` | `beehiiv/models/error.py` |


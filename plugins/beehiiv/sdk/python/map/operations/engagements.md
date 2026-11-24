<!-- Generated file — do not edit; regenerated with the SDK. -->

# Engagements — operations

Accessor: `client.engagements` · Source: `beehiiv/apis/engagements.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.engagements.index12

- **Route**: `GET /publications/{publicationId}/engagements`
- **Server**: `default`
- **Signature**: `def index12(publication_id: str, authorization: str, *, start_date: Date | None = None, number_of_days: int | None = None, granularity: PublicationEngagementGranularityOrStr | None = None, email_type: PublicationEngagementEmailTypeOrStr | None = None, direction: RequestDirectionOrStr | None = RequestDirection.ASC, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `start_date` — query · `number_of_days` — query · `granularity` — query · `email_type` — query · `direction` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `PublicationEngagementsResponse`
- **Returns (raw)**: `ApiResult[PublicationEngagementsResponse, Index12ErrorBody]`
- **Error**: `Index12ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationEngagementGranularityOrStr` | `beehiiv/models/enums/publication_engagement_granularity.py` |
| `PublicationEngagementEmailTypeOrStr` | `beehiiv/models/enums/publication_engagement_email_type.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `PublicationEngagementsResponse` | `beehiiv/models/publication_engagements_response.py` |
| `Index12ErrorBody` | `beehiiv/errors/index12_error.py` |
| `Error` | `beehiiv/models/error.py` |


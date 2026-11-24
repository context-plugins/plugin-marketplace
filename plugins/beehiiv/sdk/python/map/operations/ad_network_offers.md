<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkOffers — operations

Accessor: `client.ad_network_offers` · Source: `beehiiv/apis/ad_network_offers.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_network_offers.advertisements

- **Route**: `GET /publications/{publicationId}/ad_network/offers/{offerId}/advertisements`
- **Server**: `default`
- **Signature**: `def advertisements(publication_id: str, offer_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `offer_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `offer_id` — path `offerId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdOfferAdvertisementsGetResponse`
- **Returns (raw)**: `ApiResult[AdOfferAdvertisementsGetResponse, AdvertisementsErrorBody]`
- **Error**: `AdvertisementsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdOfferAdvertisementsGetResponse` | `beehiiv/models/ad_offer_advertisements_get_response.py` |
| `AdvertisementsErrorBody` | `beehiiv/errors/advertisements_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.ad_network_offers.create

- **Route**: `POST /publications/{publicationId}/ad_network/offers`
- **Server**: `default`
- **Signature**: `def create(publication_id: str, authorization: str, *, body: PublicationsAdNetworkOffersRequest | PublicationsAdNetworkOffersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `AdOfferCreateResponse`
- **Returns (raw)**: `ApiResult[AdOfferCreateResponse, CreateErrorBody]`
- **Error**: `CreateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsAdNetworkOffersRequest` | `beehiiv/models/publications_ad_network_offers_request.py` |
| `PublicationsAdNetworkOffersRequestDict` | `beehiiv/models/publications_ad_network_offers_request.py` |
| `AdOfferCreateResponse` | `beehiiv/models/ad_offer_create_response.py` |
| `CreateErrorBody` | `beehiiv/errors/create_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.ad_network_offers.index

- **Route**: `GET /publications/{publicationId}/ad_network/offers`
- **Server**: `default`
- **Signature**: `def index(publication_id: str, authorization: str, *, requested_from: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `requested_from` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdOffersGetResponse`
- **Returns (raw)**: `ApiResult[AdOffersGetResponse, IndexErrorBody]`
- **Error**: `IndexErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdOffersGetResponse` | `beehiiv/models/ad_offers_get_response.py` |
| `IndexErrorBody` | `beehiiv/errors/index_error.py` |
| `Error` | `beehiiv/models/error.py` |


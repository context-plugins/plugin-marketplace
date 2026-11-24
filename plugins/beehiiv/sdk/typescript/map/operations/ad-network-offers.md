<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkOffers — operations

Accessor: `client.adNetworkOffers` · Source: `src/resources/ad-network-offers.ts` · 3 operations · Request and error types: namespace `AdNetworkOffers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### advertisements

- **Signature**: `advertisements(request: AdNetworkOffers.AdvertisementsRequest, options?: RequestOptions): ApiPromise<AdOfferAdvertisementsGetResponse, AdNetworkOffers.AdvertisementsError>`
- **Wire**: `GET /publications/{publicationId}/ad_network/offers/{offerId}/advertisements`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdOfferAdvertisementsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkOffers.AdvertisementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkOffers.AdvertisementsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `offerId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdOfferAdvertisementsGetResponse` | `adOfferAdvertisementsGetResponseSchema` | `src/models/ad-offer-advertisements-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### create

- **Signature**: `create(request: AdNetworkOffers.CreateRequest, options?: RequestOptions): ApiPromise<AdOfferCreateResponse, AdNetworkOffers.CreateError>`
- **Wire**: `POST /publications/{publicationId}/ad_network/offers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdOfferCreateResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkOffers.CreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkOffers.CreateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsAdNetworkOffersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsAdNetworkOffersRequest` | `publicationsAdNetworkOffersRequestSchema` | `src/models/publications-ad-network-offers-request.ts` |
| `AdOfferCreateResponse` | `adOfferCreateResponseSchema` | `src/models/ad-offer-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index

- **Signature**: `index(request: AdNetworkOffers.IndexRequest, options?: RequestOptions): ApiPromise<AdOffersGetResponse, AdNetworkOffers.IndexError>`
- **Wire**: `GET /publications/{publicationId}/ad_network/offers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdOffersGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkOffers.IndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkOffers.IndexRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `requestedFrom` | `query` | `requested_from` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdOffersGetResponse` | `adOffersGetResponseSchema` | `src/models/ad-offers-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


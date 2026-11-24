<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ads — operations

Accessor: `client.ads` · Source: `src/resources/ads.ts` · 3 operations · Request and error types: namespace `Ads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAd

- **Signature**: `createAd(request: Ads.CreateAdRequest, options?: RequestOptions): ApiPromise<CreateResponse, Ads.CreateAdError>`
- **Wire**: `POST /act_{ad_account_id}/ads`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Ads.CreateAdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ads.CreateAdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `body` | `body` | — | `AdCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdCreate` | `adCreateSchema` | `src/models/ad-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAd

- **Signature**: `getAd(request: Ads.GetAdRequest, options?: RequestOptions): ApiPromise<Ad, Ads.GetAdError>`
- **Wire**: `GET /{ad_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Ad`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Ads.GetAdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ads.GetAdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adId` | `path` | `ad_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Ad` | `adSchema` | `src/models/ad.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAds

- **Signature**: `listAds(request: Ads.ListAdsRequest, options?: RequestOptions): ApiPromise<AdList, Ads.ListAdsError>`
- **Wire**: `GET /act_{ad_account_id}/ads`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Ads.ListAdsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Ads.ListAdsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdList` | `adListSchema` | `src/models/ad-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


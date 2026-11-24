<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdvertisementOpportunities — operations

Accessor: `client.advertisementOpportunities` · Source: `src/resources/advertisement-opportunities.ts` · 1 operation · Request and error types: namespace `AdvertisementOpportunities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### index3

- **Signature**: `index3(request: AdvertisementOpportunities.Index3Request, options?: RequestOptions): ApiPromise<AdvertisementOpportunitiesGetResponse, AdvertisementOpportunities.Index3Error>`
- **Wire**: `GET /publications/{publicationId}/advertisement_opportunities`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdvertisementOpportunitiesGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdvertisementOpportunities.Index3Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdvertisementOpportunities.Index3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdvertisementOpportunitiesGetResponse` | `advertisementOpportunitiesGetResponseSchema` | `src/models/advertisement-opportunities-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


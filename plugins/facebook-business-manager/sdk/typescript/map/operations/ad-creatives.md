<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdCreatives — operations

Accessor: `client.adCreatives` · Source: `src/resources/ad-creatives.ts` · 2 operations · Request and error types: namespace `AdCreatives`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAdCreative

- **Signature**: `createAdCreative(request: AdCreatives.CreateAdCreativeRequest, options?: RequestOptions): ApiPromise<CreateResponse, AdCreatives.CreateAdCreativeError>`
- **Wire**: `POST /act_{ad_account_id}/adcreatives`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdCreatives.CreateAdCreativeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdCreatives.CreateAdCreativeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `body` | `body` | — | `AdCreativeCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdCreativeCreate` | `adCreativeCreateSchema` | `src/models/ad-creative-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAdCreatives

- **Signature**: `listAdCreatives(request: AdCreatives.ListAdCreativesRequest, options?: RequestOptions): ApiPromise<AdCreativeList, AdCreatives.ListAdCreativesError>`
- **Wire**: `GET /act_{ad_account_id}/adcreatives`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdCreativeList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdCreatives.ListAdCreativesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdCreatives.ListAdCreativesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdCreativeList` | `adCreativeListSchema` | `src/models/ad-creative-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


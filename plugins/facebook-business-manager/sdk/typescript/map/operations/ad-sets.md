<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdSets — operations

Accessor: `client.adSets` · Source: `src/resources/ad-sets.ts` · 4 operations · Request and error types: namespace `AdSets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAdSet

- **Signature**: `createAdSet(request: AdSets.CreateAdSetRequest, options?: RequestOptions): ApiPromise<CreateResponse, AdSets.CreateAdSetError>`
- **Wire**: `POST /act_{ad_account_id}/adsets`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdSets.CreateAdSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdSets.CreateAdSetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `body` | `body` | — | `AdSetCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdSetCreate` | `adSetCreateSchema` | `src/models/ad-set-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAdSet

- **Signature**: `getAdSet(request: AdSets.GetAdSetRequest, options?: RequestOptions): ApiPromise<AdSet, AdSets.GetAdSetError>`
- **Wire**: `GET /{ad_set_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdSet`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdSets.GetAdSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdSets.GetAdSetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adSetId` | `path` | `ad_set_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdSet` | `adSetSchema` | `src/models/ad-set.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listAdSets

- **Signature**: `listAdSets(request: AdSets.ListAdSetsRequest, options?: RequestOptions): ApiPromise<AdSetList, AdSets.ListAdSetsError>`
- **Wire**: `GET /act_{ad_account_id}/adsets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdSetList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdSets.ListAdSetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdSets.ListAdSetsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdSetList` | `adSetListSchema` | `src/models/ad-set-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateAdSet

- **Signature**: `updateAdSet(request: AdSets.UpdateAdSetRequest, options?: RequestOptions): ApiPromise<SuccessResponse, AdSets.UpdateAdSetError>`
- **Wire**: `POST /{ad_set_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `AdSets.UpdateAdSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdSets.UpdateAdSetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adSetId` | `path` | `ad_set_id` | `string` | yes |
| `body` | `body` | — | `AdSetUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdSetUpdate` | `adSetUpdateSchema` | `src/models/ad-set-update.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


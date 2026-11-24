<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `src/resources/campaigns.ts` · 5 operations · Request and error types: namespace `Campaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCampaign

- **Signature**: `createCampaign(request: Campaigns.CreateCampaignRequest, options?: RequestOptions): ApiPromise<CreateResponse, Campaigns.CreateCampaignError>`
- **Wire**: `POST /act_{ad_account_id}/campaigns`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Campaigns.CreateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.CreateCampaignRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `body` | `body` | — | `CampaignCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignCreate` | `campaignCreateSchema` | `src/models/campaign-create.ts` |
| `CreateResponse` | `createResponseSchema` | `src/models/create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteCampaign

- **Signature**: `deleteCampaign(request: Campaigns.DeleteCampaignRequest, options?: RequestOptions): ApiPromise<SuccessResponse, Campaigns.DeleteCampaignError>`
- **Wire**: `DELETE /{campaign_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Campaigns.DeleteCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.DeleteCampaignRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCampaign

- **Signature**: `getCampaign(request: Campaigns.GetCampaignRequest, options?: RequestOptions): ApiPromise<Campaign, Campaigns.GetCampaignError>`
- **Wire**: `GET /{campaign_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Campaign`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Campaigns.GetCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.GetCampaignRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Campaign` | `campaignSchema` | `src/models/campaign.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCampaigns

- **Signature**: `listCampaigns(request: Campaigns.ListCampaignsRequest, options?: RequestOptions): ApiPromise<CampaignList, Campaigns.ListCampaignsError>`
- **Wire**: `GET /act_{ad_account_id}/campaigns`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CampaignList`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Campaigns.ListCampaignsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.ListCampaignsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes | — |
| `fields` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `after` | `query` | — | `string` | no | — |
| `filtering` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignList` | `campaignListSchema` | `src/models/campaign-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCampaign

- **Signature**: `updateCampaign(request: Campaigns.UpdateCampaignRequest, options?: RequestOptions): ApiPromise<SuccessResponse, Campaigns.UpdateCampaignError>`
- **Wire**: `POST /{campaign_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Campaigns.UpdateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.UpdateCampaignRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `string` | yes |
| `body` | `body` | — | `CampaignUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignUpdate` | `campaignUpdateSchema` | `src/models/campaign-update.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


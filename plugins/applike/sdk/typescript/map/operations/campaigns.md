<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `src/resources/campaigns.ts` · 2 operations · Request and error types: namespace `Campaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `applike`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postManagementV1Campaign

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1Campaign(request?: Campaigns.PostManagementV1CampaignRequest, options?: RequestOptions): ApiPromise<CampaignOutput, Campaigns.PostManagementV1CampaignError>`
- **Wire**: `POST /management/v1/campaign`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignOutput`
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `Campaigns.PostManagementV1CampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.PostManagementV1CampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCampaignRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCampaignRequest` | `createCampaignRequestSchema` | `src/models/create-campaign-request.ts` |
| `CampaignOutput` | `campaignOutputSchema` | `src/models/campaign-output.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postManagementV1Campaigns

- **Server**: `defaultManagementAppPartnerConnectionApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postManagementV1Campaigns(request?: Campaigns.PostManagementV1CampaignsRequest, options?: RequestOptions): ApiPromise<CampaignOutput, Campaigns.PostManagementV1CampaignsError>`
- **Wire**: `POST /management/v1/campaigns`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignOutput`
- **Error**: `ApplikeError` with `kind: "api"`, an instance of `Campaigns.PostManagementV1CampaignsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.PostManagementV1CampaignsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ListCampaignsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCampaignsRequest` | `listCampaignsRequestSchema` | `src/models/list-campaigns-request.ts` |
| `CampaignOutput` | `campaignOutputSchema` | `src/models/campaign-output.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |


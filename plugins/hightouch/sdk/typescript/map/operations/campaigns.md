<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `src/resources/campaigns.ts` · 2 operations · Request and error types: namespace `Campaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSendStatuses

- **Signature**: `getSendStatuses(request: Campaigns.GetSendStatusesRequest, options?: RequestOptions): ApiPromise<BatchSendStatusResponse, Campaigns.GetSendStatusesError>`
- **Wire**: `POST /campaigns/{campaignId}/sends/batch-get`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchSendStatusResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Campaigns.GetSendStatusesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.GetSendStatusesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaignId` | `path` | `string` | yes |
| `body` | `body` | `BatchSendStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchSendStatusRequest` | `batchSendStatusRequestSchema` | `src/models/batch-send-status-request.ts` |
| `BatchSendStatusResponse` | `batchSendStatusResponseSchema` | `src/models/batch-send-status-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### triggerCampaign

- **Signature**: `triggerCampaign(request: Campaigns.TriggerCampaignRequest, options?: RequestOptions): ApiPromise<CampaignsTriggerResponse, Campaigns.TriggerCampaignError>`
- **Wire**: `POST /campaigns/{campaignId}/trigger`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CampaignsTriggerResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Campaigns.TriggerCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"triggerErrorResponse"` [400] `TriggerErrorResponse` · `"error401"` [401] no body · `"triggerErrorResponse2"` [404] `TriggerErrorResponse` · `"validateErrorJson"` [422] `ValidateErrorJson` · `"triggerErrorResponse3"` [429] `TriggerErrorResponse` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Campaigns.TriggerCampaignRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `campaignId` | `path` | `string` | yes |
| `body` | `body` | `StartCampaignRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartCampaignRequest` | `startCampaignRequestSchema` | `src/models/start-campaign-request.ts` |
| `CampaignsTriggerResponse` | `campaignsTriggerResponseSchema` | `src/models/unions/campaigns-trigger-response.ts` |
| `TriggerErrorResponse` | `triggerErrorResponseSchema` | `src/models/trigger-error-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 2 operations · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAdAccountInsights

- **Signature**: `getAdAccountInsights(request: Insights.GetAdAccountInsightsRequest, options?: RequestOptions): ApiPromise<InsightsResponse, Insights.GetAdAccountInsightsError>`
- **Wire**: `GET /act_{ad_account_id}/insights`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Insights.GetAdAccountInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetAdAccountInsightsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adAccountId` | `path` | `ad_account_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |
| `timeRange` | `query` | `time_range` | `string` | no |
| `breakdowns` | `query` | — | `string` | no |
| `level` | `query` | — | `Level` | no |
| `timeIncrement` | `query` | `time_increment` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Level` | `levelSchema` | `src/models/level.ts` |
| `InsightsResponse` | `insightsResponseSchema` | `src/models/insights-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCampaignInsights

- **Signature**: `getCampaignInsights(request: Insights.GetCampaignInsightsRequest, options?: RequestOptions): ApiPromise<InsightsResponse, Insights.GetCampaignInsightsError>`
- **Wire**: `GET /{campaign_id}/insights`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `Insights.GetCampaignInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetCampaignInsightsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignId` | `path` | `campaign_id` | `string` | yes |
| `fields` | `query` | — | `string` | no |
| `timeRange` | `query` | `time_range` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsResponse` | `insightsResponseSchema` | `src/models/insights-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


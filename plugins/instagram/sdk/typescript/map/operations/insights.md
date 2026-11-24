<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 2 operations · Request types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `instagram`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMediaInsights

- **Signature**: `getMediaInsights(request: Insights.GetMediaInsightsRequest, options?: RequestOptions): ApiPromise<InsightsResponse, ApiError>`
- **Wire**: `GET /{media_id}/insights`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Insights.GetMediaInsightsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `mediaId` | `path` | `media_id` | `string` | yes |
| `metric` | `query` | — | `string` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsResponse` | `insightsResponseSchema` | `src/models/insights-response.ts` |

### getUserInsights

- **Signature**: `getUserInsights(request: Insights.GetUserInsightsRequest, options?: RequestOptions): ApiPromise<InsightsResponse, ApiError>`
- **Wire**: `GET /{user_id}/insights`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsResponse`
- **Error**: `InstagramError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Insights.GetUserInsightsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `metric` | `query` | — | `string` | yes |
| `period` | `query` | — | `Period` | yes |
| `accessToken` | `query` | `access_token` | `string` | yes |
| `since` | `query` | — | `number` | no |
| `until` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `InsightsResponse` | `insightsResponseSchema` | `src/models/insights-response.ts` |


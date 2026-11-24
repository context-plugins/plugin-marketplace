<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageInsights — operations

Accessor: `client.pageInsights` · Source: `src/resources/page-insights.ts` · 1 operation · Request and error types: namespace `PageInsights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `facebook-business-manager`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPageInsights

- **Signature**: `getPageInsights(request: PageInsights.GetPageInsightsRequest, options?: RequestOptions): ApiPromise<PageInsightsResponse, PageInsights.GetPageInsightsError>`
- **Wire**: `GET /{page_id}/insights`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PageInsightsResponse`
- **Error**: `FacebookBusinessManagerError` with `kind: "api"`, an instance of `PageInsights.GetPageInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PageInsights.GetPageInsightsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageId` | `path` | `page_id` | `string` | yes |
| `metric` | `query` | — | `string` | yes |
| `period` | `query` | — | `Period` | no |
| `since` | `query` | — | `string` | no |
| `until` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `PageInsightsResponse` | `pageInsightsResponseSchema` | `src/models/page-insights-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


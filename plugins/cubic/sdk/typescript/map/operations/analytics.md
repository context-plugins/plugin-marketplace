<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 1 operation · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cubic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listPullRequestAnalytics

- **Signature**: `listPullRequestAnalytics(request: Analytics.ListPullRequestAnalyticsRequest, options?: RequestOptions): ApiPromise<AnalyticsPrPage, Analytics.ListPullRequestAnalyticsError>`
- **Wire**: `GET /api/analytics/v1/prs`
- **Auth**: `analyticsApiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsPrPage`
- **Error**: `CubicError` with `kind: "api"`, an instance of `Analytics.ListPullRequestAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"analyticsError"` [400] `AnalyticsError` · `"analyticsError2"` [401] `AnalyticsError` · `"analyticsError3"` [403] `AnalyticsError` · `"analyticsError4"` [404] `AnalyticsError` · `"analyticsError5"` [429] `AnalyticsError` · `"analyticsError6"` [500] `AnalyticsError` · `"analyticsError7"` [503] `AnalyticsError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.ListPullRequestAnalyticsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `org` | `query` | `string` | yes | — |
| `repo` | `query` | `string` | no | — |
| `startDate` | `query` | `string` | no | — |
| `endDate` | `query` | `string` | no | — |
| `perPage` | `query` | `number` | no | `100` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsPrPage` | `analyticsPrPageSchema` | `src/models/analytics-pr-page.ts` |
| `AnalyticsError` | `analyticsErrorSchema` | `src/models/analytics-error.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charts — operations

Accessor: `client.charts` · Source: `src/resources/charts.ts` · 1 operation · Request and error types: namespace `Charts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getChartPodcasts

- **Signature**: `getChartPodcasts(request?: Charts.GetChartPodcastsRequest, options?: RequestOptions): ApiPromise<ChartPodcastEntry[], Charts.GetChartPodcastsError>`
- **Wire**: `GET /api/charts/podcasts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChartPodcastEntry[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Charts.GetChartPodcastsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Charts.GetChartPodcastsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | no |
| `platform` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChartPodcastEntry` | `chartPodcastEntrySchema` | `src/models/chart-podcast-entry.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |


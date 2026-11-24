<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 1 operation · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### retrieveAnalytics

- **Signature**: `retrieveAnalytics(request?: Analytics.RetrieveAnalyticsRequest, options?: RequestOptions): ApiPromise<AnalyticsResponse, Analytics.RetrieveAnalyticsError>`
- **Wire**: `GET /analytics`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Analytics.RetrieveAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Analytics.RetrieveAnalyticsRequest` (30):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `event` | `query` | — | `Event` | no | `Event.Clicks` |
| `groupBy` | `query` | — | `GroupBy` | no | `GroupBy.Count` |
| `domain` | `query` | — | `string` | no | — |
| `key` | `query` | — | `string` | no | — |
| `linkId` | `query` | — | `string` | no | — |
| `qrcodeId` | `query` | — | `string` | no | — |
| `pageId` | `query` | — | `string` | no | — |
| `externalId` | `query` | — | `string` | no | — |
| `interval` | `query` | — | `Interval` | no | — |
| `start` | `query` | — | `string` | no | — |
| `end` | `query` | — | `string` | no | — |
| `timezone` | `query` | — | `string` | no | `"UTC"` |
| `continent` | `query` | — | `ContinentCode` | no | — |
| `country` | `query` | — | `CountryCode` | no | — |
| `city` | `query` | — | `string` | no | — |
| `device` | `query` | — | `string` | no | — |
| `browser` | `query` | — | `string` | no | — |
| `os` | `query` | — | `string` | no | — |
| `referer` | `query` | — | `string` | no | — |
| `url` | `query` | — | `string` | no | — |
| `excludeRoot` | `query` | — | `boolean` | no | — |
| `root` | `query` | — | `boolean` | no | — |
| `tagId` | `query` | — | `string` | no | — |
| `utmSource` | `query` | `utm_source` | `string` | no | — |
| `utmMedium` | `query` | `utm_medium` | `string` | no | — |
| `utmCampaign` | `query` | `utm_campaign` | `string` | no | — |
| `utmContent` | `query` | `utm_content` | `string` | no | — |
| `utmTerm` | `query` | `utm_term` | `string` | no | — |
| `type` | `query` | — | `string` | no | — |
| `types` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Event` | `eventSchema` | `src/models/event.ts` |
| `GroupBy` | `groupBySchema` | `src/models/group-by.ts` |
| `Interval` | `intervalSchema` | `src/models/interval.ts` |
| `ContinentCode` | `continentCodeSchema` | `src/models/continent-code.ts` |
| `CountryCode` | `countryCodeSchema` | `src/models/country-code.ts` |
| `AnalyticsResponse` | `analyticsResponseSchema` | `src/models/unions/analytics-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |


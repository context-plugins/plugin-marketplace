<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 2 operations · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Events

- **Signature**: `getApiV1Events(request?: Events.GetApiV1EventsRequest, options?: RequestOptions): ApiPromise<ApiV1EventsResponse, Events.GetApiV1EventsError>`
- **Wire**: `GET /api/v1/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1EventsResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Events.GetApiV1EventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetApiV1EventsRequest` (31):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `q` | `query` | — | `string` | no |
| `mode` | `query` | — | `Mode` | no |
| `eventType` | `query` | `event_type` | `string` | no |
| `significance` | `query` | — | `string` | no |
| `ticker` | `query` | — | `string` | no |
| `company` | `query` | — | `string` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `sourceType` | `query` | `source_type` | `string` | no |
| `contentType` | `query` | `content_type` | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `market` | `query` | — | `string` | no |
| `domicile` | `query` | — | `string` | no |
| `index` | `query` | — | `string` | no |
| `sector` | `query` | — | `string` | no |
| `listed` | `query` | — | `string` | no |
| `watchlist` | `query` | — | `string` | no |
| `firstReportedAfter` | `query` | `first_reported_after` | `string` | no |
| `firstReportedBefore` | `query` | `first_reported_before` | `string` | no |
| `lastArticleAfter` | `query` | `last_article_after` | `string` | no |
| `lastArticleBefore` | `query` | `last_article_before` | `string` | no |
| `window` | `query` | — | `string` | no |
| `sort` | `query` | — | `string` | no |
| `relatedTo` | `query` | `related_to` | `string` | no |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `ApiV1EventsResponse` | `apiV1EventsResponseSchema` | `src/models/api-v1-events-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1EventsById

- **Signature**: `getApiV1EventsById(request: Events.GetApiV1EventsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1EventsResponse1, Events.GetApiV1EventsByIdError>`
- **Wire**: `GET /api/v1/events/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1EventsResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `Events.GetApiV1EventsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetApiV1EventsByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1EventsResponse1` | `apiV1EventsResponse1Schema` | `src/models/api-v1-events-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


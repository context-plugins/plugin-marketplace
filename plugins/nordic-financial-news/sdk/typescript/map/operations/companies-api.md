<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompaniesApi — operations

Accessor: `client.companiesApi` · Source: `src/resources/companies-api.ts` · 6 operations · Request and error types: namespace `CompaniesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Companies

- **Signature**: `getApiV1Companies(request?: CompaniesApi.GetApiV1CompaniesRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesResponse, CompaniesApi.GetApiV1CompaniesError>`
- **Wire**: `GET /api/v1/companies`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `q` | `query` | — | `string` | no |
| `mode` | `query` | — | `Mode` | no |
| `company` | `query` | — | `string` | no |
| `ticker` | `query` | — | `string` | no |
| `country` | `query` | — | `string` | no |
| `market` | `query` | — | `string` | no |
| `domicile` | `query` | — | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `sector` | `query` | — | `string` | no |
| `listed` | `query` | — | `string` | no |
| `watchlist` | `query` | — | `string` | no |
| `isActive` | `query` | `is_active` | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `ApiV1CompaniesResponse` | `apiV1CompaniesResponseSchema` | `src/models/api-v1-companies-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CompaniesByIdentifier

- **Signature**: `getApiV1CompaniesByIdentifier(request: CompaniesApi.GetApiV1CompaniesByIdentifierRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesResponse1, CompaniesApi.GetApiV1CompaniesByIdentifierError>`
- **Wire**: `GET /api/v1/companies/{identifier}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesByIdentifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesByIdentifierRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CompaniesResponse1` | `apiV1CompaniesResponse1Schema` | `src/models/api-v1-companies-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CompaniesByIdentifierArticles

- **Signature**: `getApiV1CompaniesByIdentifierArticles(request: CompaniesApi.GetApiV1CompaniesByIdentifierArticlesRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesArticlesResponse, CompaniesApi.GetApiV1CompaniesByIdentifierArticlesError>`
- **Wire**: `GET /api/v1/companies/{identifier}/articles`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesArticlesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesByIdentifierArticlesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesByIdentifierArticlesRequest` (18):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `q` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `sourceType` | `query` | `source_type` | `string` | no |
| `contentType` | `query` | `content_type` | `string` | no |
| `publishedAfter` | `query` | `published_after` | `string` | no |
| `publishedBefore` | `query` | `published_before` | `string` | no |
| `primaryOnly` | `query` | `primary_only` | `boolean` | no |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `ApiV1CompaniesArticlesResponse` | `apiV1CompaniesArticlesResponseSchema` | `src/models/api-v1-companies-articles-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CompaniesByIdentifierCalendarEvents

- **Signature**: `getApiV1CompaniesByIdentifierCalendarEvents(request: CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesCalendarEventsResponse, CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsError>`
- **Wire**: `GET /api/v1/companies/{identifier}/calendar_events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesCalendarEventsResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesByIdentifierCalendarEventsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `status` | `query` | — | `Status1` | no |
| `eventType` | `query` | `event_type` | `EventType1` | no |
| `scheduledAfter` | `query` | `scheduled_after` | `string` | no |
| `scheduledBefore` | `query` | `scheduled_before` | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `EventType1` | `eventType1Schema` | `src/models/event-type1.ts` |
| `ApiV1CompaniesCalendarEventsResponse` | `apiV1CompaniesCalendarEventsResponseSchema` | `src/models/api-v1-companies-calendar-events-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CompaniesByIdentifierEvents

- **Signature**: `getApiV1CompaniesByIdentifierEvents(request: CompaniesApi.GetApiV1CompaniesByIdentifierEventsRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesEventsResponse, CompaniesApi.GetApiV1CompaniesByIdentifierEventsError>`
- **Wire**: `GET /api/v1/companies/{identifier}/events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesEventsResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesByIdentifierEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesByIdentifierEventsRequest` (22):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `q` | `query` | — | `string` | no |
| `eventType` | `query` | `event_type` | `string` | no |
| `significance` | `query` | — | `string` | no |
| `sort` | `query` | — | `string` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `firstReportedAfter` | `query` | `first_reported_after` | `string` | no |
| `firstReportedBefore` | `query` | `first_reported_before` | `string` | no |
| `lastArticleAfter` | `query` | `last_article_after` | `string` | no |
| `lastArticleBefore` | `query` | `last_article_before` | `string` | no |
| `window` | `query` | — | `string` | no |
| `sourceType` | `query` | `source_type` | `string` | no |
| `contentType` | `query` | `content_type` | `string` | no |
| `relatedTo` | `query` | `related_to` | `string` | no |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CompaniesEventsResponse` | `apiV1CompaniesEventsResponseSchema` | `src/models/api-v1-companies-events-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CompaniesByIdentifierStories

- **Signature**: `getApiV1CompaniesByIdentifierStories(request: CompaniesApi.GetApiV1CompaniesByIdentifierStoriesRequest, options?: RequestOptions): ApiPromise<ApiV1CompaniesStoriesResponse, CompaniesApi.GetApiV1CompaniesByIdentifierStoriesError>`
- **Wire**: `GET /api/v1/companies/{identifier}/stories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CompaniesStoriesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CompaniesApi.GetApiV1CompaniesByIdentifierStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CompaniesApi.GetApiV1CompaniesByIdentifierStoriesRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identifier` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `fields` | `query` | — | `string` | no |
| `q` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `publishedAfter` | `query` | `published_after` | `string` | no |
| `publishedBefore` | `query` | `published_before` | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `ApiV1CompaniesStoriesResponse` | `apiV1CompaniesStoriesResponseSchema` | `src/models/api-v1-companies-stories-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


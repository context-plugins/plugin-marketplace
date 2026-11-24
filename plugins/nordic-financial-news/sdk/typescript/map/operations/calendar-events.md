<!-- Generated file — do not edit; regenerated with the SDK. -->

# CalendarEvents — operations

Accessor: `client.calendarEvents` · Source: `src/resources/calendar-events.ts` · 2 operations · Request and error types: namespace `CalendarEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1CalendarEvents

- **Signature**: `getApiV1CalendarEvents(request?: CalendarEvents.GetApiV1CalendarEventsRequest, options?: RequestOptions): ApiPromise<ApiV1CalendarEventsResponse, CalendarEvents.GetApiV1CalendarEventsError>`
- **Wire**: `GET /api/v1/calendar_events`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CalendarEventsResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CalendarEvents.GetApiV1CalendarEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CalendarEvents.GetApiV1CalendarEventsRequest` (19):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `ticker` | `query` | — | `string` | no |
| `company` | `query` | — | `string` | no |
| `country` | `query` | — | `string` | no |
| `market` | `query` | — | `string` | no |
| `domicile` | `query` | — | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `index` | `query` | — | `string` | no |
| `sector` | `query` | — | `string` | no |
| `eventType` | `query` | `event_type` | `EventType1` | no |
| `status` | `query` | — | `Status1` | no |
| `scheduledAfter` | `query` | `scheduled_after` | `string` | no |
| `scheduledBefore` | `query` | `scheduled_before` | `string` | no |
| `watchlist` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventType1` | `eventType1Schema` | `src/models/event-type1.ts` |
| `Status1` | `status1Schema` | `src/models/status1.ts` |
| `ApiV1CalendarEventsResponse` | `apiV1CalendarEventsResponseSchema` | `src/models/api-v1-calendar-events-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1CalendarEventsById

- **Signature**: `getApiV1CalendarEventsById(request: CalendarEvents.GetApiV1CalendarEventsByIdRequest, options?: RequestOptions): ApiPromise<ApiV1CalendarEventsResponse1, CalendarEvents.GetApiV1CalendarEventsByIdError>`
- **Wire**: `GET /api/v1/calendar_events/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CalendarEventsResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `CalendarEvents.GetApiV1CalendarEventsByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"problemDetails2"` [404] `ProblemDetails` · `"problemDetails3"` [403] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CalendarEvents.GetApiV1CalendarEventsByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CalendarEventsResponse1` | `apiV1CalendarEventsResponse1Schema` | `src/models/api-v1-calendar-events-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |


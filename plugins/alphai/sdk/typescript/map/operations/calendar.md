<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calendar — operations

Accessor: `client.calendar` · Source: `src/resources/calendar.ts` · 1 operation · Request and error types: namespace `Calendar`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alph-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiCalendar

- **Signature**: `getApiCalendar(request?: Calendar.GetApiCalendarRequest, options?: RequestOptions): ApiPromise<CalendarEvents, Calendar.GetApiCalendarError>`
- **Wire**: `GET /api/calendar/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CalendarEvents`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `Calendar.GetApiCalendarError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calendar.GetApiCalendarRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `fromDate` | `query` | `from_date` | `string` | no | — |
| `toDate` | `query` | `to_date` | `string` | no | — |
| `eventKey` | `query` | `event_key` | `string` | no | — |
| `importance` | `query` | — | `Importance` | no | — |
| `country` | `query` | — | `Country` | no | `Country.Us` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Importance` | `importanceSchema` | `src/models/importance.ts` |
| `Country` | `countrySchema` | `src/models/country.ts` |
| `CalendarEvents` | `calendarEventsSchema` | `src/models/calendar-events.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |


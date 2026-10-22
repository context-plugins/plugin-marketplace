<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 1 operation · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### eventsList

- **Signature**: `eventsList(request: Events.EventsListRequest, options?: RequestOptions): ApiPromise<ListResponseEvent, Events.EventsListError>`
- **Wire**: `GET /api/v1/events/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseEvent`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Events.EventsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.EventsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `EventProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy5` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields5` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `EventProperties` | `eventPropertiesSchema` | `src/models/event-properties.ts` |
| `OrderBy5` | `orderBy5Schema` | `src/models/unions/order-by5.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields5` | `fields5Schema` | `src/models/unions/fields5.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseEvent` | `listResponseEventSchema` | `src/models/list-response-event.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |


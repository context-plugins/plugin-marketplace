<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 4 operations · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEventTypeById

- **Signature**: `getEventTypeById(request: Events.GetEventTypeByIdRequest, options?: RequestOptions): ApiPromise<EventsTypesResponse1, Events.GetEventTypeByIdError>`
- **Wire**: `GET /events/types/{id}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsTypesResponse1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Events.GetEventTypeByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eventsTypes400Error1"` [400] `EventsTypes400Error1` · `"eventsTypes401Error1"` [401] `EventsTypes401Error1` · `"eventsTypes403Error1"` [403] `EventsTypes403Error1` · `"eventsTypes404Error1"` [404] `EventsTypes404Error1` · `"eventsTypes429Error1"` [429] `EventsTypes429Error1` · `"eventsTypes500Error1"` [500] `EventsTypes500Error1` · `"eventsTypes503Error1"` [503] `EventsTypes503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetEventTypeByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsTypesResponse1` | `eventsTypesResponse1Schema` | `src/models/events-types-response1.ts` |
| `EventsTypes400Error1` | `eventsTypes400Error1Schema` | `src/models/events-types400-error1.ts` |
| `EventsTypes401Error1` | `eventsTypes401Error1Schema` | `src/models/events-types401-error1.ts` |
| `EventsTypes403Error1` | `eventsTypes403Error1Schema` | `src/models/events-types403-error1.ts` |
| `EventsTypes404Error1` | `eventsTypes404Error1Schema` | `src/models/events-types404-error1.ts` |
| `EventsTypes429Error1` | `eventsTypes429Error1Schema` | `src/models/events-types429-error1.ts` |
| `EventsTypes500Error1` | `eventsTypes500Error1Schema` | `src/models/events-types500-error1.ts` |
| `EventsTypes503Error1` | `eventsTypes503Error1Schema` | `src/models/events-types503-error1.ts` |

### getEvents

- **Signature**: `getEvents(request?: Events.GetEventsRequest, options?: RequestOptions): ApiPromise<EventsGetResponseResource, Events.GetEventsError>`
- **Wire**: `GET /events`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsGetResponseResource`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Events.GetEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"events400Error1"` [400] `Events400Error1` · `"events401Error1"` [401] `Events401Error1` · `"events403Error1"` [403] `Events403Error1` · `"events404Error1"` [404] `Events404Error1` · `"events500Error1"` [500] `Events500Error1` · `"events503Error1"` [503] `Events503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetEventsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsGetResponseResource` | `eventsGetResponseResourceSchema` | `src/models/events-get-response-resource.ts` |
| `Events400Error1` | `events400Error1Schema` | `src/models/events400-error1.ts` |
| `Events401Error1` | `events401Error1Schema` | `src/models/events401-error1.ts` |
| `Events403Error1` | `events403Error1Schema` | `src/models/events403-error1.ts` |
| `Events404Error1` | `events404Error1Schema` | `src/models/events404-error1.ts` |
| `Events500Error1` | `events500Error1Schema` | `src/models/events500-error1.ts` |
| `Events503Error1` | `events503Error1Schema` | `src/models/events503-error1.ts` |

### getTypeById

- **Signature**: `getTypeById(request: Events.GetTypeByIdRequest, options?: RequestOptions): ApiPromise<EventsResponse, Events.GetTypeByIdError>`
- **Wire**: `GET /events/{id}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Events.GetTypeByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"events400Error21"` [400] `Events400Error21` · `"events401Error21"` [401] `Events401Error21` · `"events403Error21"` [403] `Events403Error21` · `"events404Error21"` [404] `Events404Error21` · `"events429Error1"` [429] `Events429Error1` · `"events500Error21"` [500] `Events500Error21` · `"events503Error21"` [503] `Events503Error21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetTypeByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsResponse` | `eventsResponseSchema` | `src/models/events-response.ts` |
| `Events400Error21` | `events400Error21Schema` | `src/models/events400-error21.ts` |
| `Events401Error21` | `events401Error21Schema` | `src/models/events401-error21.ts` |
| `Events403Error21` | `events403Error21Schema` | `src/models/events403-error21.ts` |
| `Events404Error21` | `events404Error21Schema` | `src/models/events404-error21.ts` |
| `Events429Error1` | `events429Error1Schema` | `src/models/events429-error1.ts` |
| `Events500Error21` | `events500Error21Schema` | `src/models/events500-error21.ts` |
| `Events503Error21` | `events503Error21Schema` | `src/models/events503-error21.ts` |

### listEventTypes

- **Signature**: `listEventTypes(options?: RequestOptions): ApiPromise<EventsTypesResponse, Events.ListEventTypesError>`
- **Wire**: `GET /events/types`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsTypesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Events.ListEventTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"eventsTypes401Error1"` [401] `EventsTypes401Error1` · `"eventsTypes403Error1"` [403] `EventsTypes403Error1` · `"eventsTypes429Error1"` [429] `EventsTypes429Error1` · `"eventsTypes500Error1"` [500] `EventsTypes500Error1` · `"eventsTypes503Error1"` [503] `EventsTypes503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsTypesResponse` | `eventsTypesResponseSchema` | `src/models/events-types-response.ts` |
| `EventsTypes401Error1` | `eventsTypes401Error1Schema` | `src/models/events-types401-error1.ts` |
| `EventsTypes403Error1` | `eventsTypes403Error1Schema` | `src/models/events-types403-error1.ts` |
| `EventsTypes429Error1` | `eventsTypes429Error1Schema` | `src/models/events-types429-error1.ts` |
| `EventsTypes500Error1` | `eventsTypes500Error1Schema` | `src/models/events-types500-error1.ts` |
| `EventsTypes503Error1` | `eventsTypes503Error1Schema` | `src/models/events-types503-error1.ts` |


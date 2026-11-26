<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 3 operations · Request types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEventCatalog

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEventCatalog(request?: Events.GetEventCatalogRequest, options?: RequestOptions): ApiPromise<EventCatalogDto[], ApiError>`
- **Wire**: `GET /v3/events/catalog`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventCatalogDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Events.GetEventCatalogRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventCatalogDto` | `eventCatalogDtoSchema` | `src/models/event-catalog-dto.ts` |

### getEventsForSubscription

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getEventsForSubscription(request: Events.GetEventsForSubscriptionRequest, options?: RequestOptions): ApiPromise<PaginationDtoEventWithRetriesDto, ApiError>`
- **Wire**: `GET /v3/events/subscription/{subscriptionId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationDtoEventWithRetriesDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Events.GetEventsForSubscriptionRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `entityId` | `query` | `string` | no |
| `max` | `query` | `number` | no |
| `createdTimeFrom` | `query` | `string` | no |
| `createdTimeTo` | `query` | `string` | no |
| `ascending` | `query` | `boolean` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationDtoEventWithRetriesDto` | `paginationDtoEventWithRetriesDtoSchema` | `src/models/pagination-dto-event-with-retries-dto.ts` |

### resendEvent

- **Server**: `defaultConnectEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `resendEvent(request: Events.ResendEventRequest, options?: RequestOptions): ApiPromise<EventDto, ApiError>`
- **Wire**: `POST /v3/events/subscription/{subscriptionId}/event/{eventId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventDto`
- **Error**: `BillError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Events.ResendEventRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `subscriptionId` | `path` | `string` | yes |
| `eventId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `appKey` | `header` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDto` | `eventDtoSchema` | `src/models/event-dto.ts` |


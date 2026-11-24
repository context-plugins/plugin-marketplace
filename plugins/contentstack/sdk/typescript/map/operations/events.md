<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 2 operations · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAllEvents

- **Server**: `defaultContentstackEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllEvents(request: Events.GetAllEventsRequest, options?: RequestOptions): ApiPromise<EventList, Events.GetAllEventsError>`
- **Wire**: `GET /events`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Events.GetAllEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetAllEventsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventList` | `eventListSchema` | `src/models/event-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### trackEvents

- **Server**: `defaultContentstackEventsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `trackEvents(request: Events.TrackEventsRequest, options?: RequestOptions): ApiPromise<undefined, Events.TrackEventsError>`
- **Wire**: `POST /events`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Events.TrackEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [403] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.TrackEventsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `xCsPersonalizeUserUid` | `header` | `x-cs-personalize-user-uid` | `string` | yes |
| `body` | `body` | — | `TrackEvent[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrackEvent` | `trackEventSchema` | `src/models/track-event.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |


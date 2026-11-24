<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 1 operation · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `atlassian-compass`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCompassEvent

- **Signature**: `createCompassEvent(request: Events.CreateCompassEventRequest, options?: RequestOptions): ApiPromise<undefined, Events.CreateCompassEventError>`
- **Wire**: `POST /compass/v1/events`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AtlassianCompassError` with `kind: "api"`, an instance of `Events.CreateCompassEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseDto"` [400] `ErrorResponseDto` · `"errorResponseDto2"` [404] `ErrorResponseDto` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.CreateCompassEventRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStreamlinedEventRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStreamlinedEventRequest` | `createStreamlinedEventRequestSchema` | `src/models/create-streamlined-event-request.ts` |
| `ErrorResponseDto` | `errorResponseDtoSchema` | `src/models/error-response-dto.ts` |


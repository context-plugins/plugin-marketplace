<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventsControllerV2 — operations

Accessor: `client.eventsControllerV2` · Source: `src/resources/events-controller-v2.ts` · 1 operation · Request and error types: namespace `EventsControllerV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### publishEvent

- **Signature**: `publishEvent(request: EventsControllerV2.PublishEventRequest, options?: RequestOptions): ApiPromise<EventResponse, EventsControllerV2.PublishEventError>`
- **Wire**: `POST /v2/events`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `EventsControllerV2.PublishEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EventsControllerV2.PublishEventRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EventRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventRequest` | `eventRequestSchema` | `src/models/event-request.ts` |
| `EventResponse` | `eventResponseSchema` | `src/models/event-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlowDispatchService — operations

Accessor: `client.flowDispatchService` · Source: `src/resources/flow-dispatch-service.ts` · 2 operations · Request and error types: namespace `FlowDispatchService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJourneyState

- **Signature**: `getJourneyState(request: FlowDispatchService.GetJourneyStateRequest, options?: RequestOptions): ApiPromise<JourneyStateFetchResponse, FlowDispatchService.GetJourneyStateError>`
- **Wire**: `POST /journey/state/fetch`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStateFetchResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `FlowDispatchService.GetJourneyStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlowDispatchService.GetJourneyStateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStateFetchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStateFetchRequest` | `journeyStateFetchRequestSchema` | `src/models/journey-state-fetch-request.ts` |
| `JourneyStateFetchResponse` | `journeyStateFetchResponseSchema` | `src/models/journey-state-fetch-response.ts` |

### startJourney

- **Signature**: `startJourney(request: FlowDispatchService.StartJourneyRequest, options?: RequestOptions): ApiPromise<JourneyStartResponse, FlowDispatchService.StartJourneyError>`
- **Wire**: `POST /journey/start`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyStartResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `FlowDispatchService.StartJourneyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FlowDispatchService.StartJourneyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyStartRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyStartRequest` | `journeyStartRequestSchema` | `src/models/journey-start-request.ts` |
| `JourneyStartResponse` | `journeyStartResponseSchema` | `src/models/journey-start-response.ts` |


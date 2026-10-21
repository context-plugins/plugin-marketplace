<!-- Generated file — do not edit; regenerated with the SDK. -->

# InteractionService — operations

Accessor: `client.interactionService` · Source: `src/resources/interaction-service.ts` · 2 operations · Request and error types: namespace `InteractionService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchInteraction

- **Signature**: `fetchInteraction(request: InteractionService.FetchInteractionRequest, options?: RequestOptions): ApiPromise<JourneyInteractionFetchResponse3, InteractionService.FetchInteractionError>`
- **Wire**: `POST /journey/interaction/fetch`
- **Auth**: `interactionAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyInteractionFetchResponse3`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `InteractionService.FetchInteractionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InteractionService.FetchInteractionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyInteractionFetchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyInteractionFetchRequest` | `journeyInteractionFetchRequestSchema` | `src/models/journey-interaction-fetch-request.ts` |
| `JourneyInteractionFetchResponse3` | `journeyInteractionFetchResponse3Schema` | `src/models/unions/journey-interaction-fetch-response3.ts` |

### submitInteraction

- **Signature**: `submitInteraction(request: InteractionService.SubmitInteractionRequest, options?: RequestOptions): ApiPromise<JourneyInteractionSubmitResponse2, InteractionService.SubmitInteractionError>`
- **Wire**: `POST /journey/interaction/submit`
- **Auth**: `interactionAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyInteractionSubmitResponse2`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `InteractionService.SubmitInteractionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InteractionService.SubmitInteractionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyInteractionSubmitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyInteractionSubmitRequest` | `journeyInteractionSubmitRequestSchema` | `src/models/journey-interaction-submit-request.ts` |
| `JourneyInteractionSubmitResponse2` | `journeyInteractionSubmitResponse2Schema` | `src/models/unions/journey-interaction-submit-response2.ts` |


<!-- Generated file — do not edit; regenerated with the SDK. -->

# AutomationJourneys — operations

Accessor: `client.automationJourneys` · Source: `src/resources/automation-journeys.ts` · 3 operations · Request and error types: namespace `AutomationJourneys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create2

- **Signature**: `create2(request: AutomationJourneys.Create2Request, options?: RequestOptions): ApiPromise<AutomationJourneysResponse, AutomationJourneys.Create2Error>`
- **Wire**: `POST /publications/{publicationId}/automations/{automationId}/journeys`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutomationJourneysResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AutomationJourneys.Create2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutomationJourneys.Create2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `automationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsAutomationsJourneysRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsAutomationsJourneysRequest` | `publicationsAutomationsJourneysRequestSchema` | `src/models/publications-automations-journeys-request.ts` |
| `AutomationJourneysResponse` | `automationJourneysResponseSchema` | `src/models/automation-journeys-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index5

- **Signature**: `index5(request: AutomationJourneys.Index5Request, options?: RequestOptions): ApiPromise<AutomationJourneysIndexResponse, AutomationJourneys.Index5Error>`
- **Wire**: `GET /publications/{publicationId}/automations/{automationId}/journeys`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationJourneysIndexResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AutomationJourneys.Index5Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutomationJourneys.Index5Request` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `automationId` | `path` | — | `string` | yes | — |
| `status` | `query` | — | `AutomationJourneysGetRequestStatus` | no | `AutomationJourneysGetRequestStatus.All` |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationJourneysGetRequestStatus` | `automationJourneysGetRequestStatusSchema` | `src/models/automation-journeys-get-request-status.ts` |
| `AutomationJourneysIndexResponse` | `automationJourneysIndexResponseSchema` | `src/models/automation-journeys-index-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show2

- **Signature**: `show2(request: AutomationJourneys.Show2Request, options?: RequestOptions): ApiPromise<AutomationJourneysResponse, AutomationJourneys.Show2Error>`
- **Wire**: `GET /publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AutomationJourneysResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AutomationJourneys.Show2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AutomationJourneys.Show2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `automationId` | `path` | — | `string` | yes |
| `automationJourneyId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomationJourneysResponse` | `automationJourneysResponseSchema` | `src/models/automation-journeys-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

